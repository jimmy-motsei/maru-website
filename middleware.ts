import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit, createRateLimitResponse } from '@/lib/rate-limit';
import { verifySession } from '@/lib/auth';

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
    if (request.nextUrl.pathname === '/admin/login') {
      return response;
    }

    const token = request.cookies.get('admin-session')?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const session = await verifySession(token);
    
    if (!session) {
      const loginResponse = NextResponse.redirect(new URL('/admin/login', request.url));
      loginResponse.cookies.delete('admin-session');
      return loginResponse;
    }

    return response;
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