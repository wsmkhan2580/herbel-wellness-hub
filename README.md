# Herbal Wellness Hub

Complete React + Node.js + MongoDB male sexual-wellness landing page with lead capture, protected admin dashboard, Excel export and Cash on Delivery messaging.

## Included

- Premium mobile-first landing page with English navigation and Hindi + Hinglish marketing copy
- Product image at `client/public/images/product.png`
- Large product showcase directly below the hero section
- Non-explicit local wellness, doctor, relationship, timing, confidence and educational visuals
- Regular price ₹3999/- with special price ₹1299/-
- Cash on Delivery (COD) section
- Buyer feedback submission with admin approval before public display
- Sticky desktop/mobile CTAs and smooth scrolling
- Lead form for Full Name, City, concern category and manual problem description
- Express + MongoDB API with Helmet, CORS, rate limiting and validation
- JWT admin authentication with bcrypt password hashing
- Protected `/admin` and `/admin/leads` routes
- Dashboard statistics, search, concern filter, date filter and pagination
- Lead detail view and deletion
- Functional `.xlsx` export through ExcelJS
- Privacy Policy, Terms & Conditions and Disclaimer pages
- SEO metadata and favicon support

## Project structure

```text
herbal-wellness-hub/
  client/     React, Vite, Tailwind CSS, Axios, React Router
  server/     Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Zod
```

## Requirements

- Node.js 20+
- npm 10+
- MongoDB local installation or MongoDB Atlas connection string

## Installation

From the project root:

```bash
npm install
npm run install:all
```

## Backend setup

1. Copy `server/.env.example` to `server/.env`.
2. Set `MONGODB_URI` to your MongoDB connection string.
3. Set `JWT_SECRET` to a long random secret, at least 32 characters.
4. Set `ADMIN_EMAIL` and a strong `ADMIN_PASSWORD` of at least 12 characters.
5. Keep `CLIENT_URL=http://localhost:5173` during local development.

Example:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/herbal_wellness_hub
JWT_SECRET=replace_with_a_random_secret_of_at_least_32_characters
JWT_EXPIRES_IN=8h
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=replace_with_a_strong_password
CLIENT_URL=http://localhost:5173
ALLOWED_ORIGINS=
TRUST_PROXY=0
```

At server startup, the configured admin account is created if it does not exist. If the same email exists and the environment password changes, the stored hash is updated.

## Frontend setup

Copy `client/.env.example` to `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

For same-domain production deployment, `VITE_API_URL` can be omitted and the client will use `/api`.

## Development

Run client and server together from the root:

```bash
npm run dev
```

Or run separately:

```bash
npm run dev --prefix server
npm run dev --prefix client
```

Open:

- Public site: `http://localhost:5173`
- Admin login: `http://localhost:5173/admin/login`

## API routes

### Public

- `POST /api/leads`
- `POST /api/feedback`
- `GET /api/feedback/public`
- `GET /api/health`

### Authentication

- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout`

### Protected buyer feedback

- `GET /api/feedback`
- `PATCH /api/feedback/:id/approval`
- `DELETE /api/feedback/:id`

### Protected leads

- `GET /api/leads`
- `GET /api/leads/stats`
- `GET /api/leads/export`
- `GET /api/leads/:id`
- `DELETE /api/leads/:id`

Lead listing/export supports `search`, `problem`, `startDate`, `endDate`, `page` and `limit` query parameters.

## Production build

```bash
npm run build
NODE_ENV=production npm start
```

In production mode Express serves `client/dist` and keeps API routes under `/api`.

## Deployment

A single-service deployment can use Render, Railway, Fly.io or a VPS:

1. Provision MongoDB Atlas or another secured MongoDB instance.
2. Add all required server environment variables to the deployment environment.
3. Install root, server and client dependencies.
4. Run the client build.
5. Start the server with `NODE_ENV=production`.
6. Configure HTTPS and your domain.
7. Set `CLIENT_URL` and/or `ALLOWED_ORIGINS` for allowed frontend origins. Set `TRUST_PROXY=1` only when the app is behind one trusted reverse proxy.

## Assets

- Main product image: `client/public/images/product.png`
- Favicon: `client/public/favicon.ico`
- Educational visuals: `client/public/images/`
- Ingredients section placeholder: `client/public/images/i.png` (replace only after verified ingredient details/image are available)

## Content and medical-claim note

The public copy avoids guaranteed cure, fixed timing, guaranteed enlargement, fake doctor endorsement, fake certification and fabricated customer-result claims. Ingredients, dosage and usage should follow the genuine product label and supporting documentation.

## Pricing countdown

The landing page includes a simple 24-hour countdown in the hero and pricing section. The timer is implemented in `client/src/components/PriceCountdown.jsx`.


## Security hardening

- Strict Zod payload validation and input length limits
- Rate limiting on public lead, feedback and login endpoints
- Explicit CORS allow-list support (`CLIENT_URL` / `ALLOWED_ORIGINS`)
- Configurable trusted-proxy handling (`TRUST_PROXY`)
- JWT algorithm, issuer and audience validation
- Session-scoped admin token storage in the frontend
- Invalid feedback ID handling and Excel formula-injection protection
- India (Asia/Kolkata) date filtering for lead reports
