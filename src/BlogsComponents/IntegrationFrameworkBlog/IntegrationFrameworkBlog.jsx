import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import IntegrationFrameworkBlog_FirstSection from "./IntegrationFrameworkBlog_FirstSection/IntegrationFrameworkBlog_FirstSection";

function IntegrationFrameworkBlog() {
    return (
        <>
            <SEO
                title="What is an Integration Framework? Benefits, Types & Use Cases | CODM Software"
                description="Learn what an integration framework is, its types, benefits, and real-world use cases. Discover how it helps connect systems and streamline data flow."
                url="https://codmsoftware.co.uk/blog/integration-framework"
                keywords="integration framework, system integration, enterprise integration framework, API integration, data integration, middleware architecture, integration tools, CODM Software"
            />
            <HeaderWithBg
                title="Integration Framework"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Blog", link: "/blog" },
                    { label: "Integration Framework", color: "purple-text" }
                ]}
            />
            <IntegrationFrameworkBlog_FirstSection />
        </>
    )
}

export default IntegrationFrameworkBlog;