// JSON-LD builders. All company facts come from src/data/company-facts.json.
// Any value that still contains a {{TODO_VERIFY placeholder is dropped, so
// unconfirmed facts never reach live schema.
import facts from "../data/company-facts.json";
import pageMeta, { authors, crumbParents } from "../data/page-meta.js";
import routeDates from "../data/route-dates.json";

export const SITE = facts.siteUrl;
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

const isTodo = (v) => typeof v === "string" && v.includes("{{TODO_VERIFY");

// Recursively remove TODO placeholders, empty strings/arrays and undefined.
export function clean(value) {
  if (Array.isArray(value)) {
    const out = value.map(clean).filter((v) => v !== undefined);
    return out.length ? out : undefined;
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const c = clean(v);
      if (c !== undefined) out[k] = c;
    }
    return Object.keys(out).length ? out : undefined;
  }
  if (value === "" || value === null || value === undefined || isTodo(value)) return undefined;
  return value;
}

export const absUrl = (path) => (path === "/" ? `${SITE}/` : `${SITE}${path}`);

const postalAddress = (o) => ({
  "@type": "PostalAddress",
  streetAddress: o.streetAddress,
  addressLocality: o.addressLocality,
  addressRegion: o.addressRegion,
  postalCode: o.postalCode,
  addressCountry: o.addressCountry,
});

const schemaOffices = () => facts.offices.filter((o) => o.schema);

export function organization() {
  const hq = facts.offices.find((o) => o.id === "london");
  return clean({
    "@type": "Organization",
    "@id": ORG_ID,
    name: facts.brandName,
    legalName: facts.legalName,
    alternateName: facts.alternateNames,
    url: `${SITE}/`,
    logo: { "@type": "ImageObject", url: facts.logo },
    foundingDate: facts.foundingDate,
    description: facts.description,
    email: facts.contact.email,
    telephone: facts.contact.telephoneUK,
    address: postalAddress(hq),
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Companies House number",
      value: facts.companiesHouseNumber,
    },
    founder: {
      "@type": "Person",
      name: facts.founder.name,
      jobTitle: facts.founder.jobTitle,
      sameAs: facts.founder.sameAs,
    },
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", telephone: facts.contact.telephoneUK, email: facts.contact.email, areaServed: "GB", availableLanguage: "English" },
      { "@type": "ContactPoint", contactType: "sales", telephone: facts.contact.telephoneUS, areaServed: "US", availableLanguage: "English" },
      { "@type": "ContactPoint", contactType: "sales", telephone: facts.contact.telephoneIN, areaServed: "IN", availableLanguage: ["English", "Hindi"] },
    ],
    areaServed: facts.areaServed,
    knowsAbout: facts.knowsAbout,
    award: facts.accreditations,
    sameAs: facts.sameAs,
    subOrganization: {
      "@type": "Organization",
      name: facts.relatedEntities.saasAiLabs.name,
      url: facts.relatedEntities.saasAiLabs.url,
    },
    location: schemaOffices().map((o) => ({ "@id": `${SITE}/contact#${o.id}` })),
  });
}

export function website() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE}/`,
    name: facts.brandName,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function offices() {
  return schemaOffices().map((o) =>
    clean({
      "@type": "ProfessionalService",
      "@id": `${SITE}/contact#${o.id}`,
      name: o.name,
      parentOrganization: { "@id": ORG_ID },
      url: `${SITE}/contact`,
      image: facts.logo,
      telephone: o.telephone,
      email: o.email,
      address: postalAddress(o),
      areaServed: facts.areaServed,
    })
  );
}

export function breadcrumb(path) {
  if (path === "/") return null;
  const segs = path.split("/").filter(Boolean);
  const chain = crumbParents[path]
    ? [...crumbParents[path], path]
    : ["/", ...segs.map((_, i) => "/" + segs.slice(0, i + 1).join("/"))];
  const items = chain
    .filter((p) => pageMeta[p])
    .map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pageMeta[p].crumb,
      item: absUrl(p),
    }));
  if (items.length < 2) return null;
  return { "@type": "BreadcrumbList", "@id": `${absUrl(path)}#breadcrumb`, itemListElement: items };
}

export function service(path, meta) {
  return clean({
    "@type": "Service",
    "@id": `${absUrl(path)}#service`,
    name: meta.crumb,
    serviceType: meta.serviceType,
    description: meta.description,
    url: absUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: facts.areaServed.map((name) =>
      name === "Worldwide" ? { "@type": "Place", name } : { "@type": "Country", name }
    ),
    audience: { "@type": "BusinessAudience", audienceType: facts.industries.join(", ") },
  });
}

export function article(path, meta, h1) {
  const a = meta.author && authors[meta.author];
  const dates = routeDates[path] || {};
  return clean({
    "@type": "BlogPosting",
    "@id": `${absUrl(path)}#article`,
    headline: (h1 || meta.title).slice(0, 110),
    description: meta.description,
    url: absUrl(path),
    mainEntityOfPage: absUrl(path),
    inLanguage: "en-GB",
    author: a
      ? { "@type": "Person", name: a.name, jobTitle: a.jobTitle, url: a.url, worksFor: { "@id": ORG_ID } }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    datePublished: meta.published || dates.published,
    dateModified: dates.modified,
  });
}

export function faqPage(path, faqs) {
  if (!faqs?.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Graph for a given path: sitewide Organization/WebSite + page-type blocks.
export function pageGraph(path, { extra = [], h1 } = {}) {
  const meta = pageMeta[path] || {};
  const graph = [organization(), website()];
  const crumbs = breadcrumb(path);
  if (crumbs) graph.push(crumbs);
  if (meta.kind === "service") graph.push(service(path, meta));
  if (meta.kind === "article") graph.push(article(path, meta, h1));
  if (path === "/contact" || path === "/about") graph.push(...offices());
  graph.push(...extra.filter(Boolean));
  return { "@context": "https://schema.org", "@graph": graph };
}
