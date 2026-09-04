import Hero from '../../components/Hero/Hero'
import Hero1 from '../../components/Hero1/Hero1'
import Hero2 from '../../components/Hero2/Hero2';
import Hero4 from '../../components/Hero4/Hero4';
import OurService from '../../components/ourService/ourService';
import OurExcellence from '../../components/OurExcellence/OurExcellence';
import BlogSection from '../../components/BlogSection/BlogSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import './Home.css';

// for animation
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarouselSectionCard from '../../components/CarouselSection/CarouselSectionCard';
import SEO from '../../SeoData/SEO';
import GCloudBadge from '../../components/GCloudBadge/GCloudBadge';
import ExecutiveGuide from '../../components/ExecutiveGuide/ExecutiveGuide';
// import CaseStudy from '../../components/CaseStudy/CaseStudy';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <SEO
        title="CODM Software Limited | Salesforce Partner & AI Software Experts"
        description="Custom CRM & AI-powered software development from trusted Salesforce consulting partner CODM Software Limited."
        url="https://codmsoftware.co.uk"
        image="https://yourwebsite.com/images/salesforce-education-cloud.jpg"
      />

      {/* 1. Who we are — hero + industry showcase carousel */}
      <div className='homepageFirstContainer'>
        <Hero />
        <CarouselSectionCard />
      </div>

      {/* 2. What we do — core services */}
      <div className="home-band">
        <OurService />
      </div>

      {/* 3. Where we work — industries grid */}
      <div className="home-band home-band--tint">
        <Hero2 />
      </div>

      {/* 4. Learn — CRM explainer with video */}
      <Hero1 />

      {/* 5. Why us — vision + counters */}
      <Hero4 />

      {/* 6. Lead magnet — executive guide */}
      <ExecutiveGuide />

      {/* 7. Proof of work — case studies */}
      {/* <CaseStudy /> */}

      {/* 7. Social proof — testimonials */}
      <OurExcellence />

      {/* 8. Trust — public sector framework */}
      <GCloudBadge variant="card" />

      {/* 9. Resources — latest blogs */}
      <div className="home-band home-band--tint">
        <BlogSection />
      </div>

      {/* 10. Certifications + newsletter capture */}
      <NewsletterSection />
    </>
  )
}
export default Home;
