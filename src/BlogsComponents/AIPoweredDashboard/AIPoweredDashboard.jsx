import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import AIPoweredDashboard_FirstSection from "./AIPoweredDashboard_FirstSection/AIPoweredDashboard_FirstSection";

function AIPoweredDashboard() {
  return (
    <>
      <SEO
        title="AI-Powered Dashboards: Benefits, Features & Use Cases | CODM Software"
        description="Discover how AI-powered dashboards transform data into real-time insights. Learn key features, benefits, and use cases for smarter business decisions."
        url="https://codmsoftware.co.uk/blog/ai-powered-dashboard"
        keywords="AI powered dashboard, AI dashboards, business intelligence AI, real-time analytics dashboard, predictive analytics tools, data visualization AI, CODM Software"
      />
      <HeaderWithBg
        title="Salesforce AI-Powered Dashboard"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Salesforce AI-Powered Dashboard", color: "purple-text" }
        ]}
      />
      <AIPoweredDashboard_FirstSection />
      <BlogFormSection heading="Share Your Thoughts on Our AI Powered Development" />
      <BlogSection />
    </>
  )
}

export default AIPoweredDashboard;