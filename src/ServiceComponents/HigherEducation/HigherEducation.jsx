import S_firstSection from "./S_firstSection/S_firstSection";
import S_lastSection from "./S_lastSection/S_lastSection";
import S_rightContainer from "./S_rightContainer/S_rightContainer";
import S_SecondSection from "./S_secondSection/S_secondSection";
import SEO from "../../SeoData/SEO";

function HigherEducation() {
  return (
    <>
    <SEO
        title="Software Solutions for Higher Education | CODM Software"
        description="Empower educational institutions with custom software solutions designed to enhance learning experiences and administrative efficiency."
        url="https://codmsoftware.co.uk/ItServices/salesforce-education-cloud"
        keywords="CODM Software Limited, Salesforce consulting partner, AI software development, custom software, .NET development, React apps, Python LLMs, CRM solutions, enterprise software"
      />
  <S_firstSection/>
  <S_SecondSection/>
  <S_lastSection/>
    </>
  )
}

export default HigherEducation;