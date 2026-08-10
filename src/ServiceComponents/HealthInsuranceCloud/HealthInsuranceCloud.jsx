import SEO from '../../SeoData/SEO';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HealthInsuranceCloud_First from './HealthInsuranceCloud_First/HealthInsuranceCloud_First';

function HealthInsuranceCloud() {
  return (
    <>
      <SEO
        title="Salesforce Health & Insurance Cloud Solutions | CODM Software"
        description="Transform healthcare and insurance operations with Salesforce Health & Insurance Cloud. Improve patient engagement, streamline claims, and enhance data management."
        url="https://codmsoftware.co.uk/ItServices/salesforce-health-insurance-cloud"
        keywords="Salesforce Health Cloud, Insurance Cloud, healthcare CRM, insurance management software, patient engagement solutions, claims management system, CODM Software"
      />
      
      <HeaderWithBg title="Salesforce Health & Insurance Cloud"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Salesforce Health & Insurance Cloud", color: "purple-text" }
        ]}
      />
      <HealthInsuranceCloud_First />
      <S_lastSection />
    </>
  )
}
export default HealthInsuranceCloud;