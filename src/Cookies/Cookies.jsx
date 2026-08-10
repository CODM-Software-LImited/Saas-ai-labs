import { useEffect, useState } from "react";
import "./Cookies.css";
import { Link } from "react-router-dom";

const COOKIE_NAME = "codm_cookie_consent";
const COOKIE_EXPIRE_DAYS = 365;

const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
};

export default function Cookies() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [functional, setFunctional] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);


  
  // for accesing the token 
    //   async function getAccessToken() {
    //   const params = new URLSearchParams(); 
    //   params.append("grant_type",import.meta.env.VITE_grant_type);
    //   params.append("client_id",import.meta.env.VITE_client_id);
    //   params.append("client_secret",import.meta.env.VITE_client_secret);
    
    //   const response = await fetch(
    //     "https://codmsoftwarepvtltd9-dev-ed.develop.my.salesforce.com/services/oauth2/token",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",    
    //       },
    //       body: params,
    //     }
    //   );
    //   const data = await response.json();
    //   return data.access_token;
    //  }

    
  // saving the data
  const savePreferences = async (prefs) => {
  setCookie(COOKIE_NAME, JSON.stringify(prefs), COOKIE_EXPIRE_DAYS);
  enableCookies(prefs);

  try {
    const token = await getAccessToken();

    const response = await fetch(
      "https://codmsoftwarepvtltd9-dev-ed.develop.my.salesforce.com/services/apexrest/cookie_preferences",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(prefs),
      }
    );

    const result = await response.text();
    // console.log(result);

  } catch (error) {
    console.error("Error saving cookie prefs:", error);
  }

  setShowBanner(false);
  setShowSettings(false);
};

  // const savePreferences = (prefs) => {
  //   setCookie(COOKIE_NAME, JSON.stringify(prefs), COOKIE_EXPIRE_DAYS);
  //   enableCookies(prefs);
  //   setShowBanner(false);
  //   setShowSettings(false);
  // };

  const acceptAll = () =>
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });

  const declineAll = () =>
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });

  const saveCustom = () =>
    savePreferences({
      necessary: true,
      analytics,
      marketing,
      functional,
    });

  const enableCookies = (prefs) => {
    if (prefs.analytics) {
      // console.log("Analytics cookies enabled");
      // gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    if (prefs.marketing) {
    //   console.log("Marketing cookies enabled");
    }
    if (prefs.functional) {
    //   console.log("Functional cookies enabled");
    }
    // console.log("Cookie preferences saved:", prefs);
  };

  return (
    <>
      <div id="cookieConsent" className={showBanner ? "show" : ""}>
        <div className="cookie-container">
          <div className="cookie-content">
            <p className="cookie-description">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
              <Link
                to={'/PrivacyPolicy'}
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          <div className="cookie-actions">
            <button
              className="cookie-btn cookie-btn-settings"
              onClick={() => setShowSettings(true)}
            >
              <span>⚙ Manage</span>
            </button>
            <button
              className="cookie-btn cookie-btn-decline"
              onClick={declineAll}
            >
              <span>Decline</span>
            </button>
            <button
              className="cookie-btn cookie-btn-accept"
              onClick={acceptAll}
            >
              <span>Accept All</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`cookie-settings-modal ${
          showSettings ? "active" : ""
        }`}
        onClick={(e) =>
          e.target.classList.contains("cookie-settings-modal") &&
          setShowSettings(false)
        }
      >
        <div className="settings-content">
          <div className="settings-header">
            <h2 className="settings-title">Cookie Preferences</h2>
            <button
              className="close-settings"
              onClick={() => setShowSettings(false)}
            >
              &times;
            </button>
          </div>

          <CookieToggle
            title="Necessary Cookies"
            description="Essential cookies required for the website to function properly."
            checked
            disabled
          />

          <CookieToggle
            title="Analytics Cookies"
            description="Help us understand how visitors interact with our website."
            checked={analytics}
            onChange={setAnalytics}
          />

          <CookieToggle
            title="Marketing Cookies"
            description="Used to display relevant advertisements."
            checked={marketing}
            onChange={setMarketing}
          />

          <CookieToggle
            title="Functional Cookies"
            description="Enable enhanced functionality and personalization."
            checked={functional}
            onChange={setFunctional}
          />

          <div className="settings-actions">
            <button
              className="cookie-btn cookie-btn-decline"
              onClick={saveCustom}
            >
              <span>Save Preferences</span>
            </button>
            <button
              className="cookie-btn cookie-btn-accept"
              onClick={acceptAll}
            >
              <span>Accept All</span>
            </button>
              <button
              className="cookie-btn cookie-btn-decline"
              onClick={declineAll}
            >
              <span>Decline</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function CookieToggle({
  title,
  description,
  checked,
  disabled,
  onChange,
}) {
  return (
    <div className="cookie-category">
      <div className="category-header">
        <span className="category-name">{title}</span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
      <p className="category-description">{description}</p>
    </div>
  );
}