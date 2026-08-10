import ApiIntegration_First from './ApiIntegration_First/ApiIntegration_First'
import ApiIntegration_Second from './ApiIntegration_Second/ApiIntegration_Second'
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from '../../SeoData/SEO';

function ApiIntegration() {
  return (
    <>
      <SEO
        title="API Integration Services | Seamless System Integration | CODM Software"
        description="Connect applications seamlessly with our API integration services. Automate workflows, improve data exchange, and build scalable, efficient systems with CODM Software."
        url="https://codmsoftware.co.uk/ItServices/api-integration"
        keywords="API integration services, system integration solutions, REST API development, third-party API integration, enterprise integration, data integration services, CODM Software"
      />
      <HeaderWithBg title="API Integration"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "API Integration", color: "purple-text" }
        ]}
      />
      <ApiIntegration_Second />
      <S_lastSection />
    </>
  )
}

export default ApiIntegration