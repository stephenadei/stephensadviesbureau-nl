# Data Consultancy Website

A modern, professional website for an independent data consultancy business. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Landing Page**: Features "The Data Mirror" and "AI Audit & Roadmap" as front window services
- **Services Page**: Showcases all 10 service packages organized by category (Quick Wins, Systems Builders, Recurring)
- **Contact Page**: Contact form for potential clients
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode**: Automatic dark mode support based on system preferences

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with navigation
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── ServiceCard.tsx    # Service card component
│   └── ContactForm.tsx    # Contact form
├── lib/                   # Utilities and data
│   └── services.ts        # Service data definitions
└── .cursorrules           # Cursor IDE workflow rules
```

## Deployment to Vercel

### Initial Setup

1. **Push to GitHub**: 
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

### Setting Up Custom Domain (data.[domain].nl)

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Navigate to "Domains"
   - Click "Add Domain"
   - Enter: `data.[your-domain].nl` (replace `[your-domain]` with your actual domain)

2. **DNS Configuration**:
   - Add a CNAME record in your domain's DNS settings:
     - **Type**: CNAME
     - **Name**: `data`
     - **Value**: `cname.vercel-dns.com` (or the value provided by Vercel)
   - Alternatively, use Vercel's nameservers if managing DNS through Vercel

3. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates for custom domains
   - Wait a few minutes for DNS propagation and SSL setup

### Environment Variables

Currently, no environment variables are required. If you add form handling (e.g., Formspree, Resend), you'll need to add API keys in Vercel's environment variables section.

### Build Settings

Vercel will automatically detect Next.js and use these settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

The `vercel.json` file is included for additional configuration if needed.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Services

Edit `lib/services.ts` to add or modify services. The services are automatically organized by category and featured status.

### Styling

This project uses Tailwind CSS. Customize styles in:
- `app/globals.css` - Global styles and CSS variables
- Component files - Tailwind utility classes

## Next Steps

1. **Form Integration**: Connect the contact form to a service like:
   - Formspree
   - Resend
   - SendGrid
   - Your own API endpoint

2. **Analytics**: Add analytics tracking (Google Analytics, Plausible, etc.)

3. **SEO**: Update metadata in `app/layout.tsx` and add Open Graph tags

4. **Content**: Customize service descriptions and add case studies/portfolio

## License

Private project - All rights reserved.
