import { SignJWT, jwtVerify } from 'jose';
import { NextRequest } from 'next/server';
import { scryptSync, timingSafeEqual } from 'node:crypto';

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

export function verifyPassword(password: string): boolean {
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminPasswordHash) {
    const [algorithm, salt, storedHash] = adminPasswordHash.split('$');
    if (algorithm !== 'scrypt' || !salt || !storedHash) {
      console.error('ADMIN_PASSWORD_HASH has invalid format');
      return false;
    }

    const derived = scryptSync(password, salt, 64).toString('hex');
    try {
      return timingSafeEqual(Buffer.from(derived, 'hex'), Buffer.from(storedHash, 'hex'));
    } catch {
      return false;
    }
  }

  if (!adminPassword) {
    console.error('ADMIN_PASSWORD not configured');
    return false;
  }

  try {
    return timingSafeEqual(Buffer.from(password), Buffer.from(adminPassword));
  } catch {
    return false;
  }
}
