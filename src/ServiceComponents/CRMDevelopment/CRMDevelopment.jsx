import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection'
// import CRMDevelopment_First from './CRMDevelopment_First/CRMDevelopment_First'
import CRMDevelopment_Second from './CRMDevelopment_Second/CRMDevelopment_Second';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from '../../SeoData/SEO';

function CRMDevelopment() {
  return (
    <>
      <SEO
        title="Salesforce CRM Solutions | Streamline Sales & Customer Management | CODM Software"
        description="Boost business growth with Salesforce CRM solutions. Manage customer relationships, automate workflows, and gain insights to improve sales and service performance."
        url="https://codmsoftware.co.uk/ItServices/crm-development"
        keywords="Salesforce CRM, CRM solutions, customer relationship management, sales automation CRM, CRM for businesses, customer data management, CODM Software"
      />
      <HeaderWithBg title="Salesforce CRM"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Salesforce CRM", color: "purple-text" }
        ]}
      />
      <CRMDevelopment_Second />
      <S_lastSection />
    </>
  )
}
export default CRMDevelopment;