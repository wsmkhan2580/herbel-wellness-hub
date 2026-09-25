import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';

export async function bootstrapAdmin() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    console.warn('ADMIN_EMAIL or ADMIN_PASSWORD missing; admin login will not be initialized.');
    return;
  }
  if (password.length < 12) throw new Error('ADMIN_PASSWORD must be at least 12 characters');

  const existing = await Admin.findOne({ email });
  const passwordHash = await bcrypt.hash(password, 12);
  if (existing) {
    const same = await bcrypt.compare(password, existing.passwordHash);
    if (!same) {
      existing.passwordHash = passwordHash;
      await existing.save();
      console.log('Admin password updated from environment');
    }
    return;
  }
  await Admin.create({ email, passwordHash });
  console.log('Admin account initialized');
}
