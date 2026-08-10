import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import AgentforceAI_First from "./AgentforceAI_First/AgentforceAI_First";

function AgentforceAI() {
  return (  
    <>
      <SEO
        title="What is Salesforce Agentforce AI? Features, Benefits & Use Cases | CODM Software"
        description="Learn how Salesforce Agentforce AI enables autonomous AI agents to automate workflows, improve customer engagement, and drive business efficiency."
        url="https://codmsoftware.co.uk/blog/agentforce-ai"
        keywords="Salesforce Agentforce AI, AI agents Salesforce, agentic AI platform, CRM automation AI, autonomous AI agents, Salesforce AI tools, CODM Software"
      />
      <HeaderWithBg
        title="AI Powered Salesforce Development"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "AI Powered Salesforce Development", color: "purple-text" }
        ]}
      />
      <AgentforceAI_First />
      <BlogFormSection heading="Share Your Thoughts on Our Agentforce Vibe Coding " />
      <BlogSection />
    </>
  )
}

export default AgentforceAI;