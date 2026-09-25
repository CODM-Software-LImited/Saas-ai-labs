# AI Visibility: Phase 0 Discovery

_Date: 25 September 2026. Nothing in the site code has been changed yet._

## Plain-English summary

1. **This repository is not the codmsoftware.com website.** It holds the **codmsoftware.co.uk** site (CODM Software Limited, UK) and the **SaaS AI Labs** site. codmsoftware.com is a separate **Next.js** site on an nginx server, and its code is somewhere else.
2. **The brief's fact sheet contradicts the facts in this repo.** The brief says "founded 2021, HQ Noida". This repo says "incorporated 7 December 2023, HQ London (Covent Garden), Companies House 15333870". If I applied the brief here, the UK site would show the Indian company's facts. That is why I stopped before Phase 1.
3. **Most of the stale content the brief mentions is not in this repo.** "Boost your productivity with World's #1 CRM", "Join our team of instructors today!", Titan E-Signature, FHT and the `/index/` page do not appear anywhere in this code.
4. **This repo has a serious AI-visibility problem of its own.** When an AI crawler (GPTBot) visits codmsoftware.co.uk, every URL returns the same **2 KB empty page**. That includes `/about`, the service pages and even `/robots.txt` and `/sitemap.xml`. AI assistants see no content at all.

---

## 1. Which site is which

| | codmsoftware.com (the brief's target) | codmsoftware.co.uk (this repo) |
|---|---|---|
| Company | CodM Software Pvt Ltd (India) | CODM Software Limited (UK) |
| Stack | Next.js, prerendered (`x-nextjs-prerender: 1`) | React 19 + Vite 7 SPA; `react-snap` postbuild |
| Server | nginx/1.28.0 (Ubuntu) | Apache-style `.htaccess` SPA rewrite + Netlify-style `public/_redirects` |
| Homepage title | "Salesforce Consulting Company in India \| CodM Software" | "CODM Software Limited \| Top Salesforce Partner - CRM & AI Solutions" |
| Raw HTML for GPTBot | **~100 KB, full content**, including "Agentforce" (26 hits), "Financial Services Cloud" (20 hits) and "Education Cloud" (13 hits) | **2,193 bytes, empty `<div id="root">`**. No content until JavaScript runs |
| `/index/` | 308 → `/index` → 308 → `/` (already consolidated, but should be one 301 hop) | route does not exist |
| robots.txt | Exists (Allow all, disallows `/api/`, `/admin/`) | **Missing.** The SPA fallback returns the HTML shell |
| sitemap.xml | Exists, 60 URLs | **Missing.** The SPA fallback returns the HTML shell |
| llms.txt | 404 | Missing |
| JSON-LD | 2 blocks on the homepage | None |
| Canonical | `https://codmsoftware.com` | Set by JavaScript only, so crawlers don't see it |
| "World's #1 CRM" / "instructors today" | Not found on the live homepage today | "world's #1 CRM platform" appears once in `src/ServiceComponents/CRMDevelopment/CRMDevelopment_Second/CRMDevelopment_Second.jsx:35`. "instructors" is not found |

Git remote for this repo: `github.com/CODM-Software-LImited/Saas-ai-labs`.

## 2. This repo's stack

- **Framework:** React 19, react-router-dom 7 (`BrowserRouter`), Bootstrap 5, Tailwind 4, AOS animations.
- **Build:** `vite build`, then a `postbuild` step that runs `react-snap` (a headless Chromium prerender).
- **Rendering:** client-side SPA. `index.html` has an empty `<div id="root">`. `react-snap` is meant to write prerendered HTML for each route, but the committed `dist/` only contains a single `index.html` with no per-route folders, and the live site serves the empty shell. So prerendering is **not running in production**. The likely cause is that react-snap's bundled Chromium is too old for Vite's output, which is known from earlier work on this repo.
- **Brand switching:** `src/config/brand.js` picks `codm` or `saasai` from `window.location.hostname`. That happens only in the browser, which means **one build serves two brands**. This matters for prerendering, because a prerender runs on one hostname.
- **SEO:** `src/SeoData/SEO.jsx` sets title, meta, canonical and Open Graph through `useEffect`, so it runs only in the browser. 42 components use it. `react-helmet-async` is installed but `SEO.jsx` doesn't use it.
- **Hosting fallbacks:** `.htaccess` rewrites every non-file request to `/index.html`, and `public/_redirects` has `/* /index.html 200`. Because no real `robots.txt` or `sitemap.xml` file exists, those URLs also return the HTML shell with status 200.

## 3. Page inventory (codmsoftware.co.uk)

Titles come from each page's `<SEO>` call. Crawlers currently see **none** of them. They all get the `index.html` title.

| Route | Title (set in JS) |
|---|---|
| `/` | CODM Software Limited \| Salesforce Partner & AI Software Experts (SaaS AI brand: "SaaS AI Labs \| AI Engineering for Government…") |
| `/about` | About CODM Software \| Expert Salesforce & AI Solutions Partner |
| `/contact` | Contact CODM Software \| Salesforce Partner & AI Solutions Inquiry |
| `/ItServices` | Our Services \| Salesforce, AI, Integration & Software Development |
| `/ItServices/salesforce-education-cloud` | Software Solutions for Higher Education |
| `/ItServices/salesforce-financial-services` | Financial Software Solutions \| Secure & Compliant Systems |
| `/ItServices/salesforce-health-insurance-cloud` | Salesforce Health & Insurance Cloud Solutions |
| `/ItServices/salesforce-data-cloud` | Salesforce Data Cloud & AI Solutions |
| `/ItServices/salesforce-marketing-cloud` | Salesforce Marketing Cloud Services |
| `/ItServices/salesforce-sales-cloud` | Salesforce Sales Cloud Solutions |
| `/ItServices/salesforce-service-cloud` | Salesforce Service Cloud Solutions |
| `/ItServices/salesforce-energy-utilities-cloud` | Salesforce Energy & Utilities Cloud Solutions |
| `/ItServices/salesforce-manufacturing-cloud` | Salesforce Manufacturing Cloud Solutions |
| `/ItServices/salesforce-nonprofit-cloud` | Salesforce Nonprofit Cloud Solutions |
| `/ItServices/api-integration`, `data-integration`, `data-migration` (duplicate of data-integration) | API / Data Integration Services |
| `/ItServices/crm-development`, `building-llm`, `dotnet-…`, `react-…`, `python-application-development` | Development services |
| `/ItServices/technical-support`, `deployment-support` | Support services |
| `/g-cloud-15` | G-Cloud 15 Cloud Support Services |
| `/products`, `/products/:slug` | FUTURA (AI University Admissions Assistant) |
| `/blog` + 13 articles | Various; see `src/BlogsComponents/*` |
| `/PrivacyPolicy`, `/terms-conditions` | Legal pages |

Other issues found:
- `/ItServices/data-migration` renders the same component as `/ItServices/data-integration`, which is duplicate content.
- `/blog/g-cloud-framework-suppliers-uk` uses a client-side `<Navigate>`, not a real 301 redirect.
- The page titles for Financial Services and Education are generic ("Financial Software Solutions", "Software Solutions for Higher Education") and don't mention Salesforce.
- `index.html` references `/New Favicon.svg`, which does not exist. The real file is `/CodmFavicon.svg`, about 1.8 MB.

## 4. What is safe to do here, whichever answer you give

The following work applies to this repo no matter which company's facts end up on it:

1. Get real prerendered HTML for every route. Options:
   - (a) Fix `react-snap` so it uses system Chrome.
   - (b) Replace it with a small Puppeteer prerender script.
   - (c) Migrate to a framework with built-in static generation (a bigger change that needs your approval).
2. Add real `robots.txt`, a `sitemap.xml` generated at build time, and `llms.txt`.
3. Render titles, canonical tags and JSON-LD into the static HTML, not only through `useEffect`.
4. Add `Organization` and `Service` schema built from **this repo's UK facts**.
5. Fix the "world's #1 CRM" filler, the generic titles and the duplicate data-migration route.

The one blocker is the single-build, two-brand setup: `saasailabs` and `codmsoftware.co.uk` can't both be prerendered from one build. Each domain needs its own build (for example `VITE_BRAND=codm`).
