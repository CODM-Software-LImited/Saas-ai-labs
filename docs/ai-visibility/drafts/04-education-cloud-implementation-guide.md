---
title: "Salesforce Education Cloud implementation guide for universities"
slug: /blog/education-cloud-implementation-guide
meta_title: "Education Cloud Implementation Guide for Universities | CODM"
meta_description: "A practical guide to implementing Salesforce Education Cloud at a university: scope, phases, integrations, data and common pitfalls."
author: "{{TODO_VERIFY: author name and role}}"
datePublished: "{{TODO_VERIFY}}"
dateModified: "{{TODO_VERIFY}}"
status: DRAFT (not published)
---

# Salesforce Education Cloud implementation guide for universities

**Short answer:** A university Education Cloud implementation usually starts with one area, most often admissions and recruitment or student success. Each phase links Salesforce to the student record system and adds portals through Experience Cloud. Plan for a discovery phase, a data model and integration design, a phased build, and user training. {{TODO_VERIFY: typical duration of a first phase}}

## 1. Choose your first area

| Area | What Education Cloud supports |
|---|---|
| Recruitment and admissions | Enquiries, events, applications, offers, communications |
| Student success and advising | Advisor caseloads, appointments, alerts, support plans |
| Alumni and advancement | Relationships, engagement, fundraising |
| Portals | Applicant and student self-service through Experience Cloud |

## 2. Design the data and integrations

- Map Education Cloud's data model to how your institution works: programmes, terms, courses and applications.
- Decide which system is the source of truth for each record, for example the student record system for enrolments.
- Plan integrations with the student record system, the learning platform, finance and identity (single sign-on). See our article on [Salesforce SSO](/blog/salesforce-sso-authentication).

## 3. Build in phases

1. Discovery and design
2. Core configuration and data migration
3. Integrations
4. Portals and communications
5. Testing with real staff and students
6. Go-live, training and support

## 4. Add AI carefully

Agentforce and AI chatbots can answer common applicant and student questions around the clock. Answers must come from approved content. CODM's own product, [FUTURA](/products/futura), answers student questions from an institution's own documents and lets staff query applicant data in plain English.

## Common pitfalls

- Trying to launch every department at once.
- Migrating old data before it has been cleaned.
- Leaving student record system integration until late in the project.
- Not training advisors and admissions staff early enough.

## FAQ

**Does Education Cloud replace our student record system?**
No. It usually works alongside the student record system and handles engagement, recruitment and support.

**Can applicants use a portal?**
Yes. Experience Cloud portals let applicants and students apply, upload documents and track progress.

**Has CODM implemented Education Cloud for a UK university?**
{{TODO_VERIFY: only answer yes with an approved, attributable case study}}

**How long does the first phase take?**
{{TODO_VERIFY}}

**Call to action:** [Talk to our Education Cloud team](/ItServices/salesforce-education-cloud).
