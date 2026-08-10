import React from 'react'
import DataCloud_First from './DataCloud_First/DataCloud_First'
import DataCloud_Second from './DataCloud_Second/DataCloud_Second'
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection'
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from '../../SeoData/SEO';

function DataCloud() {
  return (
    <>
      <SEO
        title="Salesforce Data Cloud & AI Solutions | CODM Software"
        description="Unlock the power of Salesforce Data Cloud and AI to unify customer data, gain real-time insights, and build intelligent, data-driven applications."
        url="https://codmsoftware.co.uk/ItServices/salesforce-data-cloud"
        keywords="Salesforce Data Cloud, Salesforce AI, data cloud solutions, AI CRM, customer data platform, real-time analytics, AI automation, CODM Software"
      />
      <HeaderWithBg title="Data Cloud + A.I"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Data Cloud + A.I", color: "purple-text" }
        ]}
      />
      <DataCloud_Second />
      <S_lastSection />
    </>
  )
}

export default DataCloud;