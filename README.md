# NuvyaBaby Landing Website

Modern SEO-focused landing website for baby gifting, baby products, and parenting content.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add Sanity values in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://nuvyababy.com
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-05
```

## Pages
- `/`
- `/about-us`
- `/baby-gifts`
- `/blog`
- `/blog/[slug]`
- `/blog/category/[slug]`
- `/privacy-policy`
- `/terms-and-conditions`
- `/customer-support`
- `/studio` for Sanity Studio

## Content
Sample seed content is in `sanity/sample-data/blogPosts.ts`.
# Nuvya_web
