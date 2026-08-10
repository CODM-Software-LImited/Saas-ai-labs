import Accordion from '../../../ui/Accordion/Accordion.jsx';
const accordionData = [
  {
    number: 1,
    title: "Can we say CPQ is dying?",
    content:
      "Not immediately. While Salesforce CPQ is entering its End of Sale phase, existing customers can still use and renew it with full support. However, RCA is the future direction, offering a more scalable, flexible, and native alternative."
  },
  {
    number: 2,
    title: "How is RCA different from Salesforce CPQ?",
    content:
      "While CPQ focused mainly on configuring products, pricing, and generating quotes, RCA goes further. It integrates with contract lifecycle management, billing systems, compliance tools, and analytics — providing a full quote-to-cash solution."
  },
  {
    number: 3,
    title:"Do I need to switch to RCA if I’m already using CPQ?",
    content:"Not immediately. Salesforce will continue supporting CPQ users, but RCA is the future of the platform. Businesses should start planning for the transition to take advantage of new features and automation capabilities."
  },
  {
    number: 4,
    title:"What types of businesses can benefit from RCA?",
    content:"RCA is ideal for any business with complex pricing, recurring revenue models, or multi-step sales cycles — including SaaS companies, manufacturing, telecom, and professional services."
  },
  {
    number: 5,
    title:"How does RCA support compliance and revenue recognition?",
    content:"RCA includes built-in tools to help you stay compliant with accounting standards like ASC 606 and IFRS 15. It automates revenue allocation, recognition schedules, and audit-ready reporting."
  },
  {
    number: 6,
    title:"How does RCA support compliance and revenue recognition?",
    content:"RCA includes built-in tools to help you stay compliant with accounting standards like ASC 606 and IFRS 15. It automates revenue allocation, recognition schedules, and audit-ready reporting."
  },
  
]

function SalesforceRevenueCloudAccordion() {
  return (
    <Accordion 
      title="Frequently Asked Questions (FAQs)"
      items={accordionData}
      defaultOpen={0}
    />
  )
}

export default SalesforceRevenueCloudAccordion;