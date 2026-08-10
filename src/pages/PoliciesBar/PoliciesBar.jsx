
import { FaShieldAlt, FaFileContract, FaCookieBite } from "react-icons/fa";
import './PoliciesBar.css';
import { Link } from "react-router-dom";
import brand from "../../config/brand";

function PoliciesBar() {
  return (
    <div className="container-fluid footer-policies border-top pt-1">
      <div className="container">
        <div className="row align-items-center py-3">

          {/* Policies */}
          <div className="col-md-6">
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <Link to="/PrivacyPolicy" className="d-flex align-items-center gap-2 policy-link">
                <FaShieldAlt size={14} />
                <span>Privacy Policy</span>
              </Link>

              {/* <Link className="d-flex align-items-center gap-2 policy-link">
                <FaCookieBite size={14} />
                <span>Cookie Policy</span>
              </Link> */}

              <Link to={'/terms-conditions'} className="d-flex align-items-center gap-2 policy-link">
                <FaFileContract size={14} />
                <span>Terms & Conditions</span>
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-md-6 text-center">
            <p className="footerPara mb-0">
              {/* Copyright © 2026 CodM Software Ltd. All Rights Reserved */}
               {brand.copyright}  
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}


export default PoliciesBar;






// import { FaShieldAlt, FaFileContract, FaCookieBite } from "react-icons/fa";
// import './PoliciesBar.css';
// import { Link } from "react-router-dom";

// function PoliciesBar() {
//   return (
//     <div className="container-fluid footer-policies border-top pt-1">
//       <div className="container">
//         <div className="row align-items-center py-3 justify-content-center">

//               <Link to={'/PrivacyPolicy'} className="col-3 d-flex align-items-center gap-2 policy-link">
//                 <FaShieldAlt size={14} />
//                 <span>Privacy Policy</span>
//               </Link> 
//                <Link className="col-3 d-flex align-items-center policy-link">
//                 <FaCookieBite size={14} />
//                 <span> Cookie Policy</span>
//               </Link>

//               <Link className="col-3 d-flex align-items-center policy-link">
//                 <FaCookieBite size={14} />
//                 <span>Terms and conditions</span>
//               </Link>
         
//           {/* Left */}
//           <div className="col-md-6 text-center mb-2 mb-md-0">
//             <p className="footerPara align-items-center">
//             Copyright © 2026 CodM Software Ltd. All Rights Reserved
//             </p>
//           </div>

//           {/* Right */}
//           <div className="col-md-3">
//             <ul className="d-flex justify-content-center justify-content-md-end gap-4 mb-0 list-unstyled">
             
//             </ul>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default PoliciesBar;


