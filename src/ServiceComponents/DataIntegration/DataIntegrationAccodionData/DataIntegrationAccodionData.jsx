import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "Healthcare: Streamlining Patient Data Management",
        content:
            "A hospital network migrated petabytes of patient data from legacy systems to a modern cloud-based platform, enhancing data accessibility and compliance with health regulations."
    },
    {
        number: 2,
        title: "Retail: Integrating Sales and Inventory Systems",
        content:
            "A leading retailer integrated data from various sales channels and inventory systems, enabling real-time stock management and personalized customer experiences."
    },
    {
        number: 3,
        title: "Finance: Consolidating Customer Information",
        content: "A financial institution consolidated customer data from multiple branches and online platforms, improving data accuracy and enabling targeted marketing strategies."
    },
    {
        number: 4,
        title: "Manufacturing: Migrating to Advanced ERP Systems",
        content: 
            "A manufacturing company transitioned from outdated ERP systems to a modern solution, streamlining operations and enhancing supply chain visibility."
    },
     {
        number: 5,
        title: "Public Sector: Ensuring Secure Data Transfers",
        content: 
            "A government agency migrated sensitive data across secure platforms, maintaining data integrity and adhering to strict compliance standards."
    },
]

function DataIntegrationAccodionData() {
    return (
        <Accordion
            title="Use Cases Across Industries"
            items={accordionData}
            defaultOpen={0}
        />

    )
}
export default DataIntegrationAccodionData;