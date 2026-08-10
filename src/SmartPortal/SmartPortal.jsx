// import './SmartPortal.css'
// import { useMsal } from '@azure/msal-react';
// import { loginRequest } from './auth/auth-config';

// function SmartPortal() {
//   const { instance, accounts, inProgress } = useMsal();

//   const activeAccount = accounts[0];

//   const handleLoginRedirect = () => {
//     instance.loginRedirect({
//       ...loginRequest,
//       redirectUri: '/',
//     }).catch((error) => console.log(error));
//   };

//   return (
//     <div className='smartPortal'>
//       <div>
//         {!activeAccount && (
//           <button
//             onClick={handleLoginRedirect}
//             disabled={inProgress !== "none"}
//           >
//             Login
//           </button>
//         )}
//       </div>

//       <h1>sso</h1>

//       <div className="card">
//         {activeAccount ? (
//           <p>
//             Welcome {activeAccount.name} ({activeAccount.username})
//           </p>
//         ) : (
//           <p>You need to login.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SmartPortal;



//==========================================================================================


import React, { useState } from "react";
import "./SmartPortal.css";
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './auth/auth-config';
import SmartPortalDashboard from "./SmartPortalDashboard/SmartPortalDashboard";

const SmartPortal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      console.log({ username, password, rememberMe });
      setIsLoading(false);
      // Reset form after successful login
      setUsername("");
      setPassword("");
    }, 1500);
  };

  const { instance, accounts, inProgress } = useMsal();
  const activeAccount = accounts[0];


  const handleLoginRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        redirectUri: "http://localhost:5173/",
      })
      .catch((error) => console.log(error));
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password clicked");
    // Add forgot password logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign up clicked");
    // Add sign up logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
    <div>
     {activeAccount ? (
          <>
          { console.log(activeAccount,"the account data")}
            {/* Welcome {activeAccount.name} ({activeAccount.username}) */}
           <SmartPortalDashboard name={activeAccount.name} username={activeAccount.username}/> 
          </>
      ) : (
      <div className="smartPortal-portal-container">
      {/* LEFT PANEL */}
      <div className="smartPortal-portal-left">
        <div className="smartPortal-login-container">
          <h1 className="smartPortal-login-title">
            Smart <span className="smartPortal-login-title-accent">Portal</span>
          </h1>
          <h2 className="smartPortal-login-subtitle">Welcome</h2>
          <p className="smartPortal-login-description">
            Login to access your workspace
          </p>

          {/* Username Field */}
          <div className="smartPortal-form-group">
            <label className="smartPortal-form-label">User Name</label>
            <div className="smartPortal-input-field">
              <span className="smartPortal-input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7a3cff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </span>
              <input
                type="text"
                className="smartPortal-form-input"
                placeholder="Enter user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="smartPortal-form-group">
            <label className="smartPortal-form-label">Password</label>
            <div className="smartPortal-input-field">
              <span className="smartPortal-input-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7a3cff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </span>

              <input
                type={isPasswordHidden ? "password" : "text"}
                className="smartPortal-form-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />

              <span
                className="smartPortal-password-toggle"
                onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsPasswordHidden(!isPasswordHidden);
                  }
                }}
              >
                {isPasswordHidden ? (
                  // Eye OFF
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  // Eye ON
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          {/* Options Row */}
          <div className="smartPortal-form-options">
            <label className="smartPortal-checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a
              href="#"
              className="smartPortal-forgot-password-link"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </a>
          </div>

          {/* Microsoft Login Section */}
          <div className="smartPortal-ms-login-section">
            {!activeAccount && (
              <button
                className="smartPortal-ms-login-btn"
                onClick={handleLoginRedirect}
                disabled={inProgress !== "none"}
              >
                Login With Microsoft Account
              </button>
            )}
            <p>
              {activeAccount ? (
                <p>
                  Welcome {activeAccount.name} ({activeAccount.username})
                </p>
              ) : (
                <p></p>
              )}
            </p>

          </div>

          {/* Login Button */}
          <button
            className="smartPortal-login-button"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                LOGIN
                <span className="smartPortal-button-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </>
            )}
          </button>

          {/* Sign Up Link */}
          {/* <p className="smartPortal-signup-prompt">
            Don't have an account?{" "}
            <a
              href="#"
              className="smartPortal-signup-link"
              onClick={handleSignUp}
            >
              Sign up
            </a>
          </p> */}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="smartPortal-portal-right">
        <div className="smartPortal-feature-card">
          <h2 className="smartPortal-feature-title">
            Smart <span className="smartPortal-feature-title-accent">Portal</span>
          </h2>

          <p className="smartPortal-feature-description">
            Your Central Hub for Employees,
            <br />
            HR, Managers & Admins
          </p>

          <div className="smartPortal-feature-divider"></div>

          <ul className="smartPortal-feature-list">
            <li className="smartPortal-feature-item">
              <span className="smartPortal-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </span>
              <p className="smartPortal-feature-text">
                <strong>Manage</strong> Tasks & Requests
              </p>
            </li>

            <li className="smartPortal-feature-item">
              <span className="smartPortal-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                </svg>
              </span>
              <p className="smartPortal-feature-text">
                <strong>Access</strong> HR & Services
              </p>
            </li>

            <li className="smartPortal-feature-item">
              <span className="smartPortal-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </span>
              <p className="smartPortal-feature-text">
                <strong>Track</strong> Performance
              </p>
            </li>

            <li className="smartPortal-feature-item">
              <span className="smartPortal-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                </svg>
              </span>
              <p className="smartPortal-feature-text">
                <strong>Collaborate</strong> Securely
              </p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    )}
    </div>

    </>
  );
};

export default SmartPortal;
//=====================================================

