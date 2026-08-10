import "./WhatWeDo.css";
import {
    FaTools,
    FaCloud,
    FaRobot,
    FaCode,
    FaLink,
    FaBrain
} from "react-icons/fa"; 
import { FaCogs } from "react-icons/fa";


const services = [
    {
         icon: FaBrain,
        title: "AI Application Implementation",
      
    },
    {
        icon: FaCloud,
        title: "Salesforce Implementation",
    },
    {
        icon: FaRobot,
        title: "AI & Agentforce",
    },
    {
        icon: FaCode,
        title: "Custom Software Development",
    },
    {
        icon: FaLink,
        title: "API Integration & Data Migration",
    },
    {
    icon: FaCogs,
    title: "Technical & Deployment Support",
}
];


function WhatWeDo() {
  return (
    <section className="wwd-section">
      <div className="wwd-container">
        <div className="wwd-header">
          <h2 className="wwd-title text-black">Our Services</h2>
        </div>

        <div className="wwd-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="wwd-card">
                <Icon size={34} className="wwd-icon" />
                <h5 className="wwd-card-title">{service.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default WhatWeDo;
