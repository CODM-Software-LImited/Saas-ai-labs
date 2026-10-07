// Per-page <title>, meta description and schema hints for codmsoftware.co.uk.
// SEO.jsx looks up the current path here first, so this file wins over the
// title/description props passed by individual components. Keep titles under
// 60 characters and descriptions under 155, and keep every fact consistent
// with src/data/company-facts.json.
//
// kind:       "service" -> Service schema, "article" -> Article schema,
//             "product" -> SoftwareApplication schema (built in the page).
// crumb:      breadcrumb label for this page.
// serviceType: schema.org Service.serviceType.

const pageMeta = {
  "/": {
    title: "CODM Software | UK Salesforce Consulting Partner & AI",
    description:
      "CODM Software Limited is a London-based Salesforce Consulting Partner delivering Salesforce, Agentforce AI, integration and custom software.",
    crumb: "Home",
  },
  "/about": {
    title: "About CODM Software Limited | Salesforce Partner, London",
    description:
      "CODM Software Limited: UK Salesforce Consulting Partner, incorporated 2023, HQ in London with a Birmingham office. G-Cloud 15 supplier, Cyber Essentials.",
    crumb: "About",
  },
  "/contact": {
    title: "Contact CODM Software | London, Birmingham, USA, India",
    description:
      "Talk to CODM Software about Salesforce, Agentforce, AI or integration projects. Call +44 121 818 6924 or email info@codmsoftware.co.uk.",
    crumb: "Contact",
  },
  "/faq": {
    title: "Salesforce Consulting FAQs | CODM Software",
    description:
      "Answers to common questions about working with CODM Software: Salesforce clouds, Agentforce, G-Cloud 15, pricing approach, timelines and support.",
    crumb: "FAQ",
  },
  "/g-cloud-15": {
    title: "G-Cloud 15 Salesforce & Cloud Support | CODM Software",
    description:
      "Buy Salesforce, AI, integration, data migration and support services from CODM Software through G-Cloud 15 Lot 3: Cloud Support (RM1557.15).",
    crumb: "G-Cloud 15",
  },

  "/ItServices": {
    title: "Salesforce, AI & Software Services | CODM Software",
    description:
      "Salesforce implementation (Sales, Service, Financial Services, Education and more), Agentforce and LLM development, integration, software and support.",
    crumb: "Services",
  },
  "/ItServices/salesforce-financial-services": {
    title: "Salesforce Financial Services Cloud Partner | CODM",
    description:
      "CODM Software implements Salesforce Financial Services Cloud for banks, wealth managers and insurers: client 360, onboarding, compliance and Agentforce.",
    crumb: "Financial Services Cloud",
    kind: "service",
    serviceType: "Salesforce Financial Services Cloud implementation",
  },
  "/ItServices/salesforce-education-cloud": {
    title: "Salesforce Education Cloud Consultants UK | CODM",
    description:
      "Salesforce Education Cloud implementation for universities and colleges: admissions, student success, advising and Experience Cloud portals.",
    crumb: "Education Cloud",
    kind: "service",
    serviceType: "Salesforce Education Cloud implementation",
  },
  "/ItServices/salesforce-health-insurance-cloud": {
    title: "Salesforce Health & Insurance Cloud | CODM Software",
    description:
      "Salesforce Health Cloud and Insurance Cloud implementation: patient and policyholder 360, claims, care coordination and secure data management.",
    crumb: "Health & Insurance Cloud",
    kind: "service",
    serviceType: "Salesforce Health Cloud and Insurance Cloud implementation",
  },
  "/ItServices/salesforce-sales-cloud": {
    title: "Salesforce Sales Cloud Implementation | CODM Software",
    description:
      "Sales Cloud set-up and optimisation by certified consultants: lead and opportunity management, forecasting, automation and reporting.",
    crumb: "Sales Cloud",
    kind: "service",
    serviceType: "Salesforce Sales Cloud implementation",
  },
  "/ItServices/salesforce-service-cloud": {
    title: "Salesforce Service Cloud Implementation | CODM Software",
    description:
      "Service Cloud implementation: case management, omni-channel routing, knowledge, self-service portals and Agentforce service agents.",
    crumb: "Service Cloud",
    kind: "service",
    serviceType: "Salesforce Service Cloud implementation",
  },
  "/ItServices/salesforce-marketing-cloud": {
    title: "Salesforce Marketing Cloud Services | CODM Software",
    description:
      "Marketing Cloud set-up and campaigns: journeys, email and SMS automation, segmentation and personalisation connected to your Salesforce data.",
    crumb: "Marketing Cloud",
    kind: "service",
    serviceType: "Salesforce Marketing Cloud implementation",
  },
  "/ItServices/salesforce-data-cloud": {
    title: "Salesforce Data Cloud Implementation | CODM Software",
    description:
      "Salesforce Data Cloud implementation: unify customer data, build real-time segments and ground Agentforce and Einstein AI in trusted data.",
    crumb: "Data Cloud",
    kind: "service",
    serviceType: "Salesforce Data Cloud implementation",
  },
  "/ItServices/salesforce-nonprofit-cloud": {
    title: "Salesforce Nonprofit Cloud for Charities | CODM",
    description:
      "Salesforce Nonprofit Cloud implementation for charities and NGOs: donor management, fundraising, programme tracking and impact reporting.",
    crumb: "Nonprofit Cloud",
    kind: "service",
    serviceType: "Salesforce Nonprofit Cloud implementation",
  },
  "/ItServices/salesforce-manufacturing-cloud": {
    title: "Salesforce Manufacturing Cloud | CODM Software",
    description:
      "Manufacturing Cloud implementation: sales agreements, account-based forecasting, partner management and connected production data.",
    crumb: "Manufacturing Cloud",
    kind: "service",
    serviceType: "Salesforce Manufacturing Cloud implementation",
  },
  "/ItServices/salesforce-energy-utilities-cloud": {
    title: "Salesforce Energy & Utilities Cloud | CODM Software",
    description:
      "Energy & Utilities Cloud implementation for suppliers and utilities: customer service, service points, billing integration and field service.",
    crumb: "Energy & Utilities Cloud",
    kind: "service",
    serviceType: "Salesforce Energy & Utilities Cloud implementation",
  },
  "/ItServices/crm-development": {
    title: "Salesforce CRM Implementation & Development | CODM",
    description:
      "End-to-end Salesforce CRM implementation and custom development by certified architects: discovery, build, data migration, training and support.",
    crumb: "Salesforce CRM Implementation",
    kind: "service",
    serviceType: "Salesforce CRM implementation and development",
  },
  "/ItServices/building-llm": {
    title: "Agentforce & LLM Application Development | CODM",
    description:
      "Production AI built on your own data: Agentforce agents, LLM-powered assistants, document search and workflow automation with security built in.",
    crumb: "AI & LLM Development",
    kind: "service",
    serviceType: "Agentforce and large language model application development",
  },
  "/ItServices/api-integration": {
    title: "Salesforce API Integration Services | CODM Software",
    description:
      "Connect Salesforce with ERP, finance, marketing and legacy systems through secure, monitored REST and SOAP API integrations.",
    crumb: "API Integration",
    kind: "service",
    serviceType: "Salesforce API integration",
  },
  "/ItServices/data-integration": {
    title: "Data Integration & Migration to Salesforce | CODM",
    description:
      "Plan, cleanse and migrate data into Salesforce with accuracy checks and minimal downtime, then keep systems in sync with reliable integrations.",
    crumb: "Data Integration & Migration",
    kind: "service",
    serviceType: "Data integration and data migration",
  },
  "/ItServices/dotnet-application-development": {
    title: ".NET Application Development | CODM Software",
    description:
      "Secure, scalable .NET web and enterprise applications built by CODM Software, integrated with Salesforce and your existing systems.",
    crumb: ".NET Development",
    kind: "service",
    serviceType: ".NET application development",
  },
  "/ItServices/react-application-development": {
    title: "React Application Development | CODM Software",
    description:
      "Fast, accessible React web applications and portals built by CODM Software, connected to Salesforce and your APIs.",
    crumb: "React Development",
    kind: "service",
    serviceType: "React application development",
  },
  "/ItServices/python-application-development": {
    title: "Python Application Development | CODM Software",
    description:
      "Python applications, data pipelines and AI services built by CODM Software, integrated with Salesforce and cloud platforms.",
    crumb: "Python Development",
    kind: "service",
    serviceType: "Python application development",
  },
  "/ItServices/technical-support": {
    title: "Salesforce Technical Support & Managed Services | CODM",
    description:
      "Ongoing Salesforce and application support: monitoring, fixes, enhancements, admin cover and user help after go-live.",
    crumb: "Technical Support",
    kind: "service",
    serviceType: "Salesforce technical support and managed services",
  },
  "/ItServices/deployment-support": {
    title: "Salesforce Deployment & Release Support | CODM",
    description:
      "Environment set-up, release management, DevOps pipelines and go-live support for Salesforce and custom applications.",
    crumb: "Deployment Support",
    kind: "service",
    serviceType: "Salesforce deployment and release management",
  },

  "/products": {
    title: "Products | FUTURA AI Chatbot for Education | CODM",
    description:
      "Software products from CODM Software, including FUTURA, the AI chatbot that answers student enquiries and lets admissions staff query data.",
    crumb: "Products",
  },
  "/products/futura": {
    title: "FUTURA: AI Chatbot for Education | CODM Software",
    description:
      "FUTURA answers student questions from your own documents and lets admissions staff ask about applicants and enrolments in plain English.",
    crumb: "FUTURA",
    kind: "product",
  },

  "/blog": {
    title: "Salesforce & AI Insights | CODM Software Blog",
    description:
      "Practical articles on Salesforce, Agentforce, AI, integration and G-Cloud from the CODM Software delivery team.",
    crumb: "Blog",
  },
  "/blog/agentforce-ai": {
    title: "What Is Salesforce Agentforce AI? Features & Uses",
    description:
      "How Salesforce Agentforce AI agents automate workflows and customer service, with key features, benefits and real use cases.",
    crumb: "What is Agentforce AI?",
    kind: "article",
    author: "hardik",
  },
  "/blog/salesforce-agentforce": {
    title: "Salesforce Agentforce Implementation Guide | CODM",
    description:
      "What Salesforce Agentforce is, what it can automate and how to plan an Agentforce implementation for customer service and sales teams.",
    crumb: "Agentforce implementation",
    kind: "article",
    author: "chander",
  },
  "/blog/agentforce-financial-services": {
    title: "Agentforce for Financial Services | CODM Software",
    description:
      "How banks, wealth managers and insurers use Salesforce Agentforce with Financial Services Cloud to automate service and advice workflows.",
    crumb: "Agentforce for financial services",
    kind: "article",
    author: "prachi",
  },
  "/blog/salesforce-einstein-ai-synergy": {
    title: "Salesforce Einstein AI: Features & Use Cases | CODM",
    description:
      "How Salesforce Einstein adds predictive scoring, recommendations and automation to CRM, and how it relates to Agentforce.",
    crumb: "Salesforce Einstein AI",
    kind: "article",
    author: "prachi",
  },
  "/blog/salesforce-revenue-cloud": {
    title: "What Is Salesforce Revenue Cloud? | CODM Software",
    description:
      "Salesforce Revenue Cloud explained: quoting, CPQ, billing and revenue management features, benefits and when to adopt it.",
    crumb: "Salesforce Revenue Cloud",
    kind: "article",
    author: "sumit",
  },
  "/blog/salesforce-llm-crm-automation": {
    title: "LLMs in Salesforce for Higher Education | CODM",
    description:
      "How large language models inside Salesforce automate CRM work in higher education: enquiries, admissions and student support.",
    crumb: "LLMs in Salesforce",
    kind: "article",
    author: "hardik",
  },
  "/blog/field-service-automation": {
    title: "Salesforce Field Service Automation Guide | CODM",
    description:
      "How field service automation in Salesforce improves scheduling, dispatch and first-time fix rates, with practical examples.",
    crumb: "Field service automation",
    kind: "article",
    author: "hardik",
  },
  "/blog/salesforce-sso-authentication": {
    title: "Single Sign-On (SSO) in Salesforce Explained | CODM",
    description:
      "How Single Sign-On works in Salesforce, SAML and OpenID Connect options, and how to set it up securely.",
    crumb: "Salesforce SSO",
    kind: "article",
    author: "priya",
  },
  "/blog/integration-framework": {
    title: "What Is an Integration Framework? | CODM Software",
    description:
      "What an integration framework is, the main types, and how it helps connect Salesforce with other systems reliably.",
    crumb: "Integration framework",
    kind: "article",
    author: "yamini",
  },
  "/blog/trigger-framework": {
    title: "Salesforce Trigger Framework Best Practices | CODM",
    description:
      "What a Salesforce trigger framework is, why it matters and best practices for scalable, maintainable Apex triggers.",
    crumb: "Trigger framework",
    kind: "article",
    author: "chander",
  },
  "/blog/ai-powered-dashboard": {
    title: "AI-Powered Dashboards: Features & Benefits | CODM",
    description:
      "How AI-powered dashboards turn CRM data into real-time insight, with key features, benefits and use cases.",
    crumb: "AI-powered dashboards",
    kind: "article",
    author: "hardik",
  },
  "/blog/g-cloud15": {
    title: "G-Cloud Framework Suppliers UK: G-Cloud 15 | CODM",
    description:
      "How public sector buyers can procure Salesforce, AI, integration and cloud support from CODM Software through G-Cloud 15 Lot 3.",
    crumb: "G-Cloud 15 suppliers",
    kind: "article",
  },

  "/PrivacyPolicy": {
    title: "Privacy Policy | CODM Software Limited",
    description:
      "How CODM Software Limited collects, uses and protects personal data under UK GDPR.",
    crumb: "Privacy Policy",
  },
  "/terms-conditions": {
    title: "Terms and Conditions | CODM Software Limited",
    description:
      "The terms and conditions for using the CODM Software Limited website and services.",
    crumb: "Terms and Conditions",
  },
};

// Article authors, as credited in each post's sidebar.
export const authors = {
  hardik: { name: "Hardik Sharma", jobTitle: "LLM Engineer", url: "https://www.linkedin.com/in/hardik-sharma-374b58206/" },
  prachi: { name: "Prachi Pathak", jobTitle: "Business Analyst", url: "https://www.linkedin.com/in/prachi-pathak-4a5867167/" },
  chander: { name: "Chander Kant", jobTitle: "Senior Salesforce Developer", url: "https://www.linkedin.com/in/chander-kant-9aa727222/" },
  yamini: { name: "Yamini Sharma", jobTitle: "Senior Developer", url: "https://www.linkedin.com/in/yamini-sharma-b33102221/" },
  sumit: { name: "Sumit Tiwari", jobTitle: "Senior Developer" },
  priya: { name: "Priya Kumari", jobTitle: "Software Engineer", url: "https://www.linkedin.com/in/priyakumari000/" },
};

// URLs that render the same page as another URL: canonical points at the target.
export const canonicalAliases = {
  "/ItServices/data-migration": "/ItServices/data-integration",
  "/index": "/",
  "/index.html": "/",
};

// Breadcrumb parents for pages whose parent is not simply the first segment.
export const crumbParents = {
  "/ItServices": ["/"],
  "/products": ["/"],
  "/blog": ["/"],
};

export default pageMeta;
