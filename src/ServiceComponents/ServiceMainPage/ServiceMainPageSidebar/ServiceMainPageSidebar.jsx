
import { useState } from "react";
import './ServiceMainPageSidebar.css';
import SalesforceCrm from "../ServiceTabsPages/SalesforceCrm";
import ReactIntegration from "../ServiceTabsPages/ReactIntegration";
import ApiIntegrationTab from "../ServiceTabsPages/ApiIntegrationTab";
import DataIntegrationTab from "../ServiceTabsPages/DataIntegrationTab";
import DotNetApplicationTab from "../ServiceTabsPages/DotNetApplicationTab";
import TechnicalSupportTab from "../ServiceTabsPages/TechnicalSupportTab";
import BuildingLLMTab from "../ServiceTabsPages/BuildingLLMTab";

export default function ServiceMainPageSidebar() {
  const [activeTab, setActiveTab] = useState("salesforce");

  const tabs = [
    { id: "salesforce", label: "Salesforce CRM" },
    { id: "react", label: "React Web Applications" },
    { id: "api", label: "API Integration" },
    { id: "data", label: "Data Integration/Migration" },
    { id: "dotnet", label: ".NET Application" },
    { id: "support", label: "Technical Support" },
    { id: "LLM" ,   label :"Building LLM"}
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "salesforce":
        return (
          <>
          <SalesforceCrm/>
          </>
        );
      case "dotnet":
        return (
          <>
           <DotNetApplicationTab/>
          </>
        );
      case "react":
        return (
          <>
          <ReactIntegration/>
          </>
        );
      case "api":
        return (
          <>
          <ApiIntegrationTab/>
          </>
        );
      case "data":
        return (
          <>
          <DataIntegrationTab/>
          </>
        );
      case "support":
        return (
          <>
            <TechnicalSupportTab/>
          </>
        );
      case "LLM":
        return (
          <>
        <BuildingLLMTab/>
          </>
        )  
      default:
        return null;
    }
  };

  return ( 
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-4">
          <div className="list-group">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`ServiceMainPageBtn btn text-center mb-2 fs-5 py-3 d-flex justify-content-between align-items-center p-4 ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label} 
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path
                          className="fill-neutral-100"
                          d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                         fill="#f3f4f6"
                         />
                     </svg> 
              </button>
            
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="col-md-8 bg-white p-4 rounded shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

// import { Link } from "react-router-dom";
// import './ServiceMainPageSidebar.css';
// import img1 from '../../../assets/imgs/services-details/icon-contact.svg';

// import { NavLink } from "react-router-dom";

// function ServiceMainPageSidebar() {
//     return (
//         <>
//             <div className="">
//                 <NavLink
//                     to="/blog/salesforce-revenue-cloud"
//                     className={({ isActive }) =>
//                         `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
//                         }`
//                     }
//                 >
//                   Salesforce CRM
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path
//                             className="fill-neutral-100"
//                             d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
//                             fill="#f3f4f6"
//                         />
//                     </svg>
//                 </NavLink>

//                 <NavLink
//                     to="/blog/trigger-framework"
//                     className={({ isActive }) =>
//                         `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
//                         }`
//                     }
//                 >
//                   .NET Application
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path
//                             className="fill-neutral-100"
//                             d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
//                             fill="#f3f4f6"
//                         />
//                     </svg>
//                 </NavLink>

//                 <NavLink
//                     to="/blog/ai-powered-dashboard"
//                     className={({ isActive }) =>
//                         `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
//                         }`
//                     }
//                 >
//                  React Integration
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path
//                             className="fill-neutral-100"
//                             d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
//                             fill="#f3f4f6"
//                         />
//                     </svg>
//                 </NavLink>

//                 <NavLink
//                     to="/blog/salesforce-agentforce"
//                     className={({ isActive }) =>
//                         `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
//                         }`
//                     }
//                 >API Integration
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path
//                             className="fill-neutral-100"
//                             d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
//                             fill="#f3f4f6"
//                         />
//                     </svg>
//                 </NavLink>

//                 <NavLink
//                     to="/blog/salesforce-einstein-ai-synergy"
//                     className={({ isActive }) =>
//                         `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
//                         }`
//                     }
//                 >
//                     Data Integration/Migration
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path
//                             className="fill-neutral-100"
//                             d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
//                             fill="#f3f4f6"
//                         />
//                     </svg>
//                 </NavLink>

//                 <NavLink
//                     to="/blog/integration-framework"
//                     className={({ isActive }) =>
//                         `ServiceRoutesBtn btn w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center ${isActive ? "active" : ""
//                         }`
//                     }
//                 >
//                 Technical Support
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                         <path
//                             className="fill-neutral-100"
//                             d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
//                             fill="#f3f4f6"
//                         />
//                     </svg>
//                 </NavLink>
//             </div>
//         </>
//     )
// }

// export default ServiceMainPageSidebar;