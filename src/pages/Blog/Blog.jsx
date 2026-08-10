import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import BlogsSection from './BlogsSection/BlogsSection';
import SEO from '../../SeoData/SEO';

function Blog() {
  return (
    <>  
      <SEO
        title="Technology & Salesforce Blogs | AI, CRM & Software Insights | CODM Software"
        description="Explore the latest blogs on Salesforce, AI, CRM, and software development. Get insights, tutorials, and best practices from CODM Software experts."
        url="https://codmsoftware.co.uk/blog"
        keywords="Salesforce blogs, AI blogs, CRM articles, software development blog, tech insights, integration tutorials, CODM Software"
      />
      <Header />
      <BlogsSection />
    </>
  )
}

export default Blog;