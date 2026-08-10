import Accordion from "../../ui/Accordion/Accordion"

const accordionData = [
  {
    number: 1,
    title: "What is an Integration Framework?",
    content:
      "An Integration Framework is a set of tools, guidelines, and prebuilt components that enable seamless data exchange between different software systems, applications, and platforms. It ensures smooth communication, process automation, and centralized control over your digital ecosystem."
  },
  {
    number: 2,
    title: "Why is integration important for modern businesses?",
    content:
      "Integration helps eliminate data silos, automate repetitive tasks, and improve accuracy across systems like CRM, ERP, and e-commerce platforms. It enables real-time insights, enhances customer experience, and supports scalability as your business grows."
  },
  {
    number: 3,
    title:"What systems can your Integration Framework connect?",
    content:"Our Integration Framework supports a wide range of systems including Salesforce, SAP, Oracle, Microsoft Dynamics, NetSuite, Workday, Shopify, Magento, and custom-built applications. It also supports both cloud and on-premise environments."
  },
  {
    number: 4,
    title:"Is your Integration Framework secure?",
    content:"Yes, security is a top priority. We use industry-standard practices such as OAuth 2.0 authentication, Named Credentials, IP Whitelisting, firewalls, and encrypted data transmission to ensure all integrations are secure and compliant with regulations like GDPR and HIPAA."
  },
  {
    number: 5,
    title:"Do I need coding skills to use the Integration Framework?",
    content:"Not necessarily. Our framework offers low-code and no-code tools with drag-and-drop interfaces for building workflows. However, developers can still extend and customize integrations using APIs and advanced scripting for complex use cases."
  },
  {
    number: 6,
    title:"How long does it take to implement an integration?",
    content:"Implementation time depends on the complexity of your systems and processes. With our prebuilt connectors and expert team, most standard integrations can be completed within a few days to a couple of weeks."
  },]

function AccordionDataSection() {
  return (
    <Accordion 
      title="Frequently Asked Questions (FAQs)"
      items={accordionData}
      defaultOpen={0}
    />
  )
}

export default AccordionDataSection;