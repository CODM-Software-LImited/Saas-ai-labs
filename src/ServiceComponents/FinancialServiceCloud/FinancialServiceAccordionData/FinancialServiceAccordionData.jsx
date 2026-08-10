import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
  {
    number: 1,
    title: "Wealth Management",
    content:
      "Advisors use FSC to gain insights into client portfolios, create personalized goal plans, and schedule timely check-ins based on life events or portfolio changes. Relationship maps allow them to better manage families, trusts, and referrals."
  },
  {
    number: 2,
    title: "Retail & Commercial Banking",
    content:
      "Bankers can offer proactive financial advice by understanding customer behavior and history. FSC supports product recommendations, appointment scheduling, and workflow automation for credit applications, onboarding, and account servicing."
  },
  {
    number: 3,
    title:"Insurance",
    content:"From lead nurturing to policy renewal reminders, FSC centralizes the customer experience. Agents can automate claims workflows, offer tailored coverage advice, and handle customer issues faster."
  },
  {
    number: 4,
    title:"Fintech & Lending",
    content:"Fintech companies use FSC to manage digital customer journeys, support automated lending workflows, and ensure transparency across customer interactions."
  },
  {
    number: 5,
    title:"Private Equity & Investment Firms",
    content:"Private equity firms and institutional investors use FSC to manage complex stakeholder relationships, fund performance metrics, and deal pipelines. The platform allows for centralized tracking of investor communications, capital calls, compliance documentation, and deal lifecycle management."
  },
  ]

function FinancialServiceAccordionData() {
  return (
    <Accordion 
      title="Use Cases of Salesforce Financial Cloud"
      items={accordionData}
      defaultOpen={0}
    />

  )
}
export default FinancialServiceAccordionData;