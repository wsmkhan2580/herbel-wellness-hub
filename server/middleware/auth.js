import jwt from 'jsonwebtoken';

const JWT_ISSUER = 'herbal-wellness-hub';
const JWT_AUDIENCE = 'hwh-admin';

export function requireAuth(req, res, next) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : null;
  if (!token) return res.status(401).json({ message: 'Authentication required' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['HS256'],
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE
    });
    if (!payload?.sub || typeof payload.email !== 'string') {
      return res.status(401).json({ message: 'Session is invalid or expired' });
    }
    req.admin = payload;
    res.setHeader('Cache-Control', 'no-store');
    next();
  } catch {
    return res.status(401).json({ message: 'Session is invalid or expired' });
  }
}
