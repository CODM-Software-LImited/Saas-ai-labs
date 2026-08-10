import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import SalesCloud_First from "./SalesCloud_First/SalesCloud_First";

function SalesCloud() {
  return (
    <>
      <SEO
        title="Salesforce Sales Cloud Solutions | Boost Sales Productivity | CODM Software"
        description="Accelerate sales with Salesforce Sales Cloud solutions. Manage leads, automate workflows, gain insights, and close deals faster with CODM Software."
        url="https://codmsoftware.co.uk/ItServices/salesforce-sales-cloud"
        keywords="Salesforce Sales Cloud, sales automation CRM, lead management system, sales pipeline management, CRM for sales teams, sales productivity tools, CODM Software"
      />
      <HeaderWithBg title="Salesforce Sales Cloud"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Salesforce Sales Cloud", color: "purple-text" }
        ]}
      />
      <SalesCloud_First />
      <S_lastSection />
    </>
  )
}

export default SalesCloud;