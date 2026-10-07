// Writes dist/sitemap.xml and dist/llms.txt after the prerender step, from
// the route list (src/data/site-routes.js), the titles/descriptions that were
// actually rendered (dist/_prerender-manifest.json), git-based lastmod dates
// (src/data/route-dates.json) and the fact sheet (src/data/company-facts.json).
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import routes from "../src/data/site-routes.js";
import pageMeta from "../src/data/page-meta.js";

if (process.env.VITE_BRAND && process.env.VITE_BRAND !== "codm") {
  console.log("generate-seo-files: skipped (sitemap/llms.txt are for the codm brand only)");
  process.exit(0);
}

const read = (rel) => JSON.parse(readFileSync(new URL(rel, import.meta.url), "utf8"));
const facts = read("../src/data/company-facts.json");
const dates = read("../src/data/route-dates.json");
const manifestUrl = new URL("../dist/_prerender-manifest.json", import.meta.url);
if (!existsSync(manifestUrl)) {
  console.error("generate-seo-files: dist/_prerender-manifest.json missing; run scripts/prerender.mjs first.");
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(manifestUrl, "utf8"));
const SITE = facts.siteUrl;
const abs = (p) => (p === "/" ? `${SITE}/` : `${SITE}${p}`);
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const isTodo = (v) => typeof v === "string" && v.includes("{{TODO_VERIFY");

// Only canonical, indexable pages that rendered successfully.
const indexable = routes.filter((r) => {
  const m = manifest[r.path];
  return m && m.canonical === abs(r.path) && !/noindex/.test(m.robots);
});
const skipped = routes.filter((r) => !indexable.includes(r)).map((r) => r.path);
if (skipped.length) console.warn(`sitemap: skipped (not rendered / non-canonical / noindex): ${skipped.join(", ")}`);

// ---- sitemap.xml ----
const urls = indexable
  .map(
    (r) => `  <url>
    <loc>${esc(abs(r.path))}</loc>
    <lastmod>${dates[r.path]?.modified || new Date().toISOString().slice(0, 10)}</lastmod>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n");
writeFileSync(
  new URL("../dist/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);

// ---- llms.txt (https://llmstxt.org) ----
const line = (r) => {
  const m = manifest[r.path];
  const name = pageMeta[r.path]?.crumb || m.h1[0] || m.title;
  return `- [${name}](${abs(r.path)}): ${m.description}`;
};
const section = (heading, key) => {
  const items = indexable.filter((r) => r.section === key && r.path !== "/");
  return items.length ? `## ${heading}\n\n${items.map(line).join("\n")}\n` : "";
};
const hq = facts.offices.find((o) => o.id === "london");
const keyFacts = [
  `Legal name: ${facts.legalName} (Companies House ${facts.companiesHouseNumber}), incorporated ${facts.foundingDate}`,
  `Headquarters: ${hq.streetAddress}, ${hq.addressLocality} ${hq.postalCode}, UK; regional office in Birmingham; teams in the USA and India`,
  `Salesforce: ${facts.salesforcePartner.status}${isTodo(facts.salesforcePartner.tier) ? "" : ` (${facts.salesforcePartner.tier})`}`,
  `Accreditations: ${facts.accreditations.filter((a) => !isTodo(a)).map((a) => a.replace(/\s*\{\{TODO_VERIFY[^}]*\}\}/, "")).join("; ")}`,
  `Industries: ${facts.industries.join(", ")}`,
  `Contact: ${facts.contact.email}, ${facts.contact.telephoneUK}`,
];

const llms = `# ${facts.brandName}

> ${facts.description}

Key facts:
${keyFacts.map((f) => `- ${f}`).join("\n")}

${section("Services", "Services")}
${section("Products", "Products")}
${section("Insights", "Insights")}
## Company

${indexable.filter((r) => r.section === "Company").map(line).join("\n")}

## Optional

${indexable.filter((r) => r.section === "Legal").map(line).join("\n")}
- [Sitemap](${SITE}/sitemap.xml): every indexable URL with last-modified dates
`.replace(/\n{3,}/g, "\n\n");

writeFileSync(new URL("../dist/llms.txt", import.meta.url), llms);
rmSync(manifestUrl);
console.log(`sitemap.xml: ${indexable.length} URLs; llms.txt: ${llms.length} bytes`);
