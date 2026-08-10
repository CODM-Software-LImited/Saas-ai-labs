import BlogSection from '../../components/BlogSection/BlogSection';
import SEO from '../../SeoData/SEO';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import BlogFormSection from '../ui/BlogFormSection/BlogFormSection';
import TriggerframeworkBlog_First from './TriggerframeworkBlog_First.jsx/TriggerframeworkBlog_First';

function TriggerframeworkBlog() {
  return (
    <>
      <SEO
        title="What is a Trigger Framework in Salesforce? Benefits & Best Practices | CODM Software"
        description="Learn what a Salesforce trigger framework is, why it's important, and how it improves code scalability, maintainability, and performance with best practices."
        url="https://codmsoftware.co.uk/blog/trigger-framework"
        keywords="Salesforce trigger framework, Apex trigger framework, Salesforce best practices, trigger design pattern, Salesforce development, Apex triggers, CODM Software"
      />
      <HeaderWithBg
        title="Salesforce Trigger Framework"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Salesforce Trigger Framework", color: "purple-text" }
        ]}
      />
      <TriggerframeworkBlog_First />
      <BlogFormSection heading='Share Your Thoughts on Our Trigger Framework' />
      <BlogSection />

    </>
  )
}
export default TriggerframeworkBlog;