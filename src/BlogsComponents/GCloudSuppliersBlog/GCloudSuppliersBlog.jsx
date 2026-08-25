import BlogSection from "../../components/BlogSection/BlogSection";
import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import BlogFormSection from "../ui/BlogFormSection/BlogFormSection";
import GCloudSuppliersBlog_First from "./GCloudSuppliersBlog_First/GCloudSuppliersBlog_First";

function GCloudSuppliersBlog() {
    return (
        <>
            <SEO
                title="G-Cloud Framework Suppliers UK | CODM Cloud Support"
                description="Looking for G-Cloud framework suppliers in the UK? Discover how CODM supports public sector organisations with Salesforce, AI, integration, data and cloud application development through G-Cloud 15 Lot 3."
                url="https://codmsoftware.co.uk/blog/g-cloud15"
                keywords="G Cloud framework suppliers UK, G-Cloud 15, Lot 3 Cloud Support, public sector procurement, cloud support services, Salesforce public sector, CODM Software"
            />

            <HeaderWithBg
                title="G-Cloud Framework Suppliers in the UK"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Blog", link: "/blog" },
                    { label: "G-Cloud Framework Suppliers UK", color: "purple-text" }
                ]}
            />
            <GCloudSuppliersBlog_First />
            <BlogFormSection heading="Share Your Thoughts On Choosing G-Cloud Suppliers" />
            <BlogSection />
        </>
    )
}

export default GCloudSuppliersBlog;
