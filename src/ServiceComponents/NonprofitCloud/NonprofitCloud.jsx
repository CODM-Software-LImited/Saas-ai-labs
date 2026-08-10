import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import NonprofitCloud_First from "./NonprofitCloud_First/NonprofitCloud_First";

function NonprofitCloud() {
  return (
    <>
      <SEO
        title="Salesforce Nonprofit Cloud Solutions | Empower NGOs | CODM Software"
        description="Empower nonprofits with Salesforce Nonprofit Cloud. Manage donors, streamline fundraising, track impact, and improve engagement with tailored CRM solutions."
        url="https://codmsoftware.co.uk/ItServices/salesforce-nonprofit-cloud"
        keywords="Salesforce Nonprofit Cloud, nonprofit CRM, donor management system, fundraising software, NGO CRM solutions, nonprofit data management, CODM Software"
      />
      <HeaderWithBg title="Salesforce Nonprofit Cloud"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Salesforce Nonprofit Cloud", color: "purple-text" }
        ]}
      />

      <NonprofitCloud_First />
      <S_lastSection />
    </>
  )
}

export default NonprofitCloud;