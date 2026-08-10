import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "What is Einstein AI in Salesforce?",
        content:
            "Einstein AI is Salesforce’s native artificial intelligence engine that embeds predictive and generative intelligence directly into your business processes. It uses machine learning models, natural language processing (NLP), and real-time data analysis to help users make smarter decisions, automate routine tasks, and engage customers more effectively. Einstein can analyze historical data to predict outcomes—such as which leads are likely to convert or which customers are at risk of churning—and provide intelligent recommendations that guide teams toward more successful actions."
    },
    {
        number: 2,
        title: "The Power of Salesforce Data Cloud + AI Combined ?",
        content:
            "When real-time data from Salesforce Data Cloud meets the intelligence of Einstein AI, businesses can move beyond reactive strategies and embrace true, proactive customer engagement. Together, these tools allow you to not only understand what’s happening with your customers right now—but also predict what’s likely to happen next, and act on it instantly.For example, you can trigger personalized product recommendations based on a customer’s latest online behavior, automatically alert a service rep if a VIP customer shows signs of dissatisfaction, or send a targeted tuition reminder to a student showing signs of disengagement. All of this happens automatically and contextually, based on unified, live data and AI-generated insights."
    },
    {
        number: 3,
        title: "What type of data can Salesforce Data Cloud handle ?",
        content: "It supports both structured and unstructured data including CRM, transactional data, behavioral signals, third-party data, IoT data, and more. It ingests this data from internal systems, external platforms, cloud providers, and on-premise databases."
    },
    {
        number: 4,
        title: "How does Data Cloud ensure data privacy and compliance?",
        content: "Salesforce Data Cloud adheres to global privacy standards including GDPR, CCPA, HIPAA, and others. It offers tools for data governance, auditability, encryption, and consent management to ensure compliance and customer trust."
    },
    {
        number:5,
        title:"Can Salesforce Data Cloud be integrated with existing systems ?",
        content:"Yes, Data Cloud integrates seamlessly with Salesforce CRM, Marketing Cloud, Commerce Cloud, Service Cloud, and external systems through APIs and connectors. It allows easy synchronization of data and workflows across platforms."
    },
]

function DataCloudAccordionData() {
    return (
        <Accordion
            title="Frequently Asked Questions (FAQs) on Salesforce Data Cloud + AI"
            items={accordionData}
            defaultOpen={0}
        />

    )
}
export default DataCloudAccordionData;