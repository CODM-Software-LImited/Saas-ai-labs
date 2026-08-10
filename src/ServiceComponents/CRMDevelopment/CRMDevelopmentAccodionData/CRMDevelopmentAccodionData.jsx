import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "What is Salesforce CRM, and how can it benefit my business?",
        content:
            "Salesforce CRM is a cloud-based customer relationship management platform that helps businesses manage sales, customer service, marketing, and more. It enables organizations to streamline processes, enhance customer interactions, and drive growth by providing a unified view of customer data and automating various business functions."
    },
    {
        number: 2,
        title: "How customizable is Salesforce CRM to fit our specific business needs?",
        content:
            "Salesforce CRM is highly customizable. It allows businesses to tailor workflows, fields, objects, and user interfaces to match their unique processes. Additionally, with tools like Salesforce AppExchange, businesses can integrate third-party applications or develop custom apps to extend functionality."
    },
    {
        number: 3,
        title: "Can Salesforce CRM integrate with our existing systems?",
        content: "Yes, Salesforce CRM offers robust integration capabilities. It can connect with various systems such as ERP, marketing automation tools, and other third-party applications through APIs and middleware solutions, ensuring seamless data flow across platforms."
    },
    {
        number: 4,
        title: "What kind of support and training does Salesforce provide?",
        content: 
            "Salesforce offers comprehensive support and training resources,An interactive learning platform with modules and projects.Help & Training Portal: Access to documentation, tutorials, and community forums. Customer Support: Various support plans offering different levels of assistance."
    },
     {
        number: 5,
        title: "How does Salesforce CRM ensure data security and compliance?",
        content: 
            "Salesforce CRM employs stringent security measures, including data encryption, user authentication, and regular security audits. It complies with global standards and regulations such as GDPR and HIPAA, ensuring that customer data is protected and managed responsibly."
    },
]

function CRMDevelopmentAccodionData() {
    return (
        <Accordion
            title="Questions about service"
            items={accordionData}
            defaultOpen={0}
        />

    )
}
export default CRMDevelopmentAccodionData;