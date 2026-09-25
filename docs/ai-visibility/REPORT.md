# AI Visibility (GEO/AEO) Report: codmsoftware.co.uk

_Branch `ai-visibility`, 25 September 2026. Nothing has been pushed or deployed yet._

---

## Start here: what was done, in plain English

**The problem.** When ChatGPT, Claude, Perplexity or Google's AI visits codmsoftware.co.uk, it doesn't run JavaScript. The site was built so that **all** of its text appeared only after JavaScript ran. Every page, including `/about`, the service pages, and even `robots.txt` and `sitemap.xml`, sent those bots the same **empty 2 KB page**. To an AI assistant, CODM's website was blank.

**The fix.** The site now creates a **finished HTML page for every URL at build time**. Bots receive the real headings, text, FAQs and company facts straight away, with no JavaScript needed. Visitors see the same site as before.

**What else changed:**

| Before | After |
|---|---|
| Bots saw an empty page on every URL | Bots see full content on all 42 pages (tested as GPTBot) |
| No `robots.txt`, `sitemap.xml` or `llms.txt` (all returned the empty page) | All three exist. The sitemap and llms.txt are regenerated on every build |
| Canonical tags added only by JavaScript, with some wrong URLs | Every page has a correct canonical URL in its HTML |
| No structured data (JSON-LD) | Organization, Service, Article, FAQ, Breadcrumb, Office and Product data on every page, generated from one fact file |
| Titles too long and inconsistent; some pages had 0 or 3 H1 headings | Every page has a unique title (≤60 characters), a description (≤155) and exactly one H1 |
| Homepage H1: "AI-Driven Enterprise Software Solutions Built for Scale and Innovation" | "UK Salesforce Consulting Partner for Agentforce, AI and Industry Clouds", followed by a factual intro |
| Homepage service cards explained what CRM, .NET and React *are* | They now say what **CODM delivers** |
| No FAQ page | New `/faq` page (company, G-Cloud, FUTURA), linked in the footer |
| 97 MB of oversized images | 13 MB. The 21 MB Service Cloud photo is now about 0.2 MB |
| Company facts scattered and conflicting ("since 2015") | One fact sheet: `src/data/company-facts.json` + `FACTS.md` |

**The one thing you must decide:** the brief was written for **codmsoftware.com** (CodM Software Pvt Ltd, Noida, founded 2021). This repo is **codmsoftware.co.uk** (CODM Software Limited, London, incorporated 2023). As agreed, the brief was applied here using **the UK company's facts**. codmsoftware.com is a separate Next.js site and already handles most of what the brief asks for; see [DISCOVERY.md](DISCOVERY.md).

**What you need to do next** is in [Section 4: Owner actions](#4-owner-actions-outside-the-repo). The most important step is deploying the new build **including the `.htaccess` file**.

---

## 1. Changes by phase (commits on branch `ai-visibility`)

| Phase | Commit | What changed |
|---|---|---|
| 0 Discovery | `d9df272` | [DISCOVERY.md](DISCOVERY.md): stack, rendering test, page inventory, and the .com/.co.uk mismatch |
| 1 Fact sheet | `d9df272` | [FACTS.md](FACTS.md) + `src/data/company-facts.json`. Fixed "since 2015" → 2023 in `src/seoMetadata.js` |
| 2 Crawlability + 6 llms.txt | `87dedc6` | `scripts/prerender.mjs` (replaces react-snap, which never worked with Vite), `scripts/generate-seo-files.mjs` (sitemap.xml + llms.txt), `scripts/generate-route-dates.mjs` (git-based `lastmod`), `public/robots.txt`, `public/.htaccess` (moved from the repo root so it deploys with `dist/`), `src/data/site-routes.js` (list of every indexable URL) |
| 3 Structured data | `ae2cb05` | `src/SeoData/SEO.jsx` rewritten, plus `src/SeoData/schema.js`, `src/data/page-meta.js` (titles and descriptions for every page), `src/data/faqs.js`. FAQPage schema on /g-cloud-15, /products/futura and /faq; SoftwareApplication on FUTURA |
| 4 On-page | `56e9b42` | Homepage H1 and intro; shared page header now renders an H1; duplicate H1s removed; generic filler replaced; the "world's #1 CRM" paragraph and the "12 years CRM experience" claim rewritten; typos fixed; new `/faq`; accordion headings made valid; blog author alt text and a broken LinkedIn link fixed |
| 8 Verification | `afeba5c` | `scripts/ai-visibility-check.mjs` (`npm run check:ai`) and `scripts/serve-dist.mjs` (`npm run serve:dist`) |
| 7 Performance/a11y | `e0e6750` | 53 images recompressed; service illustrations converted to WebP; decorative icons use `alt=""`; 50 images given alt text; FAQ link added to footer |
| 5 Content | `a826dfa` | 5 buyer-question articles + a case study template in [drafts/](drafts/README.md). **Not published**, because they need prices, timelines and results only CODM can confirm |

### How the build works now

```
npm run build
  ├─ prebuild : generate-route-dates.mjs   → src/data/route-dates.json (last git change per page)
  ├─ build    : vite build                 → dist/ (app bundle)
  └─ postbuild: prerender.mjs              → dist/<page>.html for all 42 routes + 200.html shell + 404.html
                generate-seo-files.mjs     → dist/sitemap.xml, dist/llms.txt
```

Prerendering needs Google Chrome on the build machine. It finds Chrome automatically on Windows, macOS and Linux, or you can set `CHROME_PATH`. It uses the `puppeteer` package installed alongside `react-snap`, so keep `react-snap` in `package.json` even though it no longer runs.

**Test locally before deploying:**
```bash
npm run build
```
```bash
npm run serve:dist
```
```bash
npm run check:ai -- http://localhost:4173
```
Result on 25 Sep 2026: **55/55 checks passed.** The brief's test `curl -A GPTBot / | grep` now finds "Agentforce" 31 times, "Education Cloud" 6 times and "Financial Services Cloud" 3 times in the raw HTML. The live site currently returns 0.

### URL decisions

- **No trailing slash** (`/about`, not `/about/`). This matches every existing internal link and URL Google has already indexed. `.htaccess` 301-redirects `/about/` → `/about`.
- **`/ItServices/...` URLs were kept.** The brief suggested `/services/<slug>/`, but the site already has a dedicated page per service. Moving them all would break indexed URLs for little gain.
- `/index`, `/index/` and `/index.html` → 301 → `/`. `/blog/g-cloud-framework-suppliers-uk` → 301 → `/blog/g-cloud15`.
- `/ItServices/data-migration` shows the same page as `/ItServices/data-integration`, so its canonical tag points to data-integration. It isn't in the sitemap, but the URL still works for the "Data Migration" menu link.
- `www.codmsoftware.co.uk` → 301 → `codmsoftware.co.uk`. Today both return 200, which creates duplicate content.

---

## 2. `{{TODO_VERIFY}}` placeholders

These are **never** output in live schema or meta tags; the code removes them automatically. None appear in visible page content either, only in the fact file and the unpublished drafts.

| # | File | Fact needed |
|---|---|---|
| 1 | `src/data/company-facts.json` → `relatedEntities.india` | Relationship between CODM Software Limited (UK) and CodM Software Pvt Ltd (India, codmsoftware.com): parent, subsidiary or sister company? |
| 2 | `company-facts.json` → `salesforcePartner.tier` | Salesforce partner tier (Base / Ridge / Crest / Summit) |
| 3 | `company-facts.json` → `salesforcePartner.since` | Year CODM Software Limited joined the Salesforce partner programme |
| 4 | `company-facts.json` → `salesforcePartner.appExchangeUrl` | AppExchange consultant listing URL. The homepage shows an "available on AppExchange" badge, so which listing is it? |
| 5 | `company-facts.json` → `stats.cloudsCovered` | The About page says "8 Salesforce clouds covered", but 14 clouds are listed as services |
| 6 | `company-facts.json` → `offices[plano].note` | Is Plano (Talent4World LLC) a CODM office or a partner company? |
| 7 | `company-facts.json` → `offices[noida].note` | Is Noida a CODM office, SaaS AI Labs, or CodM Software Pvt Ltd? The contact page labels it "SaaS AI Labs" |
| 8 | `company-facts.json` → `accreditations` | Which ISO standard(s), and the certificate number |
| 9 | `company-facts.json` → `sameAsTodo` | Clutch profile URL |
| 10 | `company-facts.json` → `sameAsTodo` | Crunchbase profile URL |
| 11 | `company-facts.json` → `sameAsTodo` | X/Twitter URL. The footer links to the bare `https://twitter.com` |
| 12 | `docs/ai-visibility/FACTS.md` | Other leaders besides the founder (for the About page / schema) |
| 13 | `FACTS.md` | What the homepage "98% Trusted by companies worldwide" figure measures |
| 14 | `FACTS.md` | Are Titan E-Signature and FHT (codmsoftware.com products) also UK-company products? |
| 15 | `src/data/page-meta.js` → `published` (per article) | Original publish dates of the 13 blog posts. Schema currently shows only `dateModified` (from git) |
| 16 | `drafts/01-…cost-uk.md` | Price ranges and durations for small, medium and large projects; pricing model; Digital Marketplace link |
| 17 | `drafts/02-…fsc-vs-sales-cloud.md` | Compliance features you implement; licence bundling; an FSC case study |
| 18 | `drafts/03-…agentforce-timeline.md` | Duration of each step; Data Cloud recommendation |
| 19 | `drafts/04-…education-cloud.md` | First-phase duration; whether a real UK university case study exists |
| 20 | `drafts/05-…choosing-a-partner.md` | Partner tier, ISO standard, references, discovery length |
| 21 | `drafts/case-studies-template.md` | For each case study: who delivered it, client naming permission, dates, measured results, quote permission |
| 22 | Every draft | Author name and role; publish date |

### Claims on the live site that need checking (not changed; your call)

These are visible now. Nothing in the repo backs them up. AI assistants quote claims like these, and unsupported claims can be a problem under UK consumer law (the CMA / DMCC Act 2024 rules on fake reviews and misleading claims).

| Claim | Where | Risk |
|---|---|---|
| **Three testimonials** from "Kendrick Shaw", "Sarah Smith" and "David Miller" with stock avatars | Homepage, `src/components/Testimonials/Testimonial.jsx` | **High.** These look like template placeholders. If they are not real clients, remove them or replace them with real, attributable quotes. No Review schema was added for them |
| "Join **52,000+** people on our newsletter" | Homepage, `src/components/NewsletterSection/NewsletterSection.jsx:141` | High, if not true |
| "**300%+** Average ROI" | Homepage hero stats, `src/components/Hero/Hero.jsx:14` | Medium. Needs a source |
| "**98%** Trusted by companies worldwide" / "99% repeat happy customers" | Homepage, `src/components/Hero4/Hero4.jsx` | Medium |
| "Achieved **500%** growth in three years…" | Sales Cloud page, `SalesCloud_First.jsx:116` | Check whether this is a Salesforce customer statistic (then cite it) or a CODM claim |
| Revenue Cloud post: author "Sumit Tiwari", but "View LinkedIn Profile" links to **Chander Kant's** profile | `src/BlogsComponents/BlogSidebar/SalesforceRevenueCloudSidebar.jsx` | Wrong attribution. Supply Sumit's URL |

---

## 3. What was not done, and why

| Brief item | Status |
|---|---|
| Titan E-Signature and FHT product pages | **Skipped.** These products belong to codmsoftware.com and aren't in this repo. Add them only if the UK company sells them (TODO 14) |
| Three case study pages | **Template only.** The site has no case studies, and the brief's three are codmsoftware.com projects. See [case-studies-template.md](drafts/case-studies-template.md) |
| Five `/insights` articles | **Drafted, not published.** They need prices and timelines. Articles belong under the existing `/blog` |
| Move services to `/services/<slug>/` | **Kept `/ItServices/...`.** Every service already has its own page, and moving them would break indexed URLs |
| Service-page FAQs (4–6 per service) | **Not added.** Answers need CODM-specific facts (timelines, scope). The `/faq` page covers company-level questions |
| Explicit `width`/`height` on every image | **Not done.** The prerendered pages contain about 1,650 `<img>` tags, and adding sizes needs per-image layout checks. Alt text and file weight were fixed |
| Lighthouse run | **Not run in this session.** The biggest win (image weight) is done. Remaining: `PharmaDemo.mp4` (27 MB), `CodmFavicon.svg` (1.8 MB, used as the favicon and loading spinner), and a 1.2 MB JS bundle that could be code-split |
| SaaS AI Labs subdomain | Prerendering runs for the CODM brand. **Don't deploy this `dist/` to saasailabs.codmsoftware.co.uk**, or bots will see CODM's HTML there. For that subdomain, build with `VITE_BRAND=saasai npm run build`, which prerenders only its homepage and skips the sitemap/llms.txt |
| `dist/` in git | **Not committed.** It was built with your uncommitted edit to `src/data/products.js`. Run `npm run build` yourself when you are ready to deploy |

---

## 4. Owner actions (outside the repo)

1. **Deploy.** Run `npm run build` on a machine with Chrome, then upload **everything in `dist/`**, including the hidden **`.htaccess`**, `200.html`, `404.html`, all `.html` files and the `ItServices/`, `blog/` and `products/` folders. The old `.htaccess` in the repo root has moved to `public/.htaccess`, so it now ends up in `dist/` automatically.
2. **Purge the Hostinger CDN cache** (hPanel → Website → CDN → Purge all). The live site sends `x-hcdn-cache-status`, so old empty pages may stay cached otherwise. Then run:
   ```bash
   npm run check:ai
   ```
   against the live site. It should report 0 failures.
3. **Check "Force HTTPS" is on** in hPanel. The new `.htaccess` redirects `www` → apex but leaves HTTP → HTTPS to Hostinger, to avoid a redirect loop behind the CDN.
4. **Google Search Console:** add or verify `codmsoftware.co.uk`, submit `https://codmsoftware.co.uk/sitemap.xml`, and request indexing for `/`, `/about`, `/faq` and the main service pages.
5. **Bing Webmaster Tools:** import from Search Console and submit the sitemap. Bing's index feeds Copilot and ChatGPT search.
6. **Align your external profiles** with [FACTS.md](FACTS.md): the same legal name, London HQ address, incorporation date, services and website URL on LinkedIn, Clutch, Crunchbase, AppExchange and Companies House.
7. **Collect real reviews** on Clutch, G2 and AppExchange. Once real reviews are published there, they can be quoted on the site and marked up with Review schema.
8. **Confirm the relationship with codmsoftware.com** (TODO 1). AI assistants currently see two "CODM Software" companies with different founding years and headquarters. Once confirmed, add `parentOrganization` or `subOrganization` to the schema and a sentence on each site's About page explaining how the two companies are related.
9. **Fix the claims** listed in the risk table in Section 2.

---

## 5. Monthly AI monitoring prompts

Run these each month in ChatGPT (with search), Claude, Perplexity, Gemini and Google (AI Overviews). For each prompt, record whether CODM is mentioned, whether the facts are correct (London HQ, 2023, G-Cloud 15), and which URL is cited.

1. Best Salesforce consulting partner in the UK for small and mid-sized businesses
2. Salesforce consulting companies in London
3. Salesforce partner in Birmingham
4. Salesforce Financial Services Cloud partner UK
5. Salesforce Education Cloud consultants UK for universities
6. Agentforce implementation partner UK
7. Who can implement Salesforce Nonprofit Cloud for a UK charity?
8. G-Cloud 15 suppliers for Salesforce support
9. Buy Salesforce services through G-Cloud Lot 3
10. What is CODM Software?
11. Where is CODM Software Limited based and when was it founded?
12. Is CODM Software a Salesforce partner? What tier?
13. What does FUTURA by CODM Software do?
14. AI chatbot for university admissions UK
15. How much does a Salesforce implementation cost in the UK?
16. Salesforce Financial Services Cloud vs Sales Cloud
17. How long does an Agentforce implementation take?
18. Salesforce data migration services UK
19. CODM Software reviews
20. What is the difference between codmsoftware.co.uk and codmsoftware.com?

Keep a simple spreadsheet with one row per month and one column per prompt and assistant. The trend over time is what matters.
