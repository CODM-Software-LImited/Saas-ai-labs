// Serves dist/ locally with the same rules as public/.htaccess, so the
// prerendered site and redirects can be tested before deploying:
//   npm run build && npm run serve:dist     (then: npm run check:ai -- http://localhost:4173)
import http from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { redirects } from "../src/data/site-routes.js";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.env.PORT) || 4173;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "application/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".mp4": "video/mp4",
  ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".pdf": "application/pdf",
  ".woff2": "font/woff2", ".ico": "image/x-icon",
};
const isFile = (f) => f.startsWith(dist) && existsSync(f) && statSync(f).isFile();
const redirectMap = new Map(redirects.map((r) => [r.from, r.to]));

http
  .createServer((req, res) => {
    const u = new URL(req.url, "http://x");
    let p = decodeURIComponent(u.pathname);
    const send = (status, file) => {
      res.writeHead(status, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
      res.end(readFileSync(file));
    };
    const moved = (to) => { res.writeHead(301, { Location: to + u.search }); res.end(); };

    const bare = p.length > 1 ? p.replace(/\/+$/, "") : p;
    if (redirectMap.has(bare)) return moved(redirectMap.get(bare));      // rule 2
    if (p !== bare) return moved(bare);                                   // rule 3
    const htmlReq = p.match(/^\/(.+)\.html$/);
    if (htmlReq && !["index", "200", "404"].includes(htmlReq[1])) return moved("/" + htmlReq[1]); // rule 4
    if (p === "/") return send(200, path.join(dist, "index.html"));
    const pre = path.join(dist, p + ".html");
    if (isFile(pre)) return send(200, pre);                               // rule 5
    const file = path.join(dist, p);
    if (isFile(file)) return send(200, file);                             // rule 6
    return send(200, path.join(dist, "200.html"));                        // rule 7
  })
  .listen(port, () => console.log(`dist/ on http://localhost:${port}`));
