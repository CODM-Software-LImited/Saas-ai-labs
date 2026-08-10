import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import AgentforceFinancialServices_FirstSection from "./AgentforceFinancialServices_FirstSection/AgentforceFinancialServices_FirstSection";

function AgentforceFinancialServices() {
  return (
    <>
      <SEO
        title="Salesforce Agentforce for Financial Services: Features, Benefits & Use Cases | CODM Software"
        description="Discover how Salesforce Agentforce transforms financial services with AI-powered automation, improving customer experience, efficiency, and decision-making."
        url="https://codmsoftware.co.uk/blog/agentforce-financial-services"
        keywords="Salesforce Agentforce, Agentforce financial services, AI in banking CRM, financial services automation, AI agents Salesforce, insurance automation CRM, CODM Software"
      />
      
      <HeaderWithBg
        title="Salesforce Financial Service Cloud"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Salesforce Financial Service Cloud", color: "purple-text" }
        ]}
      />
      <AgentforceFinancialServices_FirstSection />
    </>
  )
}

export default AgentforceFinancialServices;