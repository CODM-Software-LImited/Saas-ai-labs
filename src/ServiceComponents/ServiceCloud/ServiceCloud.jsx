import React from 'react';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import ServiceCloud_First from './ServiceCloud_First/ServiceCloud_First';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import SEO from '../../SeoData/SEO';

function ServiceCloud() {
  return (
    <>
      <SEO
        title="Salesforce Service Cloud Solutions | Customer Support CRM | CODM Software"
        description="Deliver exceptional customer support with Salesforce Service Cloud. Automate service processes, manage cases efficiently, and enhance customer satisfaction."
        url="https://codmsoftware.co.uk/ItServices/salesforce-service-cloud"
        keywords="Salesforce Service Cloud, customer support CRM, case management system, service automation, customer service software, help desk CRM, CODM Software"
      />
      <HeaderWithBg title="Salesforce Service Cloud"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Salesforce Service Cloud", color: "purple-text" }
        ]}
      />
      <ServiceCloud_First />
      <S_lastSection />
    </>
  )
}

export default ServiceCloud;