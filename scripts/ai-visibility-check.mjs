#!/usr/bin/env node
// AI visibility check for codmsoftware.co.uk.
//
//   node scripts/ai-visibility-check.mjs                      # https://codmsoftware.co.uk
//   node scripts/ai-visibility-check.mjs http://localhost:4173 # local (npm run serve:dist)
//
// Fetches pages as GPTBot (no JavaScript) and checks what AI crawlers see:
//   1. key pages contain their H1 and intro text in the raw HTML
//   2. /index and /index/ return 301 -> /
//   3. robots.txt, sitemap.xml and llms.txt return 200 (and are not the HTML shell)
//   4. every sitemap URL has exactly one H1, a self-referencing canonical, a
//      title (<= 60 chars), a meta description (<= 155 chars) and valid JSON-LD
//   5. stale strings are gone
//   6. no {{TODO_VERIFY placeholders in <head> (meta tags / schema)
// Exits 1 if any check fails.

const BASE = (process.argv[2] || "https://codmsoftware.co.uk").replace(/\/$/, "");
const CANONICAL_ORIGIN = "https://codmsoftware.co.uk";
const UA = "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)";

const KEY_PAGES = [
  { path: "/", h1: "UK Salesforce Consulting Partner", text: "CODM Software Limited is a Salesforce Consulting Partner" },
  { path: "/about", text: "15333870" },
  { path: "/ItServices/salesforce-financial-services", h1: "Financial Services Cloud", text: "Financial Services Cloud" },
  { path: "/ItServices/salesforce-education-cloud", h1: "Education Cloud", text: "Education Cloud" },
  { path: "/ItServices/building-llm", text: "Agentforce" },
  { path: "/faq", h1: "Frequently asked questions", text: "Who is CODM Software?" },
  { path: "/products/futura", h1: "FUTURA", text: "FUTURA" },
];
const STALE = [/World[’']s #1 CRM/i, /Join our team of instructors today/i, /since 2015/i];
const SCHEMA_TYPES = new Set([
  "Organization", "WebSite", "BreadcrumbList", "ListItem", "Service", "ProfessionalService", "PostalAddress",
  "ContactPoint", "ImageObject", "PropertyValue", "Person", "Place", "Country", "BusinessAudience",
  "BlogPosting", "Article", "FAQPage", "Question", "Answer", "SoftwareApplication", "Offer",
]);

let failures = 0;
const pass = (msg) => console.log(`  \x1b[32mPASS\x1b[0m ${msg}`);
const fail = (msg) => { failures++; console.log(`  \x1b[31mFAIL\x1b[0m ${msg}`); };
const warn = (msg) => console.log(`  \x1b[33mWARN\x1b[0m ${msg}`);

async function get(path, redirect = "follow") {
  const res = await fetch(BASE + path, { headers: { "User-Agent": UA }, redirect });
  return { status: res.status, location: res.headers.get("location"), type: res.headers.get("content-type") || "", body: redirect === "manual" ? "" : await res.text() };
}

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
const head = (html) => html.slice(0, html.indexOf("</head>") + 1 || html.length);
const attr = (html, re) => decode(html.match(re)?.[1] || "");

function walkTypes(node, found) {
  if (Array.isArray(node)) return node.forEach((n) => walkTypes(n, found));
  if (node && typeof node === "object") {
    if (node["@type"]) [].concat(node["@type"]).forEach((t) => found.add(t));
    Object.values(node).forEach((v) => walkTypes(v, found));
  }
}

function checkPage(path, html) {
  const problems = [];
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) problems.push(`${h1s.length} <h1> elements`);
  const canonical = attr(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  const expected = path === "/" ? `${CANONICAL_ORIGIN}/` : CANONICAL_ORIGIN + path;
  if (canonical !== expected) problems.push(`canonical "${canonical}" (expected ${expected})`);
  const title = attr(html, /<title>([^<]*)<\/title>/);
  if (!title) problems.push("missing <title>");
  else if (title.length > 60) problems.push(`title ${title.length} chars`);
  const desc = attr(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/);
  if (!desc) problems.push("missing meta description");
  else if (desc.length > 155) problems.push(`description ${desc.length} chars`);
  if (/name="robots"[^>]+content="[^"]*noindex/.test(head(html))) problems.push("noindex");
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!blocks.length) problems.push("no JSON-LD");
  for (const b of blocks) {
    try {
      const data = JSON.parse(b[1]);
      if (data["@context"] !== "https://schema.org") problems.push("JSON-LD missing @context");
      const types = new Set();
      walkTypes(data, types);
      const unknown = [...types].filter((t) => !SCHEMA_TYPES.has(t));
      if (unknown.length) problems.push(`unexpected schema types: ${unknown.join(", ")}`);
      if (!types.has("Organization")) problems.push("no Organization in JSON-LD");
    } catch (e) {
      problems.push(`JSON-LD does not parse: ${e.message}`);
    }
  }
  if (head(html).includes("{{TODO_VERIFY")) problems.push("{{TODO_VERIFY in <head>");
  for (const re of STALE) if (re.test(html)) problems.push(`stale text ${re}`);
  return problems;
}

async function main() {
  console.log(`AI visibility check: ${BASE}\n`);

  console.log("1. Key pages as GPTBot (raw HTML, no JavaScript)");
  for (const p of KEY_PAGES) {
    const { status, body } = await get(p.path);
    const t = text(body);
    const h1 = text(body.match(/<h1[\s\S]*?<\/h1>/)?.[0] || "");
    if (status !== 200) fail(`${p.path} -> HTTP ${status}`);
    else if (p.h1 && !h1.includes(p.h1)) fail(`${p.path} H1 is "${h1.trim()}" (expected to contain "${p.h1}")`);
    else if (!t.includes(p.text)) fail(`${p.path} raw HTML lacks "${p.text}" (${body.length} bytes; is the page prerendered?)`);
    else pass(`${p.path}  H1: "${h1.trim().slice(0, 70)}"`);
  }

  console.log("\n2. Duplicate homepage redirects");
  for (const p of ["/index", "/index/", "/index.html"]) {
    const r = await get(p, "manual");
    const loc = r.location ? new URL(r.location, BASE).pathname : "";
    if (r.status === 301 && loc === "/") pass(`${p} -> 301 /`);
    else fail(`${p} -> ${r.status} ${r.location || ""}`);
  }

  console.log("\n3. robots.txt, sitemap.xml, llms.txt");
  let sitemapUrls = [];
  for (const [p, must] of [["/robots.txt", /Sitemap:\s*https:\/\/codmsoftware\.co\.uk\/sitemap\.xml/], ["/sitemap.xml", /<urlset/], ["/llms.txt", /^# CODM Software/]]) {
    const r = await get(p);
    if (r.status !== 200) fail(`${p} -> HTTP ${r.status}`);
    else if (/<!doctype html/i.test(r.body)) fail(`${p} returns the HTML app shell, not the file`);
    else if (!must.test(r.body)) fail(`${p} content unexpected`);
    else pass(`${p} (${r.body.length} bytes)`);
    if (p === "/sitemap.xml") sitemapUrls = [...r.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (p === "/robots.txt" && /Disallow:\s*\/\s*$/m.test(r.body)) warn("robots.txt contains 'Disallow: /'; check it is not blocking a crawler");
    if (p === "/llms.txt" && r.body.includes("{{TODO_VERIFY")) fail("llms.txt contains {{TODO_VERIFY");
  }
  if (sitemapUrls.some((u) => /\/index\/?$/.test(u))) fail("sitemap includes /index");

  console.log(`\n4-6. Every sitemap URL (${sitemapUrls.length}): one H1, canonical, title, description, JSON-LD, no stale text, no TODOs in <head>`);
  for (const url of sitemapUrls) {
    const path = new URL(url).pathname;
    const r = await get(path);
    if (r.status !== 200) { fail(`${path} -> HTTP ${r.status}`); continue; }
    const problems = checkPage(path, r.body);
    if (problems.length) fail(`${path}: ${problems.join("; ")}`);
    else pass(path);
  }

  console.log(failures ? `\n${failures} check(s) failed.` : "\nAll checks passed.");
  process.exit(failures ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
