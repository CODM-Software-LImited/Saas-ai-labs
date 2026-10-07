# Draft content (not published)

These drafts are **not on the website**. Each one contains `{{TODO_VERIFY}}` placeholders for facts only CODM can confirm, such as prices, timelines, client names and results. Publishing guesses would break the "never invent facts" rule, and AI assistants would then repeat those guesses as facts.

**To publish a draft:**

1. Replace every `{{TODO_VERIFY ...}}` with a confirmed fact, or delete the sentence.
2. Add the article as a new blog page. Copy an existing post in `src/BlogsComponents/` and add its route to `src/App.jsx`.
3. Add the path to `src/data/site-routes.js` and `src/data/page-meta.js`, with `kind: "article"` and an `author`. Put the FAQ items in the page's `schema` prop using `faqPage()`.
4. Run `npm run build`, then `npm run serve:dist` and `npm run check:ai -- http://localhost:4173`.

| File | Target question |
|---|---|
| [01-salesforce-implementation-cost-uk.md](01-salesforce-implementation-cost-uk.md) | How much does a Salesforce implementation cost in the UK? |
| [02-financial-services-cloud-vs-sales-cloud.md](02-financial-services-cloud-vs-sales-cloud.md) | Financial Services Cloud vs Sales Cloud: which do you need? |
| [03-agentforce-implementation-timeline.md](03-agentforce-implementation-timeline.md) | How long does an Agentforce implementation take? |
| [04-education-cloud-implementation-guide.md](04-education-cloud-implementation-guide.md) | Education Cloud implementation guide for universities |
| [05-choosing-a-salesforce-partner-uk.md](05-choosing-a-salesforce-partner-uk.md) | How to choose a Salesforce consulting partner in the UK |
| [case-studies-template.md](case-studies-template.md) | Case study pages (structure + questions to answer) |
