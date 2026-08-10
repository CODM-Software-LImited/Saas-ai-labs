// import DotNetApplication_First from './DotNetApplication_First/DotNetApplication_First';
import DotNetApplication_Second from './DotNetApplication_Second/DotNetApplication_Second';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from '../../SeoData/SEO';

function DotNetApplication() {
  return (
    <>
      <SEO
        title=".NET Application Development Services | Scalable Solutions | CODM Software"
        description="Build secure and scalable applications with our .NET development services. CODM Software delivers high-performance web and enterprise solutions tailored to your business needs."
        url="https://codmsoftware.co.uk/ItServices/dotnet-application-development"
        keywords=".NET development services, ASP.NET development, enterprise application development, custom software development, Microsoft .NET solutions, scalable web applications, CODM Software"
      />
      <HeaderWithBg title=".NET Application"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: ".NET Application", color: "purple-text" }
        ]}
      />
      <DotNetApplication_Second />
      <S_lastSection />

    </>
  )
}

export default DotNetApplication;