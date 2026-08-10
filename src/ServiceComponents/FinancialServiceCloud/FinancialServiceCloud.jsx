import React from 'react'
import ServicePageHeaderSection from '../ui/ServicePageHeaderSection/ServicePageHeaderSection'
import img1 from '../../assets/imgs/services-details-2/Financial-Cloud/img-1.jpg';
import FinancialServiceCloud_Second from './FinancialServiceCloud_Second/FinancialServiceCloud_Second';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import SEO from '../../SeoData/SEO';

function FinancialServiceCloud() {
  return (
    <>
   <SEO
        title="Financial Software Solutions | Secure & Compliant Systems | CODM Software"
        description="Develop secure and compliant software solutions for the financial sector, optimizing operations and customer service"
        url="https://codmsoftware.co.uk/ItServices/salesforce-financial-services"
        keywords="CODM Software Limited, Salesforce consulting partner, AI software development, custom software, .NET development, React apps, Python LLMs, CRM solutions, enterprise software"
      />

     <HeaderWithBg  title="Salesforce Financial Services Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce Financial Services Cloud", color: "purple-text" }
                    ]}
    />
    <FinancialServiceCloud_Second/>
    <S_lastSection/>
    </>
  ) 
}

export default FinancialServiceCloud;