// FAQ content shared by the pages that show it and by /faq, so the visible
// text and the FAQPage JSON-LD always match. Company answers only use facts
// from src/data/company-facts.json.
import facts from "./company-facts.json";
import products from "./products";

const london = facts.offices.find((o) => o.id === "london");

export const companyFaqs = [
  {
    number: 1,
    title: "Who is CODM Software?",
    content: `CODM Software Limited is a UK Salesforce Consulting Partner, incorporated in London on 7 December 2023 (Companies House ${facts.companiesHouseNumber}). Our headquarters is at ${london.streetAddress}, ${london.addressLocality} ${london.postalCode}. We also have a regional office in Birmingham and teams in the USA and India.`,
  },
  {
    number: 2,
    title: "Is CODM Software a Salesforce partner?",
    content:
      "Yes. CODM Software is a Salesforce Consulting Partner. Our team holds Salesforce certifications including Administrator, Application Architect, Data Architect, Agentforce Specialist, Business Analyst, CPQ Specialist, Service Cloud Consultant, OmniStudio Consultant and Developer, Platform App Builder, and Platform Developer I and II.",
  },
  {
    number: 3,
    title: "Which Salesforce clouds do you implement?",
    content:
      "Sales Cloud, Service Cloud, Experience Cloud, Marketing Cloud, Data Cloud, Commerce Cloud, CPQ and Revenue Cloud, Education Cloud, Health and Insurance Cloud, Financial Services Cloud, Manufacturing Cloud, Energy and Utilities Cloud, Nonprofit Cloud and Agentforce.",
  },
  {
    number: 4,
    title: "Do you build AI and Agentforce solutions?",
    content:
      "Yes. We build Agentforce agents and AI assistants that answer questions, take action and give real-time insight, built on top of your own Salesforce and business data. We also develop custom applications that use large language models.",
  },
  {
    number: 5,
    title: "Which industries do you work with?",
    content:
      "Financial services, insurance, healthcare, higher education, manufacturing, nonprofit, energy and utilities, retail, technology, and government and the public sector.",
  },
  {
    number: 6,
    title: "Can public sector organisations buy from CODM through G-Cloud?",
    content:
      "Yes. CODM Software is a G-Cloud 15 supplier (RM1557.15) on Lot 3: Cloud Support, covering Salesforce advisory and implementation, AI and Agentforce, integration, data migration, cloud application development and technical support.",
  },
  {
    number: 7,
    title: "What accreditations does CODM hold?",
    content:
      "Salesforce Consulting Partner, G-Cloud 15 supplier, Cyber Essentials, ISO certification, Google Cloud Partner and Gearset partner.",
  },
  {
    number: 8,
    title: "Do you support Salesforce after go-live?",
    content:
      "Yes. We provide technical and deployment support after launch: environment set-up, releases, monitoring, fixes and improvements, plus training so your team keeps getting more from Salesforce.",
  },
  {
    number: 9,
    title: "How do I contact CODM Software?",
    content: `Email ${facts.contact.email} or call ${facts.contact.telephoneUK} (UK), ${facts.contact.telephoneUS} (USA) or ${facts.contact.telephoneIN} (India). You can also book a free 30-minute call from our contact page.`,
  },
];

export const gcloudFaqs = [
  {
    number: 1,
    title: "What can CODM provide through G‑Cloud 15 Lot 3?",
    content:
      "CODM provides cloud-specific professional services. These include Salesforce advisory, implementation and optimisation; AI and Agentforce support; API integration; data integration and migration; cloud application development; deployment support; and ongoing technical support.",
  },
  {
    number: 2,
    title: "Does CODM provide cloud software or hosting through this framework?",
    content:
      "CODM is named on Lot 3: Cloud Support. Our G‑Cloud 15 offer is focused on professional services that help organisations plan, implement, integrate, develop, support and improve their cloud services.",
  },
  {
    number: 3,
    title: "Can CODM help us assess our requirement?",
    content:
      "Yes. Contact our public sector team with an outline of your objectives. We can explain the scope of our services and provide information to support your procurement process.",
  },
  {
    number: 4,
    title: "Can you support existing Salesforce or cloud platforms?",
    content:
      "Yes. CODM can provide technical support, optimisation, integration, enhancement and development services for existing Salesforce and cloud-based systems.",
  },
  {
    number: 5,
    title: "How do we begin?",
    content:
      "Contact our public sector team to discuss your requirement. We will help identify the relevant CODM Cloud Support service and provide the information needed for your next steps.",
  },
];

export const futuraFaqs = products.find((p) => p.slug === "futura")?.faqs || [];

// Accordion items -> FAQPage schema input.
export const toSchemaFaqs = (items) => items.map((i) => ({ q: i.title, a: i.content }));
