import { NextRequest } from 'next/server';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory rate limit storage (use Redis in production)
const rateLimitStore = new Map<string, RateLimitEntry>();

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

const rateLimits: Record<string, RateLimitConfig> = {
  // Assessment APIs - more restrictive
  '/api/assessments': { windowMs: 60 * 1000, maxRequests: 10 }, // 10 per minute
  '/api/hubspot/sync': { windowMs: 60 * 1000, maxRequests: 5 }, // 5 per minute
  '/api/email/send': { windowMs: 60 * 1000, maxRequests: 3 }, // 3 per minute
  
  // Admin APIs - less restrictive for authenticated users
  '/api/analytics/dashboard': { windowMs: 60 * 1000, maxRequests: 30 }, // 30 per minute
  '/api/admin/leads': { windowMs: 60 * 1000, maxRequests: 20 }, // 20 per minute
  
  // Default rate limit
  default: { windowMs: 60 * 1000, maxRequests: 60 }, // 60 per minute
};

export function rateLimit(request: NextRequest, endpoint?: string): {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
} {
  const ip = getClientIP(request);
  const path = endpoint || request.nextUrl.pathname;
  
  // Get rate limit config for this endpoint
  const config = rateLimits[path] || rateLimits.default;
  
  const key = `${ip}:${path}`;
  const now = Date.now();
  const windowStart = now - config.windowMs;
  
  // Clean up expired entries
  cleanupExpiredEntries(windowStart);
  
  const entry = rateLimitStore.get(key);
  
  if (!entry || entry.resetTime <= now) {
    // First request or window expired
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      resetTime: now + config.windowMs,
    };
  }
  
  if (entry.count >= config.maxRequests) {
    // Rate limit exceeded
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }
  
  // Increment counter
  entry.count++;
  rateLimitStore.set(key, entry);
  
  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return request.ip || 'unknown';
}

function cleanupExpiredEntries(windowStart: number) {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime <= windowStart) {
      rateLimitStore.delete(key);
    }
  }
}

// Middleware helper for rate limiting
export function createRateLimitResponse(rateLimitResult: ReturnType<typeof rateLimit>) {
  const headers = {
    'X-RateLimit-Limit': rateLimitResult.limit.toString(),
    'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
    'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
  };
  
  return { headers, success: rateLimitResult.success };
}