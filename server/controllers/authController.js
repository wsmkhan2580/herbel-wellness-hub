import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import { loginSchema } from '../utils/validation.js';

const JWT_ISSUER = 'herbal-wellness-hub';
const JWT_AUDIENCE = 'hwh-admin';

export async function login(req, res, next) {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: 'Valid email and password are required' });

    const email = parsed.data.email.toLowerCase();
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(parsed.data.password, admin.passwordHash))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { sub: admin._id.toString(), email: admin.email },
      process.env.JWT_SECRET,
      {
        algorithm: 'HS256',
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
        expiresIn: process.env.JWT_EXPIRES_IN || '8h'
      }
    );

    res.json({ token, admin: { email: admin.email } });
  } catch (err) {
    next(err);
  }
}

export function me(req, res) {
  res.json({ admin: { email: req.admin.email } });
}

export function logout(req, res) {
  res.json({ success: true });
}
