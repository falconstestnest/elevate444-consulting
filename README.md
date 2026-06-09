# Jimmy Manalel — Personal Website

Modern, elegant portfolio and contact site for Jimmy Manalel: Founder, Venture Ecosystem Builder, and Cross-Border Startup Strategist (India ↔ GCC).

**Live site:** https://jimmy-manalel.vercel.app

## Features
- Highly interactive expertise grid (click cards for details + "select focus areas" builder)
- Clickable personal journey timeline
- Dedicated Founder-Being section with core belief quote
- Fully functional contact form (with Resend email support)
- Beautiful dark-first design with smooth animations (Framer Motion)
- Responsive and production-optimized Next.js 15 + Tailwind

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add / Update Portrait

Replace `public/images/jimmy-headshot.jpg` with your professional photo (recommended ~4:5 portrait).

The site gracefully falls back if the image is missing.

## Deploy

This site is deployed on Vercel.

```bash
npx vercel --prod
```

## Contact Form (Production Emails)

The form works out of the box (success toast + server log).

For real email delivery, add these environment variables in the Vercel dashboard (Project → Settings → Environment Variables):

- `RESEND_API_KEY` (required for sending)
- `CONTACT_EMAIL` (optional, defaults to hello@jimmymanalel.com)
- `RESEND_FROM_EMAIL` (optional)

After adding vars, redeploy or trigger a new build.

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui primitives
- Framer Motion (interactions & modals)
- React Hook Form + Zod
- Sonner (toasts)
- Vercel (hosting + serverless API)

## Customization

Most content lives in `lib/constants.ts` (expertise, journey, stats, form options, site metadata).

Sections are in `components/sections/`.

## License

Personal site. All rights reserved.
