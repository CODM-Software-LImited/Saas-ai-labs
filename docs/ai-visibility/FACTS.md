# Canonical fact sheet: codmsoftware.co.uk

This is the single source of truth for company facts on **codmsoftware.co.uk**. The machine-readable copy is [`src/data/company-facts.json`](../../src/data/company-facts.json). The SEO component, the JSON-LD schema, `sitemap.xml` and `llms.txt` all read from that file.

**Rules**
- Change a fact in the JSON file first. Then update this page.
- Any value that starts with `{{TODO_VERIFY` is **left out** of live schema and meta tags until someone replaces it with a confirmed value.
- These facts are for the **UK company** (CODM Software Limited). The Indian company's site (codmsoftware.com, CodM Software Pvt Ltd) is a separate site with its own facts. Don't copy facts between the two sites until the relationship between the companies is confirmed.

## Identity

| Field | Value | Source in repo |
|---|---|---|
| Brand name | CODM Software | Site-wide |
| Legal entity | CODM Software Limited | README, About |
| Companies House number | 15333870 | About → At a glance |
| Incorporated | 7 December 2023 (London) | About → At a glance |
| Salesforce partner status | Salesforce Consulting Partner | About, certificates section |
| Partner tier | `{{TODO_VERIFY: Base / Ridge / Crest / Summit}}` | Not stated anywhere |
| Partner since | `{{TODO_VERIFY}}` | Not stated anywhere |
| Relationship to CodM Software Pvt Ltd (India, codmsoftware.com) | `{{TODO_VERIFY: parent / subsidiary / sister company}}` | Not stated anywhere |
| SaaS AI Labs | A company of CODM Software Limited focused on AI for government. Site: https://saasailabs.codmsoftware.co.uk | README |

## Offices

| Office | Address | Phone | In schema? |
|---|---|---|---|
| **London (HQ)** | 71-75 Shelton Street, Covent Garden, London WC2H 9JQ, UK | +44 121 818 6924 | Yes |
| **Birmingham** | Regus, Edmund House, 12-22 Newhall St, Birmingham B3 3AS, UK | +44 121 818 6924 | Yes |
| Plano, USA | Talent4World LLC, 4501 Nightland Dr, Plano, TX 75024 | +1 201 623 3132 | No: `{{TODO_VERIFY: CODM office or partner company?}}` |
| Noida, India | IHDP Business Park, Plot 7, 2nd floor, Sector 127, Noida 201304 | +91 97171 16432 | No: `{{TODO_VERIFY: CODM office, SaaS AI Labs, or CodM Software Pvt Ltd?}}` |

Email: info@codmsoftware.co.uk

## Numbers shown on the site

| Claim | Value | Where |
|---|---|---|
| Salesforce implementations | 50+ | About |
| Certified Salesforce specialists | 12+ | About |
| Salesforce clouds covered | 8 `{{TODO_VERIFY: the site lists 14 clouds as services}}` | About |
| Client retention | 99% | About, Home (Hero4) |
| "Trusted by companies worldwide" | 98% `{{TODO_VERIFY: what does this percentage measure?}}` | Home (Hero4) |
| Leadership experience | 14+ years | README |

## Leadership

- **Vinod Kumar**, Founder & Director. [LinkedIn](https://www.linkedin.com/in/vinod-kumar-a1477954/)
- Other leaders: `{{TODO_VERIFY}}`

## Services

Salesforce implementation and consulting; Sales Cloud; Service Cloud; Experience Cloud; Marketing Cloud; Data Cloud; Commerce Cloud; CPQ and Revenue Cloud; Education Cloud; Health & Insurance Cloud; Financial Services Cloud; Manufacturing Cloud; Energy & Utilities Cloud; Nonprofit Cloud; Agentforce and AI; LLM application development; API integration; data integration and migration; custom software (.NET, React, Python); technical and deployment support.

## Industries

Financial services, insurance, healthcare, higher education, manufacturing, nonprofit, energy and utilities, retail, technology, government and public sector.

## Accreditations

- Salesforce Consulting Partner
- G-Cloud 15 supplier (RM1557.15), Lot 3: Cloud Support
- Cyber Essentials
- ISO certified: `{{TODO_VERIFY: which standard(s), e.g. ISO 27001 / 9001, and certificate number}}`
- Google Cloud Partner
- Gearset partner

Salesforce certifications held by the team: Administrator, Application Architect, Data Architect, Agentforce Specialist, Business Analyst, CPQ Specialist, Service Cloud Consultant, OmniStudio Consultant, OmniStudio Developer, Platform App Builder, Platform Developer I, Platform Developer II.

## Products

- **FUTURA**: an AI chatbot and admissions assistant for education providers. https://codmsoftware.co.uk/products/futura
- Titan E-Signature and FHT (Field History Tracking) appear in the codmsoftware.com brief but **not** in this repo. `{{TODO_VERIFY: are these products of the UK company too?}}`

## Profiles (sameAs)

Confirmed in the repo:
- LinkedIn: https://www.linkedin.com/company/codm-software-limited/
- YouTube: https://www.youtube.com/channel/UC7fU84Na9QuC7dPDVMpuGVQ
- Companies House: https://find-and-update.company-information.service.gov.uk/company/15333870

Still needed: `{{TODO_VERIFY}}` Clutch, Crunchbase, AppExchange listing, and X/Twitter. The footer currently links to the bare `https://twitter.com`.

## Conflicts found and fixed

| Conflict | Fix |
|---|---|
| `src/seoMetadata.js` said "innovation **since 2015**" | Changed to "since 2023", to match the incorporation date |
| codmsoftware.com says "founded 2021, HQ Noida" | Not applied here. This is a different legal entity; see the relationship TODO above |
