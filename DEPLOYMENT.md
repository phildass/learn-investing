# Learn Investing - Deployment Guide

Complete guide for deploying Learn Investing as an iiskills.cloud subdomain at `learn-investing.iiskills.cloud`.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Deployment Options](#deployment-options)
  - [Vercel (Recommended)](#vercel-recommended)
  - [VPS with PM2](#vps-with-pm2)
  - [Docker](#docker)
- [Domain Configuration](#domain-configuration)
- [SSL Certificate](#ssl-certificate)
- [Post-Deployment](#post-deployment)

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git
- Supabase account (for authentication and database)
- Domain access for learn-investing.iiskills.cloud

## Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/phildass/learn-investing.git
cd learn-investing
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

4. **Configure your `.env.local`:**
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Learn Investing

# Email (for notifications)
EMAIL_FROM=no-reply@iiskill.in
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password

# Payment Gateway
PAYMENT_GATEWAY_KEY=your_payment_key
PAYMENT_GATEWAY_SECRET=your_payment_secret

# Market Data APIs
MARKET_DATA_API_KEY=your_api_key
NEWS_API_KEY=your_news_api_key
```

5. **Run development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Environment Configuration

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGci...` |
| `NEXT_PUBLIC_SITE_URL` | Production URL | `https://learn-investing.iiskills.cloud` |
| `EMAIL_FROM` | Sender email address | `no-reply@iiskill.in` |
| `ADMIN_PASSWORD_HASH` | Hashed admin password | bcrypt hash of `phil123` |

### Optional Environment Variables

- `SMTP_*`: Email server configuration
- `PAYMENT_GATEWAY_*`: UPI payment integration
- `MARKET_DATA_API_KEY`: For live market data
- `NEWS_API_KEY`: For Indian finance news

## Database Setup

### Supabase Setup

1. **Create Supabase Project:**
   - Visit [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Create Database Tables:**

```sql
-- Users table (if not using Supabase Auth)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  is_paid BOOLEAN DEFAULT FALSE,
  onboarding_completed BOOLEAN DEFAULT FALSE
);

-- User Progress table
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_id VARCHAR(50),
  lesson_id VARCHAR(50),
  quiz_score INTEGER,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Certifications table
CREATE TABLE certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  exam_score INTEGER,
  passed BOOLEAN,
  issued_at TIMESTAMP DEFAULT NOW(),
  certificate_url TEXT
);

-- Support Tickets table
CREATE TABLE support_tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  subject VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'open',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

3. **Set up Row Level Security (RLS):**

```sql
-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Policies for user_progress
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Similar policies for other tables
```

## Deployment Options

### Vercel (Recommended)

Vercel provides the easiest deployment for Next.js applications.

1. **Push code to GitHub:**
```bash
git push origin main
```

2. **Import to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Project:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node Version: 18.x

4. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all required variables from `.env.example`

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically

6. **Configure Custom Domain:**
   - Go to Project Settings → Domains
   - Add `learn-investing.iiskills.cloud`
   - Update DNS records as instructed by Vercel

### VPS with PM2

For deployment on a VPS (Ubuntu/Debian):

1. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install PM2:**
```bash
sudo npm install -g pm2
```

3. **Clone and Setup:**
```bash
git clone https://github.com/phildass/learn-investing.git
cd learn-investing
npm install
npm run build
```

4. **Create `.env.local` with production values**

5. **Start with PM2:**
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

6. **Configure Nginx:**
```nginx
server {
    listen 80;
    server_name learn-investing.iiskills.cloud;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

7. **Enable site:**
```bash
sudo ln -s /etc/nginx/sites-available/learn-investing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Docker

1. **Create Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Create docker-compose.yml:**
```yaml
version: '3.8'

services:
  learn-investing:
    build: .
    ports:
      - "3002:3000"
    environment:
      - NODE_ENV=production
    env_file:
      - .env.local
    restart: unless-stopped
```

3. **Deploy:**
```bash
docker-compose up -d
```

## Domain Configuration

### DNS Settings

Configure the following DNS records for `learn-investing.iiskills.cloud`:

**For Vercel:**
- Type: CNAME
- Name: learn-investing
- Value: cname.vercel-dns.com

**For VPS:**
- Type: A
- Name: learn-investing
- Value: Your server IP address

### Subdomain Integration with iiskills.cloud

Ensure the subdomain is properly integrated with the main iiskills.cloud platform:

1. **Shared Authentication:**
   - Use the same Supabase project
   - Configure cookie domain: `.iiskills.cloud`
   - Enable cross-subdomain sessions

2. **Navigation Links:**
   - Add link to main site: `https://iiskills.cloud`
   - Link to other subdomains in footer

## SSL Certificate

### Vercel
SSL is automatically provided and managed by Vercel.

### VPS with Certbot
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d learn-investing.iiskills.cloud
sudo systemctl restart nginx
```

Auto-renewal is configured automatically.

## Post-Deployment

### 1. Verify Deployment
- Visit https://learn-investing.iiskills.cloud
- Test user registration flow
- Check lesson navigation
- Verify quiz functionality

### 2. Monitor Application
```bash
# PM2 logs
pm2 logs learn-investing

# PM2 status
pm2 status

# PM2 monitoring
pm2 monit
```

### 3. Set Up Monitoring
- Configure error tracking (Sentry, LogRocket)
- Set up uptime monitoring
- Enable analytics

### 4. Backup Configuration
- Database backups (Supabase handles this)
- Regular code backups via Git
- Environment variables documentation

## Troubleshooting

### Build Failures
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Connection Issues
- Verify environment variables
- Check Supabase connection
- Verify DNS propagation

### Performance Issues
- Enable Next.js caching
- Optimize images
- Use CDN for static assets

## Maintenance

### Updates
```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Rebuild
npm run build

# Restart with PM2
pm2 restart learn-investing
```

### Database Migrations
- Use Supabase migrations
- Test in development first
- Backup before migration

## Security

### Best Practices
- Keep dependencies updated
- Use environment variables for secrets
- Enable HTTPS only
- Configure CORS properly
- Implement rate limiting
- Regular security audits

### Admin Access
- Change default admin password
- Use strong passwords
- Enable 2FA if possible
- Limit admin IP addresses

## Support

For deployment issues:
- Email: info@iiskills.cloud
- GitHub Issues: Create an issue in the repository

---

**Deployed By:** Phil Dass
**Last Updated:** 2024
**Version:** 1.0.0
