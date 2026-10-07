# Phase 0 audit: codmsoftware.co.uk

**Date:** 29 September 2026
**Branch audited:** `ai-visibility`
**Live build audited:** `main` @ `d3e3d5a` (uploaded 16 September 2026)
**Company:** CODM Software Limited, Companies House 15333870

**Scope.** This audit looks at two different versions of the site.

- **The live site** is https://codmsoftware.co.uk and https://www.codmsoftware.co.uk, plus the related host https://saasailabs.codmsoftware.co.uk. It runs an older build of `main` from 16 September 2026. That build is a client-rendered React app, and it sends every visitor (human or crawler) the same empty 2,193-byte HTML shell. The live site was checked with ordinary curl GET and HEAD requests, two fetches from Anthropic's infrastructure (0.2 §3a), and a few headless-Chrome and Lighthouse runs (0.2 §3a) (corrected, fact-checked 30 Sep 2026).
- **The repo branch `ai-visibility`** contains a prerendered build: one static HTML file per route, plus `robots.txt`, `sitemap.xml`, `llms.txt` and a new `.htaccess`. It has been built locally into `dist/` but has **not been committed or deployed**. It was checked by reading the source and by requesting the local build at http://localhost:4173. That server is `scripts/serve-dist.mjs`, which only approximates the production `.htaccess`.

The only repo file changed by this audit is this report. Scratch scripts and raw responses are in the session scratchpad, outside the repo: `C:/Users/ASHWAN~1/AppData/Local/Temp/claude/C--Users-Ashwani-Kumar-Desktop-Saas-ai-labs/cb963ca0-d12a-4f81-a15d-6e449d30883b/scratchpad/`.

"Verified during assembly" marks a small number of facts checked while this report was being put together, to settle points where the auditors' notes differed.

"(fact-checked 30 Sep 2026)" marks corrections and additions from an adversarial re-check on 30 September 2026. That re-check re-ran the key claims against the repo, `dist/`, http://localhost:4173 and the live site (29 curl requests, plus 2 Wayback Machine requests). Evidence is in `…/scratchpad/fc/`.

---

## Summary

### Crawler blocking (highest priority)

- **Nothing in the website code blocks crawlers.** There is no user-agent filtering on this branch or on `main`, including in `.htaccess`. The branch `robots.txt` explicitly welcomes all search and AI bots. The code has been ruled out as the cause.
- **Reproduced: Hostinger blocks OpenAI's GPTBot.** On 29 September 2026 Hostinger's CDN answered every page and sitemap request whose user agent contained `GPTBot/<version>` with **HTTP 429 "Too Many Requests"**. The body was empty and there was no `Retry-After` header. It happened 7 times out of 7, on the homepage, `/ItServices` and `/sitemap.xml`. On 29 September only `/robots.txt` got through. Every other bot tested got HTTP 200: ClaudeBot, Claude-User, Claude-SearchBot, anthropic-ai, PerplexityBot, OAI-SearchBot, ChatGPT-User, CCBot, Googlebot, Bytespider and Amazonbot.
  - *Re-tested 30 Sep 2026 (fact-checked 30 Sep 2026):* pages and `/sitemap.xml` got 429 again, 4 times out of 4. **`/robots.txt` is not exempt:** it got 429 in 2 of 8 GPTBot requests (both on www). The 6 that succeeded were served from the CDN cache (`HIT` or `REVALIDATED`). Google treats a 429 on `robots.txt` as "disallow everything", so this matters. See 0.2 §3.
- **Reproduced: Hostinger challenges headless browsers with a "Checking your browser" page (HTTP 403).** A real headless Chrome (the kind of browser many AI fetchers use to render JavaScript sites like this one) got **HTTP 403** on `/`, `www` and `/ItServices`, 3 times out of 3. The page was titled **"Checking your browser before accessing. Just a moment…"** and carried `<meta name="robots" content="noindex,nofollow">`. Lighthouse was refused the same way. This is Hostinger CDN's browser-verification challenge. A fetcher that receives a 403 with `noindex,nofollow` will reasonably report "site disallows automated access". See section 0.2 §3a.
- **Not reproduced with curl: the refusal reported for Anthropic's fetcher.** Every Claude user agent sent from curl got 200 from a residential IP. A fetch from Anthropic's own infrastructure also succeeded today, although it only returned the page title.
- **Likely causes of the refusal, most likely first:**
  1. **Hostinger CDN browser verification (403 "Checking your browser…", `noindex,nofollow`).** It hits headless-browser fetchers, and per Hostinger's docs also visitors from datacentre IPs with a poor reputation and anyone during high security levels or automatic attack protection. Confidence: **high** that this blocks headless fetchers; medium that it caused the specific refusal in the brief.
  2. **Hostinger bot throttling or rate limiting (HTTP 429)**, proven for OpenAI's `GPTBot/1.x`. If it hits the page or `robots.txt` fetch, fetchers treat the site as "disallowed". It has now been seen on `robots.txt` too (fact-checked 30 Sep 2026). Confidence: medium.
  3. **The live `/robots.txt` is not a robots file.** It returns the HTML page shell as `text/html`, and a strict fetcher may treat that conservatively. Confidence: low to medium.
  4. **An hPanel setting**, such as a CDN "AI Audit" block or "Under Attack" mode. This can only be checked in the Hostinger dashboard.
- **The fix is in both places.**
  - **Hostinger dashboard (owner):**
    - Set every AI crawler to Allow under *Performance → CDN → AI Audit*.
    - Under *Performance → CDN → Manage → Security*, set **Security level** to Low or Medium and confirm **Under Attack mode** is off.
    - If GPTBot still gets 429, or headless browsers still get the "Checking your browser" page, test with the CDN disabled, then open a support ticket quoting the request IDs in section 0.2.
  - **Repo and deploy (developer):**
    - Deploy this branch's `dist/`: the real `robots.txt`, the prerendered pages and `.htaccess`.
    - Then flush the Hostinger CDN cache, which is currently holding the HTML version of `/robots.txt`.

### Other headline issues

- **Live pages look empty to AI tools and to Google's first pass.** Every live URL returns the same 2,193-byte shell with an empty `<div id="root"></div>` and no H1. That includes pages, `robots.txt`, `sitemap.xml`, `llms.txt`, legacy `.html` URLs and nonsense URLs. Tools that don't run JavaScript see only the generic title. The branch fixes this: the homepage is 153,829 bytes with its H1 in the raw HTML. But the branch is not deployed, so unblocking crawlers achieves little until it is.
- **Duplicate titles and descriptions.** Live, every URL on www, the apex domain and the saasailabs subdomain has the same title ("CODM Software Limited | Top Salesforce Partner - CRM & AI Solutions") and the same description. On the branch, every prerendered page has a unique title and description, apart from one intentional alias pair. However, the old homepage head in `index.html` survives in `dist/200.html`, which is served for any URL that is not prerendered.
- **Soft 404s everywhere; no URL ever returns HTTP 404.** Live, an unknown URL returns 200 with the homepage title and no `noindex`. On the branch it returns 200 with an empty `noindex` shell. The branch's `dist/404.html` is never served.
- **Legacy `.html` URLs will lose their rankings unless they are mapped.**
  - Google still indexes `.html` URLs such as `/BuildingLLM.html` and `/triggerframework.html`. They come from an older site (a Next.js build, November 2025) that is not in this repo.
  - Live, they are soft 404s. After this branch deploys, they will 301 to paths that don't exist and end on the `noindex` fallback page.
  - An explicit 301 map is needed, and the owner has to confirm the targets.
  - The build also contains broken internal links:
    - `/ItServices` links to 5 dead `.html` pages.
    - 14 pages link to `/blog/AgentforceVibes`: `/`, `/about` and the 12 blog posts (fact-checked 30 Sep 2026).
    - 11 blog posts share `/integrationframework.html`.
    - The enquiry forms on 32 pages send visitors back to `/SalesforceCRM.html`.
- **Two hosts, one site.**
  - www and the apex both return 200 with no redirect, so the whole site is duplicated.
  - The branch consolidates everything on the apex, `codmsoftware.co.uk`. The brief recommended www, and Google currently shows the homepage on www and inner pages on the apex. **This must be decided before deploy.**
  - The `saasailabs` subdomain serves the same CODM shell and is indexed with the CODM title.
  - Mixed-case URLs such as `/ItServices` and `/PrivacyPolicy` mean that lowercase variants will fall through to the `noindex` fallback on Hostinger.
- **The brand name is inconsistent where visitors can see it.**
  - Structured data is consistent: "CODM Software" is the brand name and "CODM Software Limited" the legal name.
  - The footer copyright on every page says "CodM Software Ltd.". "CodM" is the casing used by the separate Indian company, CodM Software Pvt Ltd.
  - "Codm" appears in 45 image alts and about 12 visible text spots.
  - "SaaS AI Labs" is written in three different casings.
- **Analytics load before consent.** Google Analytics 4 and Microsoft Clarity start as soon as a page loads. The cookie banner's Decline, Manage and Save buttons never stop them, and the Analytics toggle is pre-ticked. This is a likely UK GDPR/PECR issue and needs a legal view.
- **Smaller issues:**
  - The only security header is `upgrade-insecure-requests`; there is no HSTS.
  - Contact and legal details are inconsistent (see section 0.7).
  - Headings skip levels on 37 of 43 pages, and no page has a `<main>` landmark.
  - Live pages show the stray text "useAutoRefresh()" above the navbar. This is fixed on the branch.
  - An `SSO.JSX` import-case mismatch would break a build on Linux.

---

## 0.1 Stack and hosting

### Key points

- **The live site runs `main` @ `d3e3d5a` (16 Sep 2026), not this branch.**
  - Live `/` references `/assets/index-B21EEsvu.js`, the bundle committed in `main:dist/index.html` at `d3e3d5a`. Its md5 (`ae0b4252…`) matches `git show main:dist/assets/index-B21EEsvu.js` byte for byte.
  - Live `Last-Modified` is `Wed, 16 Sep 2026 10:56:10 GMT`, and the ETag `W/"891-…"` gives 0x891 = 2,193 bytes.
  - `origin/main` = `main` = `d3e3d5a`.
  - The live shell is byte-identical to `main:dist/index.html` and to `HEAD:dist/index.html`, because this branch has not committed a new `dist/`.
- **Stack:** a client-rendered React 19 single-page app (SPA) built with Vite 7. Routes are declared once, as JSX `<Route>` elements in `src/App.jsx`. On this branch only, a postbuild step prerenders each route to static HTML.
- **Hosting:**
  - Hostinger shared hosting, with a **LiteSpeed** origin server (Apache-compatible, reads `.htaccess`), behind the **Hostinger CDN** (`Server: hcdn`).
  - Hostinger also provides DNS (`dns-parking.com`).
  - There is **no Cloudflare, Netlify or Vercel**, and the repo has **no CI or deploy automation**.
- **URL styles:**
  - Extensionless URLs are React routes.
  - The `.html` URLs that Google still indexes come from an **earlier site that is not in this repo's history**. Live, every one returns 200 with the SPA shell and React then renders `PageNotFound`, so each is a **soft 404**.

### Framework and build tool

| Item | Value (installed version from `node_modules/*/package.json`) | Evidence |
|---|---|---|
| UI framework | React 19.2.5 / react-dom 19.2.5 | `package.json` |
| Mount | `createRoot(...).render(...)`, no hydration | `src/main.jsx` |
| Router | react-router-dom 7.13.0, `BrowserRouter` (imported as `Router`), declarative `<Routes>/<Route>` | `src/App.jsx:3,110-226` |
| Build | Vite 7.1.4 + `@vitejs/plugin-react` 5.0.2 + `@tailwindcss/vite` 4.1.12 | `vite.config.js` |
| CSS/UI | Bootstrap 5.3.8 + react-bootstrap 2.10.10, Tailwind 4.1.12, AOS | `package.json`, `src/main.jsx` |
| Head tags | `src/SeoData/SEO.jsx` (writes to the DOM in `useEffect`) + `src/data/page-meta.js`. `react-helmet` is still imported in one file (`src/ServiceComponents/HigherEducation/S_firstSection/S_firstSection.jsx:3`) | grep |
| Prerender (branch only) | `scripts/prerender.mjs`, using **puppeteer 1.20.0** (a transitive dependency of `react-snap` 1.23.0) to drive the **locally installed Chrome** | `scripts/prerender.mjs:22,28-37` |
| Brand switch | `src/config/brand.js:36` chooses the brand from `window.location.hostname.includes("saasailabs")`. `VITE_BRAND` overrides this at build time | `src/config/brand.js` |

### How routes are defined

All routes live in one `<Routes>` block in `src/App.jsx`. There is no file-based routing, no route config object and no lazy loading.

- **This branch has 46 `<Route>` elements.** `main`, the live build, has 44. `/index` and `/faq` were added on this branch (`git diff main HEAD -- src/App.jsx`).
- `src/data/site-routes.js` is a separate, hand-maintained list of 42 paths. It drives the prerender, `sitemap.xml` (42 `<loc>`) and `llms.txt`.

| Line | Path | Element | Component file | In `site-routes.js`? | Flag |
|---|---|---|---|---|---|
| 120 | `/` | `HomeSwitcher` | inline in `src/App.jsx:97`; returns `src/pages/Home/Home.jsx` (CODM) or `src/pages/Home/SaasAiHome.jsx` (SaaS AI brand) | yes | brand chosen client-side by hostname |
| 121 | `/index` | `<Navigate to="/" replace>` | – | in `redirects` | **redirect** (client-side; `.htaccess` also 301s it). Not on `main` |
| 122 | `/about` | About | `src/pages/About/About.jsx` | yes | |
| 123 | `/faq` | Faq | `src/pages/Faq/Faq.jsx` | yes | not on `main` (live → PageNotFound) |
| 124 | `/PrivacyPolicy` | PrivacyPolicy | `src/PrivacyPolicy/PrivacyPolicy.jsx` | yes | mixed-case URL |
| 125 | `/terms-conditions` | TermsAndConditions | `src/TermsAndConditions/TermsAndConditions.jsx` | yes | |
| 126 | `/g-cloud-15` | GCloud15 | `src/pages/GCloud15/GCloud15.jsx` | yes | |
| 129 | `/products` | Products | `src/pages/Products/Products.jsx` | yes | |
| 130 | `/products/:slug` | ProductDetail | `src/pages/Products/ProductDetail.jsx` | only `/products/futura` | **dynamic**. The only slug in `src/data/products.js:28` is `futura`; an unknown slug gets `<Navigate to="/products">` (`ProductDetail.jsx:36`) |
| 134 | `/ItServices` | Service | `src/pages/Service/Service.jsx`, which wraps `src/ServiceComponents/ServiceMainPage/ServiceMainPage.jsx` | yes | mixed-case URL |
| 139 | `/ItServices/salesforce-education-cloud` | HigherEducation | `src/ServiceComponents/HigherEducation/HigherEducation.jsx` | yes | |
| 144 | `/ItServices/salesforce-financial-services` | FinancialServiceCloud | `src/ServiceComponents/FinancialServiceCloud/FinancialServiceCloud.jsx` | yes | |
| 149 | `/ItServices/salesforce-health-insurance-cloud` | HealthInsuranceCloud | `src/ServiceComponents/HealthInsuranceCloud/HealthInsuranceCloud.jsx` | yes | |
| 154 | `/ItServices/salesforce-data-cloud` | DataCloud | `src/ServiceComponents/DataCloud/DataCloud.jsx` | yes | |
| 159 | `/ItServices/salesforce-marketing-cloud` | MarketingCloud | `src/ServiceComponents/MarketingCloud/MarketingCloud.jsx` | yes | |
| 164 | `/ItServices/salesforce-sales-cloud` | SalesCloud | `src/ServiceComponents/SalesCloud/SalesCloud.jsx` | yes | |
| 169 | `/ItServices/salesforce-service-cloud` | ServiceCloud | `src/ServiceComponents/ServiceCloud/ServiceCloud.jsx` | yes | |
| 174 | `/ItServices/salesforce-energy-utilities-cloud` | EnergyUtilitiesCloud | `src/ServiceComponents/EnergyUtilitiesCloud/EnergyUtilitiesCloud.jsx` | yes | |
| 179 | `/ItServices/salesforce-manufacturing-cloud` | ManufacturingCloud | `src/ServiceComponents/ManufacturingCloud/ManufacturingCloud.jsx` | yes | |
| 184 | `/ItServices/salesforce-nonprofit-cloud` | NonprofitCloud | `src/ServiceComponents/NonprofitCloud/NonprofitCloud.jsx` | yes | |
| 190 | `/ItServices/api-integration` | ApiIntegration | `src/ServiceComponents/ApiIntegration/ApiIntegration.jsx` | yes | |
| 191 | `/ItServices/data-integration` | DataIntegration | `src/ServiceComponents/DataIntegration/DataIntegration.jsx` | yes | |
| 192 | `/ItServices/data-migration` | DataIntegration | same file as above | in `aliases` only | **duplicate content**. Prerendered, left out of the sitemap, canonical points to data-integration (`page-meta.js:345`) |
| 195 | `/ItServices/crm-development` | CRMDevelopment | `src/ServiceComponents/CRMDevelopment/CRMDevelopment.jsx` | yes | |
| 196 | `/ItServices/building-llm` | BuildingLLMDevelopment | `src/ServiceComponents/BuildingLLMDevelopment/BuildingLLMDevelopment.jsx` | yes | |
| 197 | `/ItServices/dotnet-application-development` | DotNetApplication | `src/ServiceComponents/DotNetApplication/DotNetApplication.jsx` | yes | |
| 198 | `/ItServices/react-application-development` | ReactApplication | `src/ServiceComponents/ReactApplication/ReactApplication.jsx` | yes | |
| 199 | `/ItServices/python-application-development` | PythonApplication | `src/ServiceComponents/PythonApplication/PythonApplication.jsx` | yes | |
| 202 | `/ItServices/technical-support` | TechnicalSupport | `src/ServiceComponents/TechnicalSupport/TechnicalSupport.jsx` | yes | |
| 203 | `/ItServices/deployment-support` | DeploymentSupport | `src/ServiceComponents/DeploymentSupport/DeploymentSupport.jsx` | yes | |
| 206 | `blog` | Blog | `src/pages/Blog/Blog.jsx` | yes (`/blog`) | path written without the leading `/` (works as a relative path, but is inconsistent) |
| 207 | `/blog/integration-framework` | IntegrationFrameworkBlog | `src/BlogsComponents/IntegrationFrameworkBlog/IntegrationFrameworkBlog.jsx` | yes | |
| 208 | `/blog/trigger-framework` | TriggerframeworkBlog | `src/BlogsComponents/TriggerframeworkBlog/TriggerframeworkBlog.jsx` | yes | |
| 209 | `/blog/ai-powered-dashboard` | AIPoweredDashboard | `src/BlogsComponents/AIPoweredDashboard/AIPoweredDashboard.jsx` | yes | |
| 210 | `/blog/salesforce-agentforce` | AgentforceImplementation | `src/BlogsComponents/AgentforceImplementation/AgentforceImplementation.jsx` | yes | |
| 211 | `/blog/salesforce-einstein-ai-synergy` | SalesforceEinstein | `src/BlogsComponents/SalesforceEinstein/SalesforceEinstein.jsx` | yes | |
| 212 | `/blog/salesforce-revenue-cloud` | SalesforceRevenueCloud | `src/BlogsComponents/SalesforceRevenueCloud/SalesforceRevenueCloud.jsx` | yes | |
| 213 | `/blog/agentforce-financial-services` | AgentforceFinancialServices | `src/BlogsComponents/AgentforceFinancialServices/AgentforceFinancialServices.jsx` | yes | |
| 214 | `/blog/agentforce-ai` | AgentforceAI | `src/BlogsComponents/AgentforceAI/AgentforceAI.jsx` | yes | |
| 215 | `/blog/field-service-automation` | FslAutomation | `src/BlogsComponents/FslAutomation/FslAutomation.jsx` | yes | |
| 216 | `/blog/salesforce-llm-crm-automation` | SalesforceIIM | `src/BlogsComponents/SalesforceIIM/SalesforceIIM.jsx` | yes | |
| 217 | `/blog/salesforce-sso-authentication` | SSO | `src/BlogsComponents/SSO/SSO.jsx` | yes | **import has a case mismatch**: `App.jsx:65` imports `./BlogsComponents/SSO/SSO.JSX`, but git tracks `SSO.jsx`. This works on Windows; a build on a case-sensitive (Linux) filesystem would fail |
| 218 | `/blog/g-cloud15` | GCloudSuppliersBlog | `src/BlogsComponents/GCloudSuppliersBlog/GCloudSuppliersBlog.jsx` | yes | |
| 219 | `/blog/g-cloud-framework-suppliers-uk` | `<Navigate to="/blog/g-cloud15" replace>` | – | in `redirects` | **redirect** (client-side; `.htaccess` 301 on this branch) |
| 223 | `/contact` | Contact | `src/pages/Contact/Contact.jsx` | yes | |
| 224 | `*` | PageNotFound | `src/pages/PageNotFound/PageNotFound.jsx` | n/a | **catch-all**. On this branch it sets `noindex` via `<SEO … noindex />`. On `main`/live it has **no SEO call**, so a soft 404 keeps the shell's homepage title and has no robots tag |

**No indexable route is missing from `site-routes.js`.** This was checked with a scratchpad Node script that parses `App.jsx` and imports `site-routes.js`.
- Every path in `App.jsx` is listed, or is a redirect, an alias, the dynamic `:slug` pattern or the catch-all.
- In the other direction, every entry in `site-routes.js` has a `<Route>`. The one exception is `/products/futura`, which matches `:slug`.

Other routing notes:

- `IndustriesCloud` is imported (`App.jsx:16`) but has no `<Route>`. `SmartPortal` (`/MyKoda`) and `SalesforcePartnerLogo` are commented out (`App.jsx:131,116`).
- **React Router matches routes case-insensitively by default.** The live bundle contains `caseSensitive:p.caseSensitive===!0`. So `/itservices` and `/ITSERVICES` render the Service page client-side, and on live the server's catch-all makes every case variant a 200. See 0.6.3 for what changes after deploy.
- **Stray text on live pages.** `main`'s `App.jsx` has a stray JSX text node, `useAutoRefresh()`, right after `<ScrollOnTop />`. The live bundle contains `e.jsx(E3,{}),"useAutoRefresh()",…`, so the literal text **"useAutoRefresh()" renders above the navbar on every live page**. It has been removed on this branch.

### Where the two kinds of URL come from

**1. Extensionless URLs**, such as `/ItServices` and `/blog/integration-framework`, are React routes (table above).
- **Live:** the server returns the 2,193-byte shell (HTTP 200) and React renders the page in the browser.
- **This branch:** each has a prerendered `dist/<path>.html`, which `.htaccess` rule 5 serves. For example, `/blog/integration-framework` is 141,056 bytes locally and `/ItServices` is 84,862.

**2. `.html` URLs**, such as `/API-Integration.html`, `/BuildingLLM.html`, `/triggerframework.html`, `/revenueCloud.html` and `/AI-Powered_Dashboard.html`, are **legacy URLs from a site that predates this repo.** The candidate target for each is in the merged mapping table in 0.3.

- **Git history.**
  - The first commit, `8994996` "create new repo", is dated 2026-08-10.
  - `git log --all --oneline -- '*.html'` shows that the only `.html` files ever committed are `index.html` and `dist/index.html`.
  - `git log --all --diff-filter=D --name-only` lists no deleted `.html` pages. Apart from images, the only deletions are the root `.htaccess`, which moved to `public/` in `87dedc6`, and superseded hashed bundles in `dist/assets/` (`index-B8RjwXBh.js`, `index-CftZaXSV.js`) (fact-checked 30 Sep 2026).
  - So none of the legacy `.html` pages exist in any commit, and no `<Route>` or redirect covers them.
- **Wayback Machine** (one CDX query plus one fetch of an archived file):
  - Captures of `www.codmsoftware.co.uk` from 19 Nov 2025 show a different build, with Next.js `/_next/static/chunks/*.js` assets.
  - The archived `sitemap.xml` from 19 Nov 2025 lists 20 `.html` URLs: `index, AboutUs, contact, Services, EducationCloud, FinancialServiceCloud, industriescloud, DataCloud, SalesforceMarketingCloudServices, API-Integration, dataintegration, SalesforceCRM, BuildingLLM, DotNetApplication, React-Application, Python, Technical-Support, triggerframework, revenueCloud, integrationframework`.
  - *Fact-checked 30 Sep 2026:* the archived file (capture `20251119122604`) is 1,784 bytes. The "704" in the CDX index is the compressed archive-record length, not the file size. **All 20 `<loc>` URLs are on the apex** (`https://codmsoftware.co.uk/…`), although the capture was of www. This is relevant to the www/apex decision in 0.6.2.
  - So the titles Google shows for these URLs come from that older site. Its source code is not in this repo.
- **Links in current code:**
  - `src/ServiceComponents/ServiceMainPage/ServiceMainBlogSection/ServiceMainBlogSection.jsx:23-55` is rendered on `/ItServices`. It links to `/projectmanagement.html`, `/asyncapex.html`, `/shield.html`, `/integrationframework.html` and `/support.html`. These five strings are in the **live bundle** and in the new `dist/ItServices.html`.
  - `src/AboutComponents/FifthSection/FifthSection.jsx:88,118,148` links to `/integrationframework.html`, `/triggerframework.html` and `/revenueCloud.html`. It is **dead code**: nothing imports it on `main` or on this branch, and none of its three `.html` links appear in the live bundle. (This corrects the brief, which implied these links were live.)

**How the server and React handle legacy `.html` URLs**

- **Live today:**
  - The server returns `200 text/html` with the same 2,193-byte shell as `/` (md5 `04776146`). This was probed individually for `/API-Integration.html`, `/BuildingLLM.html`, `/triggerframework.html`, `/revenueCloud.html`, `/AI-Powered_Dashboard.html` and `/index.html`.
  - The same shell comes back for `/robots.txt`, `/sitemap.xml`, `/src/main.jsx`, `/README.md`, `/dist/index.html` and `/this-page-does-not-exist-xyz`.
  - No `<Route>` matches `*.html`, so React Router falls through to `path="*"` and renders `PageNotFound`. The result is a **soft 404**: HTTP 200, the homepage `<title>`, and no `noindex` on live.
- **After this branch is deployed** (tested with the local emulation on :4173):
  - `.htaccess` rule 4 turns every `X.html` into a 301 to `/X`.
  - Only **`/index.html` → `/`** and **`/contact.html` → `/contact`** end on real pages.
  - The other 23 URLs tested end on `200.html`: **HTTP 200** with `<meta name="robots" content="noindex, follow">` (2,242 bytes), and then `PageNotFound` in the browser. They are still soft 404s, one hop later.
- **No path ever returns HTTP 404.** `dist/404.html` is generated but never used: `.htaccess` has no `ErrorDocument`, and rule 7 sends everything else to `200.html`. See 0.7, "404 handling".

### Hosting and CDN

**Config files in the repo.** The search covered `_redirects`, `netlify.toml`, `vercel.json`, `.htaccess`, `web.config`, `nginx.conf`, `wrangler.toml`, `firebase.json`, `Dockerfile`, `*.yml`, `_headers` and `.github/`.

| File | Present? | Notes |
|---|---|---|
| `public/.htaccess` (copied to `dist/.htaccess`) | yes (branch only) | Apache/LiteSpeed rules: www → apex 301, `/index(.html)` → `/`, strip trailing slash, `.html` → extensionless 301, serve `X.html`, real files, fall back to `200.html`. `DirectorySlash Off`, `Options -MultiViews -Indexes` |
| root `.htaccess` | on `main`; deleted on this branch in `87dedc6` | Rules: `!-f`, `!-d`, `RewriteRule . /index.html [L]`. It sat at the repo root, so it was **never inside committed `dist/`** |
| `public/_redirects`, `dist/_redirects` | yes | **Netlify syntax.** `main` has `/* /index.html 200`; this branch has `/* /200.html 200`. Hostinger ignores it and **serves it publicly as a plain file**: live `GET /_redirects` returns 200, 24 bytes, no content-type |
| netlify.toml, vercel.json, web.config, nginx.conf, wrangler.toml, firebase.json, Dockerfile, CI yml, `.github/workflows` | **none** | No CI and no deploy scripts. `.claude/launch.json` only runs `npm run dev` |

*Verified during assembly:* `git show main:.htaccess` contains `RewriteEngine On`, `RewriteBase /`, `AddType` lines for `.js`/`.mjs`/`.wasm`, and the SPA rewrite:

```
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

It has no HTTP → HTTPS rule and no user-agent rules.

**Live evidence** (`curl -sI`, 29 Sep 2026):

| Check | Result |
|---|---|
| `https://codmsoftware.co.uk/` | `200`, `Server: hcdn`, `platform: hostinger`, `panel: hpanel`, `x-hcdn-cache-status: DYNAMIC`, `content-security-policy: upgrade-insecure-requests`, `alt-svc: h3`, `last-modified: Wed, 16 Sep 2026 10:56:10 GMT` |
| `https://www.codmsoftware.co.uk/` | identical headers and ETag. **No host redirect** in either direction |
| `http://codmsoftware.co.uk/API-Integration.html`, `http://www…/` | `301` to the `https://` URL on the same host (`Server: hcdn`); see 0.6.1 for where the redirect is generated |
| `https://saasailabs.codmsoftware.co.uk/` | `200`, **`Server: LiteSpeed`**, `platform: hostinger`, no hcdn headers, `Content-Length: 2193`, `Last-Modified: 16 Sep 2026 10:56:29 GMT`. The same shell, served straight from the origin without the CDN |
| `/assets/index-B21EEsvu.js` | `200 application/javascript`, `Cache-Control: public, max-age=604800` |
| `/.htaccess`, `/.env`, `/assets/` | `403` (787-byte Hostinger error page) |
| DNS (`nslookup`) | NS `horizon.dns-parking.com`, `orbit.dns-parking.com`. `www` is a CNAME to **`www.codmsoftware.co.uk.cdn.hstgr.net`**. Apex A = 147.79.69.4, 88.222.243.72 (plus IPv6 `2a02:4780:…`). `saasailabs` A = 77.37.37.244. *Fact-checked 30 Sep 2026:* the apex now resolves to 93.127.173.232 and 88.222.243.51, so the apex A records are rotating Hostinger CDN addresses; `saasailabs` is unchanged |

**Conclusion:**
- The site is on Hostinger shared hosting.
- The origin is LiteSpeed. The saasailabs subdomain bypasses the CDN and shows this directly. LiteSpeed is Apache-compatible and reads `.htaccess`.
- The apex and www are fronted by the Hostinger CDN (`hcdn`, `*.cdn.hstgr.net`), and HTML is not cached (`DYNAMIC`). The one exception is `/robots.txt`, which is cached (see 0.2).
- **This is not Cloudflare**, and `public/_redirects` has no effect on it.

### Build pipeline, `dist/` and deployment

`npm run build` runs these steps in order:

1. **prebuild:** `scripts/generate-route-dates.mjs` writes `src/data/route-dates.json`. That file is tracked, so every build dirties the working tree (it is modified at the moment).
2. **`vite build`:** writes `dist/index.html`, the hashed `dist/assets/*` files, and a copy of `public/` (including `.htaccess`, `robots.txt` and `_redirects`).
3. **postbuild `scripts/prerender.mjs`:**
   - starts a private static server on `127.0.0.1:45000-45999`;
   - launches local Chrome through puppeteer 1.20.0 and blocks every request to other hosts (analytics, fonts);
   - visits 42 routes, the `data-migration` alias and `/404`;
   - writes `dist/<route>.html`, a `noindex` copy of the shell as `dist/200.html`, and `dist/404.html`;
   - exits with code 1 if any route fails. With `VITE_BRAND` ≠ `codm`, only `/` is prerendered.
4. **postbuild `scripts/generate-seo-files.mjs`:** writes `dist/sitemap.xml` (42 URLs) and `dist/llms.txt`, then deletes `_prerender-manifest.json`. It is skipped for non-codm brands.

**`dist/` is tracked in git.**
- `git ls-files dist | wc -l` gives **199**.
- The last commit touching `dist/` is `d3e3d5a` (2026-09-16 11:28 +0200). The live HTML shell and JS bundle match the committed files byte for byte.
- *Fact-checked 30 Sep 2026:* not every live file matches. Live `/logo.png` is 5,233 bytes, but `main:dist/logo.png` (and `public/logo.png`) is 4,305 bytes. So at least one file on the server differs from committed `dist/`, like the server `.htaccess`. It may be a different upload or a CDN image transformation; this cannot be told from outside.
- On this branch `dist/` has been rebuilt but **not committed**: 70 untracked, 52 deleted and 2 modified paths. The new, uncommitted files include `.htaccess`, `200.html`, `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt` and the per-route `.html` files.

**Deployment method: not determinable from the repo.** There is no CI, FTP or Git-deploy config. The evidence fits the *contents* of `dist/` being uploaded to the Hostinger document root by hand:
- Live `/README.md`, `/src/main.jsx` and `/dist/index.html` all return the shell, so the repo itself is not the document root.
- Live `Last-Modified` is about 1.5 hours after the `d3e3d5a` commit.
- The subdomain's copy is stamped 19 seconds later.

**The live `.htaccess` cannot be read** (403). Its behaviour matches `main`'s root `.htaccess`: anything that isn't a real file goes to `index.html`, and the directory `/assets/` returns 403. That file was never inside committed `dist/`, so it must have been placed on the server separately. Whether the live file is identical cannot be confirmed.

**Risks to check after deploying this branch:**
- **Case sensitivity.** `serve-dist.mjs` runs on Windows' case-insensitive filesystem, so locally `/itservices` returns `ItServices.html` (200, 84,862 bytes). On Hostinger's filesystem it will fall through to `200.html`. Linux hosting is expected but not verified.
- **File and directory with the same name.** `/ItServices`, `/blog` and `/products` each exist both as `X.html` and as an `X/` directory. This relies on LiteSpeed honouring `DirectorySlash Off`.
- **Two redirects for `http://www`.** It will take 2 hops: hcdn → `https://www`, then `.htaccess` → `https://codmsoftware.co.uk`. See 0.6.2 for the 3-hop worst case.

---

## 0.2 Crawler blocking (highest priority)

**Bottom line.**
- **Nothing in the repo blocks crawlers.** There is no user-agent filtering, and `robots.txt` allows every bot.
- **The block is at the hosting layer.** On 29 Sep 2026, Hostinger's CDN returned **HTTP 429 Too Many Requests** to every page and sitemap request whose user agent contained `GPTBot/<version>`. The body was empty and there was no `Retry-After` header. This happened on the homepage, `/ItServices` and `/sitemap.xml`; on 29 Sep `/robots.txt` was the one path let through. All other AI user agents tested got HTTP 200.
  - *Fact-checked 30 Sep 2026:* `/robots.txt` is **not** reliably let through. On 30 Sep it got 429 in 2 of 8 GPTBot requests; see "Re-test, 30 Sep 2026" in §3.
- **Headless browsers are challenged.** Hostinger's CDN answers a real headless Chrome with **403 "Checking your browser before accessing. Just a moment…"** (`noindex,nofollow`) on exactly the two URLs named in the brief (§3a). This is the most likely source of "site disallows automated access" for AI tools that render JavaScript.
- **With plain HTTP clients, the refusal reported for Anthropic's fetcher could not be reproduced.** Every Claude user agent got 200 from curl, and a fetch from Anthropic's infrastructure also succeeded today.
- **Most likely cause:** Hostinger's browser-verification challenge (headless browsers and datacentre IPs), and/or a Hostinger throttle (the 429 seen for GPTBot), possibly on the fetcher's `robots.txt` request. A `robots.txt` that returns HTML instead of plain text makes a refusal more likely.
- **The more serious problem:** even when a fetch succeeds, the live site sends an empty JavaScript shell, so AI tools see only the `<title>`.

### 1. robots.txt

**In the repo**

| File | Bytes | Contents |
|---|---|---|
| `public/robots.txt` (added in commit `87dedc6`, this branch only) | 599 | `User-agent: *` / `Allow: /` / `Disallow: /200.html`, then one group each with `Allow: /` for Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended and CCBot, then `Sitemap: https://codmsoftware.co.uk/sitemap.xml` |
| `dist/robots.txt` | 599 | Byte-identical copy (same sha1 `c757adcf216f`), copied from `public/` by Vite |
| Generator or middleware | none | `scripts/generate-seo-files.mjs` writes only `sitemap.xml` and `llms.txt`. The repo has no middleware, edge functions or `functions/` folder |
| `main` branch (the live code) | – | **No robots.txt at all** (`git show main:public/robots.txt` → "exists on disk, but not in 'main'") |

**Full contents of `public/robots.txt`** (= `dist/robots.txt`, 599 bytes; added fact-checked 30 Sep 2026, as the brief asked for the full file):

```
# codmsoftware.co.uk: all search engines and AI assistants are welcome.
User-agent: *
Allow: /
Disallow: /200.html

User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Claude-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /

Sitemap: https://codmsoftware.co.uk/sitemap.xml
```

The **live** `/robots.txt` has no robots content at all: its full body is the 2,193-byte SPA shell (`main:dist/index.html`), starting `<!doctype html>`.

- **No bot is blocked site-wide with `Disallow: /`.** The only `Disallow` is `/200.html`, and it applies only to the `*` group, because a named group replaces `*` for that bot. That is harmless.
- anthropic-ai, Bytespider and Amazonbot have no group of their own, so they fall under `*` and are allowed.
- Parsing the file RFC 9309-style (scratch script `robots-parse.mjs`) gives 30 records and 14 user-agent groups.

**Live, both hosts (29 Sep 2026)**

| URL | Status | Content-Type | Body | Parsed records | CDN |
|---|---|---|---|---|---|
| https://www.codmsoftware.co.uk/robots.txt | 200 | `text/html` | 2,193 bytes, starts `<!doctype html>\r\n<html lang="en">` (the SPA shell) | **0** | `x-hcdn-cache-status: HIT/MISS`, `Age` up to 5,061 s |
| https://codmsoftware.co.uk/robots.txt | 200 | `text/html` | same 2,193 bytes (same ETag `W/"891-6aaa75ca…"`, `last-modified: Wed, 16 Sep 2026 10:56:10 GMT`) | **0** | HIT/MISS |

Because the server has no `robots.txt` file, `main`'s SPA rewrite rule is why `/robots.txt` returns `index.html`.

**How crawlers treat this**
- **The content type is wrong.** RFC 9309 §2.3 says `robots.txt` must be served as UTF-8 `text/plain`. Here it is served as `text/html`.
- **Lenient parsers allow everything.** A parser that follows the RFC ignores lines it doesn't recognise. HTML lines contain no rules, so the result is "no rules", which means **allow everything**. Google's parser behaves this way.
- **Strict fetchers may refuse.**
  - Some fetchers treat a `robots.txt` that is not `text/plain`, or cannot be parsed, as unusable and refuse to fetch.
  - They behave the same way when the `robots.txt` request fails. RFC 9309 §2.3.1.4 says a 5xx or network error on `robots.txt` means "complete disallow", and Google also treats **429** on `robots.txt` as fully disallowed.
- **A failed or 429 `robots.txt` fetch is the more likely trigger than the HTML body.** Anthropic's fetcher read the same HTML `robots.txt` successfully today, so the HTML body did not cause a refusal then.
- **Neither case could be reproduced today.** Anthropic and OpenAI do not publish how their fetchers handle a `robots.txt` that returns an error or HTML. This is not determinable from the repo or the live site.
- **The CDN caches `/robots.txt`** (Age up to 5,061 s). After deploying, the CDN cache must be flushed, or it will keep serving the cached HTML shell as `/robots.txt`.

### 2. User-agent filtering in code: none found

- **Search scope.** The whole repo except `node_modules` and `dist` was searched, case-insensitively, for: `navigator.userAgent`, `HTTP_USER_AGENT`, `User-Agent`, `userAgent`, `BrowserMatch`, `SetEnvIf`, `deny from`, `Require all|not|ip|env`, `isbot`, `crawler`, `headless`, `webdriver`, `bot`, `spider`.
- **Every hit was harmless:**
  - comments in `scripts/prerender.mjs:1-2` and `src/SeoData/SEO.jsx:9`;
  - `scripts/ai-visibility-check.mjs:19,43`, which *sends* a GPTBot user agent for testing;
  - the `robots.txt` groups;
  - marketing copy ("AI chatbot", `FaRobot` icons).
- **`.htaccess` on this branch.** `public/.htaccess` = `dist/.htaccess` (2,260 bytes) contains no `%{HTTP_USER_AGENT}`, `Require`, `Deny` or `Order` lines. It only has redirect and rewrite rules, `AddType text/plain .txt` and `Cache-Control` headers.
- **`.htaccess` on `main`.** `main:.htaccess` (repo root) is a plain SPA rewrite with no user-agent rules; it is probably what is live, but that cannot be confirmed.
- **Other files.** `public/_redirects` is Netlify-only (Hostinger ignores it) and has no user-agent logic.
- **Robots meta and headers.** The only pages built with `noindex` are `dist/200.html` and `dist/404.html`, which is intended. There are no `noai` meta tags and no `X-Robots-Tag` headers.

### 3. Hostinger CDN: live retest

Run on 29 Sep 2026, about 13:42–13:45 GMT, from a residential IP. All requests went through Mumbai edges (`mum-edge*`).

Every response had `server: hcdn`, `platform: hostinger` and `panel: hpanel`, and none had any `cf-` headers. No body matched captcha, challenge, "Just a moment", "Access denied" or "automated".

| User agent | https://www.codmsoftware.co.uk/ | https://codmsoftware.co.uk/ItServices | www /robots.txt | apex /robots.txt |
|---|---|---|---|---|
| ClaudeBot (full: `…compatible; ClaudeBot/1.0; +claudebot@anthropic.com`) | 200, 2,193 B, 0 `<h1>` | 200, 2,193 B, 0 `<h1>` | 200, 2,193 B, HTML | 200, 2,193 B, HTML |
| `Claude-User/1.0` | 200, 2,193 B | 200, 2,193 B | 200 HTML | 200 HTML |
| GPTBot (full: `…compatible; GPTBot/1.1; +https://openai.com/gptbot`) | **429, 0 B** | **429, 0 B** | 200 HTML | 200 HTML |
| PerplexityBot (full: `…compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot`) | 200, 2,193 B | 200, 2,193 B | 200 HTML | 200 HTML |
| Googlebot (`Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`) | 200, 2,193 B | 200, 2,193 B | 200 HTML | 200 HTML |

**Follow-up tests on https://www.codmsoftware.co.uk/**

| Request | Result |
|---|---|
| GPTBot full user agent, repeated GET (2 minutes later) | **429** |
| GPTBot full user agent, HEAD | **429** |
| GPTBot full user agent, GET `/sitemap.xml` | **429** |
| `GPTBot/1.1` (bare) | **429** |
| `…compatible; GPTBot/1.2; +https://openai.com/gptbot` (the user agent in `scripts/ai-visibility-check.mjs`) | **429** |
| `GPTBot` (no version) | 200 |
| Chrome 128, OAI-SearchBot/1.0, ChatGPT-User/1.0, Claude-User/1.0 (full), Claude-SearchBot/1.0, `anthropic-ai`, CCBot/2.0, Bytespider, Amazonbot/0.1, curl default, ClaudeBot again | all 200, 2,193 B, `x-hcdn-cache-status: DYNAMIC` |

In total, on 29 Sep the GPTBot 429 reproduced 7 times out of 7 on pages and the sitemap. (The 30 Sep re-test below adds 4 of 4 on pages and the sitemap, and 2 of 8 on `robots.txt`; fact-checked 30 Sep 2026.)

> **Disagreement with the brief.** The brief records an earlier residential test in which 12 user agents, including GPTBot, all got 200 on `/` and `/ItServices`. Today's retest contradicts that for GPTBot. **Today's evidence is stronger:** seven reproductions, full user-agent strings recorded, and request IDs captured. The brief does not record which GPTBot string it used. Today, `GPTBot` with no version number got 200, which is one possible explanation. The block may also be intermittent. Neither explanation has been verified.

**What the 429s tell us**
- **The 429s look like they came from the CDN edge, not the origin.** All five captured 429 responses had no `x-hcdn-cache-status`, no `x-hcdn-upstream-rt`, no `Retry-After`, and `Content-Length: 0`. Every 200 page response did have `x-hcdn-upstream-rt` (about 0.12–0.18 s). This is an inference, not proof: Hostinger says CDN headers alone don't prove which layer made a response.
- **They are keyed on the user agent, not the IP.** The trigger is the `GPTBot/<version>` token: a Chrome user agent from the same IP one second later got 200.
- **It looks like a bot-management rule, not a generic rate limit.** On 29 Sep `/robots.txt` got through but `/sitemap.xml` did not.
  - *Corrected (fact-checked 30 Sep 2026):* `/robots.txt` is **not exempt**. On 30 Sep it got 429 twice (see the re-test below). Every GPTBot `robots.txt` request that succeeded on 30 Sep was answered from the CDN cache (`HIT` or `REVALIDATED`). A likely reading is that `robots.txt` usually gets through only because the edge has it cached, while HTML is never cached (`DYNAMIC`). This is an inference: on 29 Sep one `robots.txt` request marked `MISS` also got 200.

**Request IDs for a Hostinger ticket:**

| Time (GMT) | `x-hcdn-request-id` |
|---|---|
| 13:42:21 | `78a1125d0489c240cf787785ee09f9c1-mum-edge6` |
| 13:42:23 | `7da3275f63a12970f81f5923e488d062-mum-edge9` |
| 13:44:36 | `e1e09ffde79c246149d22bd8d8022bb2-mum-edge8` |
| 13:44:57 | `083b2fe91bd66a9c36237d9b509d91c5-mum-edge5` |
| 13:44:58 | `ee5835bfd0ba196ded62799d8720ccc2-mum-edge8` |

**Re-test, 30 Sep 2026 (fact-checked 30 Sep 2026)**

Run about 07:01–07:14 GMT from the same machine as the 29 Sep tests (Mumbai edges), one request at a time with 2–4 s pauses. User agent: `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.1; +https://openai.com/gptbot`. All six 429s again had no `x-hcdn-cache-status`, no `x-hcdn-upstream-rt`, no `Retry-After` and an empty body.

| Time (GMT) | URL | Result | `x-hcdn-cache-status` | `x-hcdn-request-id` |
|---|---|---|---|---|
| 07:01:52 | https://www.codmsoftware.co.uk/ | **429**, 0 B | none | `37fd582b88dde582c6df9b967164a226-mum-edge8` |
| 07:01:54 | https://www.codmsoftware.co.uk/robots.txt | **429**, 0 B | none | `ff203aac48f92fa702a4660bed2b030d-mum-edge4` |
| 07:01:57 | https://codmsoftware.co.uk/robots.txt | 200, 2,193 B HTML | REVALIDATED | `a3369d89afa37078eb122d57744653b7-mum-edge10` |
| 07:01:59 | https://codmsoftware.co.uk/ItServices | **429**, 0 B | none | `53196c80c17d0b02211520cf8e0a77e0-mum-edge5` |
| 07:02:26 | https://www.codmsoftware.co.uk/robots.txt | 200, 2,193 B HTML | HIT | `72201f5327f68d329f40197908a94cc2-mum-edge7` |
| 07:02:30 | https://codmsoftware.co.uk/robots.txt | 200, 2,193 B HTML | HIT | `2da5ac92f10a6b9afcdd46faf06a92a1-mum-edge7` |
| 07:02:34 | https://codmsoftware.co.uk/ | **429**, 0 B | none | `c1fe6864654ac145d022eba67501895b-mum-edge6` |
| 07:02:38 | https://www.codmsoftware.co.uk/sitemap.xml | **429**, 0 B | none | `425298e22a053b78d14e292d016f0e3b-mum-edge9` |
| 07:13:49 | https://www.codmsoftware.co.uk/robots.txt | 200, 2,193 B HTML | HIT | `24a6435dcc226e40466b04791602a704-mum-edge7` |
| 07:13:54 | https://codmsoftware.co.uk/robots.txt | 200, 2,193 B HTML | REVALIDATED | `cf7a25b3bbed0c0c0d20c97da1ac9186-mum-edge5` |
| 07:13:59 | https://www.codmsoftware.co.uk/robots.txt | **429**, 0 B | none | `5de0b106019fcdb2ae794ea0c82aa4cf-mum-edge9` |
| 07:14:04 | https://codmsoftware.co.uk/robots.txt | 200, 2,193 B HTML | REVALIDATED | `1a0a6bd377af4b561e8e38c9d63bdd59-mum-edge8` |

- Pages and `/sitemap.xml`: **429 in 4 of 4**. Across both days that is 11 of 11.
- `/robots.txt`: **429 in 2 of 8**. On 29 Sep it was 200 in 2 of 2.
- Controls on 30 Sep: bare `GPTBot` (no version) on www `/` got 200, and ClaudeBot (full user agent) on www `/` got 200.
- **Why it matters:** Google treats a 429 on `robots.txt` like a server error, which means "disallow everything". RFC 9309 on its own would treat a 4xx as "allow", so what each AI fetcher does with it depends on the vendor, and OpenAI does not publish this.

### 3a. Hostinger CDN: browser-verification challenge for headless browsers (verified during assembly)

Run on 29 Sep 2026, about 13:45–13:50 GMT, from the same residential IP. Tools used: system Chrome 154 driven by `puppeteer-core` (headless), and Lighthouse 13.5.0.

| Client | URL | Result |
|---|---|---|
| Headless Chrome, default user agent (`… HeadlessChrome/154.0.0.0 …`) | https://codmsoftware.co.uk/ | **403**, title "Checking your browser before accessing. Just a moment..." |
| Same | https://www.codmsoftware.co.uk/ | **403**, same challenge page |
| Same | https://codmsoftware.co.uk/ItServices | **403**, same challenge page |
| Same, `/terms-conditions` | https://codmsoftware.co.uk/terms-conditions | **403**, same challenge page |
| Headless Chrome with a normal Chrome user agent | `/terms-conditions` | 200, SPA shell |
| Headless Chrome with the ClaudeBot user agent | `/terms-conditions` | 200, SPA shell |
| Lighthouse 13.5.0 (mobile), 3 URLs | `/`, `/ItServices/api-integration`, `/blog/trigger-framework` | **403**, "ERRORED_DOCUMENT_REQUEST (Status code: 403)". It still got 403 when retried with `--emulated-user-agent` set to a normal Chrome UA. Most likely the edge had started challenging this IP after several headless requests (Hostinger's "automatic attack protection"); not verified |
| curl with a `HeadlessChrome` user agent and browser-like headers | `/` | 200. **The user-agent string alone does not trigger the challenge**; the combination with a real browser's fingerprint does |

**The challenge page** (`server: hcdn`, `Content-Type: text/html`) contains:
- `<meta name="robots" content="noindex,nofollow">`
- `<meta http-equiv="refresh" content="30">`
- a JavaScript check.

A fetcher that doesn't run the check, or that respects the `noindex,nofollow` robots meta, never reaches the page. Google has already indexed a live page, so Googlebot is evidently let through. Hostinger documents that verified search engine crawlers such as Googlebot and Bingbot are identified separately and not challenged; AI crawlers are not in that list.

**What Hostinger documents about this page** (https://www.hostinger.com/support/hostinger-cdn-the-browser-verification-page/):
- It is controlled at *Websites → Dashboard → Performance → CDN → Manage → Security tab → Security level*.
- It is shown when:
  - **Under Attack mode** is on;
  - a **high security level** is set;
  - **automatic attack protection** triggers on high request rates;
  - the visitor's **network reputation** is poor, e.g. VPN or datacentre IPs with an abuse history.
- AI fetchers run from datacentre IP ranges, so they are exposed to the last trigger even with a normal user agent.

**Why this matters for the brief's refusal.** The brief's AI fetcher was refused on exactly `https://www.codmsoftware.co.uk/` and `https://codmsoftware.co.uk/ItServices`, the URLs reproduced above. Because the live site is an empty JavaScript shell, any AI tool that wants the content has to render it in a headless browser. That is exactly the client this challenge blocks. A 403 with `noindex,nofollow` is a natural source of the message "site disallows automated access".

**Anthropic infrastructure (Claude WebFetch)**
- https://www.codmsoftware.co.uk/ and https://codmsoftware.co.uk/ItServices both **succeeded** today.
- Only the title "CODM Software Limited | Top Salesforce Partner - CRM & AI Solutions" came back. There was no body text and no error.
- **The "site disallows automated access" refusal was not reproduced.**

**What Hostinger documents** (documented facts are kept separate from third-party reports and speculation)

*Documented by Hostinger:*
- **AI Audit** is a CDN add-on in hPanel, under *Websites → Dashboard → Performance → CDN → AI Audit*. It lets site owners "see which AI crawlers visit", track them, and **block** individual bots.
  - Source: blog post, 4 Sep 2025, https://www.hostinger.com/blog/cdn-ai-audit/
  - The post does **not** say which bots are blocked by default, or which HTTP status a blocked bot receives.
- Hostinger's CDN 429 support page (dated 23 Sep 2026) says:
  - the CDN itself returns 429 only as "a last-resort protection during a DDoS attack";
  - LiteSpeed on the origin applies per-visitor limits;
  - "search engine and AI crawlers … are never limited at normal crawl rates";
  - the diagnostic is to disable the CDN temporarily and retry;
  - an "Under Attack mode" exists.

  Sources: https://www.hostinger.com/support/hostinger-cdn-429-too-many-requests-errors/ and https://www.hostinger.com/support/8512979-hostinger-cdn-the-under-attack-mode/
- Hostinger also applies **server-level 429 rate limits to "specific network ranges, such as Meta, AWS, and Microsoft"**, which it says "cannot be disabled for individual websites".
  - Source: published 30 Apr 2026, https://www.hostinger.com/support/429-errors-on-automated-integrations-and-link-previews/

*Third-party reports (not Hostinger documentation):*
- **A GitHub issue** reports the same pattern on another Hostinger site on 3 Sep 2026. GPTBot/1.0 got 429 with no `Retry-After`, while ClaudeBot, PerplexityBot and Googlebot got 200. https://github.com/soleman23/hymt/issues/156
  - *Corrected (fact-checked 30 Sep 2026):* the issue does **not** say `robots.txt` fetches were unaffected; it mentions `robots.txt` only as the site's crawl policy.
  - Its rewritten body describes a **per-user-agent rate limiter**, not a flat block: a burst of 12 GPTBot requests gave 7 × 200 and then 429, and the limit stayed tripped for minutes.
  - Its 429 came with `Server: LiteSpeed` (the origin). This site's 429s came with `Server: hcdn` and no upstream timing.
  - If this site has the same kind of limiter and the budget is shared by everything that sends a GPTBot user agent, real OpenAI crawling could keep it permanently exhausted. That would fit 429 on the very first request, and cached `robots.txt` still getting through. This is unverified.
- **A blog article** (Feb 2026) claims Hostinger infrastructure challenged AI-service datacentre IPs even when AI Audit was set to Allow. It cites no Hostinger documentation. https://stonegatewebsecurity.com/articles/hostinger-bot-protection-blocking-ai-crawlers/

*Speculation, not verified:*
- **Real crawlers may see stricter behaviour.** They come from datacentre IP ranges (AWS, GCP, Azure) and hit US or EU edges, whereas this test used a residential IP through the Mumbai edge.
- **The source of the GPTBot 429 is unclear.** It is either an AI Audit "Block" set on this account or Hostinger's own throttle for that user agent (possibly a per-user-agent rate limiter like the one in the GitHub issue; added, fact-checked 30 Sep 2026). Which one it is cannot be told from outside. Either way, the observed 429 contradicts Hostinger's statement that crawlers are "never limited".

### 4. Local build

Tested against http://localhost:4173, which is `scripts/serve-dist.mjs` serving `dist/`. HEAD = `curl -sI -A "<UA>"`. GET = the same request with the body saved and checked for `<h1>`.

| Command | HEAD status | Content-Type | GET bytes | Page content in raw HTML? |
|---|---|---|---|---|
| `curl -sI -A "ClaudeBot" http://localhost:4173/` | 200 | text/html; charset=utf-8 | 153,829 | Yes. H1 "UK Salesforce Consulting Partner for Agentforce, AI and Industry Clouds" |
| `curl -sI -A "GPTBot" http://localhost:4173/` | 200 | text/html; charset=utf-8 | 153,829 | Yes, same H1 |
| `curl -sI -A "PerplexityBot" http://localhost:4173/` | 200 | text/html; charset=utf-8 | 153,829 | Yes, same H1 |
| `curl -sI -A "Mozilla/5.0" http://localhost:4173/` | 200 | text/html; charset=utf-8 | 153,829 | Yes, same H1 |
| `curl -sI -A "ClaudeBot" http://localhost:4173/ItServices` | 200 | text/html; charset=utf-8 | 84,862 | Yes. H1 "Salesforce, AI and software services that build enduring value" |
| `curl -sI -A "GPTBot" http://localhost:4173/ItServices` | 200 | text/html; charset=utf-8 | 84,862 | Yes, same H1 |
| `curl -sI -A "PerplexityBot" http://localhost:4173/ItServices` | 200 | text/html; charset=utf-8 | 84,862 | Yes, same H1 |
| `curl -sI -A "Mozilla/5.0" http://localhost:4173/ItServices` | 200 | text/html; charset=utf-8 | 84,862 | Yes, same H1 |
| `curl -sI -A "ClaudeBot" http://localhost:4173/robots.txt` | 200 | text/plain; charset=utf-8 | 599 | Real robots.txt (`# codmsoftware.co.uk: all search engines and AI assistants are welcome.`) |
| `curl -sI -A "GPTBot" http://localhost:4173/robots.txt` | 200 | text/plain; charset=utf-8 | 599 | Same |
| `curl -sI -A "PerplexityBot" http://localhost:4173/robots.txt` | 200 | text/plain; charset=utf-8 | 599 | Same |
| `curl -sI -A "Mozilla/5.0" http://localhost:4173/robots.txt` | 200 | text/plain; charset=utf-8 | 599 | Same |

- Both pages start with `<meta name="robots" content="index, follow…">`.
- `serve-dist.mjs` has no user-agent logic, so this test proves that the **build** doesn't filter bots. It can't show how Hostinger's CDN or LiteSpeed will behave.

### 5. Conclusion

**Likely causes of the "disallows automated access" refusal, most likely first:**

0. **Hostinger CDN browser verification** (hosting layer, not the repo): **403 "Checking your browser before accessing…"** with `noindex,nofollow`. It was reproduced 3 out of 3 times for headless Chrome on the two URLs named in the brief, and it blocked Lighthouse (§3a). Per Hostinger it also targets datacentre IPs with a poor reputation, which is where AI fetchers run. **Confidence: high** that this blocks rendering fetchers; medium that it caused the brief's specific refusal. **Fix:** hPanel security level plus a support ticket; the owner's steps are below.
1. **Hostinger bot throttling or rate limits** (hosting layer, not the repo). **Confidence: medium.**
   - *What was proved today:* Hostinger's CDN answers `GPTBot/x.y` with a 429 and no `Retry-After`. Hostinger also documents 429 limits, which site owners can't switch off, for traffic from cloud and datacentre IP ranges.
   - *Fact-checked 30 Sep 2026:* the 429 also reaches GPTBot's `robots.txt` requests (2 of 8 on 30 Sep), so this path to a "disallowed" verdict is observed, not just hypothetical, for GPTBot.
   - *Why this would cause the refusal:* if an AI fetcher's `robots.txt` or page request got a 429 or 5xx, the fetcher would treat the site as disallowed. Google does this for 429, and RFC 9309 requires it for 5xx. The fetcher could then report "site disallows automated access".
   - This fits a refusal that is intermittent and hard to reproduce. It was **not** reproduced for Anthropic user agents or infrastructure today.
2. **The live `/robots.txt` is invalid.** **Confidence: low to medium.**
   - It returns 200 `text/html`: the 2,193-byte SPA shell, with zero rules. Hostinger's CDN caches this HTML version.
   - RFC-compliant parsers treat it as allow-all, but a strict fetcher may treat it conservatively.
   - Anthropic's fetcher accepted it today.
3. **AI Audit, Under Attack mode, or another setting in the owner's hPanel.** This would explain the GPTBot-only 429. It can only be checked in the dashboard; it is not determinable from the repo or the live site.
4. ~~Repo code or `.htaccess` filtering user agents~~: **ruled out** on both this branch and `main`.

**Where the fix lives**

- **Repo and deploy** (already built on this branch, not yet deployed):
  - Deploy `dist/`, including `dist/.htaccess`, the real `robots.txt` (served as `text/plain`), `sitemap.xml`, `llms.txt` and the prerendered HTML.
  - Then **flush the Hostinger CDN cache**, because `/robots.txt` is currently cached as HTML.
  - Afterwards, run `scripts/ai-visibility-check.mjs` against production. It uses a `GPTBot/1.2` user agent, so **today it would get 429 from the live CDN**. Expect failures until the hosting-side block is fixed.
- **Hostinger dashboard (owner):**
  - Go to *Performance → CDN → AI Audit* and set every AI crawler to **Allow**, especially GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot and PerplexityBot.
  - Confirm **Under Attack mode is off**, and under *Performance → CDN → Manage → Security* set **Security level** to **Low** or **Medium**.
  - If `GPTBot/1.1` still gets 429 (on pages or on `robots.txt`), or a headless browser still gets the "Checking your browser" page, temporarily disable the CDN and retest, as Hostinger's own procedure says. Then open a support ticket with the request IDs above, including the 30 Sep ones. Ask Hostinger to exempt verified AI crawlers and user-initiated AI fetchers (OpenAI, Anthropic and Perplexity publish their IP ranges) from browser verification, in the same way Googlebot and Bingbot are exempted.

**The second, bigger problem.** Even when a fetch succeeds, every live URL is the same 2,193-byte JavaScript shell, with an empty `<div id="root"></div>` and zero `<h1>`. Every tool, including Claude WebFetch today, sees only the generic `<title>`. Unblocking crawlers is worthless unless the prerendered build is deployed. The local build serves 153,829 bytes of real content on `/` and 84,862 bytes on `/ItServices`.

Evidence files (scratch, not in the repo):
- `…/scratchpad/live/` (all live headers and bodies, plus `results.txt`)
- `…/scratchpad/local/`
- `…/scratchpad/robots-parse.mjs`

About 39 live requests were made for this section (37 curl, 2 WebFetch). The 30 Sep fact-check made 29 more curl requests across the whole report (evidence in `…/scratchpad/fc/`, including `log.txt`).

---

## 0.3 Page inventory

### Method

- **Script:** `…/scratchpad/inventory.mjs`, a Node regex tokeniser with no dependencies.
  - It reads every `dist/*.html`, `dist/ItServices/*.html`, `dist/blog/*.html` and `dist/products/*.html` file. It skips `200.html` and includes `404.html`.
  - Each file is mapped to its `source` in `src/data/site-routes.js` and to its `<Route>` component in `src/App.jsx`.
- **Full per-page JSON:** `…/scratchpad/inventory.json`, covering 44 pages: the 42 site routes, the `/ItServices/data-migration` alias and `/404`.
  - Every site route has a prerendered file (`routesWithoutFile: []`).
  - The JSON holds title, description and their lengths; robots; canonical; OG and Twitter tags, plus whether the og:image file exists in `dist`; JSON-LD blocks, types and parse errors; H1s; the full heading list with nav/header/footer flags; heading skips; image stats; and both word counts.
- **Helpers** in the same folder: `table.mjs` builds the table below, and `links.mjs` checks internal links in the rendered HTML.
- **Word counts:**
  - Script, style, svg, noscript and template content is removed.
  - "Excl." leaves out text inside `<nav>`, `<header>` and `<footer>`.
  - Roughly 88 words of PoliciesBar and cookie banner/modal text sit after `</footer>` on every page, so the "excl." figure still includes them.
- **Live requests:** 18 GETs in total (5 spot checks, 10 known-indexed URLs, 3 newly discovered URLs), sent one at a time with a 1-second pause.

### Common structure on every prerendered page (not repeated in the table)

- **Exactly 1 H1 on all 44 pages.** Each page has one title, one meta description and one canonical tag; no page has duplicates of any of them.
- **The first headings in each document are 6 × `<h6>` inside `<header><nav>`,** before the H1. These are the mega-menu labels: "Salesforce CRM, Data, Development, Support, Our products, Latest insights".
- **Footer:** 3 × `<h4>` ("What we do", "Company", "Get in touch").
- **After the footer:** the cookie modal's `<h2>Cookie Preferences</h2>` is baked into the raw HTML of all 44 pages (`src/Cookies/Cookies.jsx`).
- **No `<main>` landmark** on any page. Landmark counts: nav 1–2, header 1, footer 1, main 0.
- **JSON-LD:**
  - One `<script type="application/ld+json" data-seo="page">` per indexable page, with **0 parse errors**.
  - The nested types are Organization, ImageObject, PostalAddress, PropertyValue, Person, ContactPoint and WebSite, plus the page-specific ones in the table.
  - `/404` has no JSON-LD.
- **OG and Twitter tags:** og:title, og:description, og:url, og:image and twitter:card are present on all 44 pages.
  - 42 pages use `https://codmsoftware.co.uk/logo.png` as og:image: the 41 other indexable pages plus `/404` (corrected from 41, fact-checked 30 Sep 2026).
  - **Two og:images do not exist in dist:** `/about` → `https://codmsoftware.co.uk/images/about-hero.jpg` and `/contact` → `/images/contact-hero.jpg`. The local server returns `200 text/html` (the `200.html` shell) for both. They are set at `src/pages/About/About.jsx:34` and `src/ContactComponents/ContactComponents.jsx:16`. The same URLs also appear in `src/seoMetadata.js:15,31`, but nothing imports that file (fact-checked 30 Sep 2026).
- **Images:** 1,657 `<img>` across the 43 indexable pages.
  - 0 have no alt attribute; 546 have `alt=""`.
  - **1,651 lack width and height.**
  - **1,637 lack a `loading` attribute.**
- **Title length** is 38–56 characters (none over 60).
- **Description length** is 82–153 characters (none over 160). Only `/PrivacyPolicy` and `/terms-conditions` are under 100 (82 each).
- **Duplicates:** the only duplicate title or description is data-integration / data-migration. This is intentional: data-migration canonicalises to data-integration.

### Full inventory (branch build in `dist/`)

How to read the columns:
- **Heading issues** lists levels skipped in the content area only. Nav, footer and the cookie h2 are excluded (see above).
- **Imgs** shows the image count, then how many lack width and height, how many lack a loading attribute, and how many have empty alt.

| # | URL | Source (site-routes `source` / App.jsx component) | Title (chars) | Meta description, first 80 chars (chars) | Canonical | H1 | Heading issues (content area only; see common notes) | JSON-LD @types (top level) | Content in raw HTML: branch / live | Words: body / excl. nav+header+footer | Imgs (no w+h / no loading / empty alt) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `/` | src/pages/Home / HomeSwitcher | CODM Software \| UK Salesforce Consulting Partner & AI (53) | CODM Software Limited is a London-based Salesforce Consulting Partner deliverin… (140) | self | UK Salesforce Consulting Partner for Agentforce, AI and Industry Clouds | h2→h5 ×2, h2→h6, h3→h6 | Organization, WebSite | Yes / **No** (live = 2,193-byte shell, homepage title) | 1933 / 1547 | 93 (93 / 93 / 11) |
| 2 | `/about` | src/pages/About / About | About CODM Software Limited \| Salesforce Partner, London (56) | CODM Software Limited: UK Salesforce Consulting Partner, incorporated 2023, HQ … (153) | self | Enterprise Salesforce & AI expertise, built in the UK | h2→h5 | Organization, WebSite, BreadcrumbList, ProfessionalService (×2) | Yes / **No** (live = 2,193-byte shell, homepage title) | 1810 / 1424 | 76 (76 / 58 / 7) |
| 3 | `/contact` | src/ContactComponents / Contact | Contact CODM Software \| London, Birmingham, USA, India (54) | Talk to CODM Software about Salesforce, Agentforce, AI or integration projects.… (135) | self | Let's talk about your next project | none | Organization, WebSite, BreadcrumbList, ProfessionalService (×2) | Yes / **No** (live = 2,193-byte shell, homepage title) | 1050 / 664 | 31 (31 / 30 / 6) |
| 4 | `/faq` | src/pages/Faq / Faq | Salesforce Consulting FAQs \| CODM Software (42) | Answers to common questions about working with CODM Software: Salesforce clouds… (145) | self | Frequently asked questions | none | Organization, WebSite, BreadcrumbList, FAQPage | Yes / **No** (live = 2,193-byte shell, homepage title) | 1362 / 974 | 17 (17 / 17 / 7) |
| 5 | `/g-cloud-15` | src/pages/GCloud15 / GCloud15 | G-Cloud 15 Salesforce & Cloud Support \| CODM Software (53) | Buy Salesforce, AI, integration, data migration and support services from CODM … (140) | self | G‑Cloud 15 Cloud Support Services | none | Organization, WebSite, BreadcrumbList, FAQPage | Yes / **No** (live = 2,193-byte shell, homepage title) | 1501 / 1115 | 24 (18 / 24 / 12) |
| 6 | `/ItServices` | src/ServiceComponents/ServiceMainPage / Service | Salesforce, AI & Software Services \| CODM Software (50) | Salesforce implementation (Sales, Service, Financial Services, Education and mo… (150) | self | Salesforce, AI and software services that build enduring value | h1→h3, h3→h6, h3→h5 | Organization, WebSite, BreadcrumbList | Yes / **No** (live = 2,193-byte shell, homepage title) | 762 / 376 | 26 (26 / 26 / 6) |
| 7 | `/ItServices/api-integration` | src/ServiceComponents/ApiIntegration / ApiIntegration | Salesforce API Integration Services \| CODM Software (51) | Connect Salesforce with ERP, finance, marketing and legacy systems through secu… (124) | self | API Integration | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1286 / 896 | 35 (35 / 35 / 21) |
| 8 | `/ItServices/building-llm` | src/ServiceComponents/BuildingLLMDevelopment / BuildingLLMDevelopment | Agentforce & LLM Application Development \| CODM (47) | Production AI built on your own data: Agentforce agents, LLM-powered assistants… (144) | self | Building LLM | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1126 / 736 | 35 (35 / 35 / 21) |
| 9 | `/ItServices/crm-development` | src/ServiceComponents/CRMDevelopment / CRMDevelopment | Salesforce CRM Implementation & Development \| CODM (50) | End-to-end Salesforce CRM implementation and custom development by certified ar… (144) | self | Salesforce CRM | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1203 / 813 | 35 (35 / 35 / 21) |
| 10 | `/ItServices/data-integration` | src/ServiceComponents/DataIntegration / DataIntegration | Data Integration & Migration to Salesforce \| CODM (49) | Plan, cleanse and migrate data into Salesforce with accuracy checks and minimal… (143) | self | Data Integration/Migration | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 993 / 602 | 34 (34 / 34 / 21) |
| 11 | `/ItServices/data-migration` | alias of /ItServices/data-integration (in site-routes `aliases`, not in sitemap) / DataIntegration | Data Integration & Migration to Salesforce \| CODM (49) | Plan, cleanse and migrate data into Salesforce with accuracy checks and minimal… (143) | https://codmsoftware.co.uk/ItServices/data-integration | Data Integration/Migration | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 993 / 602 | 34 (34 / 34 / 21) |
| 12 | `/ItServices/deployment-support` | src/ServiceComponents/DeploymentSupport / DeploymentSupport | Salesforce Deployment & Release Support \| CODM (46) | Environment set-up, release management, DevOps pipelines and go-live support fo… (116) | self | Deployments | h1→h4, h3→h5 ×4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1683 / 1293 | 29 (29 / 29 / 11) |
| 13 | `/ItServices/dotnet-application-development` | src/ServiceComponents/DotNetApplication / DotNetApplication | .NET Application Development \| CODM Software (44) | Secure, scalable .NET web and enterprise applications built by CODM Software, i… (131) | self | .NET Application | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1279 / 889 | 35 (35 / 35 / 21) |
| 14 | `/ItServices/python-application-development` | src/ServiceComponents/PythonApplication / PythonApplication | Python Application Development \| CODM Software (46) | Python applications, data pipelines and AI services built by CODM Software, int… (123) | self | Python Application | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1120 / 730 | 35 (35 / 35 / 21) |
| 15 | `/ItServices/react-application-development` | src/ServiceComponents/ReactApplication / ReactApplication | React Application Development \| CODM Software (45) | Fast, accessible React web applications and portals built by CODM Software, con… (114) | self | React Application | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1284 / 894 | 35 (35 / 35 / 21) |
| 16 | `/ItServices/salesforce-data-cloud` | src/ServiceComponents/DataCloud / DataCloud | Salesforce Data Cloud Implementation \| CODM Software (52) | Salesforce Data Cloud implementation: unify customer data, build real-time segm… (138) | self | Data Cloud + A.I | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1304 / 913 | 35 (35 / 35 / 21) |
| 17 | `/ItServices/salesforce-education-cloud` | src/ServiceComponents/HigherEducation / HigherEducation | Salesforce Education Cloud Consultants UK \| CODM (48) | Salesforce Education Cloud implementation for universities and colleges: admiss… (140) | self | Salesforce Education Cloud | h1→h4, h2→h6 ×5 (FAQ accordion), h4→h6 (fact-checked 30 Sep 2026) | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1139 / 753 | 35 (35 / 35 / 21) |
| 18 | `/ItServices/salesforce-energy-utilities-cloud` | src/ServiceComponents/EnergyUtilitiesCloud / EnergyUtilitiesCloud | Salesforce Energy & Utilities Cloud \| CODM Software (51) | Energy & Utilities Cloud implementation for suppliers and utilities: customer s… (141) | self | Salesforce Energy and Utilities Cloud | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1521 / 1128 | 29 (29 / 29 / 11) |
| 19 | `/ItServices/salesforce-financial-services` | src/ServiceComponents/FinancialServiceCloud / FinancialServiceCloud | Salesforce Financial Services Cloud Partner \| CODM (50) | CODM Software implements Salesforce Financial Services Cloud for banks, wealth … (152) | self | Salesforce Financial Services Cloud | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1185 / 793 | 35 (35 / 35 / 21) |
| 20 | `/ItServices/salesforce-health-insurance-cloud` | src/ServiceComponents/HealthInsuranceCloud / HealthInsuranceCloud | Salesforce Health & Insurance Cloud \| CODM Software (51) | Salesforce Health Cloud and Insurance Cloud implementation: patient and policyh… (143) | self | Salesforce Health & Insurance Cloud | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1175 / 783 | 29 (29 / 29 / 11) |
| 21 | `/ItServices/salesforce-manufacturing-cloud` | src/ServiceComponents/ManufacturingCloud / ManufacturingCloud | Salesforce Manufacturing Cloud \| CODM Software (46) | Manufacturing Cloud implementation: sales agreements, account-based forecasting… (130) | self | Salesforce Manufacturing Cloud | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1202 / 811 | 28 (28 / 28 / 12) |
| 22 | `/ItServices/salesforce-marketing-cloud` | src/ServiceComponents/MarketingCloud / MarketingCloud | Salesforce Marketing Cloud Services \| CODM Software (51) | Marketing Cloud set-up and campaigns: journeys, email and SMS automation, segme… (141) | self | Salesforce Marketing Cloud Services | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 951 / 559 | 35 (35 / 35 / 21) |
| 23 | `/ItServices/salesforce-nonprofit-cloud` | src/ServiceComponents/NonprofitCloud / NonprofitCloud | Salesforce Nonprofit Cloud for Charities \| CODM (47) | Salesforce Nonprofit Cloud implementation for charities and NGOs: donor managem… (137) | self | Salesforce Nonprofit Cloud | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1150 / 759 | 29 (29 / 29 / 13) |
| 24 | `/ItServices/salesforce-sales-cloud` | src/ServiceComponents/SalesCloud / SalesCloud | Salesforce Sales Cloud Implementation \| CODM Software (53) | Sales Cloud set-up and optimisation by certified consultants: lead and opportun… (133) | self | Salesforce Sales Cloud | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1222 / 831 | 28 (28 / 28 / 12) |
| 25 | `/ItServices/salesforce-service-cloud` | src/ServiceComponents/ServiceCloud / ServiceCloud | Salesforce Service Cloud Implementation \| CODM Software (55) | Service Cloud implementation: case management, omni-channel routing, knowledge,… (131) | self | Salesforce Service Cloud | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1661 / 1270 | 29 (29 / 29 / 11) |
| 26 | `/ItServices/technical-support` | src/ServiceComponents/TechnicalSupport / TechnicalSupport | Salesforce Technical Support & Managed Services \| CODM (54) | Ongoing Salesforce and application support: monitoring, fixes, enhancements, ad… (117) | self | Technical Support | h1→h4, h4→h6 | Organization, WebSite, BreadcrumbList, Service | Yes / **No** (live = 2,193-byte shell, homepage title) | 1092 / 702 | 35 (35 / 35 / 21) |
| 27 | `/products` | src/pages/Products/Products.jsx / Products | Products \| FUTURA AI Chatbot for Education \| CODM (49) | Software products from CODM Software, including FUTURA, the AI chatbot that ans… (139) | self | Software products built by CODM | none | Organization, WebSite, BreadcrumbList | Yes / **No** (live = 2,193-byte shell, homepage title) | 756 / 370 | 16 (16 / 16 / 6) |
| 28 | `/products/futura` | src/data/products.js / ProductDetail | FUTURA: AI Chatbot for Education \| CODM Software (48) | FUTURA answers student questions from your own documents and lets admissions st… (136) | self | FUTURAAI Chatbot for Education (raw text has no space: `FUTURA<span>AI Chatbot…`) | none | Organization, WebSite, BreadcrumbList, SoftwareApplication, FAQPage | Yes / **No** (live = 2,193-byte shell, homepage title) | 1825 / 1439 | 17 (17 / 16 / 7) |
| 29 | `/blog` | src/pages/Blog / Blog | Salesforce & AI Insights \| CODM Software Blog (45) | Practical articles on Salesforce, Agentforce, AI, integration and G-Cloud from … (111) | self | Salesforce and AI insights from CODM | h1→h5 | Organization, WebSite, BreadcrumbList | Yes / **No** (live = 2,193-byte shell, homepage title) | 873 / 487 | 29 (29 / 29 / 6) |
| 30 | `/blog/agentforce-ai` | src/BlogsComponents/AgentforceAI / AgentforceAI | What Is Salesforce Agentforce AI? Features & Uses (49) | How Salesforce Agentforce AI agents automate workflows and customer service, wi… (124) | self | AI Powered Salesforce Development | h1→h4, h2→h4, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1764 / 1372 | 50 (50 / 50 / 10) |
| 31 | `/blog/agentforce-financial-services` | src/BlogsComponents/AgentforceFinancialServices / AgentforceFinancialServices | Agentforce for Financial Services \| CODM Software (49) | How banks, wealth managers and insurers use Salesforce Agentforce with Financia… (137) | self | Salesforce Financial Service Cloud | h1→h4, h2→h4, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1628 / 1236 | 51 (51 / 51 / 9) |
| 32 | `/blog/ai-powered-dashboard` | src/BlogsComponents/AIPoweredDashboard / AIPoweredDashboard | AI-Powered Dashboards: Features & Benefits \| CODM (49) | How AI-powered dashboards turn CRM data into real-time insight, with key featur… (106) | self | Salesforce AI-Powered Dashboard | h1→h4, h2→h4, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1808 / 1417 | 59 (59 / 59 / 11) |
| 33 | `/blog/field-service-automation` | src/BlogsComponents/FslAutomation / FslAutomation | Salesforce Field Service Automation Guide \| CODM (48) | How field service automation in Salesforce improves scheduling, dispatch and fi… (123) | self | Field Service Automation | h1→h4, h2→h4, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1571 / 1180 | 48 (48 / 48 / 8) |
| 34 | `/blog/g-cloud15` | src/BlogsComponents/GCloudSuppliersBlog / GCloudSuppliersBlog | G-Cloud Framework Suppliers UK: G-Cloud 15 \| CODM (49) | How public sector buyers can procure Salesforce, AI, integration and cloud supp… (127) | self | G-Cloud Framework Suppliers in the UK | h2→h4 ×2, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 2591 / 2199 | 49 (49 / 49 / 8) |
| 35 | `/blog/integration-framework` | src/BlogsComponents/IntegrationFrameworkBlog / IntegrationFrameworkBlog | What Is an Integration Framework? \| CODM Software (49) | What an integration framework is, the main types, and how it helps connect Sale… (114) | self | Integration Framework | h1→h4, h2→h6 ×6 (FAQ accordion), h2→h4, h2→h5 (fact-checked 30 Sep 2026) | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1920 / 1530 | 58 (58 / 58 / 9) |
| 36 | `/blog/salesforce-agentforce` | src/BlogsComponents/AgentforceImplementation / AgentforceImplementation | Salesforce Agentforce Implementation Guide \| CODM (49) | What Salesforce Agentforce is, what it can automate and how to plan an Agentfor… (134) | self | Salesforce Agentforce Implementation | h1→h4, h2→h4, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1832 / 1441 | 62 (62 / 62 / 10) |
| 37 | `/blog/salesforce-einstein-ai-synergy` | src/BlogsComponents/SalesforceEinstein / SalesforceEinstein | Salesforce Einstein AI: Features & Use Cases \| CODM (51) | How Salesforce Einstein adds predictive scoring, recommendations and automation… (121) | self | Salesforce Einstein + AI Synergy | h1→h4, h2→h4 ×2, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1960 / 1568 | 57 (57 / 57 / 10) |
| 38 | `/blog/salesforce-llm-crm-automation` | src/BlogsComponents/SalesforceIIM / SalesforceIIM | LLMs in Salesforce for Higher Education \| CODM (46) | How large language models inside Salesforce automate CRM work in higher educati… (125) | self | LLM in Salesforce | h1→h4, h2→h4, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 2021 / 1630 | 48 (48 / 48 / 10) |
| 39 | `/blog/salesforce-revenue-cloud` | src/BlogsComponents/SalesforceRevenueCloud / SalesforceRevenueCloud | What Is Salesforce Revenue Cloud? \| CODM Software (49) | Salesforce Revenue Cloud explained: quoting, CPQ, billing and revenue managemen… (121) | self | Salesforce Revenue Cloud (Previously CPQ) | h1→h4, h2→h6 ×6 (FAQ accordion), h2→h4, h2→h5 (fact-checked 30 Sep 2026) | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1746 / 1355 | 56 (56 / 56 / 11) |
| 40 | `/blog/salesforce-sso-authentication` | src/BlogsComponents/SSO / SSO (imported as `SSO.JSX`; the tracked file is `SSO.jsx`, fact-checked 30 Sep 2026) | Single Sign-On (SSO) in Salesforce Explained \| CODM (51) | How Single Sign-On works in Salesforce, SAML and OpenID Connect options, and ho… (103) | self | Authentication using SSO | h1→h4, h2→h4, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 1941 / 1550 | 49 (49 / 49 / 7) |
| 41 | `/blog/trigger-framework` | src/BlogsComponents/TriggerframeworkBlog / TriggerframeworkBlog | Salesforce Trigger Framework Best Practices \| CODM (50) | What a Salesforce trigger framework is, why it matters and best practices for s… (115) | self | Salesforce Trigger Framework | h1→h4, h2→h4 ×2, h2→h5 | Organization, WebSite, BreadcrumbList, BlogPosting | Yes / **No** (live = 2,193-byte shell, homepage title) | 2206 / 1815 | 55 (55 / 55 / 9) |
| 42 | `/PrivacyPolicy` | src/PrivacyPolicy / PrivacyPolicy | Privacy Policy \| CODM Software Limited (38) | How CODM Software Limited collects, uses and protects personal data under UK GD… (82) | self | Privacy Policy | h1→h5 | Organization, WebSite, BreadcrumbList | Yes / **No** (live = 2,193-byte shell, homepage title) | 801 / 415 | 16 (16 / 16 / 6) |
| 43 | `/terms-conditions` | src/TermsAndConditions / TermsAndConditions | Terms and Conditions \| CODM Software Limited (44) | The terms and conditions for using the CODM Software Limited website and servic… (82) | self | Terms and Conditions | none | Organization, WebSite, BreadcrumbList | Yes / **No** (live = 2,193-byte shell, homepage title) | 743 / 357 | 16 (16 / 16 / 6) |
| 44 | `/404` (note only) | not a route (dist/404.html) / PageNotFound | Page not found \| CODM Software (30) | This page could not be found. (29) | `https://codmsoftware.co.uk/__prerender-not-found__`; robots: noindex, follow | 404 | h1→h5 | none | Yes / n.a. (live has no 404; every URL = shell) | 521 / 135 | 18 (18 / 18 / 6) |

**Notes on the table**

- **Robots meta** on rows 1–43 is `index, follow, max-image-preview:large`.
- **Thin pages.** Five pages have under 500 content words, and that count still includes about 88 cookie-banner words: `/ItServices` 376, `/products` 370, `/blog` 487, `/PrivacyPolicy` 415, `/terms-conditions` 357.
- **Heading skips.** 37 of the 43 indexable pages skip heading levels in the content area.
  - The typical pattern is a short-label H1 followed straight by `<h4>` sections.
  - Blog posts also have `<h2>Share Your Thoughts…</h2>` → `<h4>Leave a comment</h4>`, and `<h2>Our Latest Blogs</h2>` → 12 × `<h5>`.
  - FAQ accordions on `/ItServices/salesforce-education-cloud`, `/blog/integration-framework` and `/blog/salesforce-revenue-cloud` put each question in an `<h6>` nested inside an `<h2 class="accordion-header"><button>`, which gives h2→h6 skips (fact-checked 30 Sep 2026; three rows above were corrected for this). The page-level count, 37 of 43, is unchanged.
- **Boilerplate headings copied from templates:**
  - `<h4>Providing the Ultimate Experience in Education Cloud</h4>` appears on **31 pages**: all 20 `/ItServices/*` detail pages including the alias, and all 11 blog posts except `/blog/g-cloud15`. On most of them it has nothing to do with the topic.
  - `<h4>Unlock Industry-Specific Success with Salesforce Industries Cloud</h4>` is the first section heading on `/ItServices/api-integration`, `/ItServices/data-integration` and `/ItServices/data-migration`.
- **H1 and title often disagree:**
  - `/blog/agentforce-ai`: title "What Is Salesforce Agentforce AI?", H1 "AI Powered Salesforce Development".
  - `/blog/agentforce-financial-services`: title "Agentforce for Financial Services", H1 "Salesforce Financial Service Cloud".
  - Service H1s are bare labels such as "Building LLM", "Deployments" and "Data Cloud + A.I".

### Live spot check (5 URLs)

Command: `curl -s -A "<Chrome UA>" -o spotN.html -w "%{http_code} %{size_download} %{content_type}" URL`, then grep for `<title>`, `<h1`, robots, canonical and `<div id="root"></div>`.

| Live URL | Status | Bytes | Title | `<h1>` count | canonical / robots | Body |
|---|---|---|---|---|---|---|
| https://codmsoftware.co.uk/ | 200 | 2,193 | CODM Software Limited \| Top Salesforce Partner - CRM & AI Solutions | 0 | none / none | `<div id="root"></div>` |
| https://codmsoftware.co.uk/about | 200 | 2,193 | same | 0 | none / none | same |
| https://codmsoftware.co.uk/ItServices | 200 | 2,193 | same | 0 | none / none | same |
| https://codmsoftware.co.uk/blog/integration-framework | 200 | 2,193 | same | 0 | none / none | same |
| https://codmsoftware.co.uk/terms-conditions | 200 | 2,193 | same | 0 | none / none | same |

All five bodies have the same md5, `04776146e852bf828a19e829d0fdb0fb`, and so did all 18 live responses in this section.

**Where Google's titles come from:**
- **Current URLs.** Google's titles for the live SPA pages come from client-side rendering. For example, "Salesforce Energy & Utilities Cloud Solutions | CODM Software" and "Deployment Support Services | Smooth Software Deployment" are both in the live bundle (`/assets/index-B21EEsvu.js`, tracked in `dist/` at `d3e3d5a`).
- **No `/faq` or `.html` routes live.** That bundle's router has no `/faq` route and no `.html` routes, so legacy `.html` URLs fall through to the `*` catch-all (PageNotFound) when rendered in the browser.
- **Legacy URLs.** The legacy `.html` titles are **not in the live bundle, the current `src`, or any of this repo's 14 commits** (`git log --all -S`). Examples:
  - "Large Language Model (LLM) Development | AI Solutions by CODM"
  - "…Scalable & Maintainable Apex Trigger Architecture"
  - "Unlock Revenue Growth with Salesforce Revenue Cloud"
  - "Salesforce Industries Cloud Solutions | Codm Software"

  They come from an older site that is not in this repo.

### Known-indexed URLs: live vs. local branch build

Local checks used `curl` against http://localhost:4173, without and with `-L`.

| Indexed URL (Google title) | LIVE | LOCAL branch build | Closest current page |
|---|---|---|---|
| https://www.codmsoftware.co.uk/ ("CODM Software Limited \| Top Salesforce Partner - CRM & AI Solutions") | 200, 2,193 B shell, `server: hcdn`, `x-hcdn-cache-status: DYNAMIC`; no www→apex redirect | `/` = 200, 153,829 B, full content, canonical `https://codmsoftware.co.uk/`. The www→apex 301 is `.htaccess` rule 1, which serve-dist.mjs does not emulate (not testable locally) | `/` |
| https://codmsoftware.co.uk/ItServices (search title "CODM Software Limited \| Top Salesforce Partner") | 200 shell | 200, 84,862 B, "Salesforce, AI & Software Services \| CODM Software" | `/ItServices` |
| /terms-conditions ("CODM Software Limited \| Top Salesforce Partner") | 200 shell (www) | 200, 72,162 B, "Terms and Conditions \| CODM Software Limited" | `/terms-conditions` |
| /API-Integration.html ("API Integration Services \| Seamless System Connectivity") | 200 shell (www) | **301 → /API-Integration → 200, 2,242 B `200.html`, `noindex, follow`, generic homepage title** (the browser then renders PageNotFound) | `/ItServices/api-integration` |
| /BuildingLLM.html ("Large Language Model (LLM) Development \| AI Solutions by CODM") | 200 shell | **301 → /BuildingLLM → 200.html noindex** | `/ItServices/building-llm` |
| /triggerframework.html ("Salesforce Trigger Framework \| Scalable & Maintainable…") | 200 shell | **301 → /triggerframework → 200.html noindex** | `/blog/trigger-framework` |
| /revenueCloud.html ("Unlock Revenue Growth with Salesforce Revenue Cloud") | 200 shell | **301 → /revenueCloud → 200.html noindex** | `/blog/salesforce-revenue-cloud` (an article; there is no Revenue Cloud service page) |
| /AI-Powered_Dashboard.html ("AI-Powered Pharmaceutical Dashboard \| CodM Software Limited") | 200 shell | **301 → /AI-Powered_Dashboard → 200.html noindex** | `/blog/ai-powered-dashboard` |
| /blog/integration-framework ("What is an Integration Framework? Benefits, Types & Use Cases \| CODM Software") | 200 shell | 200, 141,056 B, "What Is an Integration Framework? \| CODM Software" | itself |
| https://saasailabs.codmsoftware.co.uk/ ("CODM Software Limited \| Top Salesforce Partner") | 200, 2,193 B, same md5, **`Server: LiteSpeed`** (not hcdn) | Not testable locally. The brand switch happens client-side by hostname (`src/config/brand.js`); the prerendered HTML is CODM-branded, with codmsoftware.co.uk canonicals | n/a |

**What happens to legacy URLs on the branch:**
1. `.htaccess` rule 4 (`/(x).html` → 301 `/x`) runs for every legacy `.html` URL.
2. `/x` has no prerendered file, so rule 7 serves `200.html`: HTTP 200 with `<meta name="robots" content="noindex, follow">`.
3. **The result: the ranking signals of indexed legacy URLs flow into a `noindex` soft 404, not into the equivalent page.**

The `redirects` list in `site-routes.js` has only 3 entries (`/blog/g-cloud-framework-suppliers-uk`, `/index`, `/index.html`). Explicit 301s for the legacy URLs need to go in rule 2, which runs before rule 4.

**Other local status checks:**
- `/nonsense-xyz` → 200 `200.html`, `noindex`. There is no real 404 status anywhere: no `ErrorDocument`, and `/404` itself returns 200.
- `/index.html` → 301 `/`.
- `/ItServices/` → 301 `/ItServices`.
- `/blog/g-cloud-framework-suppliers-uk` → 301 `/blog/g-cloud15`.
- `robots.txt` (599 B), `sitemap.xml` (42 `<loc>`) and `llms.txt` (9,810 B) return 200 with the correct content types.
- **Caveat:** `/itservices` and `/blog/Salesforce-Revenue-Cloud` returned the full page locally only because Windows `existsSync` is case-insensitive. On Linux hosting, rule 5 would miss and serve `200.html` (`noindex`). This cannot be verified until deploy.

### Legacy URL → current page mapping (merged from 0.1, 0.3 and 0.6)

- **Sources:** candidates come from name matching (0.1), from reading the components (0.3) and from topic (0.6).
- **Owner decision:** every target needs the owner's confirmation. There is a matching open question at the end of this report.
- **Current behaviour:**
  - Live, every row returns 200 with the shell (soft 404). The three URLs found only through WebSearch (`/industriescloud.html`, `/blog/salesforceagentforce`, `/blog/Salesforce-Revenue-Cloud`) were checked live individually and returned the same shell md5.
  - Locally on the branch, every `.html` row 301s to an extensionless path and then gets `200.html` (`noindex`). The exceptions are `/index.html` and `/contact.html`.
  - Locally, `/blog/salesforceagentforce` → `200.html` (`noindex`).

| Legacy URL | Evidence of indexing or linking | Proposed target | Content check / confidence |
|---|---|---|---|
| `/index.html` | Wayback sitemap | `/` | Already a 301 on this branch |
| `/AboutUs.html` | Wayback sitemap | `/about` | Name match only |
| `/contact.html` | Wayback sitemap | `/contact` | Rule 4 happens to resolve it already |
| `/Services.html` | Wayback sitemap | `/ItServices` | Name match only |
| `/EducationCloud.html` | Wayback sitemap | `/ItServices/salesforce-education-cloud` | Name match only |
| `/FinancialServiceCloud.html` | Wayback sitemap | `/ItServices/salesforce-financial-services` | Name match only |
| `/industriescloud.html` | Wayback sitemap; WebSearch ("Salesforce Industries Cloud Solutions \| Codm Software") | none routed; nearest is `/ItServices` | `src/ServiceComponents/IndustriesCloud` exists and is imported at `src/App.jsx:16`, but **no `<Route>` uses it** |
| `/DataCloud.html` | Wayback sitemap | `/ItServices/salesforce-data-cloud` | Name match only |
| `/SalesforceMarketingCloudServices.html` | Wayback sitemap | `/ItServices/salesforce-marketing-cloud` | Name match only |
| `/API-Integration.html` | Google index, WebSearch, Wayback sitemap | `/ItServices/api-integration` | **Strong.** `src/ServiceComponents/ApiIntegration/ApiIntegration.jsx:12` still has the SEO title "API Integration Services \| Seamless System Integration \| CODM Software", which is nearly the indexed title. It is overridden at build by `src/data/page-meta.js:146` |
| `/dataintegration.html` | Wayback sitemap | `/ItServices/data-integration` | Name match only |
| `/SalesforceCRM.html` | Wayback sitemap; **hidden Web-to-Lead `retURL` on 32 prerendered pages** (see Internal links) | `/ItServices/crm-development` | Name match only |
| `/BuildingLLM.html` | Google index, WebSearch, Wayback sitemap | `/ItServices/building-llm` | Topic match: sections "What is a Large Language Model (LLM)?", Data Collection/Preprocessing/Model Architecture, and "FAQs on Building Large Language Models" |
| `/DotNetApplication.html` | Wayback sitemap | `/ItServices/dotnet-application-development` | Name match only |
| `/React-Application.html` | Wayback sitemap | `/ItServices/react-application-development` | Name match only |
| `/Python.html` | Wayback sitemap | `/ItServices/python-application-development` | Name match only |
| `/Technical-Support.html` | Wayback sitemap | `/ItServices/technical-support` | Name match only |
| `/triggerframework.html` | Google index, WebSearch, Wayback sitemap, dead FifthSection | `/blog/trigger-framework` | **Strong:** "What is Salesforce Trigger Framework?", "Single Trigger Per Object", "Avoid Recursion", handler/virtual-class patterns |
| `/revenueCloud.html` | Google index, WebSearch, Wayback sitemap, dead FifthSection | `/blog/salesforce-revenue-cloud` | Topic match, but the target is an **article** ("Salesforce CPQ to Revenue Cloud Advanced (RCA)", "Why RCA over CPQ?"). There is no Revenue Cloud service page in `site-routes.js` |
| `/integrationframework.html` | Wayback sitemap; **live link on `/ItServices`**; share link on 11 blog posts | `/blog/integration-framework` | Same topic |
| `/AI-Powered_Dashboard.html` | Google index, WebSearch | `/blog/ai-powered-dashboard` | **Confirmed pharmaceutical case study** (see the evidence below this table) |
| `/support.html` | Live link on `/ItServices` (card "Salesforce Support & Optimization") | `/ItServices/technical-support` (0.3) or none (0.1) | **Auditors differ.** 0.1 found no equivalent page; 0.3 proposes technical-support **by card label only**. Both are weak; owner to decide |
| `/projectmanagement.html`, `/asyncapex.html`, `/shield.html` | Live links on `/ItServices` (cards "Salesforce Project Management", "Scalable Salesforce Development", "Salesforce Shield & Encryption") | no equivalent page in the repo | n/a |
| `/blog/salesforceagentforce` | WebSearch (homepage title) | `/blog/salesforce-agentforce` | Slug variant |
| `/blog/Salesforce-Revenue-Cloud` | WebSearch ("Salesforce Revenue Cloud (Previously CPQ)") | `/blog/salesforce-revenue-cloud` | Case variant |

**Evidence for `/AI-Powered_Dashboard.html`:**
- `AIPoweredDashboard_FirstSection.jsx:46`: "Revolutionizing Pharmaceutical Operations with Our AI-Powered Salesforce Dashboard For one of our client"
- `:76`: "Pharmaceutical Admin Dashboard in Salesforce… LWC, Apex"
- `:140`: "Key Benefits to the Client"
- `:158`: "Outcome of the Project"
- `:165`: "Why Choose Codm Software for Your AI-Powered Pharmaceutical Dashboard?"

Neither the new meta (`page-meta.js:303`, "AI-Powered Dashboards: Features & Benefits") nor the H1 ("Salesforce AI-Powered Dashboard") says it is a pharma case study.

### Internal links

Command: `node links.mjs`. It parses every `<a href>` in the 44 prerendered files and flags internal targets that are neither a prerendered route nor a real file. The `retURL` row comes from 0.6.

| Broken target (rendered in dist) | Pages | Source |
|---|---|---|
| `/blog/AgentforceVibes` | 14: `/`, `/about` and the 12 blog posts, not `/blog` itself (corrected, fact-checked 30 Sep 2026). The same dead link is in the live bundle | `src/components/BlogSection/BlogSection.jsx:92`. Card "AI Powered Salesforce Development Experience"; should be `/blog/agentforce-ai` |
| `/projectmanagement.html`, `/asyncapex.html`, `/shield.html`, `/integrationframework.html`, `/support.html` | `/ItServices` (each linked twice) | `src/ServiceComponents/ServiceMainPage/ServiceMainBlogSection/ServiceMainBlogSection.jsx:23,31,39,47,55` |
| Twitter share URL `https://codmsoftware.co.uk/integrationframework.html` | 11 of 12 blog posts | `src/BlogsComponents/BlogSidebar/*Sidebar.jsx` (around lines 58–80). Every post shares the legacy integration-framework URL instead of its own |
| Web-to-Lead hidden `retURL` `https://codmsoftware.co.uk/SalesforceCRM.html` | 32 prerendered pages | `BlogFormSection.jsx:20`, `HigherEducation/S_lastSection.jsx:29`. After deploy, anyone who submits one of these forms lands on "Page not found" |

Bad links that exist only in `src` and are **not rendered on any page** (dead or commented-out code):
- `src/AboutComponents/FifthSection/FifthSection.jsx:88,118,148` (`/integrationframework.html`, `/triggerframework.html`, `/revenueCloud.html`). FifthSection is not imported anywhere, so, contrary to the brief, it is not live on `/about`.
- `src/components/Navbar/NavbarTest/NavbarTest.jsx`: `/service/*` ×29; not imported.
- `src/components/TestimonialsSection/TestimonialsSection.jsx:57`: `/help-center`; not imported.
- `src/SaasAiHomeComponents/Navbar/Navbar.jsx:368,374`: not imported.
- `src/ServiceComponents/HigherEducation/S_rightContainer/S_rightContainer.jsx:13–67`: `/ItServices/marketing-cloud`, `/higher-education`, `/financial-service`, `/data-cloud-ai`. Every `<S_rightContainer/>` usage is commented out.

### Other URLs found via WebSearch

**Queries used:**
- `site:codmsoftware.co.uk`
- `site:codmsoftware.co.uk blog`
- `site:codmsoftware.co.uk salesforce`
- `site:codmsoftware.co.uk ItServices cloud`
- `codmsoftware.co.uk`
- `"codmsoftware.co.uk" html Salesforce CODM Software Limited`

The WebSearch tool's engine is unspecified and it returns US results.

**URLs on codmsoftware.co.uk seen in the results:**
- `https://www.codmsoftware.co.uk/`
- `/terms-conditions`
- `/AI-Powered_Dashboard.html`
- `/API-Integration.html`
- `/BuildingLLM.html`
- `/triggerframework.html`
- `/revenueCloud.html`
- `/blog/integration-framework`
- **`/industriescloud.html`** (new)
- **`/blog/salesforceagentforce`** (new)
- **`/blog/Salesforce-Revenue-Cloud`** (new)
- `/ItServices` (homepage-style title)
- `/ItServices/salesforce-service-cloud` (homepage title)
- `/ItServices/salesforce-energy-utilities-cloud` ("Salesforce Energy & Utilities Cloud Solutions | CODM Software")
- `/ItServices/salesforce-health-insurance-cloud`
- `/ItServices/deployment-support` ("Deployment Support Services | Smooth Software Deployment | CODM Software")
- `/blog/salesforce-sso-authentication` (homepage title)
- `https://saasailabs.codmsoftware.co.uk/`

**Related entities that come up for the brand query and could be confused with this company:**
- `codmsoftware.com` ("Salesforce Consulting Company in India | CodM Software").
- An AppExchange listing for "CODM SOFTWARE PRIVATE LIMITED".
- A LinkedIn company page whose search snippet says "founded in 2021". The branch's About description says "incorporated 2023".
- Companies House 15333870 appears in the results.

Sources: [site:codmsoftware.co.uk results incl. www home](https://www.codmsoftware.co.uk/), [terms-conditions](https://codmsoftware.co.uk/terms-conditions), [AI-Powered_Dashboard.html](https://codmsoftware.co.uk/AI-Powered_Dashboard.html), [API-Integration.html](https://codmsoftware.co.uk/API-Integration.html), [BuildingLLM.html](https://codmsoftware.co.uk/BuildingLLM.html), [triggerframework.html](https://codmsoftware.co.uk/triggerframework.html), [revenueCloud.html](https://codmsoftware.co.uk/revenueCloud.html), [blog/integration-framework](https://codmsoftware.co.uk/blog/integration-framework), [industriescloud.html](https://codmsoftware.co.uk/industriescloud.html), [blog/salesforceagentforce](https://codmsoftware.co.uk/blog/salesforceagentforce), [blog/Salesforce-Revenue-Cloud](https://codmsoftware.co.uk/blog/Salesforce-Revenue-Cloud), [ItServices](https://codmsoftware.co.uk/ItServices), [salesforce-service-cloud](https://codmsoftware.co.uk/ItServices/salesforce-service-cloud), [salesforce-energy-utilities-cloud](https://codmsoftware.co.uk/ItServices/salesforce-energy-utilities-cloud), [salesforce-health-insurance-cloud](https://codmsoftware.co.uk/ItServices/salesforce-health-insurance-cloud), [deployment-support](https://codmsoftware.co.uk/ItServices/deployment-support), [salesforce-sso-authentication](https://codmsoftware.co.uk/blog/salesforce-sso-authentication), [saasailabs](https://saasailabs.codmsoftware.co.uk/), [LinkedIn](https://uk.linkedin.com/company/codmsoftware), [Companies House 15333870](https://find-and-update.company-information.service.gov.uk/company/15333870), [codmsoftware.com](https://codmsoftware.com/), [AppExchange listing](https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0NHu00000sljewMAA), [Crunchbase](https://www.crunchbase.com/organization/codm-software).

---

## 0.4 Duplicate titles and descriptions

### (a) Live site: every URL has the homepage title and description

The command below was run once per URL, with a 1-second pause and a Chrome user agent: 7 requests to production in total.

```
curl -s -A "Mozilla/5.0 ... Chrome/128" -o page.html -w "%{http_code} %{size_download} %{content_type}" <url>
grep -o '<title>[^<]*</title>' page.html ; grep -oi '<meta name="description"[^>]*>' page.html
```

| URL | Status | Bytes | `<title>` | meta description |
|---|---|---|---|---|
| https://www.codmsoftware.co.uk/ | 200 | 2193 | CODM Software Limited \| Top Salesforce Partner - CRM & AI Solutions | CODM Software provides expert Salesforce consulting, AI & LLM development, CRM solutions, and custom software development for enterprises worldwide. |
| https://codmsoftware.co.uk/terms-conditions | 200 | 2193 | same | same |
| https://codmsoftware.co.uk/ItServices | 200 | 2193 | same | same |
| https://codmsoftware.co.uk/about | 200 | 2193 | same | same |
| https://codmsoftware.co.uk/contact | 200 | 2193 | same | same |
| https://codmsoftware.co.uk/blog | 200 | 2193 | same | same |
| https://saasailabs.codmsoftware.co.uk/ | 200 | 2193 | same (a CODM title on the SaaS AI Labs subdomain) | same |

- Crawlers that don't run JavaScript see one site-wide duplicate title and description on every URL of both hosts, including the saasailabs subdomain. That includes GPTBot, ClaudeBot, PerplexityBot, CCBot, and Google's first HTML pass.
- **Where Google's indexed titles come from:**
  - For `/terms-conditions` and `https://saasailabs.codmsoftware.co.uk/`, Google shows "CODM Software Limited | Top Salesforce Partner". That text is exactly the `og:title` in `index.html:14`. Whether Google picked the og:title or cut the `<title>` short can't be told from the repo or the live site.
    - On `main`, `TermsAndConditions.jsx` has no `<SEO>` call, so this page keeps the shell title even after JavaScript runs (see 0.6.6).
  - For `/blog/integration-framework`, Google shows "What is an Integration Framework? Benefits, Types & Use Cases | CODM Software". That is the `<SEO title=…>` prop in `src/BlogsComponents/IntegrationFrameworkBlog/IntegrationFrameworkBlog.jsx:9`, which suggests Google ran the JavaScript for that URL on the old build.
  - The titles Google shows for the legacy `.html` URLs are **not in the repo**. They come from an older version of the site. Grepping `src/`, `index.html` and `public/` for these strings returns no matches:
    - "Seamless System Connectivity"
    - "AI-Powered Pharmaceutical Dashboard | CodM"
    - "Large Language Model (LLM) Development | AI Solutions by CODM"
    - "Scalable & Maintainable Apex Trigger Architecture"
    - "Unlock Revenue Growth with Salesforce Revenue Cloud"

### (b) Repo and build (`dist/` of this branch, not deployed)

The parser is `scratchpad/parse-dist.mjs` and its output is `scratchpad/dist-meta.json`. It covers 45 HTML files: 42 routes, the alias `/ItServices/data-migration`, `404.html` and `200.html`.

**Uniqueness check (200.html skipped):**
- Every page has exactly one `<title>` and one meta description.
- The only duplicate title, description, H1, og:title or og:description is the intended alias pair:

| Duplicate | Pages |
|---|---|
| title "Data Integration & Migration to Salesforce \| CODM", the same description, H1 "Data Integration/Migration", same og:* | `dist/ItServices/data-integration.html`, `dist/ItServices/data-migration.html` |

- **The alias duplicate is handled by a canonical, not a 301.** The canonical on `data-migration` points to `/ItServices/data-integration` (`page-meta.js` `canonicalAliases`), and the alias is left out of the sitemap (`site-routes.js` `aliases`). `.htaccess` has no redirect for it.
- No prerendered page has a title over 60 characters or a description over 160.

**"Top Salesforce Partner" and the old homepage description in dist:**
- Only `dist/200.html` has them. It contains "Top Salesforce Partner" twice (`<title>` and `og:title`), plus the old description and the old og:description ("Expert Salesforce consulting, AI development, and custom software solutions from CODM Software Limited.").
- No prerendered route has them.

**Same search in the source:**

| String | Where |
|---|---|
| "Top Salesforce Partner" | `index.html:11` (`<title>`), `index.html:14` (og:title). Also quoted in `docs/ai-visibility/DISCOVERY.md:21`. Nothing in `src/` or `public/` |
| Old description "CODM Software provides expert Salesforce consulting, AI & LLM development…" | `index.html:12` only |
| Old og:description | `index.html:15` only |

**Flag: the static head in `index.html` is still the old homepage head, and three kinds of traffic will see it.**

1. **`dist/200.html`, the fallback for any URL that isn't prerendered.** `scripts/prerender.mjs:75-80` copies the shell and adds `noindex, follow`, and `.htaccess` rule 7 serves it.
   - This covers every legacy `.html` URL Google has indexed: rule 4 sends `/x.html` with a 301 to `/x`, and `/x` then falls through to `200.html`.
   - Checked on the local build:
     - `curl -w "%{http_code} %{redirect_url}" http://localhost:4173/triggerframework.html` returns `301 http://localhost:4173/triggerframework`.
     - `/triggerframework` then returns `200`, 2,242 bytes, with `<title>CODM Software Limited | Top Salesforce Partner - CRM & AI Solutions</title>` and `<meta name="robots" content="noindex, follow">`.
     - The client-side router then renders PageNotFound.
     - The result is a soft 404: HTTP 200, the old title in the raw HTML, and `noindex`.
   - `dist/ItServices.html` itself links to five such URLs (see Internal links in 0.3).
2. **The SaaS AI Labs subdomain.**
   - A `VITE_BRAND=saasai` build prerenders only `/` (`scripts/prerender.mjs:91`). Every other URL on that subdomain would get `200.html`, with CODM's "Top Salesforce Partner" title and description.
   - `index.html` also hard-codes `<meta name="author" content="CODM Software Limited">`.
   - Live, the subdomain already serves this CODM shell (table above).
3. **The raw HTML of any page before `SEO.jsx` runs.** Prerendering overwrites this for every route in `site-routes.js`.

**Which `<SEO>` props are actually used.** There are 44 `<SEO …>` usages under `src/`. `src/SeoData/SEO.jsx:71-73` reads `meta = isCodm ? pageMeta[path] || {} : {}`, so the props are only a fallback.
- **On the CODM build,** `src/data/page-meta.js` covers all 42 routes, and `/ItServices/data-migration` is mapped through `canonicalAliases`. Only two sets of props still take effect:
  - `src/pages/PageNotFound/PageNotFound.jsx:10`: "Page not found | CODM Software" / "This page could not be found." with `noindex`. Every unknown URL gets this in the browser.
  - `src/pages/Home/SaasAiHome.jsx:8-9`: "SaaS AI Labs | AI Engineering for Government, Public Services & Enterprise" (74 characters, corrected from 71; fact-checked 30 Sep 2026). Used on the saasai build only.
- **On the saasai brand, page-meta is ignored and all props are used.**
  - If the saasai build rendered other routes, `saasailabs…/about` would get "About CODM Software | Expert Salesforce & AI Solutions Partner" (`src/pages/About/About.jsx:30`).
  - `src/PrivacyPolicy/PrivacyPolicy.jsx:7` and `src/TermsAndConditions/TermsAndConditions.jsx:7` pass no `description`, so `upsertMeta` would **remove** the description tag.
- **No two `<SEO>` usages pass the same title or description.** This was checked with `grep -rhoE '^\s*(title|description)="…"' src | sort | uniq -d`.
- **One keywords string is duplicated, and it does render.** `FinancialServiceCloud.jsx:17` = `HigherEducation.jsx:15` ("CODM Software Limited, Salesforce consulting partner, AI software development, …"). It appears in both `dist/ItServices/salesforce-financial-services.html` and `dist/ItServices/salesforce-education-cloud.html`.
- **Stale extra copies that could drift (maintenance risk):**
  - The prop titles mostly differ from `page-meta.js`. For example, `Home.jsx:34` has "CODM Software Limited | Salesforce Partner & AI Software Experts", while page-meta has "CODM Software | UK Salesforce Consulting Partner & AI".
  - `src/seoMetadata.js` (117 lines, 14 entries) is a third copy of titles and descriptions. No file imports it.
  - `brand.js:26` has a saasai title, "SaasAi Labs | Modern SaaS Solutions", that is never used (see the comment at `App.jsx:72`).

**Smaller notes:**
- `dist/404.html` has the canonical `https://codmsoftware.co.uk/__prerender-not-found__`. The page is `noindex`, so this is only cosmetic.
- **Copy pasted from another page:** `dist/ItServices/salesforce-financial-services.html` contains "Codm's Salesforce Education Cloud services" (`FinancialServiceCloud_Second.jsx:41`), copied from the Education Cloud page.
- **Missing favicon:** `index.html:9` (and so `200.html`) points the favicon at `/New Favicon.svg`. That file is in neither `public/` nor `dist/`, and the local server returns `200 text/html` for it (the SPA fallback).
  - *Fact-checked 30 Sep 2026:* the live shell has the same `/New Favicon.svg` link, so the live site has no working favicon either.
  - The prerendered pages instead link `/CodmFavicon.svg` (from `brand.js:6`) with `type="image/png"`. That file is **1,867,595 bytes (1.8 MB)**, which is very heavy for a favicon, and the declared type is wrong.

---

## 0.5 Brand name variants

### Method

`scratchpad/brand-scan.mjs` does a case-sensitive regex match for `CODM|CodM|Codm|codm|C.O.D.M`, optionally followed by `Software` and `Limited/Ltd./Ltd/Pvt Ltd`. It also matches `SaaS AI Labs` in any casing or spacing. Results are in `scratchpad/brand.json`.

**Files scanned:**
- `src/**/*.{jsx,js,json,css}` (not `src/assets`)
- `index.html`
- the `public/` text files: `robots.txt`, `.htaccess`, `_redirects`, `version.json`
- `docs/**` and `README.md`
- `dist/**/*.html` (45 files, including `200.html` and `404.html`)
- `dist/llms.txt`, `dist/sitemap.xml` and `dist/robots.txt`

**How matches were counted:**
- For `dist`, each match was classified by where it sits in the page: `<title>`, `<meta name/property>`, a JSON-LD field, `alt=`, a heading, or body text.
- Matches that are part of URLs or identifiers are left out of the counts and listed at the end.

### Variants found

| Variant | src count (files) | Rendered dist HTML (occurrences / pages) | Other: index.html, public, docs, README, llms.txt | Example locations | Context type |
|---|---|---|---|---|---|
| **CODM Software** | 156 (51) | 371 / 45 | index 1, public 0, docs 10, README 2, llms.txt 11 | `src/config/brand.js:11` (brand.name); `src/data/company-facts.json:4` (brandName); `src/data/page-meta.js` (title suffix); `src/components/Footer/Footer.jsx:82` (logo alt); `src/AboutComponents/FirstSection/FirstSection.jsx:39` | title (22), og/twitter:title (22 each), **og:site_name (44)**, img alt (90), keywords (35), **JSON-LD Organization/WebSite name (45)**, description (11), h2/h3 (4), body (4) |
| **CODM Software Limited** | 53 (23) | 248 / 45 | index 4, docs 13, README 4, llms.txt 6 | `company-facts.json:5` (legalName); `src/SeoData/SEO.jsx:96` (author, hard-coded); `Footer.jsx:59` (G-Cloud strip); `AboutComponents/AtAGlance/AtAGlance.jsx:93` (h3); `index.html:11` | **meta author (45)**, title (4: about, PrivacyPolicy, terms-conditions, 200.html), **JSON-LD legalName and description (43 + 43)**, body (85), h3 (1) |
| **CODM** (on its own) | 94 (26) | 186 / 33 | docs 35, README 1 | `page-meta.js` (title suffix "\| CODM" on 18 pages); `src/pages/Blog/Header/Header.jsx:13` (**H1** "…insights from CODM"); `src/pages/Products/Products.jsx:32` (**H1** "…built by CODM"); `src/components/Hero/Hero.jsx:106` (alt); `src/components/ExecutiveGuide/ExecutiveGuide.jsx:213` ("CODM · Executive Guide") | title (18), og/twitter:title (18), **h1 (2)**, h2 (8), h3 (8), h5 (15), alt (18), body (62), JSON-LD FAQ text |
| **Codm** | 80 (33), of which 69 are `alt="Codm"` in 32 files | 54 / 26 (45 alt, 9 body) | 0 | `AboutComponents/ThirdSection/ThirdSection.jsx:33` (alt); `BuildingLLMDevelopment_Second.jsx:34` ("efficiency.Codm's", missing space); `ServiceLastSection.jsx:18` ("customers choose Codm."); `ReactApplication_Second.jsx:35` ("At Codm,we"); `MarketingCloud_Second.jsx:37` | img alt, body copy on 9 service pages |
| **Codm Software** | 5 (4) | 3 / 2 | 0 | `AIPoweredDashboard_FirstSection.jsx:165` (h4 "Why Choose Codm Software…"), `:180`; `SalesforceIIM_first.jsx:48`; `IndustriesCloud_Second.jsx:40` ("Codm Software UK", not rendered); `SaasAiHomeComponents/Navbar/Navbar.jsx:496` | h4, body |
| **Codm software** | 1 | 0 | 0 | `src/components/Navbar/Navbar.jsx:531` (nav link to codmsoftware.co.uk, shown on the saasai brand only) | nav (saasai) |
| **codm software limited** | 1 | 1 / 1 | 0 | `src/BlogsComponents/SSO/SSO.jsx:14` | meta keywords |
| **CodM** | 4 (1) | 0 | 0 | `src/components/TestimonialsSection/TestimonialsSection.jsx:91,114,142,168` (component not imported anywhere) | body (dead code) |
| **CodM Software** | 1 | 43 / 43 | docs 1 (`DISCOVERY.md:21`, quoting the title of codmsoftware.com, the Indian company's site) | `company-facts.json:8` (alternateNames) | **JSON-LD alternateName** |
| **CODM Software Ltd** | 1 | 43 / 43 | 0 | `company-facts.json:7` (alternateNames) | **JSON-LD alternateName** |
| **CodM Software Ltd.** | 4 (3) | 44 / 44 (every page except 200.html) | 0 | `src/config/brand.js:19` (copyright, rendered by `src/pages/PoliciesBar/PoliciesBar.jsx:37`); `PoliciesBar.jsx:36` (comment); `SaasAiHomeComponents/Footer/Footer.jsx:153` (not imported) | **footer copyright line** |
| **CodM Software Pvt Ltd** | 3 (1) | 0 | docs 8 | `company-facts.json:14, :74, :88` (TODO_VERIFY notes, removed from schema) | data note |
| **SaaS AI Labs** | 20 (11) | 89 / 44 | docs 7, README 2 | `Footer.jsx:89` (logo alt); `company-facts.json:16` (→ JSON-LD subOrganization.name); `ContactSection_SecondSection.jsx:78`; `ContactMapSection.jsx:51`; `SaasAiHome.jsx:8` (saasai title) | footer alt (44), **JSON-LD name (43)**, body (2) |
| **SAAS AI Labs** | 3 (2) | 88 / 44 | 0 | `src/components/Navbar/Navbar.jsx:502, :519` (header "partner" link, desktop and mobile); `brand.js:30` (saasai copyright "Copyright © 2026 SAAS AI Labs All Rights Reserved") | **header nav on every CODM page**, saasai footer |
| **SaasAi Labs** | 3 (2) | 0 (CODM build) | 0 | `brand.js:22` (saasai brand.name → og:site_name, author and logo alt on the saasai build); `brand.js:26` (unused title); `App.jsx:98` (string comparison) | meta og:site_name / author (saasai build) |
| **SAAS AI LABS** | 1 | 0 | 0 | `src/components/Navbar/NavbarTest/NavbarTest.jsx:261` (component not imported) | dead code |

**Searched for and not found anywhere** (src, index, public, docs, README, dist):
- "CodM Software Limited", "CodM Software Ltd" (without the full stop), "CODM Software Ltd." (with it)
- "CODM SOFTWARE", "C.O.D.M", "CodM software", "Codm Software Pvt"
- "Saas AI Labs", "SaaS Ai Labs", "SaaSAI Labs"

**Files with no brand-name text:**
- The `public/` text files contain only domain names.
- `dist/sitemap.xml` and `dist/robots.txt` contain none.
- `dist/llms.txt` is consistent: it uses only "CODM Software" (11) and "CODM Software Limited" (6).

**Left out of the counts: identifiers, file names and URLs.**
- `codm_Logo`: the `brand.js:14` key (line corrected, fact-checked 30 Sep 2026), and the class `brand-logo codm_Logo` on 44 dist pages.
- `codmlogo`, `codmFavicon`, `/CodmFavicon.svg` (the favicon link on 44 dist pages).
- CSS variables `--codm-*` (`src/Cookies/Cookies.css`), `isCodm` (`SEO.jsx`) and the storage key `codm_cookie_consent`.
- Brand keys `codm`/`saasai` (`brand.js:10,34`) and the hostname check `"saasailabs"` (`brand.js:36`).
- The JSON key `saasAiLabs` (`company-facts.json:15`) and the imports `SaasAiHome` / `saasAiHome` / `saasAilogo.png`.
- Domains: `codmsoftware.co.uk`, `info@codmsoftware.co.uk`, `codmsoftware.com`.
- The LinkedIn slug `codm-software-limited` (`Footer.jsx:112` and 12 blog sidebars) and the GitHub org `CODM-Software-LImited` (docs).
- The JSX comment `{/* why choose codm ? */}` (`ReactIntegration.jsx:73`).

### Most visible places (rendered CODM build)

| Place | What appears | Source |
|---|---|---|
| `<title>` (45 files) | 21 pages "… \| CODM Software"; 18 pages "… \| CODM"; 3 pages "… \| CODM Software Limited" (about, PrivacyPolicy, terms-conditions) plus 200.html "CODM Software Limited \| Top Salesforce Partner…"; blog.html "… \| CODM Software Blog"; `blog/agentforce-ai` has no brand at all | `page-meta.js`, `index.html:11` |
| H1 | The brand appears only on `/blog` ("Salesforce and AI insights from CODM") and `/products` ("Software products built by CODM"). The homepage H1 has no brand | `Blog/Header/Header.jsx:13`, `Products.jsx:32` |
| Header | Logo alt "CODM Software" (brand.name); partner link "SAAS AI Labs" | `Navbar.jsx:222`, `:502/519` |
| Footer | Logo alt "CODM Software"; "CODM Software Limited has been named as a supplier…"; SaaS logo alt "SaaS AI Labs"; **"Copyright © 2026 CodM Software Ltd. All Rights Reserved"** | `Footer.jsx:82, :59, :89`; `brand.js:19` |
| JSON-LD (43 pages) | Organization `name` "CODM Software", `legalName` "CODM Software Limited", `alternateName` ["CODM Software Ltd","CodM Software"]; WebSite `name` "CODM Software"; subOrganization `name` "SaaS AI Labs" | `company-facts.json:4-9,16` via `schema.js:50-52,82,94` |
| meta author | "CODM Software Limited" (45 pages; on the saasai build it would be brand.name "SaasAi Labs") | `SEO.jsx:96`, `index.html:18` |
| og:site_name | "CODM Software" (44 pages) | `brand.js:11` via `SEO.jsx:85` |

### Assessment

- **The structured layer is consistent.** JSON-LD, author, og:site_name, titles and llms.txt all use the brand "CODM Software" and the legal name "CODM Software Limited".
- **The visible layer is not:**
  - **The copyright line on every page says "CodM Software Ltd."** That form matches neither the legal name, nor brand.name, nor either alternateName.
  - **45 image alts on 25 pages say "Codm"** (corrected from 26 pages, fact-checked 30 Sep 2026; the table's 26 pages for "Codm" also counts `/ItServices`, which has "Codm" only in body text).
  - **About 12 visible spots on about 10 pages** say "Codm", "Codm's" or "Codm Software". Some have typos: "efficiency.Codm's" and "At Codm,we".
- **The subdomain name appears in three casings:**
  - "SaaS AI Labs" (footer, JSON-LD, facts)
  - "SAAS AI Labs" (header nav, saasai copyright)
  - "SaasAi Labs" (saasai brand.name → og:site_name/author)
- **"CodM" blurs the line with the Indian company.**
  - "CodM" is the casing used by the Indian company, CodM Software Pvt Ltd / codmsoftware.com (`DISCOVERY.md:18,21`, `FACTS.md:8`).
  - Using "CodM" in the UK site's copyright line and in the JSON-LD `alternateName` weakens the distinction between the UK and Indian entities, which AI assistants rely on.
  - The relationship between the two companies is still `TODO_VERIFY` (`company-facts.json:14`).

---

## 0.6 Host and canonical behaviour

### Method

- **Live:** 33 GET/HEAD requests with curl (desktop Chrome user agent) on 2026-09-29.
- **Local build:** http://localhost:4173 (`scripts/serve-dist.mjs`), tested with a Node fetch script using `redirect: "manual"`.
- **Rules:** `public/.htaccess` (byte-identical to `dist/.htaccess`) was read rule by rule.

### What is actually live

- The live shell is byte-identical to `main:dist/index.html` (see 0.1).
- `main` has no `.htaccess` in `public/` or `dist/`, only `_redirects` (`/* /index.html 200`, which Hostinger ignores). Its `.htaccess` is at the repo root.
- Live still serves real files as themselves:
  - `/logo.png`: image/png, 5,233 B. *Fact-checked 30 Sep 2026:* the committed `main:dist/logo.png` is 4,305 B, so the live copy is not the committed file (see 0.1).
  - `/version.json`: application/json
  - the JS bundle: 1,179,934 B
- Everything else gets the shell.
- So the live catch-all rewrite comes either from server configuration or from an `.htaccess` placed on the server outside committed `dist/`, most probably a copy of `main`'s root `.htaccess`, which has exactly this behaviour. Which one it is can't be determined from outside (`/.htaccess` returns 403).

### 0.6.1 HTTP → HTTPS

| Request | Result |
|---|---|
| `curl -si http://codmsoftware.co.uk/` | `301`, `location: https://codmsoftware.co.uk/` |
| `curl -si http://www.codmsoftware.co.uk/` | `301`, `location: https://www.codmsoftware.co.uk/` (stays on www) |
| `http://codmsoftware.co.uk/ItServices?x=1` | `301` to `https://codmsoftware.co.uk/ItServices?x=1` (path and query kept) |
| `http://codmsoftware.co.uk:80/about` | `301` to `https://codmsoftware.co.uk/about` |

- Every redirect is one hop and keeps the host.
- Headers: `Server: hcdn`, `platform: hostinger`, `panel: hpanel`, `x-hcdn-cache-status: MISS`, `x-hcdn-upstream-rt: 0.13s`.
- The body is the 795-byte LiteSpeed/Hostinger default page ("301 Moved Permanently … The document has been permanently moved.").

**Where the 301 is generated (auditors differ).**
- **0.1** attributed it to "the CDN edge or Hostinger Force HTTPS".
- **0.6** infers that the **origin** generated it, based on the `x-hcdn-upstream-rt: 0.13s` header: the CDN passed the request upstream, so the edge did not answer on its own.
- **0.6's evidence is more specific,** but it is still an inference.
- *Verified during assembly:* `main`'s root `.htaccess` has no HTTPS rule. So if the live `.htaccess` is a copy of it, the redirect most likely comes from the hPanel "Force HTTPS" setting. It cannot be confirmed from outside.

**Branch `.htaccess` and HTTPS.**
- The branch `.htaccess` deliberately does **not** redirect HTTP to HTTPS. The comment at `public/.htaccess:21-23` says it is "handled by Hostinger … can loop behind the CDN".
- **Risk:** if the current redirect actually lives in an untracked server `.htaccess`, deploying this file overwrites it and HTTP → HTTPS disappears.
- After deploy, check that `curl -sI http://codmsoftware.co.uk/about` still returns a 301 to https.

### 0.6.2 www vs non-www

- **DNS:** `www.codmsoftware.co.uk` is a CNAME to `www.codmsoftware.co.uk.cdn.hstgr.net` (Hostinger CDN). The apex is also answered by `Server: hcdn`.
- **Live:**
  - `https://www.codmsoftware.co.uk/` and `https://codmsoftware.co.uk/` both return `200` with the identical 2,193 B shell. So do `/ItServices` and `/robots.txt` on www.
  - **Neither host redirects to the other**, and the raw HTML has no canonical. Both hosts are fully duplicated today.
- **Branch `.htaccess` rule 1** (`public/.htaccess:24-25):
  - `www.codmsoftware.co.uk` gets a 301 to `https://codmsoftware.co.uk/$1`.
  - The match is case-insensitive, and the query string is kept (no `QSD`).
  - **Worst case after deploy is 3 hops,** because rule 1 runs before the trailing-slash rule: `http://www…/about/` → `https://www…/about/` → `https://codmsoftware.co.uk/about/` → `…/about`.
  - Rule 1 is an exact match, so it does not catch `www.codmsoftware.co.uk.` (trailing dot) or any other host.
- **Host consistency on the branch: consistently apex.**
  - `src/data/company-facts.json` `siteUrl` feeds `SITE` in `src/SeoData/schema.js:8` and `scripts/generate-seo-files.mjs:23`. These produce the canonicals, JSON-LD, sitemap and llms.txt.
  - The following are also on the apex: the `Sitemap` line in `public/robots.txt`, `DEFAULT_IMAGE` in `SEO.jsx`, `siteUrl` in `brand.js`, and the target of `.htaccess` rule 1.
  - In all, `https://codmsoftware.co.uk` is hard-coded 93 times across 57 files in `src`/`public`/`scripts`.
  - `http://www.codmsoftware.co.uk` appears only as hidden form values, in `ExecutiveGuide.jsx:72` and `FreeQuotePopup.jsx:91`.
- **Conflict with the brief.**
  - The brief recommends **www**. Google currently shows the **homepage on www** and the **inner pages on the apex**. The old live app (`main`) also sets apex canonicals client-side (see 0.6.6).
  - The old Next.js site's archived `sitemap.xml` (Nov 2025) also listed only apex URLs (see 0.1; fact-checked 30 Sep 2026).
  - Either host works, provided the 301, canonical, sitemap, robots.txt and JSON-LD all agree. The branch is already fully consistent on the apex.
  - Switching to www means changing `siteUrl`, inverting `.htaccess` rule 1, and updating `robots.txt`, `SEO.jsx` (`DEFAULT_IMAGE` and the `absoluteImage` regex), `brand.js` and the footer links.
  - **The owner needs to decide this before deploy.**
- **Related host: `saasailabs.codmsoftware.co.uk`.**
  - `https://saasailabs.codmsoftware.co.uk/` returns `200` with `Server: LiteSpeed`, so it does not go through hcdn.
  - It serves the **same CODM shell**: the same title and the same bundle, `index-B21EEsvu.js`. Its `Last-Modified` is 16 Sep 2026 10:56:29, which shows it was a separate upload.
  - Google indexes it with the CODM title. The branding switch happens only in the browser (the hostname check in `brand.js`).
  - Whether it shares a document root with the apex, and what will be deployed there, can't be determined from the repo.

### 0.6.3 Case-insensitive matching

- **Live:** `/itservices` returns `200` with the same shell as `/ItServices`, with no redirect and no difference. The old app then renders the Services page in the browser.
- **React Router:**
  - Version 7.13.0 (`node_modules/react-router/package.json`).
  - `compilePath(path, caseSensitive = false, end = true)` builds `new RegExp(src, caseSensitive ? void 0 : "i")` and appends `\/*$`, which also accepts trailing slashes (`node_modules/react-router/dist/development/chunk-JZWAC4HX.mjs:760-785`).
  - No route in `src/` sets `caseSensitive`.
  - So `/itservices`, `/ITSERVICES` and `/About` all render the real page in the browser.
- **Branch `.htaccess` on Hostinger (Linux, case-sensitive filesystem):**
  - Rule 5's check `%{DOCUMENT_ROOT}/itservices.html -f` fails, so rule 7 serves `200.html`: a 200 status, a `noindex, follow` shell and no content.
  - The app then renders the Services page, and `SEO.jsx` sets the canonical from `canonicalPath(pathname)` (`src/SeoData/SEO.jsx:53-55`). That function keeps the case, so the canonical becomes `https://codmsoftware.co.uk/itservices`: the lowercase duplicate points to itself.
  - `pageMeta["/itservices"]` also misses, so the title and description fall back to the component props.
  - The same happens for `/About`, `/privacypolicy` and similar URLs.
- **The local test hides this.** On Windows (NTFS is case-insensitive), `/itservices`, `/ITSERVICES`, `/About` and `/itservices/salesforce-sales-cloud` all get `200` with the prerendered file and the correct canonical. Production will behave differently.
- **Fix options:**
  - Make `canonicalPath` map case-insensitively to the known route keys.
  - And/or add explicit 301s for lowercase variants, e.g. `RewriteRule ^itservices(/.*)?$ /ItServices$1 [R=301,L]` and `^privacypolicy$`. `RewriteMap tolower` is not available in `.htaccess`.
  - Long-term: lowercase route slugs, with 301s from the old ones.

### 0.6.4 Trailing slash, index and .html variants

| URL | Live today | Local server (serve-dist.mjs) | Branch .htaccess on Hostinger (predicted) |
|---|---|---|---|
| `/about/` | 200 shell | 301 to `/about` | rule 3: 301 to `/about` |
| `/ItServices/` | 200 shell | 301 to `/ItServices` | rule 3: 301 to `/ItServices` |
| `/blog/integration-framework/` | 200 shell | 301 to `/blog/integration-framework` | rule 3 |
| `/index`, `/index.html` | 200 shell | 301 to `/` | rule 2: 301 to `/` |
| `/about.html`, `/ItServices.html` | 200 shell | 301 to `/about`, `/ItServices` | rule 4 (uses `THE_REQUEST`, so there is no loop with rule 5) |
| `/blog/g-cloud-framework-suppliers-uk` (also with `/`) | 200 shell | 301 to `/blog/g-cloud15` | rule 2 |
| `/ItServices/data-migration` | 200 shell | 200 prerendered, canonical to `/ItServices/data-integration` | rule 5 (same) |
| `/about?utm_source=x` | n/a | 200 `about.html`, canonical without the query | same |
| `/200.html`, `/404.html` | 200 shell | 200 (direct access, both `noindex`) | rule 6: 200 |
| `/this-page-does-not-exist-xyz-123` | 200 shell (soft 404) | **200** `200.html` (2,242 B, `noindex, follow`) | rule 7: **200** `200.html` (soft 404) |

**Legacy `.html` URLs that Google has indexed will hit dead ends after deploy.**
- Rule 4 sends `/AI-Powered_Dashboard.html`, `/API-Integration.html`, `/BuildingLLM.html`, `/triggerframework.html` and `/revenueCloud.html` to extensionless paths. The local server confirms this (e.g. `301 loc=/AI-Powered_Dashboard`).
- None of those paths exist, so rule 7 serves the `noindex` `200.html` and the app shows PageNotFound. Ranking signals are dropped instead of passed on.
- There are no entries for these URLs in `redirects` (`src/data/site-routes.js`). See the merged mapping table in 0.3 for suggested targets.
- Internal links to legacy URLs in the build are listed under "Internal links" in 0.3. They include the `/ItServices` card links and the `SalesforceCRM.html` `retURL` on 32 pages.

**Things the repo can't settle; test after deploy:**
1. **Directory/file clashes.** `ItServices`, `blog` and `products` each exist as both a `.html` file and a directory. `DirectorySlash Off` (`public/.htaccess:9`) is an Apache mod_dir directive, and whether LiteSpeed honours it can't be determined from the repo. If it doesn't, `/blog` could redirect to `/blog/`, which rule 3 sends back, creating a loop. Check that `/ItServices`, `/blog` and `/products` return 200 with the prerendered HTML.
2. **Scheme of the redirect targets.** Rules 2, 3 and 4 use path-only targets, so the server builds the absolute `Location` from the scheme it sees. Behind hcdn that could be `http://`, which would add a hop. Making the targets absolute (`https://codmsoftware.co.uk/$1`) avoids this and also collapses the www + trailing-slash chain.
3. **Document root.** Rule 5 depends on `%{DOCUMENT_ROOT}` pointing at the deployed `dist`.
   - *Added (fact-checked 30 Sep 2026):* rule 4's target `/%1` depends on the backreference from its first `RewriteCond` surviving the negated second one (`%1 !^(index|200|404)$`). Apache mod_rewrite keeps it; LiteSpeed's emulation has not been tested. After deploy, check that `/about.html` returns a 301 to `/about`, not to `/`.
4. **Upload of the dotfile.** `.htaccess` must actually be uploaded. `dist/.htaccess` is currently untracked in git, like the rest of the rebuilt `dist/` (70 untracked paths, including every prerendered page); only the old `main` build is committed (corrected, fact-checked 30 Sep 2026). Hidden dotfiles are easy to miss in FTP and File Manager uploads.

### 0.6.5 Port and trailing-dot hosts (live)

- `https://codmsoftware.co.uk.:443/` and `/about`: `200`, same shell, TLS verified (`ssl_verify=0`). curl sent `Host: codmsoftware.co.uk.`, which was accepted with no redirect.
- `https://codmsoftware.co.uk:443/about`: `200`, same shell.
- **After deploy, trailing-dot hosts will still be served without a redirect,** because rule 1 is anchored as `^www\.codmsoftware\.co\.uk$`.
- The absolute apex canonical limits the damage, so this is low priority.
- **Optional fixes:**
  - Change the pattern to `^www\.codmsoftware\.co\.uk\.?$`.
  - Or add a rule that redirects any host other than the canonical one. Don't use this if saasailabs shares the document root.

### 0.6.6 Canonical tags

**LIVE, raw HTML:** no URL has a `<link rel="canonical">`, `og:url` or robots meta, because every URL gets the same shell. Crawlers that don't run JavaScript (GPTBot, ClaudeBot, PerplexityBot, CCBot) see no canonical at all.

**LIVE, after JavaScript runs** (from `git show main:src/SeoData/SEO.jsx`): `upsertCanonical(url)` runs in `useEffect`, using a hard-coded **apex** `url` prop on each page. There are three problems:
- `/ItServices` sets its canonical to `https://codmsoftware.co.uk/services` (`main:src/ServiceComponents/ServiceMainPage/ServiceMainPage.jsx:18`). That route doesn't exist and renders PageNotFound.
- The homepage canonical is `https://codmsoftware.co.uk` with no trailing slash (`main:src/pages/Home/Home.jsx:36`).
- `PrivacyPolicy.jsx`, `TermsAndConditions.jsx` and `PageNotFound.jsx` on `main` contain no `<SEO>` at all. So `/terms-conditions` has no canonical and keeps the shell title. This matches Google showing `/terms-conditions` titled "CODM Software Limited | Top Salesforce Partner".

**BUILD** (`dist/*.html`, extracted with a regex script):
- Every file has exactly one canonical, always on `https://codmsoftware.co.uk`.
- `og:url` equals the canonical on every page.
- There is no hreflang.

| File | Canonical | robots |
|---|---|---|
| index.html | `https://codmsoftware.co.uk/` | index, follow, max-image-preview:large |
| about, contact, faq, g-cloud-15, blog, products, PrivacyPolicy, terms-conditions (.html) | `https://codmsoftware.co.uk/<same path>` | index |
| ItServices.html + 19 × ItServices/*.html (excluding data-migration) | self, e.g. `…/ItServices/salesforce-sales-cloud` | index |
| products/futura.html | `…/products/futura` | index |
| 12 × blog/*.html | self, e.g. `…/blog/integration-framework` | index |
| ItServices/data-migration.html | `…/ItServices/data-integration` (intentional alias) | index |
| 404.html | `https://codmsoftware.co.uk/__prerender-not-found__` (prerender artefact) | noindex, follow |
| 200.html | none | noindex, follow |

- All 42 sitemap URLs were fetched from the local server. Every one returned `status 200`, with `canonical == <loc>` and `robots=index`: **0 mismatches**.
- The canonical host (apex) differs from the brief's recommended www; see 0.6.2.

---

## 0.7 Other items

### sitemap.xml

- **Live:** `/sitemap.xml` returns `200 text/html`, the 2,193 B shell. There is no sitemap.
- **Build** (`dist/sitemap.xml`, 6,354 B):
  - **42 `<url>` entries**, all on `https://codmsoftware.co.uk`, matching the 42 routes in `src/data/site-routes.js`.
  - None has a trailing slash (apart from `/`), none ends in `.html`, and none is a redirect source.
  - The alias `/ItServices/data-migration` is correctly left out (`aliases`).
  - Mixed-case paths (`/ItServices…`, `/PrivacyPolicy`) match the canonicals.
  - Each URL has `<priority>`; none has `<changefreq>`.
- **lastmod:**
  - **Source:** `src/data/route-dates.json`, written by `scripts/generate-route-dates.mjs:12-21`. The date is the `git log -1 --format=%cs` date of the route's single `source` folder, or today's date if that folder has uncommitted changes.
  - **Distribution:** 30 × 2026-09-25, 6 × 2026-09-16, 5 × 2026-08-10, 1 × 2026-09-04.
  - **Weakness:** changes to shared components aren't counted. For example, `/` shows 2026-09-16 (from `src/pages/Home`), but its H1 lives in `src/components/Hero/Hero.jsx`, which last changed on 2026-09-25 (`56e9b42`).
- **robots.txt:**
  - The branch's `public/robots.txt` (identical to the dist copy) has `Sitemap: https://codmsoftware.co.uk/sitemap.xml`, which is correct for the apex choice.
  - Live `/robots.txt` returns the HTML shell, so there is effectively no robots.txt and no sitemap reference.

### llms.txt

- **Live:** returns `200 text/html`, the shell.
- **Build** (`dist/llms.txt`, 9,810 B):
  - Starts with `# CODM Software`, a summary blockquote, and "Key facts": legal name, Companies House 15333870, incorporated 2023-12-07, London HQ address, accreditations and contact details.
  - Then sections of links: **43 links, all on `https://codmsoftware.co.uk`**.
  - No `{{TODO_VERIFY` placeholders leaked (checked with grep).
  - Served locally as `text/plain; charset=utf-8`. The `.htaccess` has `AddType text/plain .txt` plus 1-hour caching.

### Search Console / Bing verification

- **Repo:**
  - No `google-site-verification`, `msvalidate.01`, `yandex-verification`, `facebook-domain-verification` or `p:domain_verify` meta tags anywhere outside `node_modules`.
  - No `google*.html` or `BingSiteAuth.xml` in `public/` or `dist/`.
- **Live homepage raw HTML:** none of these either.
- **DNS** (`nslookup -type=TXT codmsoftware.co.uk`):
  - `google-site-verification=9J_gTpNF…WqGPyA` is present. This means a Google Search Console **Domain property** has been verified or attempted. A Domain property covers http/https, www/apex and subdomains.
  - The SPF record is `v=spf1 include:spf.protection.outlook.com include:_spf.salesforce.com ~all`.
  - **There is no `MS=` or other Bing record.** So there is no evidence of Bing Webmaster Tools, although it may have been set up by importing from GSC, which leaves no token.
- Whether GSC is still verified, and who has access, can't be determined.

### Analytics and cookie banner

**Tags load before consent.**
- `index.html:20-21` loads GA4 (`gtag/js?id=G-CTE4BLE99H`) and calls `gtag('config', …)` immediately. There is no `gtag('consent','default',…)`.
- `index.html:23` injects Microsoft Clarity (`xy4f2xna5a`) immediately.
- The same tags are in every prerendered page and in the live shell. 0.7 reported 43 of 43 indexable pages. *Verified during assembly:* all 45 `dist` HTML files contain both tags, including `200.html` and `404.html`.

**The banner doesn't control anything.**
- `enableCookies()` is empty, and `gtag('consent','update',…)` is commented out at `src/Cookies/Cookies.jsx:126`.
- "Decline", "Manage" and "Save Preferences" only write the `codm_cookie_consent` cookie. **They never stop or start GA or Clarity.**
- The Analytics toggle is **pre-ticked** (`useState(true)`, `Cookies.jsx:27`).
- `savePreferences` calls `getAccessToken()` (`Cookies.jsx:67`), which is commented out. This throws a ReferenceError on every click, which is caught and logged as "Error saving cookie prefs".
- The banner says "By clicking 'Accept All', you consent", but tracking has already started by then.
- The Privacy Policy mentions cookies only in general terms ("control cookies through your browser settings") and names neither Google Analytics nor Clarity. There is no cookie policy page (the PoliciesBar link is commented out).
- During prerendering, third-party requests are blocked (`scripts/prerender.mjs:98-102`), so builds do not send analytics hits.

**UK GDPR/PECR: likely compliance issue.**
- ICO guidance has required prior consent for non-essential analytics cookies.
- The Data (Use and Access) Act 2025 adds a narrower, conditional exemption for some statistical cookies, but it requires a working way to object.
- Whether that exemption applies, especially to Clarity session recording, is a legal question for the owner.
- Either way, a "Decline" button that does nothing is a problem.

**Where it is mounted and how it looks:**
- `<Cookies/>` is mounted at the end of `App.jsx`, inside `<Router>`, after `<Footer/>` and `<PoliciesBar/>`.
- It is a `position: fixed` card in the bottom-right corner, at most 420 px wide. At 768 px and below it becomes a full-width strip along the bottom.
- There is **no scroll lock** (the prerendered page has `<body style="overflow: auto;">`) and no overlay. The settings modal is `display:none` until opened.

**Captured in the prerender:** yes.
- The prerendered pages contain `<div id="cookieConsent" class="show">`, so the banner is visible before JavaScript runs. 0.7 reported all 43 indexable pages. *Verified during assembly:* 44 files, including `404.html`.
- `main.jsx` uses `createRoot().render`, not hydration, so React replaces the markup. The banner then starts hidden and reappears after 500 ms only if there is no consent cookie. Returning visitors who have already consented see it flash.
- The banner and settings text ("We use cookies…", the toggle descriptions) also becomes boilerplate on every page for crawlers that don't run JavaScript.
- **Fix:** prerender the banner without `show`, or strip it in `prerender.mjs`.

**Main content is present without JavaScript in the build.**
- In `dist/index.html` the H1 is at offset 44,617 and the banner at offset 151,400, out of 153,788.
- The file is 153,829 bytes on disk (verified during assembly). The 41-unit difference is probably characters versus bytes and is not material.
- On the live site there is no content in the raw HTML at all (empty `#root`).

### Contact details, address and legal identity

| Item | Footer (every page; Footer.jsx) | /contact (ContactMapSection, ContactSection_*) | /about body | company-facts.json | Notes |
|---|---|---|---|---|---|
| UK phone | "(+44) 0121 818 6924", `tel:+441218186924` (Footer.jsx:39; same in Navbar.jsx:79) | "+44 121 818 6924" | only in nav/footer | +44 121 818 6924 | "(+44) 0121" wrongly combines the country code with the trunk 0. It also appears as plain text in 12 blog and 3 service sidebars. `HigherEducation/S_lastSection.jsx:164` has `href="tel:(+44) 0121 818 6924"`, which dials +44 0121… and may fail |
| USA phone | "(+1) 201 623 3132" | "+1 201 623 3132" | nav/footer | +1 201 623 3132 | consistent digits |
| India phone | "(+91) 9717116432" | "+91 97171 16432" | nav/footer | +91 97171 16432 | formatting only |
| Email | info@codmsoftware.co.uk | same | none | same | consistent |
| London | "71-75 Shelton Street, Covent Garden, London WC2H 9JQ" (listed 2nd, no label) | "Registered head office" | none | "Headquarters" | Check that it matches the Companies House registered office; not determinable from the repo |
| Birmingham | "Edmund House, 12-22 Newhall St, Birmingham B3 3AS" (listed 1st, no "Regus") | "Regus, Edmund House, 12-22 Newhall Street…", tagged "Delivery hub"; the map/info block's default "Address" is Birmingham | none | "Regional office" (`Regus, …`) | role labels differ |
| Plano | "4501 Nightland Dr, Plano, TX 75024, USA", presented as a CODM office | "North America partner office – **Talent4World LLC**" | none | `schema:false`, TODO_VERIFY relationship | the footer implies it is CODM's own office |
| Noida | not shown | "IHDP Business Park, Plot 7, **Serenia**, 2nd floor, Sector 127…" (map card) and "SaaS AI Labs, IHDP Business Park, Plot 7, Sector 127, Noida 201304" | none | "IHDP Business Park, Plot 7, 2nd floor, Sector 127" | three spellings |
| brand.js `address` | – | – | – | – | `"UKRegus - Edmund House…"`: a typo, and **unused** (nothing reads `brand.address`) |
| Company ID | "Company number 15333870" only (Footer.jsx:184) | "Registered head office" wording | – | legalName "CODM Software Limited" | No "Registered in England and Wales" and no "Registered office:" label next to the number. UK trading-disclosure rules expect the registered name, number, part of the UK and registered office on the website. Numbers with no prefix are England and Wales registrations; confirm |
| Legal name | Appears only in the G-Cloud sentence above the footer (CODM brand only) | – | – | "CODM Software Limited" | The copyright line (PoliciesBar, from `brand.js:19`) is "Copyright © 2026 **CodM Software Ltd.**" |
| Social | X icon links to the bare `https://twitter.com` (Footer.jsx:108); LinkedIn `/company/codm-software-limited/`; YouTube channel | – | – | X handle is TODO_VERIFY | |
| Other claim | NewsletterSection "Join **52,000+** people on our newsletter" (NewsletterSection.jsx:141), shown just above the footer | | | not in facts | unverified claim |

The JSON-LD on these pages lists only the London and Birmingham addresses; Plano and Noida are excluded by `schema:false`. That is consistent with `company-facts.json`, but not with the footer, which shows Plano.

### Security headers (live, `curl -sI https://codmsoftware.co.uk/`)

| Header | Present? |
|---|---|
| Strict-Transport-Security | **absent** |
| X-Content-Type-Options | **absent** |
| Referrer-Policy | **absent** |
| X-Frame-Options (or CSP `frame-ancestors`) | **absent** |
| Content-Security-Policy | only `upgrade-insecure-requests` (added by Hostinger; also on the 301s and on saasailabs) |
| Permissions-Policy | absent |

- Also present: `Server: hcdn`, `platform: hostinger`, `panel: hpanel`, `x-hcdn-cache-status: DYNAMIC` (HTML is not cached at the edge).
- The branch `.htaccess` sets **only** `Cache-Control` (`public/.htaccess:56-59`). A `Header always set …` block for the headers above would be a cheap addition.
- Add HSTS with `includeSubDomains` only once every subdomain, including saasailabs, is HTTPS-only.

### 404 handling

- **Live:**
  - `/this-page-does-not-exist-xyz-123` returns **200**, the 2,193 B shell, with the homepage title.
  - There is no `noindex`: `main`'s PageNotFound has no `<SEO>`, and `main` contains no "noindex" anywhere.
  - So these are soft 404s, and so are `/404.html` and `/200.html`.
- **Build and local server:**
  - A nonsense URL returns **200** with `200.html` (2,242 B, `noindex, follow`, no canonical, no content). Rule 7 on Hostinger would behave the same.
  - After JavaScript runs, PageNotFound renders with `noindex` (`src/pages/PageNotFound/PageNotFound.jsx:10`) and a canonical to the requested URL.
  - Google will drop these URLs, but crawlers that don't run JavaScript get an empty page with a 200 status.
- **`dist/404.html` is never served** for unknown URLs, because there is no `ErrorDocument` and rule 7 catches everything.
  - The file is 67,780 B (corrected from 67,762; fact-checked 30 Sep 2026), has real content and is `noindex`.
  - Requested directly, it returns 200.
  - It carries the canonical `/__prerender-not-found__`, which needs removing if it is ever wired up.
- **A real 404 is possible.** Every indexable route is prerendered, so rule 7 could return a real 404, e.g. `ErrorDocument 404 /404.html` plus `RewriteRule ^ - [R=404,L]` for unknown paths. Lowercase and legacy variants would need to be redirected first.

### Lighthouse baseline (verified during assembly)

- **Tool:** Lighthouse 13.5.0 with system Chrome, one run each. The categories were performance, accessibility, best practices and SEO.
- **Target:** the local branch build (`scripts/serve-dist.mjs`, which serves files **uncompressed** and without HTTP/2). Absolute performance numbers are therefore pessimistic compared with the Hostinger CDN; use them as a before/after reference, not as production values.
- **The live site could not be measured**, because Hostinger's CDN answered Lighthouse with 403 (see 0.2 §3a).
- **Where the raw reports are:** the scratchpad, `lh/before/*.json`.

| Page | Preset | Perf | A11y | Best practices | SEO | LCP | CLS | TBT | Page weight |
|---|---|---|---|---|---|---|---|---|---|
| `/` | mobile | 38 | 85 | 77 | 92 | 44.4 s | 0.106 | 580 ms | 14,126 KiB |
| `/ItServices/api-integration` | mobile | 51 | 96 | 77 | 100 | 15.5 s | 0 | 240 ms | 6,474 KiB |
| `/blog/trigger-framework` | mobile | 53 | 89 | 77 | 100 | 36.8 s | 0 | 190 ms | 11,878 KiB |
| `/` | desktop | 59 | 81 | 77 | 92 | 8.1 s | 0.028 | 50 ms | 14,130 KiB |
| `/ItServices/api-integration` | desktop | 67 | 92 | 77 | 100 | 4.9 s | 0.001 | 60 ms | 6,474 KiB |
| `/blog/trigger-framework` | desktop | 58 | 85 | 77 | 100 | 6.3 s | 0.126 | 50 ms | 11,405 KiB |

---

## Where the sources disagree

| Point | Positions | Stronger evidence |
|---|---|---|
| GPTBot access to live pages | The brief records 200 for GPTBot on `/` and `/ItServices` in an earlier residential test. 0.2 got 429 seven times out of seven on 29 Sep 2026 | **0.2.** It recorded full user-agent strings, repeated the test and captured request IDs. The brief's GPTBot string is not recorded. Bare `GPTBot` with no version gets 200, and the block may be intermittent; neither explanation is verified. *Fact-checked 30 Sep 2026:* pages and sitemap got 429 again (4 of 4; 11 of 11 over both days) and bare `GPTBot` got 200 again. `/robots.txt`, reported as let through on 29 Sep, got 429 in 2 of 8 tries on 30 Sep |
| Where HTTP → HTTPS is generated | 0.1: "CDN edge or Hostinger Force HTTPS". 0.6: the origin, because `x-hcdn-upstream-rt` is present on the 301 | **0.6** (a specific header), but it is still an inference. `main`'s root `.htaccess` has no HTTPS rule (verified during assembly), which points to the hPanel setting if that file is what's live |
| FifthSection.jsx `.html` links | The brief implies they are live. 0.1, 0.3 and 0.4 found the component is imported nowhere and its links are in no bundle or `dist` page | **Auditors.** Dead code; not live |
| `/support.html` target | 0.1: no equivalent page. 0.3: `/ItServices/technical-support`, by card label only | Neither is strong. Owner decision |
| Live `.htaccess` origin | 0.2: probably `main:.htaccess` (repo root). 0.6: "server config or an `.htaccess` not in git" | Consistent once reworded: `main`'s root `.htaccess` is in git but was never inside committed `dist/`, so it must have been uploaded separately. The live file itself can't be read (403) |
| Route counts on `main` | 0.1: 44 `<Route>` elements on `main`. 0.3: the live bundle's router "has 42 paths" | **Reconciled (fact-checked 30 Sep 2026): 0.1 is right.** The live bundle has 44 distinct `path:` values, including `*`, `blog`, `/products/:slug`, the g-cloud redirect and the data-migration alias. That matches `main:src/App.jsx` (44) and the branch (46 = 44 + `/index` + `/faq`). "42" is the `site-routes.js` count. Neither affects any finding |
| Pages with the visible cookie banner / analytics tags | 0.3: cookie modal on 44 pages. 0.7: banner and tags on 43 of 43 pages | **Both are right for their scope.** Verified during assembly: 44 files have the visible banner (43 indexable + `404.html`), and 45 files have both tags (adding `200.html`) |

---

## Open questions for the owner

### Crawler blocking and Hostinger

1. **What exactly was refused?** Please give the date and time, the product (Claude web fetch, ChatGPT or another tool), the full error text, and ideally the fetcher's IP or user agent. Without these, the refusal can't be matched to server logs.
2. **What do the AI Audit and security settings show?** In hPanel under *Performance → CDN → AI Audit*, is GPTBot (or any other AI crawler) set to Block, and what do the request and blocked counters show? Is Under Attack mode, or any other security setting, turned on?
3. **Where is the `GPTBot/x.y` 429 generated: the Hostinger CDN edge or the LiteSpeed origin?** Only the owner can test this, by temporarily disabling the CDN and retrying, or by asking Hostinger support with the captured `x-hcdn-request-id`s. Ask Hostinger specifically why GPTBot's `/robots.txt` requests sometimes get 429 too (2 of 8 on 30 Sep; fact-checked 30 Sep 2026).
4. **Do Hostinger's datacentre-range limits reach the AI fetchers?** Hostinger's documentation names "Meta, AWS, Microsoft"; do these limits also cover Anthropic's, OpenAI's or Perplexity's fetch infrastructure? And does real GPTBot traffic from OpenAI's published IPs also get 429? Check the Hostinger access logs or the AI Audit statistics. This was only tested from a residential IP through Mumbai edges.

### Deployment and server configuration

5. **How is `dist/` deployed to Hostinger:** hPanel File Manager, FTP, or Hostinger Git deploy? The repo has no deploy config. The new `dist/.htaccess`, `sitemap.xml`, `llms.txt`, `200.html` and prerendered pages are currently untracked in git, so confirm the `.htaccess` dotfile actually reaches the server.
6. **Which `.htaccess` is on the live server now?** It returns 403. Its behaviour matches `main`'s root `.htaccess` (anything that isn't a file goes to `index.html`; directories are not rewritten), which is not in committed `dist/`.
7. **Is HTTP → HTTPS handled by the hPanel "Force HTTPS" toggle, or by a server `.htaccess` that isn't in git?** In the second case, deploying `public/.htaccess` would remove the HTTPS redirect. Check hPanel, and run `curl -sI http://codmsoftware.co.uk/about` after deploy.
8. **Does Hostinger's LiteSpeed honour `DirectorySlash Off` and the rule order in the new `.htaccess`?** `ItServices`, `blog` and `products` each exist as both a directory and a `.html` file. After deploy, confirm that `/ItServices`, `/blog` and `/products` return 200 with no slash-redirect loop, and that redirect `Location` headers use `https://`. The local emulator can't show this: it runs on a case-insensitive Windows filesystem and only approximates `.htaccess`. For the same reason, confirm after deploy what `/itservices` and `/blog/Salesforce-Revenue-Cloud` return; they are expected to fall through to the `noindex` `200.html`.

### Canonical host and the subdomain

9. **Canonical host: stay on the apex, or switch to www?** The branch is fully consistent on the apex; the brief recommends www. This must be decided before deploy. Switching changes `.htaccess` rule 1, `company-facts.json` `siteUrl`, `robots.txt`, `SEO.jsx` (`DEFAULT_IMAGE` and `absoluteImage`), `brand.js` and the footer links.
10. **What is the plan for `saasailabs.codmsoftware.co.uk`?**
    - Which document root and build will it get? Today it receives the same `dist` as the main site, served directly by LiteSpeed without the CDN, and Google indexes it with the CODM title.
    - Will it get a separate `VITE_BRAND=saasai` build? If so, its `200.html` shell still carries CODM's "Top Salesforce Partner" title and description from `index.html`, and only `/` is prerendered.
    - Should it canonicalise to itself or to CODM?

### Legacy URLs and indexing

11. **Which current page should each legacy URL 301 to?** See the merged table in 0.3.
    - The URLs: `/AI-Powered_Dashboard.html`, `/API-Integration.html`, `/BuildingLLM.html`, `/triggerframework.html`, `/revenueCloud.html`, `/integrationframework.html`, `/SalesforceCRM.html` (the Web-to-Lead `retURL`), `/support.html`, `/industriescloud.html`, `/projectmanagement.html`, `/asyncapex.html`, `/shield.html`, the other Wayback-sitemap URLs, `/blog/salesforceagentforce` and `/blog/Salesforce-Revenue-Cloud`.
    - `/revenueCloud.html` can only go to a blog article, because there is no Revenue Cloud service page.
    - `/projectmanagement.html`, `/asyncapex.html`, `/shield.html` and `/industriescloud.html` have no routed equivalent. Should the unrouted `IndustriesCloud` component be given a route?
12. **Where is the source of the pre-August-2026 site** that served the `.html` URLs? Wayback shows Next.js `_next` assets in November 2025. It is not in this repo or its history.
13. **Search Console and Bing.**
    - Who owns the Google Search Console Domain property that the DNS TXT record verifies?
    - Is Bing Webmaster Tools set up? No `MS=` record or `msvalidate` token was found.
    - GSC access is needed for the full list of indexed URLs, and for the traffic and backlinks to the legacy `.html` pages. The WebSearch results come from an unspecified US engine, and the Google `site:` list came from the brief.
14. **Should the title and meta description of `/blog/ai-powered-dashboard` say it is a pharmaceutical case study,** as the old indexed title did? The current generic title is "AI-Powered Dashboards: Features & Benefits".
15. *(Not answerable from the repo or the live site; noted for completeness.)* Why does Google show "CODM Software Limited | Top Salesforce Partner"? It could be the og:title or a truncated `<title>`.

### Brand, entity and legal identity

16. **What is the exact registered name and capitalisation at Companies House for 15333870?** The repo says "CODM Software Limited" (`company-facts.json:5`); Companies House was not queried. Which form should the footer copyright use in place of "CodM Software Ltd."?
17. **How do the UK company and the other "CODM" entities relate?**
    - Should "CodM Software" stay in the JSON-LD `alternateName`?
    - How should the relationship to codmsoftware.com / CodM Software Pvt Ltd (India) and to the AppExchange "CODM SOFTWARE PRIVATE LIMITED" listing be stated? It is still `TODO_VERIFY` in `company-facts.json:14`.
    - LinkedIn's snippet says "founded 2021", while the site says "incorporated 2023". Which should be used, and how?
18. **Which casing should SaaS AI Labs use across both builds:** "SaaS AI Labs", "SAAS AI Labs" or "SaasAi Labs"? `brand.name` "SaasAi Labs" is also compared as a literal string at `App.jsx:98`, so changing it needs a code change.
19. **Is 71-75 Shelton Street, London WC2H 9JQ the registered office at Companies House, and is the company registered in England and Wales?** Numbers with no prefix normally are. This can't be determined from the repo.
20. **What is the relationship of the other offices to CODM Software Limited?** That is the Plano office (Talent4World LLC) and the Noida office (SaaS AI Labs / CodM Software Pvt Ltd). Should the footer list Plano as a CODM office?
21. **Can the "52,000+ newsletter subscribers" claim be substantiated, and what is the company's X/Twitter handle?**
22. **Legal view on analytics consent.** May GA4 and Clarity (session recording) run before consent under PECR, as amended by the Data (Use and Access) Act 2025? How should the banner gate them? The usual approach is Consent Mode with a default of "denied", plus loading Clarity only after consent.
