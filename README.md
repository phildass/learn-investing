# Learn Investing - iiskills.cloud

**Learn Personal Investment for the Indian Market**

An interactive learning platform for mastering personal finance and investments in the Indian context. Part of the iiskills.cloud ecosystem.

## 🎯 Overview

Learn Investing is a comprehensive educational platform covering:
- 10 Modules with 100 Lessons total
- Stocks, Bonds, Mutual Funds
- Gold/Commodities, Real Estate
- Financial Planning & Taxation
- Interactive quizzes and assessments
- Final certification exam

## 🚀 Features

### Learning System
- **100 Interactive Lessons**: Each lesson max 5 paragraphs, 400 words
- **Lesson Quizzes**: 5 questions per lesson, pass 3/5 to unlock next
- **Final Certification**: 20-question exam, 13/20 to pass
- **Progress Tracking**: Monitor your learning journey
- **Case Studies**: Interactive investment scenarios
- **Skill Simulators**: Practice real-world investing

### User Experience
- **Registration Flow**: UPI payment integration
- **Email Confirmation**: Auto-send from no-reply@iiskill.in
- **Onboarding**: Mandatory questionnaire
- **Level Progression**: Unlock content as you learn

### Market Intelligence
- **Live News Feed**: Indian finance news
- **Market Monitor**: Real-time market data
- **Search & Pagination**: Easy content discovery

### Community & Support
- **Support Tickets**: For paid users
- **Jobs Aggregation**: Finance sector opportunities
- **Community Forum**: Fully moderated (initially off)

### Admin Features
- **Admin Panel**: Password-protected (phil123)
- **Password Reset**: Self-service reset option
- **Analytics Dashboard**: All stats in one place
- **Content Management**: Manage all pages

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS + Radix UI components
- **Authentication**: Supabase
- **State Management**: React Hooks
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Supabase account (for authentication)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/phildass/learn-investing.git
cd learn-investing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
- Supabase URL and keys
- Email configuration
- Payment gateway credentials
- API keys for market data

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
learn-investing/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── modules/           # Module pages
│   ├── lessons/           # Lesson pages
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # React components
│   ├── shared/           # Shared UI components
│   ├── lessons/          # Lesson-specific components
│   └── admin/            # Admin components
├── lib/                   # Utilities and helpers
│   ├── curriculum.ts     # Course curriculum data
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── images/          # Images
│   └── data/            # Static data files
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.mjs       # Next.js configuration
```

## 📚 Curriculum

### Module 1: Introduction to Investing
1. What is Investing?
2. Risk and Return Relationship
3. Time Value of Money
4. Setting Financial Goals
5. Investment vs Speculation
6. Power of Compounding
7. Inflation and Purchasing Power
8. Asset Classes Overview
9. Diversification Strategy
10. Investment Mindset

### Module 2: Understanding Stocks
*(10 lessons on equity markets and stock valuation)*

### Module 3: Bonds and Fixed Income
*(10 lessons on debt instruments)*

### Module 4: Mutual Funds
*(10 lessons on mutual fund investing)*

### Module 5: Gold and Commodities
*(10 lessons on commodity investing)*

### Module 6: Real Estate Investment
*(10 lessons on property investment)*

### Module 7: Financial Planning
*(10 lessons on comprehensive planning)*

### Module 8: Taxation for Investors
*(10 lessons on tax strategies)*

### Module 9: Advanced Investment Strategies
*(10 lessons on portfolio management)*

### Module 10: Building Your Investment Portfolio
*(10 lessons on practical portfolio construction)*

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy!

Vercel will automatically detect Next.js and configure build settings.

### VPS with PM2

```bash
# Build the application
npm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Domain Configuration

Configure your DNS to point to:
- **Production**: learn-investing.iiskills.cloud
- **Development**: dev.learn-investing.iiskills.cloud

## 🔐 Environment Variables

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key
- `NEXT_PUBLIC_SITE_URL`: Your site URL
- `EMAIL_FROM`: Email sender address
- `SMTP_*`: Email server configuration
- `PAYMENT_GATEWAY_*`: Payment integration
- `MARKET_DATA_API_KEY`: Market data provider
- `NEWS_API_KEY`: News API access

## 🤝 Integration with iiskills.cloud

Learn Investing integrates seamlessly with the main iiskills.cloud platform:

- **Shared Authentication**: Uses Supabase auth with cross-subdomain sessions
- **Consistent UI**: Matches color theme and design patterns
- **Navigation**: Links to other iiskills.cloud subdomains
- **User Management**: Centralized user database

## 📄 License

© 2024 Learn Investing - iiskills.cloud. All rights reserved.

Part of the Indian Institute of Professional Skills Development.

## 👨‍💻 Development

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Tailwind for styling
- ESLint for code quality

### Testing
```bash
npm run lint
npm run build
```

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Contact: info@iiskills.cloud

## 🗺️ Roadmap

- [x] Phase 1: Project scaffolding and configuration
- [ ] Phase 2: Shared UI components and layout
- [ ] Phase 3: Authentication and registration
- [ ] Phase 4: Complete curriculum (100 lessons)
- [ ] Phase 5: Quiz and assessment system
- [ ] Phase 6: Advanced features (case studies, simulators)
- [ ] Phase 7: Market monitor and news feed
- [ ] Phase 8: Community and support features
- [ ] Phase 9: Admin panel
- [ ] Phase 10: Documentation and deployment

---

**Made with ❤️ for Indian investors**
