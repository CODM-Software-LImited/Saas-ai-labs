// Writes src/data/route-dates.json: { "/path": { modified: "YYYY-MM-DD" } }
// from the last git commit that touched each route's `source` (see
// src/data/site-routes.js). Runs before `vite build` so the sitemap
// <lastmod> and Article dateModified reflect real content changes.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import routes from "../src/data/site-routes.js";

const today = new Date().toISOString().slice(0, 10);
const out = {};
for (const r of routes) {
  let modified = "";
  try {
    modified = execFileSync("git", ["log", "-1", "--format=%cs", "--", r.source], { encoding: "utf8" }).trim();
    // Uncommitted edits to the source mean the content changed today.
    const dirty = execFileSync("git", ["status", "--porcelain", "--", r.source], { encoding: "utf8" }).trim();
    if (dirty) modified = today;
  } catch {
    // Not a git checkout: fall back to today.
  }
  out[r.path] = { modified: modified || today };
}
writeFileSync(new URL("../src/data/route-dates.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`route-dates: ${Object.keys(out).length} routes`);
