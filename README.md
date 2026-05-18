# ADOSISTERING — Landing Page

> Halaman marketing/SEO untuk **ADOSISTERING** — Sistem Irigasi Pintar Berbasis IoT untuk Pertanian Efisien di Indonesia.

![Astro](https://img.shields.io/badge/Astro-5.x-ff5d01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

---

## 📋 Project Overview

Single-page static marketing landing site for the ADOSISTERING IoT irrigation monitoring system. This repo is **purely the marketing/SEO landing page** — the monitoring web app is a separate project.

**Key goals:**

- SEO-first: static HTML, schema/structured-data, sitemap, robots
- Performance-first: minimal JS, Lighthouse targets ≥ 90
- Accessible (WCAG AA)
- Simple contact form (Formspree)
- Modular, componentized Astro code

---

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (default: http://localhost:4321)
npm run dev

# 3. Open in browser
open http://localhost:4321
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
/
├─ src/
│  ├─ components/
│  │  ├─ Header.astro              # Sticky navigation bar
│  │  ├─ Footer.astro              # Footer with newsletter (mailto fallback)
│  │  ├─ Hero.astro                # Hero section with CTA
│  │  ├─ ProblemsSection.astro     # "Masalah Umum Irigasi" cards
│  │  ├─ SolutionSection.astro     # 3-step solution explanation
│  │  ├─ FeaturesGrid.astro        # Tabbed platform features
│  │  ├─ FieldInsightSection.astro # Field insight & data section
│  │  ├─ StatsSection.astro        # Achievement counters
│  │  ├─ UseCases.astro            # Implementation locations
│  │  ├─ PreviewSection.astro      # Product preview
│  │  ├─ DirectorViewSection.astro # Director quote
│  │  ├─ ColabSection.astro        # Collaboration section
│  │  ├─ MitraSection.astro        # Partners (Telkom U + Pertamina)
│  │  ├─ ContactForm.astro         # Contact form (Formspree)
│  │  ├─ CTA.astro                 # Call-to-action banner
│  │  └─ SeoHead.astro             # SEO meta, OG, JSON-LD
│  ├─ layouts/
│  │  └─ BaseLayout.astro          # HTML shell, fonts, skip-link
│  ├─ pages/
│  │  ├─ index.astro               # Main landing page
│  │  └─ 404.astro                 # Branded 404 fallback
│  ├─ assets/
│  │  ├─ images/                   # Real product/feature images (PNG/SVG)
│  │  └─ logos/                    # Logo SVGs (logo, logo-text, logo-white)
│  └─ styles/
│     └─ globals.css               # Tailwind directives + custom classes
├─ public/
│  ├─ favicons/                    # Favicon + webmanifest
│  ├─ logos/                       # Public logo for JSON-LD
│  ├─ og-image.jpg                 # Open Graph share image
│  └─ robots.txt                   # Search engine directives
├─ astro.config.mjs                # Astro + integrations config
├─ tailwind.config.cjs             # Tailwind theme & design tokens
├─ vercel.json                     # Vercel deployment config (static)
├─ lighthouserc.json               # Lighthouse CI config
├─ design-tokens.md                # Color, typography, spacing reference
├─ .env.example                    # Environment variables template
└─ README.md                       # This file
```

---

## 🌐 Deploy to Vercel

### Step-by-step

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel will auto-detect Astro — settings should be:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add environment variables:
   - `PUBLIC_FORMSPREE_ENDPOINT` — Your Formspree form URL (e.g., `https://formspree.io/f/abcdefgh`)
6. Click **Deploy**

### Environment Variables

| Variable                   | Required | Description                     |
| -------------------------- | -------- | ------------------------------- |
| `PUBLIC_FORMSPREE_ENDPOINT`| Yes      | Formspree form endpoint URL     |
| `SITE_URL`                 | No       | Override site URL for canonical |

---

## 🔍 SEO Checklist

### How to update meta tags

Edit props passed to `<SeoHead>` in `src/layouts/BaseLayout.astro` or directly in `src/pages/index.astro`:

```astro
<SeoHead
  title="Your Custom Page Title"
  description="Your custom meta description"
  ogImage="/images/your-og-image.jpg"
/>
```

### JSON-LD Structured Data (auto-generated)

- ✅ **Organization** — Company info, logo, contact point
- ✅ **Service** — IoT Smart Irrigation System (service-type schema)
- ✅ **FAQPage** — Built into `SeoHead.astro`
- ✅ **BreadcrumbList** — Root → Beranda
- ✅ **WebPage** — Inline language metadata

To update, edit the schema objects in `src/components/SeoHead.astro`.

### Sitemap & Robots

- `sitemap-index.xml` is auto-generated at build time by `@astrojs/sitemap`
- `robots.txt` is in `public/robots.txt` — update the sitemap URL if your domain changes

### Target Keywords

| Priority  | Keyword                                   |
| --------- | ----------------------------------------- |
| Primary   | sistem irigasi otomatis berbasis IoT      |
| Secondary | monitoring irigasi jarak jauh             |
| Secondary | smart irrigation Indonesia                |
| Secondary | kontrol pompa air via website             |

---

## 🖼️ Image Assets

All real product/feature images live in `src/assets/images/` and are imported via Astro's `<Image>` component for automatic optimization (WebP/AVIF, responsive `srcset`, lazy loading).

To replace or add an image:

1. Drop the new asset (PNG/JPG/WebP/SVG) into `src/assets/images/`
2. Import it in the relevant component:
   ```astro
   import myImage from "@/assets/images/my-image.png";
   ```
3. Use `<Image src={myImage} alt="..." width={...} />`
4. Astro will emit hashed, optimized variants under `/_astro/`

The `og-image.jpg` for social sharing lives in `public/` and is referenced as a string path in `SeoHead.astro`.

---

## 🧪 Testing

### Lighthouse (local)

```bash
# Build first
npm run build

# Run Lighthouse CI
npx @lhci/cli autorun --config=lighthouserc.json

# Or use Chrome DevTools:
# 1. Open Chrome → http://localhost:4321
# 2. F12 → Lighthouse tab → Generate report
```

### Linting

```bash
npm run lint
npm run format
```

### Build test

```bash
npm test  # Runs npm run build
```

---

## ⚡ Performance Notes

- **No client-side hydration** by default — all components are server-rendered static HTML
- Only inline `<script is:inline>` for mobile menu toggle and feature tab switching
- Google Fonts loaded with `font-display: swap` and `preconnect`
- Hero image uses `loading="eager"` and `fetchpriority="high"`
- All below-fold images use `loading="lazy"`
- Static asset caching configured in `vercel.json` (1 year immutable)
- Minimal CSS via Tailwind purge — only used utilities ship

---

## 📞 Contact Form Setup

### Option A: Formspree (recommended, no server code)

1. Go to [formspree.io](https://formspree.io) and create a form
2. Copy the form endpoint (e.g., `https://formspree.io/f/abcdefgh`)
3. Set `PUBLIC_FORMSPREE_ENDPOINT` in your environment
4. The form works via standard POST — no JS required for submission

### Option B: Vercel Serverless (advanced)

Create `api/contact.js` in the project root:

```js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { nama, email, subjek, pesan } = req.body;
  // Validate & send email via Resend/SMTP
  // Set RESEND_API_KEY in Vercel environment
  res.status(200).json({ success: true });
}
```

---

## 🔧 Further Extension

- **Monitoring app integration:** This landing page links to the monitoring web app via CTA buttons. Update `href` attributes in `Hero.astro` and `CTA.astro` to point to the monitoring app URL.
- **Analytics:** Add Google Analytics or Plausible by inserting the tracking script in `BaseLayout.astro`.
- **Multilingual:** Add alternate language pages and update `<link rel="alternate" hreflang="...">` in `SeoHead.astro`.

---

## 📝 Notes

- **Fonts:** Outfit (body) + Oswald (display/brand) loaded from Google Fonts with `font-display: swap`
- **Brand color:** Primary green `#54A610` (see `tailwind.config.cjs` and `design-tokens.md`)
- **Content language:** Indonesian (Bahasa Indonesia) — all copy in `id`
- **Output:** Pure static (no SSR adapter) — deployed via Vercel static hosting + headers in `vercel.json`
- **Newsletter form:** Uses `mailto:` fallback (no backend); switch to Formspree/Mailchimp if you need real subscriptions

---

## 📄 License

© 2024–2026 ADOSISTERING. All rights reserved.
