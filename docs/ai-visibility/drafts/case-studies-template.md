# Case study pages: template and open questions

**Current state:** codmsoftware.co.uk has **no case study pages** today.

- The homepage "industry" carousel (Education, Nonprofit, Energy) links to service pages, not to case studies.
- `src/components/CaseStudy/` is switched off in `src/pages/Home/Home.jsx`. Its figures (£320k cost, £215k benefit, 10-week payback) come from the *worked example* in the Executive Guide, not from a real client. Keep it switched off, or label it clearly as an illustrative example.

The brief's three case studies (UK public university on Education + Experience Cloud, NGOs, Financial Services Cloud + Experience Cloud) come from **codmsoftware.com**. Add them here only if the project was delivered by, or can be attributed to, **CODM Software Limited**, and only once the client has approved publication. `{{TODO_VERIFY}}`

## Page structure (`/case-studies/<slug>`)

```
H1: <Outcome> for <client type> with Salesforce <cloud(s)>
Client:        <name, or anonymised description, e.g. "A UK public university">   {{TODO_VERIFY}}
Challenge:     2–4 sentences on the problem, in the client's words where possible
Solution:      what CODM designed and built; clouds, integrations, AI
Salesforce clouds used: e.g. Education Cloud, Experience Cloud
Timeline:      start → go-live, number of phases                                   {{TODO_VERIFY}}
Results:       3–4 metrics with a baseline and the date measured                   {{TODO_VERIFY}}
Quote:         optional; name, role, organisation, with written permission        {{TODO_VERIFY}}
CTA:           link to the matching service page and /contact
Schema:        Article (author, datePublished, dateModified) + BreadcrumbList
```

## Questions to answer for each case study

1. Who delivered it: CODM Software Limited, CodM Software Pvt Ltd, or both?
2. May we name the client? If not, what anonymised description is acceptable?
3. What was the start date, and when did it go live?
4. Which measurable results can be backed up (with a before/after baseline)?
5. Is there a quote, with written permission, a name and a role?

## Where to wire it in

- Data: add a `src/data/case-studies.js` list (slug, title, sections).
- Page: `src/pages/CaseStudy/CaseStudy.jsx`, rendered at `/case-studies/:slug` in `App.jsx`.
- SEO: add entries to `src/data/site-routes.js` (section `"Case studies"`) and `src/data/page-meta.js` (`kind: "article"`). The sitemap and llms.txt then pick them up automatically.
- Link each case study from the matching service page, for example Education Cloud → the university case study.
