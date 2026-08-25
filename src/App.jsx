import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter, Navigate } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollOnTop from './components/ScrollOnTop/ScrollOnTop';
import Contact from './pages/Contact/Contact';
import HigherEducation from './ServiceComponents/HigherEducation/HigherEducation';
import Blog from './pages/Blog/Blog';
import IntegrationFrameworkBlog from './BlogsComponents/IntegrationFrameworkBlog/IntegrationFrameworkBlog';
import FinancialServiceCloud from './ServiceComponents/FinancialServiceCloud/FinancialServiceCloud';
import IndustriesCloud from './ServiceComponents/IndustriesCloud/IndustriesCloud';
import DataCloud from './ServiceComponents/DataCloud/DataCloud';
import MarketingCloud from './ServiceComponents/MarketingCloud/MarketingCloud';
import ApiIntegration from './ServiceComponents/ApiIntegration/ApiIntegration';
import TriggerframeworkBlog from './BlogsComponents/TriggerframeworkBlog/TriggerframeworkBlog';
import AIPoweredDashboard from './BlogsComponents/AIPoweredDashboard/AIPoweredDashboard';
import DataIntegration from './ServiceComponents/DataIntegration/DataIntegration';
import CRMDevelopment from './ServiceComponents/CRMDevelopment/CRMDevelopment';
import BuildingLLMDevelopment from './ServiceComponents/BuildingLLMDevelopment/BuildingLLMDevelopment';
import DotNetApplication from './ServiceComponents/DotNetApplication/DotNetApplication';
import ReactApplication from './ServiceComponents/ReactApplication/ReactApplication';
import PythonApplication from './ServiceComponents/PythonApplication/PythonApplication';
import TechnicalSupport from './ServiceComponents/TechnicalSupport/TechnicalSupport';
import AgentforceImplementation from './BlogsComponents/AgentforceImplementation/AgentforceImplementation';
import SalesforceEinstein from './BlogsComponents/SalesforceEinstein/SalesforceEinstein';
import SalesforceRevenueCloud from './BlogsComponents/SalesforceRevenueCloud/SalesforceRevenueCloud';
import SalesforcePartnerLogo from './components/SalesforcePartnerLogo/SalesforcePartnerLogo';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ReactChangeLoader from './RouteChangeLoader';
import AgentforceFinancialServices from './BlogsComponents/AgentforceFinancialServices/AgentforceFinancialServices';
import HealthInsuranceCloud from './ServiceComponents/HealthInsuranceCloud/HealthInsuranceCloud';
import SalesCloud from './ServiceComponents/SalesCloud/SalesCloud';
import ServiceCloud from './ServiceComponents/ServiceCloud/ServiceCloud';
import EnergyUtilitiesCloud from './ServiceComponents/EnergyUtilitiesCloud/EnergyUtilitiesCloud';
import ManufacturingCloud from './ServiceComponents/ManufacturingCloud/ManufacturingCloud';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import DeploymentSupport from './ServiceComponents/DeploymentSupport/DeploymentSupport';
import PoliciesBar from './pages/PoliciesBar/PoliciesBar';
import Cookies from './Cookies/Cookies';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import NonprofitCloud from './ServiceComponents/NonprofitCloud/NonprofitCloud';
import AgentforceAI from './BlogsComponents/AgentforceAI/AgentforceAI';
import SaasAiHome from './pages/Home/SaasAiHome';
import GCloud15 from './pages/GCloud15/GCloud15';
import GCloudSuppliersBlog from './BlogsComponents/GCloudSuppliersBlog/GCloudSuppliersBlog';
 
// home page condition
import brand from "../src/config/brand";
import FslAutomation from './BlogsComponents/FslAutomation/FslAutomation';
 
 
 
// for auth in smartPortal
import SmartPortal from './SmartPortal/SmartPortal';
import SalesforceIIM from './BlogsComponents/SalesforceIIM/SalesforceIIM';
import SSO from './BlogsComponents/SSO/SSO.JSX';
 
function App() {
 
  // code for favicon
 
  useEffect(() => {
    // Note: Remove document.title = brand.title; as it overrides page-specific titles set by SEO components
    const existingFavicons = document.querySelectorAll("link[rel*='icon']");
    existingFavicons.forEach(icon => icon.remove());
 
 
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = brand.favicon;
 
    document.head.appendChild(link);
 
  }, []);
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
 
 
   function HomeSwitcher() {
  if (brand.name === "SaasAi Labs") {
    // return <Home />;
     return <SaasAiHome/>;  
  }
   return <Home />;
  //  return <SaasAiHome/>;  
}
 
  return (
    <>
      <ScrollOnTop />
      useAutoRefresh()
 
      <Router>
         <ScrollToTop/>
        <Navbar />
        <div>
          <ReactChangeLoader>
           
        {/* <SalesforcePartnerLogo/> */}
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
             
              <Route path="/" element={<HomeSwitcher/>} />
              <Route path="/about" element={<About />} />
              <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
              <Route path='/terms-conditions' element={<TermsAndConditions/>}/>
              <Route path='/g-cloud-15' element={<GCloud15/>}/>
              {/* <Route path='/MyKoda' element={<SmartPortal/>}/> */}
 
              {/* service routes */}
              <Route path="/ItServices" element={<Service />} />
 
              {/* <Route path="/ItServices" element={<Service />} /> */}
 
              <Route
                path="/ItServices/salesforce-education-cloud"
                element={<HigherEducation />}
              />
 
              <Route
                path="/ItServices/salesforce-financial-services"
                element={<FinancialServiceCloud />}
              />
 
              <Route
                path="/ItServices/salesforce-health-insurance-cloud"
                element={<HealthInsuranceCloud/>}
              />
 
              <Route
                path="/ItServices/salesforce-data-cloud"
                element={<DataCloud />}
              />
 
              <Route
                path="/ItServices/salesforce-marketing-cloud"
                element={<MarketingCloud />}
              />
 
              <Route
                path="/ItServices/salesforce-sales-cloud"
                element={<SalesCloud/>}
              />
             
              <Route
                path="/ItServices/salesforce-service-cloud"
                element={<ServiceCloud/>}
              />
 
              <Route
                path="/ItServices/salesforce-energy-utilities-cloud"
                element={<EnergyUtilitiesCloud/>}
              />
 
              <Route
                path="/ItServices/salesforce-manufacturing-cloud"
                element={<ManufacturingCloud/>}
              />
              {/* salesforce-nonprofit-cloud */}
              <Route
               path="/ItServices/salesforce-nonprofit-cloud"
                element={<NonprofitCloud/>}/>
 
              {/* previce routes */}
             
              {/* Data */}
              <Route path="/ItServices/api-integration" element={<ApiIntegration />}/>
              <Route path="/ItServices/data-integration" element={<DataIntegration />}/>
              <Route path="/ItServices/data-migration" element={<DataIntegration />}/>
 
              {/* Development */}
              <Route path="/ItServices/crm-development" element={<CRMDevelopment />} />
              <Route path="/ItServices/building-llm" element={<BuildingLLMDevelopment />} />
              <Route path="/ItServices/dotnet-application-development" element={<DotNetApplication />} />
              <Route path="/ItServices/react-application-development" element={<ReactApplication />} />
              <Route path="/ItServices/python-application-development" element={<PythonApplication />} />
 
              {/* Support */}
              <Route path="/ItServices/technical-support" element={<TechnicalSupport />} />
              <Route path="/ItServices/deployment-support" element={<DeploymentSupport/>} />
 
              {/* Blog routes*/}
              <Route path="blog" element={<Blog />}/>
              <Route path="/blog/integration-framework" element={<IntegrationFrameworkBlog />} />
              <Route path="/blog/trigger-framework" element={<TriggerframeworkBlog />} />
              <Route path="/blog/ai-powered-dashboard" element={<AIPoweredDashboard />} />
              <Route path="/blog/salesforce-agentforce" element={<AgentforceImplementation />} />
              <Route path="/blog/salesforce-einstein-ai-synergy" element={<SalesforceEinstein />} />
              <Route path="/blog/salesforce-revenue-cloud" element={<SalesforceRevenueCloud />} />
              <Route path="/blog/agentforce-financial-services" element={<AgentforceFinancialServices />} />
              <Route path="/blog/agentforce-ai" element={<AgentforceAI/>} />
              <Route path="/blog/field-service-automation" element={<FslAutomation/>} />
              <Route path="/blog/salesforce-llm-crm-automation" element={<SalesforceIIM/>} />      
              <Route path="/blog/salesforce-sso-authentication" element={<SSO/>}/>        
              <Route path="/blog/g-cloud15" element={<GCloudSuppliersBlog/>}/>
              <Route path="/blog/g-cloud-framework-suppliers-uk" element={<Navigate to="/blog/g-cloud15" replace />}/>
             
             
              {/* </Route> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
 
            </Routes>
          </ReactChangeLoader>
        </div>
        <Footer/>
        <PoliciesBar/>
        <Cookies/>
      </Router>
 
    </>
  )
}
export default App;