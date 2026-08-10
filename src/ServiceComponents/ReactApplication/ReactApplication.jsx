import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import S_rightSidebarDataDevelopment from "../ServiceSidebar/S_rightSidebarDataDevelopment";
// import ReactApplication_First from "./ReactApplication_First/ReactApplication_First";
import ReactApplication_Second from "./ReactApplication_Second/ReactApplication_Second";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import SEO from "../../SeoData/SEO";

function ReactApplication() {
  return (
    <>
      <SEO
        title="React Application Development Services | Modern Web Apps | CODM Software"
        description="Build fast, scalable, and modern web applications with React. CODM Software delivers high-performance React solutions with seamless user experiences."
        url="https://codmsoftware.co.uk/ItServices/react-application-development"
        keywords="React development services, React application development, frontend development, JavaScript frameworks, SPA development, modern web apps, CODM Software"
      />
      <HeaderWithBg title="React Application"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "React Application", color: "purple-text" }
        ]}
      />
      <ReactApplication_Second />
      <S_lastSection />
    </>
  )
}

export default ReactApplication;