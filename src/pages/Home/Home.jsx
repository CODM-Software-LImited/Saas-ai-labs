import Hero from '../../components/Hero/Hero'
// import PartnerLogo from '../../components/PartnerLogo/PartnerLogo.JSX'
import Hero1 from '../../components/Hero1/Hero1'
import Hero2 from '../../components/Hero2/Hero2';
import Hero3 from '../../components/Hero3/Hero3';
import Hero4 from '../../components/Hero4/Hero4';
import OurService from '../../components/ourService/ourService';
import OurExcellence from '../../components/OurExcellence/OurExcellence';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import './Home.css';
import Testimonial from '../../components/Testimonials/Testimonial';
import Carousel from '../../components/Carousel/Carousel';

// for animation 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollOnTop from '../../components/ScrollOnTop/ScrollOnTop'
import CarouselSectionCard from '../../components/CarouselSection/CarouselSectionCard';
import SEO from '../../SeoData/SEO';

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

      <div className='homepageFirstContainer'>
      <Hero />
      {/* <PartnerLogo/> */}
      <CarouselSectionCard/>
      <Hero1 />
      </div>
      {/* <Testimonial/> */}
      <Hero2/>
      {/* <Hero3/> */}
      <Hero4/>
      <OurService />
      <OurExcellence />
      {/* <TestimonialsSection /> */}
      <BlogSection/>
      <NewsletterSection/>
    </>
  )
}
export default Home;
