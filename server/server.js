import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import { bootstrapAdmin } from './utils/bootstrapAdmin.js';
import authRoutes from './routes/authRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import { errorHandler, notFound } from './middleware/error.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.disable('x-powered-by');

const trustProxyValue = String(process.env.TRUST_PROXY || '').trim().toLowerCase();
if (trustProxyValue === 'true' || trustProxyValue === '1') app.set('trust proxy', 1);
else if (/^\d+$/.test(trustProxyValue) && Number(trustProxyValue) > 0) app.set('trust proxy', Number(trustProxyValue));

const allowedOrigins = new Set(
  [process.env.CLIENT_URL, ...(process.env.ALLOWED_ORIGINS || '').split(',')]
    .map((value) => value?.trim())
    .filter(Boolean)
);

const corsOptions = allowedOrigins.size
  ? {
      origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) return callback(null, true);
        const error = new Error('CORS origin not allowed');
        error.status = 403;
        return callback(error);
      },
      credentials: false
    }
  : { origin: false, credentials: false };

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
}));
app.use(cors(corsOptions));
app.use(express.json({ limit: '32kb', strict: true }));
app.use(express.urlencoded({ extended: false, limit: '32kb' }));
app.use(mongoSanitize());
if (process.env.NODE_ENV !== 'test') app.use(morgan('tiny'));

app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { message: 'Too many requests. Please try again later.' }
});
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 15,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { message: 'Too many login attempts. Please try again later.' }
});
const feedbackLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 12,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { message: 'Too many feedback submissions. Please try again later.' }
});

app.use('/api/leads', (req, res, next) => req.method === 'POST' ? leadLimiter(req, res, next) : next(), leadRoutes);
app.use('/api/auth', (req, res, next) => req.path === '/login' ? loginLimiter(req, res, next) : next(), authRoutes);
app.use('/api/feedback', (req, res, next) => req.method === 'POST' ? feedbackLimiter(req, res, next) : next(), feedbackRoutes);
app.get('/api/health', (req, res) => res.json({ ok: true }));

if (process.env.NODE_ENV === 'production') {
  const clientDist = path.resolve(__dirname, '../client/dist');
  app.use(express.static(clientDist, { index: false, maxAge: '1h' }));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    return res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.use(notFound);
app.use(errorHandler);

const port = Number(process.env.PORT) || 5000;

async function start() {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must be set to a random value of at least 32 characters');
  }
  await connectDB();
  await bootstrapAdmin();
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
