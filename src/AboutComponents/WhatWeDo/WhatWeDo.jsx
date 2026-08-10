import "./WhatWeDo.css";
import {
    FaTools,
    FaCloud,
    FaRobot,
    FaCode,
    FaLink,
} from "react-icons/fa"; 
import { FaCogs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
    {
        icon: FaTools,
        title: "Salesforce Implementation",
        description:
            "Complete Salesforce CRM implementation tailored to your business needs. Our certified architects and consultants ensure seamless deployment across industries, focusing on security reviews and best practices.",
    },
    {
        icon: FaCloud,
        title: "Industries Cloud Solutions",
        description:
            "Specialized solutions for Financial Services, Healthcare, Insurance, Telecommunications, and Education sectors. We leverage Salesforce Industries Cloud to deliver 360 degree views of your clients.",
    },
    {
        icon: FaRobot,
        title: "AI & Agentforce",
        description:
            "Enhance customer support with AI driven automation and Agentforce solutions. We integrate cutting edge AI and LLMs to provide real time data insights and smarter service delivery.",
    },
    {
        icon: FaCode,
        title: "Custom Software Development",
        description:
            "Bespoke software solutions built with .NET, React, and Python. We create scalable applications that integrate seamlessly with your existing systems and drive business growth.",
    },
    {
        icon: FaLink,
        title: "API Integration & Data Migration",
        description:
            "Expert API integration services connecting your platforms and tools. We handle complex data migrations ensuring data integrity and minimal disruption to your operations.",
    },
    {
    icon: FaCogs,
    title: "Technical & Deployment Support",
    description:
        "Reliable deployment and technical support covering environment setup, releases, monitoring, and post deployment stability.",
}
];

const expertise = [
    "Salesforce OmniStudio (Vlocity)",
    "Salesforce CPQ",
    "Lightning Web Components",
    "Customer 360 Platform",
    "Financial Services Cloud",
    "Banking Services",
    "Education Cloud",
    "Managed Packages",
];

function WhatWeDo() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);
    return (
        <section className="what-we-do">
            <div className="">
                <div className="section-header">
                    <h2>What We Do</h2>
                    <p>
                        As a certified Salesforce Consulting Partner, we deliver innovative
                        CRM solutions
                    </p>
                </div>

                <div className="services-grid text-center">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            // <div key={index} className="service-card" data-aos="fade-down" data-aos-delay="100">
                            <div key={index} className="service-card">
                                <div className="d-flex justify-content-center align-items-center">
                                <div className="service-icon">
                                    <Icon size={32} color="white"/>
                                </div>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default WhatWeDo;
