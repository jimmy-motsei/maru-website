import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export function isAuthenticated(): boolean {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get('admin-session');
    
    if (!session?.value) {
      return false;
    }

    // Decode and validate session
    const decoded = Buffer.from(session.value, 'base64').toString();
    const [email, timestamp] = decoded.split(':');
    
    // Check if session is expired (24 hours)
    const sessionTime = parseInt(timestamp);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (now - sessionTime > twentyFourHours) {
      return false;
    }

    return email === (process.env.ADMIN_EMAIL || 'hello@maruonline.com');
  } catch {
    return false;
  }
}

export function getSessionFromRequest(request: NextRequest): string | null {
  try {
    const session = request.cookies.get('admin-session');
    return session?.value || null;
  } catch {
    return null;
  }
}

export function validateSession(sessionToken: string): boolean {
  try {
    const decoded = Buffer.from(sessionToken, 'base64').toString();
    const [email, timestamp] = decoded.split(':');
    
    const sessionTime = parseInt(timestamp);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (now - sessionTime > twentyFourHours) {
      return false;
    }

    return email === (process.env.ADMIN_EMAIL || 'hello@maruonline.com');
  } catch {
    return false;
  }
}