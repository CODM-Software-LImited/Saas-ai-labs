import FifthSection from "../../AboutComponents/FifthSection/FifthSection";
import FirstSection from "../../AboutComponents/FirstSection/FirstSection";
import FounderSection from "../../AboutComponents/FounderSection/FounderSection";
import FourthSection from "../../AboutComponents/FourthSection/FourthSection";
import Insurance from "../../AboutComponents/Insurance/Insurance";
import SecondSection from "../../AboutComponents/SecondSection/SecondSection";
import ThirdSection from "../../AboutComponents/ThirdSection/ThirdSection";
import WhatWeDo from "../../AboutComponents/WhatWeDo/WhatWeDo";
import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
 
 
function About() {
  return (
    <>
      <SEO
        title="About CODM Software | Expert Salesforce & AI Solutions Partner"
        description="Learn about CODM Software - a trusted Salesforce partner specializing in CRM development, AI solutions, and enterprise software innovation since 2015."
        url="https://codmsoftware.co.uk/about"
        keywords="About CODM Software, Salesforce partner, CRM experts, software development company, AI solutions provider, enterprise software"
        image="https://codmsoftware.co.uk/images/about-hero.jpg"
      />
      <FirstSection/>
      <SecondSection/>
      <WhatWeDo/>
      {/* <ThirdSection/> */}
      <FourthSection/>
      <FounderSection/>
      {/* <Insurance/> */}
      <BlogSection/>
      {/* <FifthSection/> */}
    </>
  )
}
 
export default About;


// import FifthSection from "../../AboutComponents/FifthSection/FifthSection";
// import FirstSection from "../../AboutComponents/FirstSection/FirstSection";
// import FounderSection from "../../AboutComponents/FounderSection/FounderSection";
// import FourthSection from "../../AboutComponents/FourthSection/FourthSection";
// import Insurance from "../../AboutComponents/Insurance/Insurance";
// import SecondSection from "../../AboutComponents/SecondSection/SecondSection";
// import ThirdSection from "../../AboutComponents/ThirdSection/ThirdSection";
// import WhatWeDo from "../../AboutComponents/WhatWeDo/WhatWeDo";
// import BlogSection from "../../components/BlogSection/BlogSection";


// function About() {
//   return (
//     <>
//   <FirstSection/>
//   <SecondSection/>
//   <WhatWeDo/>
//   {/* <ThirdSection/> */}
//   <FourthSection/>
//    <FounderSection/>
//   {/* <Insurance/> */}
//   <BlogSection/>
//   {/* <FifthSection/> */}
//   </>
//   )
// }

// export default About;