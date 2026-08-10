import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import EnergyUtilitiesCloud_First from "./EnergyUtilitiesCloud_First/EnergyUtilitiesCloud_First";
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection.jsx';
import SEO from "../../SeoData/SEO.jsx";

function EnergyUtilitiesCloud() {
  return (
    <> 
    <SEO 
  title="Salesforce Energy & Utilities Cloud Solutions | CODM Software"
  description="Enhance energy and utility operations with Salesforce Energy & Utilities Cloud. Streamline customer service, manage data efficiently, and drive smarter, sustainable solutions."
  url="https://codmsoftware.co.uk/ItServices/salesforce-energy-utilities-cloud"
  keywords="Salesforce Energy Cloud, Salesforce Utilities Cloud, energy CRM solutions, utility management system, smart energy software, customer engagement utilities, CODM Software"
/>
  <HeaderWithBg  title="Salesforce Energy and Utilities Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce Energy and Utilities Cloud", color: "purple-text" }
                    ]}
    />
    <EnergyUtilitiesCloud_First/>
    <S_lastSection/>
    </>
  )
}
export default EnergyUtilitiesCloud;