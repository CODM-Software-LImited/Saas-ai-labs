import SEO from "../../SeoData/SEO";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import Header from "./Header/Header";
import ServiceLastSection from "./ServiceLastSection/ServiceLastSection";
import ServiceMainContentpage from "./ServiceMainContentpage/ServiceMainContentpage";
import ServiceMainNextComponent from "./ServiceMainNextComponent/ServiceMainNextComponent";
import './ServiceMainPage.css';
import ServiceMainPageSidebar from "./ServiceMainPageSidebar/ServiceMainPageSidebar";



function ServiceMainPage() {    
    return (
        <div className="ServiceMainPageContainer">
            <SEO
                title="Our Services | Salesforce, AI, Integration & Software Development | CODM Software"
                description="Explore CODM Software services including Salesforce solutions, AI & LLM development, API & data integration, CRM development, and technical support for businesses."
                url="https://codmsoftware.co.uk/services"
                keywords="Salesforce services, AI development, LLM solutions, API integration, data integration, CRM development, software development services, IT support services, CODM Software"
            />
            <Header />
            <ServiceMainPageSidebar />
            <ServiceMainContentpage />
            <ServiceMainNextComponent />
            <ServiceLastSection />
        </div>
    )
}

export default ServiceMainPage;