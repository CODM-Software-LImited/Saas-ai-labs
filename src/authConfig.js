export const msalConfig = {
  auth: {
    clientId: "36272dcd-c5a8-4509-87c3-fec26af76f67", // Replace with your Azure AD Client ID
    authority: "https://login.microsoftonline.com/cec2262d-9594-498e-94ed-d6ffcef6304e",
    redirectUri: "http://localhost:5173/",
    postLogoutRedirectUri: "http://localhost:5173/",
    // navigateToLoginRequestUrl: true, 
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage", 
    storeAuthStateInCookie: true, 
  },
  system: {
    allowNativeSXAOAuth: true,
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (!containsPii) {
          console.log(`[MSAL ${level}] ${message}`);
        }
      },
      piiLoggingEnabled: false,
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};