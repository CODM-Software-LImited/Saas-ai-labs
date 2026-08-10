import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import DataIntegration_First from "./DataIntegration_First/DataIntegration_First";
import DataIntegration_Second from "./DataIntegration_Second/DataIntegration_Second";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import SEO from "../../SeoData/SEO";

function DataIntegration() {
  return (
    <>
      <SEO
        title="Data Integration Services | Unified Data Solutions | CODM Software"
        description="Streamline your business with data integration services. Connect systems, unify data sources, and enable real-time insights for better decision-making with CODM Software."
        url="https://codmsoftware.co.uk/ItServices/data-integration"
        keywords="data integration services, data integration solutions, ETL services, data migration, data pipeline, enterprise data integration, real-time data integration, CODM Software"
      />
      <HeaderWithBg title="Data Integration/Migration"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Data Integration/Migration", color: "purple-text" }
        ]}
      />
      <DataIntegration_Second />
      <S_lastSection />
    </>
  )
}

export default DataIntegration;