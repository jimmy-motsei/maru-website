import { NextRequest } from 'next/server';

const CSRF_SECRET = process.env.CSRF_SECRET || 'default-csrf-secret-change-in-production';

export function generateCSRFToken(): string {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2);
  return Buffer.from(`${timestamp}:${random}:${CSRF_SECRET}`).toString('base64');
}

export function validateCSRFToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString();
    const [timestamp] = decoded.split(':');
    const tokenAge = Date.now() - parseInt(timestamp);
    const maxAge = 60 * 60 * 1000; // 1 hour
    
    return tokenAge < maxAge && decoded.endsWith(CSRF_SECRET);
  } catch {
    return false;
  }
}

export function getCSRFToken(request: NextRequest): string | null {
  return request.headers.get('x-csrf-token');
}
