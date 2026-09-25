// Build-time prerender: renders every route in headless Chrome and writes the
// resulting HTML to dist/, so crawlers and AI assistants get the full page
// content (H1, copy, FAQs, meta tags, JSON-LD) without running JavaScript.
//
//   /                -> dist/index.html
//   /about           -> dist/about.html
//   /ItServices/x    -> dist/ItServices/x.html
//
// public/.htaccess maps /about to about.html. dist/200.html keeps the
// untouched SPA shell as the fallback for any URL that was not prerendered.
//
// Chrome: set CHROME_PATH, otherwise the usual install paths are tried.
// Replaces react-snap, whose bundled Chromium is too old for Vite's output.
import http from "node:http";
import { existsSync, readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import routes, { aliases } from "../src/data/site-routes.js";

const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const brand = process.env.VITE_BRAND || "codm";

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "application/javascript", ".mjs": "application/javascript",
  ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif",
  ".mp4": "video/mp4", ".woff": "font/woff", ".woff2": "font/woff2", ".ico": "image/x-icon",
  ".pdf": "application/pdf", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml",
};

// Static server with the same fallback rules as public/.htaccess.
function serve(port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
      const candidates = [path.join(dist, url), path.join(dist, url.replace(/\/$/, "") + ".html")];
      let file = candidates.find((f) => f.startsWith(dist) && existsSync(f) && statSync(f).isFile());
      if (!file) file = path.join(dist, "200.html");
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
      res.end(readFileSync(file));
    });
    server.listen(port, "127.0.0.1", () => resolve(server));
  });
}

function outFile(route) {
  if (route === "/") return path.join(dist, "index.html");
  if (route === "/404") return path.join(dist, "404.html");
  return path.join(dist, route.replace(/^\//, "") + ".html");
}

async function main() {
  const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!chrome) {
    console.error("prerender: Chrome not found. Set CHROME_PATH to a Chrome/Chromium executable.");
    process.exit(1);
  }

  // Keep the untouched shell for non-prerendered URLs. It is noindex until
  // the app boots and SEO.jsx sets the real robots tag for a known route.
  const shell = readFileSync(path.join(dist, "index.html"), "utf8");
  writeFileSync(
    path.join(dist, "200.html"),
    shell.replace("<head>", '<head>\n  <meta name="robots" content="noindex, follow">')
  );
  const templateScripts = new Set([...shell.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]));

  const port = 45000 + Math.floor(Math.random() * 1000);
  const server = await serve(port);
  const browser = await puppeteer.launch({
    executablePath: chrome,
    args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
  });

  const list = brand === "codm" ? [...routes.map((r) => r.path), ...aliases, "/404"] : ["/"];
  const manifest = {};
  let failed = 0;

  for (const route of list) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const u = req.url();
      if (u.startsWith(`http://127.0.0.1:${port}/`) || u.startsWith("data:")) req.continue();
      else req.abort();
    });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    try {
      const target = route === "/404" ? "/__prerender-not-found__" : route;
      // Some pages keep a request open (video streaming); fall back to "load".
      await page
        .goto(`http://127.0.0.1:${port}${target}`, { waitUntil: "networkidle0", timeout: 30000 })
        .catch(() => page.goto(`http://127.0.0.1:${port}${target}`, { waitUntil: "load", timeout: 60000 }));
      await page.waitForSelector("h1, h2", { timeout: 15000 });
      await new Promise((r) => setTimeout(r, 1500)); // route-change spinner is 800ms

      const result = await page.evaluate((keep) => {
        // Drop scripts injected at runtime (analytics loaders etc.) so they
        // are not loaded twice; the template's own scripts stay.
        document.querySelectorAll("script[src]").forEach((s) => {
          if (!keep.includes(s.getAttribute("src"))) s.remove();
        });
        document.querySelectorAll(".spinner-overlay, [data-prerender-remove]").forEach((n) => n.remove());
        const meta = (sel) => document.querySelector(sel)?.getAttribute("content") || "";
        return {
          html: "<!doctype html>\n" + document.documentElement.outerHTML,
          title: document.title,
          description: meta('meta[name="description"]'),
          canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
          h1: [...document.querySelectorAll("h1")].map((h) => h.textContent.replace(/\s+/g, " ").trim()),
          robots: meta('meta[name="robots"]'),
        };
      }, [...templateScripts]);

      const file = outFile(route);
      mkdirSync(path.dirname(file), { recursive: true });
      writeFileSync(file, result.html);
      const { html, ...info } = result;
      manifest[route] = { ...info, bytes: html.length };
      const warn = result.h1.length !== 1 ? `  [${result.h1.length} H1]` : "";
      console.log(`prerender ${route} -> ${path.relative(dist, file)} (${Math.round(html.length / 1024)} KB)${warn}`);
      if (errors.length) console.warn(`  page errors: ${errors.slice(0, 3).join(" | ")}`);
    } catch (e) {
      failed++;
      console.error(`prerender FAILED ${route}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  writeFileSync(path.join(dist, "_prerender-manifest.json"), JSON.stringify(manifest, null, 2));
  if (failed) {
    console.error(`prerender: ${failed} route(s) failed`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
