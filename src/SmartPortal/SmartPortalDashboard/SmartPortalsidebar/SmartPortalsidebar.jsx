import {
  FiHome,
  FiUser,
  FiUsers,
  FiCalendar,
  FiClock,
  FiCheckSquare,
  FiBell,
  FiTrendingUp,
  FiDollarSign,
  FiSettings,
  FiChevronRight,
  FiMenu,
  FiX
} from "react-icons/fi";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SmartPortalsidebar.css";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import Attendence from '../AttendenceLog/Attendence';

// All Components
export const Dashboard = () => <div><DashboardInfo/></div>;
export const AttendenceLog = () => <div><Attendence/> </div>;
export const Profile = () => <div>My Profile Component</div>;
export const Org = () => <div>Org Directory Component</div>;
export const Leave = () => <div>Leave Management Component</div>;
export const Timesheet = () => <div>Timesheet Submission Component</div>;
export const Approvals = () => <div>Approvals Component</div>;
export const Notifications = () => <div>Notifications Component</div>;
export const Team = () => <div>Team View Component</div>;
export const Admin = () => <div>HR Admin Backend Component</div>;
export const Updates = () => <div>Daily Updates Feed Component</div>;
export const Reports = () => <div>Reports & Analytics Component</div>;
export const Payslips = () => <div>Payslips & Documents Component</div>;

// Mapping
export const componentMap = {
  dashboard: <Dashboard />,
  attendenceLog: <AttendenceLog />,
  profile: <Profile />,
  org: <Org />,
  leave: <Leave />,
  timesheet: <Timesheet />,
  approvals: <Approvals />,
  notifications: <Notifications />,
  team: <Team />,
  admin: <Admin />,
  updates: <Updates />,
  reports: <Reports />,
  payslips: <Payslips />
};

const menuItems = [
  { section: "Foundation" },
  { name: "dashboard", label: "Dashboard", icon: FiHome },
  { name: "attendenceLog", label: "Attendence Log", icon: FiClock },
  { name: "profile", label: "My Profile", icon: FiUser },
  { name: "org", label: "Org Directory", icon: FiUsers },
  { section: "Core Features" },
  { name: "leave", label: "Leave Management", icon: FiCalendar },
  { name: "timesheet", label: "Timesheet Submission", icon: FiCheckSquare },
  { name: "approvals", label: "Approvals (Manager)", icon: FiCheckSquare },
  { name: "notifications", label: "Notifications", icon: FiBell },
  { name: "team", label: "Team View (Manager)", icon: FiUsers },
  { name: "admin", label: "HR Admin Backend", icon: FiSettings },
  { section: "Advanced" },
  { name: "updates", label: "Daily Updates Feed", icon: FiTrendingUp },
  { name: "reports", label: "Reports & Analytics", icon: FiTrendingUp },
  { name: "payslips", label: "Payslips & Documents", icon: FiDollarSign }
];

export default function Sidebar({ active, setActive, isCollapsed, setIsCollapsed }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed();
  };

  const handleMenuItemClick = (itemName) => {
    setActive(itemName);
    // Close mobile sidebar on small screens
    if (window.innerWidth < 1024) {
      setIsMobileOpen(false);
    }
  };

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="smartPortal-mobile-menu-btn">
        <button 
          className="smartPortal-mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          title="Toggle menu"
        >
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="smartPortal-mobile-overlay"
          onClick={closeMobileSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`smartPortal-sidebar ${isCollapsed ? 'smartPortal-sidebar-collapsed' : ''} ${isMobileOpen ? 'smartPortal-sidebar-mobile-open' : ''}`}>
        {/* Sidebar Header with Toggle */}
        <div className="smartPortal-sidebar-header">
          <div className="smartPortal-logo-section">
            {!isCollapsed ? (
              <span className="smartPortal-logo-text">Smart Portal</span>
            ) : (
              <span className="smartPortal-logo-short">SP</span>
            )}
          </div>
          <button 
            className="smartPortal-toggle-btn"
            onClick={toggleSidebar}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <FiChevronRight className={`toggle-icon ${isCollapsed ? 'rotated' : ''}`} />
          </button>
        </div>

        <nav className="smartPortal-sidebar-nav">
          {menuItems.map((item, index) => {
            if (item.section) {
              return (
                <div key={index} className="smartPortal-nav-section">
                  {!isCollapsed && (
                    <span className="smartPortal-nav-section-label">
                      {item.section}
                    </span>
                  )}
                </div>
              );
            }
            
            const isActive = active === item.name;
            const IconComponent = item.icon;

            return (
              <div
                key={item.name}
                onClick={() => handleMenuItemClick(item.name)}
                className={`smartPortal-nav-item ${isActive ? "smartPortal-active" : ""}`}
                title={isCollapsed ? item.label : ""}
              >
                <span className="smartPortal-nav-indicator"></span>
                <div className="smartPortal-nav-icon-wrapper">
                  {IconComponent && <IconComponent className="smartPortal-nav-icon" size={18} />}
                </div>
                {!isCollapsed && <span className="smartPortal-nav-label">{item.label}</span>}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}


// import { BsLayoutSidebar } from "react-icons/bs";
// import {
//   FiHome,
//   FiUser,
//   FiUsers,
//   FiCalendar,
//   FiClock,
//   FiCheckSquare,
//   FiBell,
//   FiTrendingUp,
//   FiFileText,
//   FiDollarSign,
//   FiSettings,
//   FiChevronRight
// } from "react-icons/fi";

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SmartPortalsidebar.css";
// import DashboardInfo from "../DashboardInfo/DashboardInfo";
// import Attendence from '../AttendenceLog/Attendence';

// // All Components
// export const Dashboard = () => <div><DashboardInfo/></div>;
// export const AttendenceLog = () => <div><Attendence/> </div>;
// export const Profile = () => <div>My Profile Component</div>;
// export const Org = () => <div>Org Directory Component</div>;
// export const Leave = () => <div>Leave Management Component</div>;
// export const Timesheet = () => <div>Timesheet Submission Component</div>;
// export const Approvals = () => <div>Approvals Component</div>;
// export const Notifications = () => <div>Notifications Component</div>;
// export const Team = () => <div>Team View Component</div>;
// export const Admin = () => <div>HR Admin Backend Component</div>;
// export const Updates = () => <div>Daily Updates Feed Component</div>;
// export const Reports = () => <div>Reports & Analytics Component</div>;
// export const Payslips = () => <div>Payslips & Documents Component</div>;

// // Mapping
// export const componentMap = {
//   dashboard: <Dashboard />,
//   attendenceLog: <AttendenceLog />,
//   profile: <Profile />,
//   org: <Org />,
//   leave: <Leave />,
//   timesheet: <Timesheet />,
//   approvals: <Approvals />,
//   notifications: <Notifications />,
//   team: <Team />,
//   admin: <Admin />,
//   updates: <Updates />,
//   reports: <Reports />,
//   payslips: <Payslips />
// };

// const menuItems = [
//   { section: "Foundation" },
//   { name: "dashboard", label: "Dashboard", icon: FiHome },
//   { name: "attendenceLog", label: "Attendence Log", icon: FiClock },
//   { name: "profile", label: "My Profile", icon: FiUser },
//   { name: "org", label: "Org Directory", icon: FiUsers },
//   { section: "Core Features" },
//   { name: "leave", label: "Leave Management", icon: FiCalendar },
//   { name: "timesheet", label: "Timesheet Submission", icon: FiCheckSquare },
//   { name: "approvals", label: "Approvals (Manager)", icon: FiCheckSquare },
//   { name: "notifications", label: "Notifications", icon: FiBell },
//   { name: "team", label: "Team View (Manager)", icon: FiUsers },
//   { name: "admin", label: "HR Admin Backend", icon: FiSettings },
//   { section: "Advanced" },
//   { name: "updates", label: "Daily Updates Feed", icon: FiTrendingUp },
//   { name: "reports", label: "Reports & Analytics", icon: FiTrendingUp },
//   { name: "payslips", label: "Payslips & Documents", icon: FiDollarSign }
// ];

// export default function Sidebar({ active, setActive, isCollapsed, setIsCollapsed }) {
//   const toggleSidebar = () => {
//     setIsCollapsed();
//   };

//   return (
//     <>
//       <div className={`smartPortal-sidebar ${isCollapsed ? 'smartPortal-sidebar-collapsed' : ''}`}>
//         {/* Sidebar Header with Toggle */}
//         <div className="smartPortal-sidebar-header">
//           <div className="smartPortal-logo-section">
//             {!isCollapsed && <span className="smartPortal-logo-text">Smart Portal</span>}
//           </div>
//           <button 
//             className="smartPortal-toggle-btn"
//             onClick={toggleSidebar}
//             title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//           >
//             <FiChevronRight className={`toggle-icon ${isCollapsed ? 'rotated' : ''}`} />
//           </button>
//         </div>

//         <nav className="smartPortal-sidebar-nav">
//           {menuItems.map((item, index) => {
//             if (item.section) {
//               return (
//                 <span 
//                   key={index} 
//                   className={`smartPortal-nav-section-label ${isCollapsed ? 'smartPortal-nav-section-label-collapsed' : ''}`}
//                 >
//                   {!isCollapsed && item.section}
//                 </span>
//               );
//             }
            
//             const isActive = active === item.name;
//             const IconComponent = item.icon;

//             return (
//               <div
//                 key={item.name}
//                 onClick={() => setActive(item.name)}
//                 className={`smartPortal-nav-item ${isActive ? "smartPortal-active" : ""}`}
//                 title={isCollapsed ? item.label : ""}
//               >
//                 <span className="smartPortal-nav-indicator"></span>
//                 <div className="smartPortal-nav-icon-wrapper">
//                   {IconComponent && <IconComponent className="smartPortal-nav-icon" size={18} />}
//                 </div>
//                 {!isCollapsed && <span className="smartPortal-nav-label">{item.label}</span>}
//               </div>
//             );
//           })}
//         </nav>
//       </div>
//     </>
//   );
// }


// import { BsLayoutSidebar } from "react-icons/bs";
// import {
//   FiHome,
//   FiUser,
//   FiUsers,
//   FiCalendar,
//   FiClock,
//   FiCheckSquare,
//   FiBell,
//   FiTrendingUp,
//   FiFileText,
//   FiDollarSign,
//   FiSettings,
//   FiChevronRight
// } from "react-icons/fi";

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SmartPortalsidebar.css";
// import DashboardInfo from "../DashboardInfo/DashboardInfo";
// import Attendence from '../AttendenceLog/Attendence';

// // All Components
// export const Dashboard = () => <div><DashboardInfo/></div>;
// export const AttendenceLog = () => <div><Attendence/> </div>;
// export const Profile = () => <div>My Profile Component</div>;
// export const Org = () => <div>Org Directory Component</div>;
// export const Leave = () => <div>Leave Management Component</div>;
// export const Timesheet = () => <div>Timesheet Submission Component</div>;
// export const Approvals = () => <div>Approvals Component</div>;
// export const Notifications = () => <div>Notifications Component</div>;
// export const Team = () => <div>Team View Component</div>;
// export const Admin = () => <div>HR Admin Backend Component</div>;
// export const Updates = () => <div>Daily Updates Feed Component</div>;
// export const Reports = () => <div>Reports & Analytics Component</div>;
// export const Payslips = () => <div>Payslips & Documents Component</div>;

// // Mapping
// export const componentMap = {
//   dashboard: <Dashboard />,
//   attendenceLog: <AttendenceLog />,
//   profile: <Profile />,
//   org: <Org />,
//   leave: <Leave />,
//   timesheet: <Timesheet />,
//   approvals: <Approvals />,
//   notifications: <Notifications />,
//   team: <Team />,
//   admin: <Admin />,
//   updates: <Updates />,
//   reports: <Reports />,
//   payslips: <Payslips />
// };

// const menuItems = [
//   { section: "Foundation" },
//   { name: "dashboard", label: "Dashboard", icon: FiHome },
//   { name: "attendenceLog", label: "Attendence Log", icon: FiClock },
//   { name: "profile", label: "My Profile", icon: FiUser },
//   { name: "org", label: "Org Directory", icon: FiUsers },
//   { section: "Core Features" },
//   { name: "leave", label: "Leave Management", icon: FiCalendar },
//   { name: "timesheet", label: "Timesheet Submission", icon: FiCheckSquare },
//   { name: "approvals", label: "Approvals (Manager)", icon: FiCheckSquare },
//   { name: "notifications", label: "Notifications", icon: FiBell },
//   { name: "team", label: "Team View (Manager)", icon: FiUsers },
//   { name: "admin", label: "HR Admin Backend", icon: FiSettings },
//   { section: "Advanced" },
//   { name: "updates", label: "Daily Updates Feed", icon: FiTrendingUp },
//   { name: "reports", label: "Reports & Analytics", icon: FiTrendingUp },
//   { name: "payslips", label: "Payslips & Documents", icon: FiDollarSign }
// ];

// export default function Sidebar({ active, setActive }) {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <>
//       <div className={`smartPortal-sidebar ${isCollapsed ? 'smartPortal-sidebar-collapsed' : ''}`}>
//         {/* Sidebar Header with Toggle */}
//         <div className="smartPortal-sidebar-header">
//           <div className="smartPortal-logo-section">
//             {!isCollapsed && <span className="smartPortal-logo-text">Smart Portal</span>}
//           </div>
//           <button 
//             className="smartPortal-toggle-btn"
//             onClick={toggleSidebar}
//             title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//           >
//             <FiChevronRight className={`toggle-icon ${isCollapsed ? 'rotated' : ''}`} />
//           </button>
//         </div>

//         <nav className="smartPortal-sidebar-nav">
//           {menuItems.map((item, index) => {
//             if (item.section) {
//               return (
//                 <span 
//                   key={index} 
//                   className={`smartPortal-nav-section-label ${isCollapsed ? 'smartPortal-nav-section-label-collapsed' : ''}`}
//                 >
//                   {!isCollapsed && item.section}
//                 </span>
//               );
//             }
            
//             const isActive = active === item.name;
//             const IconComponent = item.icon;

//             return (
//               <div
//                 key={item.name}
//                 onClick={() => setActive(item.name)}
//                 className={`smartPortal-nav-item ${isActive ? "smartPortal-active" : ""}`}
//                 title={isCollapsed ? item.label : ""}
//               >
//                 <span className="smartPortal-nav-indicator"></span>
//                 <div className="smartPortal-nav-icon-wrapper">
//                   {IconComponent && <IconComponent className="smartPortal-nav-icon" size={18} />}
//                 </div>
//                 {!isCollapsed && <span className="smartPortal-nav-label">{item.label}</span>}
//               </div>
//             );
//           })}
//         </nav>
//       </div>
//     </>
//   );
// }