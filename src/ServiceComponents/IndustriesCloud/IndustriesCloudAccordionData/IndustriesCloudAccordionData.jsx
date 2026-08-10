
import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "How is Salesforce Industries Cloud different from regular Salesforce?",
        content:
            "While standard Salesforce is flexible and customizable, Industries Cloud comes with industry-specific templates, objects, and automation. It’s optimized for faster deployment, regulatory compliance, and sector-specific use cases like claims processing, patient engagement, or policy management."
    },
    {
        number: 2,
        title: "What is OmniStudio in Salesforce?",
        content:
            "OmniStudio is a low-code toolkit within Salesforce Industries Cloud that helps you build guided user experiences, automate business logic, and integrate data sources. Tools like OmniScripts, DataRaptors, and FlexCards make it easy to create scalable, no-code business apps."
    },
    {
        number: 3,
        title: "Is Salesforce Industries Cloud scalable for growing businesses?",
        content: "Absolutely. The platform is fully scalable, with modular architecture, API-ready integrations, and tools that evolve as your business expands. Whether you're a startup or enterprise, it can adapt to your workflows and volumes."
    },
    {
        number: 4,
        title: "What types of data models are included in Salesforce Industries Cloud?",
        content: <>
            <p> <b>Industry-Specific Data Models:</b> Salesforce Industries Cloud includes pre-built, object-oriented data models tailored to specific industries.</p>
            <p><b>Healthcare:</b>Patient profiles, care plans, and provider relationships.</p>
            <p><b>Financial Services:</b>Client portfolios, financial goals, and compliance tracking.</p>
            <p><b>Telecommunications:</b> Subscriber management, service provisioning, and billing.</p>

        </>
    },
]

function IndustriesCloudAccordionData() {
    return (
        <Accordion
            title="Use Cases of Salesforce Financial Cloud"
            items={accordionData}
            defaultOpen={0}
        />

    )
}
export default IndustriesCloudAccordionData;