import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import FirstSection from "../../AboutComponents/FirstSection/FirstSection";
import AtAGlance from "../../AboutComponents/AtAGlance/AtAGlance";
import SecondSection from "../../AboutComponents/SecondSection/SecondSection";
import WhatWeDo from "../../AboutComponents/WhatWeDo/WhatWeDo";
import FourthSection from "../../AboutComponents/FourthSection/FourthSection";
import FounderSection from "../../AboutComponents/FounderSection/FounderSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import GCloudBadge from "../../components/GCloudBadge/GCloudBadge";
import ExecutiveGuide from "../../components/ExecutiveGuide/ExecutiveGuide";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <SEO
        title="About CODM Software | Expert Salesforce & AI Solutions Partner"
        description="Learn about CODM Software - a trusted Salesforce partner specializing in CRM development, AI solutions, and enterprise software innovation since 2023."
        url="https://codmsoftware.co.uk/about"
        keywords="About CODM Software, Salesforce partner, CRM experts, software development company, AI solutions provider, enterprise software"
        image="https://codmsoftware.co.uk/images/about-hero.jpg"
      />

      {/* 1. Who we are — hero with photo, stats and trust logos */}
      <FirstSection />

      {/* 2. Data — counters, story and company facts */}
      <AtAGlance />

      {/* 3. Purpose — mission, vision and values */}
      <SecondSection />

      {/* 4. What we do — services grid */}
      <WhatWeDo />

      {/* 5. Proof — certifications */}
      <FourthSection />

      {/* 6. Lead magnet — executive guide */}
      <ExecutiveGuide />

      {/* 7. People — founder */}
      <FounderSection />

      {/* 8. Trust — public sector framework */}
      <GCloudBadge variant="card" />

      {/* 9. Resources — latest blogs */}
      <div className="about-band about-band--tint">
        <BlogSection />
      </div>
    </>
  );
}

export default About;
