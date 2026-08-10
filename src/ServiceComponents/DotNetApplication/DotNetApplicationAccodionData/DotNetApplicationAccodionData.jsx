
import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "What types of applications can be developed using .NET?",
        content:
            ".NET is a versatile framework that supports the development of various applications, including ,Web Applications: Using ASP.NET for dynamic websites and web services, Desktop Applications: With Windows Forms or WPF for rich client applications. Mobile Applications: Through Xamarin for cross-platform mobile apps. Cloud-Based Applications: Leveraging Azure integration for scalable solutions. Microservices and APIs: Utilizing .NET Core for lightweight, modular services."
    },
    {
        number: 2,
        title: "How does .NET ensure cross-platform compatibility?",
        content:
            "With the introduction of .NET Core and the evolution into .NET 5 and beyond, .NET provides cross-platform support, allowing applications to run seamlessly on Windows, Linux, and macOS. This flexibility enables businesses to deploy applications across diverse environments without significant code changes."
    },
    {
        number: 3,
        title: "Is .NET suitable for enterprise-level applications?",
        content: "Absolutely. .NET is designed to handle the demands of enterprise applications.offering Scalability, Security , Integration, Maintainability."
    },
    {
        number: 4,
        title: "How does .NET support modern development practices?",
        content: 
            ".NET aligns with contemporary development methodologies by supporting.,Continuous Integration/Continuous Deployment (CI/CD) , Containerization , Microservices Architecture , Cloud Integration"
    },
     {
        number: 5,
        title: "What are the benefits of choosing .NET for application development?",
        content: 
            "Choosing .NET offers several advantages like Performance,Versatility,Community Support,Long-Term Support."
    },
]
function DotNetApplicationAccodionData() {
    return (
        <Accordion
            title="Questions about service"
            items={accordionData}
            defaultOpen={0}
        />

    )
}
export default DotNetApplicationAccodionData;