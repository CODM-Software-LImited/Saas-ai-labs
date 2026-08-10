import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import ManufacturingCloud_First from "./ManufacturingCloud_First/ManufacturingCloud_First";
function ManufacturingCloud() {
  return (  
    <>
      <SEO
        title="Salesforce Manufacturing Cloud Solutions | CODM Software"
        description="Optimize manufacturing operations with Salesforce Manufacturing Cloud. Improve demand forecasting, streamline sales agreements, and gain real-time insights for better decision-making."
        url="https://codmsoftware.co.uk/ItServices/salesforce-manufacturing-cloud"
        keywords="Salesforce Manufacturing Cloud, manufacturing CRM, demand forecasting software, sales agreement management, manufacturing analytics, industrial CRM solutions, CODM Software"
      />
      <HeaderWithBg title="Salesforce Manufacturing Cloud"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Salesforce Manufacturing Cloud", color: "purple-text" }
        ]}
      />
      <ManufacturingCloud_First />
      <S_lastSection />
    </>

  )
}
export default ManufacturingCloud;