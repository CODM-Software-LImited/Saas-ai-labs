import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "36272dcd-c5a8-4509-87c3-fec26af76f67",
        authority: "https://login.microsoftonline.com/cec2262d-9594-498e-94ed-d6ffcef6304e",
        redirectUri: "http://localhost:5173",
        postLogoutRedirectUri: "http://localhost:5173",
        navigateToLoginRequestUrl: true,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest = {
    scopes: [],
};