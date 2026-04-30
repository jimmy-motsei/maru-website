import { SignJWT, jwtVerify } from 'jose';
import { NextRequest } from 'next/server';

function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET environment variable is required');
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  email: string;
  role: string;
  exp: number;
}

export async function createSession(email: string, role: string = 'admin'): Promise<string> {
  const token = await new SignJWT({ email, role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(getJwtSecret());

  return token;
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    if (payload.email && payload.role) {
      return {
        email: payload.email as string,
        role: payload.role as string,
        exp: payload.exp as number,
      };
    }
    return null;
  } catch {
    return null;
  }
}

export async function getSessionFromRequest(request: NextRequest): Promise<SessionPayload | null> {
  const token = request.cookies.get('admin-session')?.value;
  if (!token) return null;
  return verifySession(token);
}
