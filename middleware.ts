import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit, createRateLimitResponse } from '@/lib/rate-limit';

export function middleware(request: NextRequest) {
  // Security headers
  const response = NextResponse.next();
  
  // CORS headers
  response.headers.set('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_SITE_URL || '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: response.headers });
  }

  // Admin route protection
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow login page
    if (request.nextUrl.pathname === '/admin/login') {
      return response;
    }

    // Check for admin session
    const session = request.cookies.get('admin-session');
    
    if (!session?.value) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Validate session
    try {
      const decoded = Buffer.from(session.value, 'base64').toString();
      const [email, timestamp] = decoded.split(':');
      
      const sessionTime = parseInt(timestamp);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (now - sessionTime > twentyFourHours) {
        const loginResponse = NextResponse.redirect(new URL('/admin/login', request.url));
        loginResponse.cookies.delete('admin-session');
        return loginResponse;
      }

      const adminEmail = process.env.ADMIN_EMAIL || 'hello@maruonline.com';
      if (email !== adminEmail) {
        const loginResponse = NextResponse.redirect(new URL('/admin/login', request.url));
        loginResponse.cookies.delete('admin-session');
        return loginResponse;
      }

      return response;
    } catch {
      const loginResponse = NextResponse.redirect(new URL('/admin/login', request.url));
      loginResponse.cookies.delete('admin-session');
      return loginResponse;
    }
  }

  // API rate limiting
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const rateLimitResult = rateLimit(request);
    const { headers } = createRateLimitResponse(rateLimitResult);
    
    // Add rate limit headers to response
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429, headers: response.headers }
      );
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ]
};