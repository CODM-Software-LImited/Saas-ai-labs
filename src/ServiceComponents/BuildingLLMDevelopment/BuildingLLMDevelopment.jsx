import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import BuildingLLMDevelopment_Second from "./BuildingLLMDevelopment_Second/BuildingLLMDevelopment_Second";
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from "../../SeoData/SEO";

function BuildingLLMDevelopment() {
  return (
    <>
      <SEO
        title="Build Custom LLM Solutions | AI & Large Language Models | CODM Software"
        description="Design and deploy custom Large Language Models (LLMs) with CODM Software. Build AI-powered applications, automate workflows, and unlock advanced data insights."
        url="https://codmsoftware.co.uk/ItServices/building-llm"
        keywords="build LLM, large language models, AI development services, custom AI solutions, generative AI, NLP models, machine learning solutions, CODM Software"
      />
      <HeaderWithBg title="Building LLM"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Building LLM", color: "purple-text" }
        ]}
      />
      <BuildingLLMDevelopment_Second />
      <S_lastSection />
    </>
  )
}

export default BuildingLLMDevelopment;