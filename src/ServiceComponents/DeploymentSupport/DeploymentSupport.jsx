import React from 'react'
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg'
import DeploymentSupport_First from './DeploymentSupport_First/DeploymentSupport_First';
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import SEO from '../../SeoData/SEO';

function DeploymentSupport() {
  return (
    <>
      <SEO
        title="Deployment Support Services | Smooth Software Deployment | CODM Software"
        description="Ensure seamless software deployment with expert support from CODM Software. Minimize downtime, reduce risks, and achieve efficient system implementation."
        url="https://codmsoftware.co.uk/ItServices/deployment-support"
        keywords="deployment support services, software deployment, application deployment, system implementation, DevOps deployment, release management, CODM Software"
      />
      <HeaderWithBg title="Deployments"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/ItServices" },
          { label: "Deployment Support", color: "purple-text" }
        ]}
      />
      <DeploymentSupport_First />
      <S_lastSection />

    </>
  )
}

export default DeploymentSupport;