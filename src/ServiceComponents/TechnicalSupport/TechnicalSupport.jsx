import TechnicalSupport_First from './TechnicalSupport_First/TechnicalSupport_First';
import TechnicalSupport_Seond from './TechnicalSupport_Second/TechnicalSupport_Seond';
// import TechnicalSupportAccodionData from './TechnicalSupportAccodionData/TechnicalSupportAccodionData';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from '../../SeoData/SEO';

function TechnicalSupport() {
  return (
    <>
      <SEO
        title="Technical Support Services | IT Support & Maintenance | CODM Software"
        description="Ensure smooth business operations with reliable technical support services. CODM Software offers IT support, system maintenance, and fast issue resolution."
        url="https://codmsoftware.co.uk/ItServices/technical-support"
        keywords="technical support services, IT support services, system maintenance, software support, managed IT services, troubleshooting support, CODM Software"
      />
      <HeaderWithBg title="Technical Support"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Technical Support", color: "purple-text" }
        ]}
      />
      <TechnicalSupport_Seond />
      <S_lastSection />
    </>
  )
}

export default TechnicalSupport;