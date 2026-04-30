import { scryptSync, timingSafeEqual } from 'node:crypto';

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