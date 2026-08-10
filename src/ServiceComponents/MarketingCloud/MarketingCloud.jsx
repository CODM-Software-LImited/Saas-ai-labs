import React from 'react'
import MarketingCloud_First from './MarketingCloud_First/MarketingCloud_First'
import MarketingCloud_Second from './MarketingCloud_Second/MarketingCloud_Second'
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import SEO from '../../SeoData/SEO';

function MarketingCloud() {
  return (
    <>
      <SEO
        title="Salesforce Marketing Cloud Services | CODM Software"
        description="Boost customer engagement with Salesforce Marketing Cloud services. Automate campaigns, personalize journeys, and drive better ROI with data-driven marketing."
        url="https://codmsoftware.co.uk/ItServices/salesforce-marketing-cloud"
        keywords="Salesforce Marketing Cloud, marketing automation, email marketing CRM, customer journey management, digital marketing platform, personalized campaigns, CODM Software"
      />
      <HeaderWithBg title="Salesforce Marketing Cloud Services"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Salesforce Marketing Cloud Services", color: "purple-text" }
        ]}
      />
      <MarketingCloud_Second />
      <S_lastSection />
    </>
  )
}

export default MarketingCloud