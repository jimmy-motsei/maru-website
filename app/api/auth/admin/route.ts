import { NextRequest, NextResponse } from 'next/server';
import { createSession, verifyPassword } from '@/lib/auth';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@maruonline.com';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    if (!normalizedEmail || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      );
    }

    if (normalizedEmail === ADMIN_EMAIL.toLowerCase() && verifyPassword(password)) {
      const token = await createSession(normalizedEmail, 'admin');
      
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin-session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60,
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );

  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('admin-session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
  });
  return response;
}