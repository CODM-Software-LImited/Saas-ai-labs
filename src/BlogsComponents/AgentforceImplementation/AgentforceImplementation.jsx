import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg"
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import AgentforceImplementation_First from "./AgentforceImplementation_First/AgentforceImplementation_First";

function AgentforceImplementation() {
  return (
    <>
      <SEO
        title="What is Salesforce Agentforce? Features, Benefits & Use Cases | CODM Software"
        description="Learn about Salesforce Agentforce, its features, benefits, and how it enhances customer service with AI-powered automation and intelligent workflows."
        url="https://codmsoftware.co.uk/blog/salesforce-agentforce"
        keywords="Salesforce Agentforce, Salesforce AI agents, customer service automation, AI CRM solutions, Salesforce automation tools, intelligent workflows, CODM Software"
      />
      <HeaderWithBg
        title="Salesforce Agentforce Implementation"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Salesforce Agentforce Implementation", color: "purple-text" }
        ]}
      />
      <AgentforceImplementation_First />

      <BlogFormSection heading='Share Your Thoughts on Our Agentforce Implementation'/>
      <BlogSection/>
    </>
  )
}
export default AgentforceImplementation;