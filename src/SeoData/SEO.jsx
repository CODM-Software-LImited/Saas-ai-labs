import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import brand from "../config/brand";
import pageMeta, { canonicalAliases } from "../data/page-meta.js";
import { pageGraph, absUrl } from "./schema.js";

// Head tags are written into the DOM here; scripts/prerender.mjs then
// snapshots the DOM, so everything below ends up in the static HTML that
// crawlers (Googlebot, GPTBot, ClaudeBot, PerplexityBot...) receive.

const DEFAULT_IMAGE = "https://codmsoftware.co.uk/logo.png";

function upsertMeta(attrName, attrValue, content) {
  let tag = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (content === undefined || content === null || content === "") {
    tag?.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function upsertJsonLd(data) {
  let tag = document.head.querySelector('script[type="application/ld+json"][data-seo]');
  if (!data) {
    tag?.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.setAttribute("data-seo", "page");
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

// "/about/" -> "/about"; aliases (duplicate URLs) -> their canonical path.
export function canonicalPath(pathname) {
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  return canonicalAliases[p] || p;
}

const absoluteImage = (image) =>
  image && /^https:\/\/(codmsoftware\.co\.uk|saasailabs\.codmsoftware\.co\.uk)\//.test(image) ? image : DEFAULT_IMAGE;

/**
 * Page head: title, description, canonical, Open Graph, Twitter and JSON-LD.
 * Title/description come from src/data/page-meta.js when the path is listed
 * there; the props are the fallback. `schema` adds page-specific JSON-LD
 * blocks (FAQPage, SoftwareApplication...) to the sitewide graph.
 */
function SEO({ title, description, image, keywords, schema, noindex }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = canonicalPath(pathname);
    const isCodm = brand.key === "codm_Logo";
    const meta = isCodm ? pageMeta[path] || {} : {};
    const pageTitle = meta.title || title;
    const pageDescription = meta.description || description;
    const canonical = isCodm ? absUrl(path) : `${brand.siteUrl}${path === "/" ? "/" : path}`;
    const ogImage = absoluteImage(image);

    if (pageTitle) document.title = pageTitle;
    upsertMeta("name", "description", pageDescription);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:site_name", brand.name);
    upsertMeta("property", "og:locale", "en_GB");
    upsertMeta("property", "og:type", meta.kind === "article" ? "article" : "website");
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "author", isCodm ? "CODM Software Limited" : brand.name);

    if (isCodm && !noindex) {
      const h1 = document.querySelector("h1")?.textContent?.trim();
      const extra = Array.isArray(schema) ? schema : [schema];
      upsertJsonLd(pageGraph(path, { extra, h1 }));
    } else {
      upsertJsonLd(null);
    }
  }, [pathname, title, description, image, keywords, schema, noindex]);

  return null;
}

export default SEO;
