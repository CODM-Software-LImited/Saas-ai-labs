import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import FslAutomation_First from "./FslAutomation_First/FslAutomation_First";
// import AgentforceAI_First from "./AgentforceAI_First/AgentforceAI_First";

function FslAutomation() {
    return (
        <>
            <SEO
                title="Field Service Automation: Improve Efficiency and Productivity | CODM Software"
                description="Discover how field service automation streamlines scheduling, dispatching, and operations to boost productivity and enhance customer satisfaction with real-life examples."
                url="https://codmsoftware.co.uk/blog/field-service-automation"
                keywords="Field Service Automation, Field Service Management, Service Automation Software, Improve Field Productivity, Smart Scheduling Dispatch, Field Operations Automation, CODM Software"
            />

            <HeaderWithBg
                title="Field Service Automation"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Blog", link: "/blog" },
                    { label: "Field Service Automation", color: "purple-text" }
                ]}
            />
            <FslAutomation_First />
            <BlogFormSection heading="Share Your Thoughts On Our Field Service Automation"/>
            <BlogSection />
        </>
    )
}

export default FslAutomation;