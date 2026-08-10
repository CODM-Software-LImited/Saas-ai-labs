import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import SalesforceRevenueCloud_first from "./SalesforceRevenueCloud_first/SalesforceRevenueCloud_first";

function SalesforceRevenueCloud() {

  return (
    <>
      <SEO
        title="What is Salesforce Revenue Cloud? Features, Benefits & Use Cases | CODM Software"
        description="Discover Salesforce Revenue Cloud, its features, benefits, and how it streamlines quoting, billing, and revenue management for faster business growth."
        url="https://codmsoftware.co.uk/blog/salesforce-revenue-cloud"
        keywords="Salesforce Revenue Cloud, revenue management Salesforce, CPQ Salesforce, billing automation, quote to cash process, revenue lifecycle management, CODM Software"
      />
      <HeaderWithBg
        title="Salesforce Revenue Cloud (Previously CPQ)"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Revenue Cloud Advanced", color: "purple-text" }
        ]}
      />
      <SalesforceRevenueCloud_first />
      <BlogFormSection heading="Share Your Thoughts on Our Salesforce Revenue Cloud" />
      <BlogSection />
    </>
  )
}

export default SalesforceRevenueCloud;