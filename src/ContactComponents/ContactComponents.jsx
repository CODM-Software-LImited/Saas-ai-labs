import ContactMapSection from "./ContactMapSection/ContactMapSection";
import ContactSection_FirstSection from "./ContactSection_FirstSection/ContactSection_FirstSection";
import ContactSection_SecondSection from "./ContactSection_SecondSection/ContactSection_SecondSection";
import ContactSection_ThirdSection from "./ContactSection_ThirdSection/ContactSection_ThirdSection";
import SEO from "../SeoData/SEO";
 
 
function ContactComponents() {
  return (
    <>
      <SEO
        title="Contact CODM Software | Salesforce Partner & AI Solutions Inquiry"
        description="Get in touch with CODM Software's team for Salesforce consulting, AI development, CRM solutions, and custom software development inquiries. We're here to help."
        url="https://codmsoftware.co.uk/contact"
        keywords="Contact CODM Software, Salesforce consulting inquiry, AI development contact, CRM solutions inquiry, software development company contact, tech support"
        image="https://codmsoftware.co.uk/images/contact-hero.jpg"
      />
      <ContactSection_FirstSection/>
      <ContactSection_SecondSection/>
      <ContactSection_ThirdSection/>
      <ContactMapSection/>
    </>
  )
}
 
export default ContactComponents;


// import ContactMapSection from "./ContactMapSection/ContactMapSection";
// import ContactSection_FirstSection from "./ContactSection_FirstSection/ContactSection_FirstSection";
// import ContactSection_SecondSection from "./ContactSection_SecondSection/ContactSection_SecondSection";
// import ContactSection_ThirdSection from "./ContactSection_ThirdSection/ContactSection_ThirdSection";


// function ContactComponents() {
//   return (
//     <>
    
//       <ContactSection_FirstSection/>
//       <ContactSection_SecondSection/>
//       <ContactSection_ThirdSection/>
//       <ContactMapSection/>
//     </>
//   )
// }

// export default ContactComponents;