// Every indexable URL on codmsoftware.co.uk.
// Used at build time by scripts/prerender.mjs (static HTML per route),
// scripts/generate-seo-files.mjs (sitemap.xml + llms.txt) and
// scripts/ai-visibility-check.mjs. When you add a <Route> in App.jsx that
// should be indexed, add it here too. `source` is the folder whose last git
// commit date becomes the sitemap <lastmod>.
// Keep this file free of JSX/asset imports so Node can import it directly.

const routes = [
  { path: "/", section: "Company", source: "src/pages/Home", priority: 1.0 },
  { path: "/about", section: "Company", source: "src/pages/About", priority: 0.8 },
  { path: "/contact", section: "Company", source: "src/ContactComponents", priority: 0.8 },
  { path: "/faq", section: "Company", source: "src/pages/Faq", priority: 0.6 },
  { path: "/g-cloud-15", section: "Company", source: "src/pages/GCloud15", priority: 0.7 },

  { path: "/ItServices", section: "Services", source: "src/ServiceComponents/ServiceMainPage", priority: 0.9 },
  { path: "/ItServices/salesforce-financial-services", section: "Services", source: "src/ServiceComponents/FinancialServiceCloud", priority: 0.9 },
  { path: "/ItServices/salesforce-education-cloud", section: "Services", source: "src/ServiceComponents/HigherEducation", priority: 0.9 },
  { path: "/ItServices/salesforce-health-insurance-cloud", section: "Services", source: "src/ServiceComponents/HealthInsuranceCloud", priority: 0.8 },
  { path: "/ItServices/salesforce-sales-cloud", section: "Services", source: "src/ServiceComponents/SalesCloud", priority: 0.8 },
  { path: "/ItServices/salesforce-service-cloud", section: "Services", source: "src/ServiceComponents/ServiceCloud", priority: 0.8 },
  { path: "/ItServices/salesforce-marketing-cloud", section: "Services", source: "src/ServiceComponents/MarketingCloud", priority: 0.8 },
  { path: "/ItServices/salesforce-data-cloud", section: "Services", source: "src/ServiceComponents/DataCloud", priority: 0.8 },
  { path: "/ItServices/salesforce-nonprofit-cloud", section: "Services", source: "src/ServiceComponents/NonprofitCloud", priority: 0.8 },
  { path: "/ItServices/salesforce-manufacturing-cloud", section: "Services", source: "src/ServiceComponents/ManufacturingCloud", priority: 0.7 },
  { path: "/ItServices/salesforce-energy-utilities-cloud", section: "Services", source: "src/ServiceComponents/EnergyUtilitiesCloud", priority: 0.7 },
  { path: "/ItServices/crm-development", section: "Services", source: "src/ServiceComponents/CRMDevelopment", priority: 0.8 },
  { path: "/ItServices/building-llm", section: "Services", source: "src/ServiceComponents/BuildingLLMDevelopment", priority: 0.8 },
  { path: "/ItServices/api-integration", section: "Services", source: "src/ServiceComponents/ApiIntegration", priority: 0.7 },
  { path: "/ItServices/data-integration", section: "Services", source: "src/ServiceComponents/DataIntegration", priority: 0.7 },
  { path: "/ItServices/dotnet-application-development", section: "Services", source: "src/ServiceComponents/DotNetApplication", priority: 0.6 },
  { path: "/ItServices/react-application-development", section: "Services", source: "src/ServiceComponents/ReactApplication", priority: 0.6 },
  { path: "/ItServices/python-application-development", section: "Services", source: "src/ServiceComponents/PythonApplication", priority: 0.6 },
  { path: "/ItServices/technical-support", section: "Services", source: "src/ServiceComponents/TechnicalSupport", priority: 0.6 },
  { path: "/ItServices/deployment-support", section: "Services", source: "src/ServiceComponents/DeploymentSupport", priority: 0.6 },

  { path: "/products", section: "Products", source: "src/pages/Products/Products.jsx", priority: 0.7 },
  { path: "/products/futura", section: "Products", source: "src/data/products.js", priority: 0.8 },

  { path: "/blog", section: "Insights", source: "src/pages/Blog", priority: 0.7 },
  { path: "/blog/agentforce-ai", section: "Insights", source: "src/BlogsComponents/AgentforceAI", priority: 0.6 },
  { path: "/blog/salesforce-agentforce", section: "Insights", source: "src/BlogsComponents/AgentforceImplementation", priority: 0.6 },
  { path: "/blog/agentforce-financial-services", section: "Insights", source: "src/BlogsComponents/AgentforceFinancialServices", priority: 0.6 },
  { path: "/blog/salesforce-einstein-ai-synergy", section: "Insights", source: "src/BlogsComponents/SalesforceEinstein", priority: 0.5 },
  { path: "/blog/salesforce-revenue-cloud", section: "Insights", source: "src/BlogsComponents/SalesforceRevenueCloud", priority: 0.5 },
  { path: "/blog/salesforce-llm-crm-automation", section: "Insights", source: "src/BlogsComponents/SalesforceIIM", priority: 0.5 },
  { path: "/blog/field-service-automation", section: "Insights", source: "src/BlogsComponents/FslAutomation", priority: 0.5 },
  { path: "/blog/salesforce-sso-authentication", section: "Insights", source: "src/BlogsComponents/SSO", priority: 0.5 },
  { path: "/blog/integration-framework", section: "Insights", source: "src/BlogsComponents/IntegrationFrameworkBlog", priority: 0.5 },
  { path: "/blog/trigger-framework", section: "Insights", source: "src/BlogsComponents/TriggerframeworkBlog", priority: 0.5 },
  { path: "/blog/ai-powered-dashboard", section: "Insights", source: "src/BlogsComponents/AIPoweredDashboard", priority: 0.5 },
  { path: "/blog/g-cloud15", section: "Insights", source: "src/BlogsComponents/GCloudSuppliersBlog", priority: 0.6 },

  { path: "/PrivacyPolicy", section: "Legal", source: "src/PrivacyPolicy", priority: 0.2 },
  { path: "/terms-conditions", section: "Legal", source: "src/TermsAndConditions", priority: 0.2 },
];

// Old URLs -> canonical target. Served as real 301s by public/.htaccess
// (and mirrored client-side in App.jsx).
export const redirects = [
  { from: "/blog/g-cloud-framework-suppliers-uk", to: "/blog/g-cloud15" },
  { from: "/index", to: "/" },
  { from: "/index.html", to: "/" },
];

// Pages that are prerendered but left out of the sitemap because their
// canonical tag points at another URL (see canonicalAliases in page-meta.js).
export const aliases = ["/ItServices/data-migration"];

export default routes;
