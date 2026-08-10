import React from 'react'
import PythonApplication_First from './PythonApplication_First/PythonApplication_First';
import PythonApplication_Second from './PythonApplication_Second/PythonApplication_Second';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from '../../SeoData/SEO';

function PythonApplication() {
  return (
    <>
      <SEO
        title="Python Application Development Services | Scalable Solutions | CODM Software"
        description="Build powerful and scalable applications with Python development services. CODM Software delivers secure, high-performance solutions for web, AI, and data-driven applications."
        url="https://codmsoftware.co.uk/ItServices/python-application-development"
        keywords="Python development services, Python application development, web development with Python, AI development Python, data-driven applications, backend development Python, CODM Software"
      />
      <HeaderWithBg title="Python Application"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Python Application", color: "purple-text" }
        ]}
      />
      <PythonApplication_Second />
      <S_lastSection />
    </>
  )
}

export default PythonApplication;