// import { EventType, PublicClientApplication } from "@azure/msal-browser";
// import { msalConfig } from "../auth-config";
// import { MsalProvider } from "@azure/msal-react";
// import { useEffect, useMemo } from "react";

// export const AuthProvider = ({ children }) => {
//     const msalInstance = useMemo(() => new PublicClientApplication(msalConfig), []);

//     useEffect(() => {
//         // Set active account if not already set
//         const accounts = msalInstance.getAllAccounts();
//         if (!msalInstance.getActiveAccount() && accounts.length > 0) {
//             msalInstance.setActiveAccount(accounts[0]);
//         }

//         msalInstance.enableAccountStorageEvents();

//         const callbackId = msalInstance.addEventCallback((event) => {
//             const authResult = event.payload;

//             if (event.eventType === EventType.LOGIN_SUCCESS && authResult?.account) {
//                 msalInstance.setActiveAccount(authResult.account);

//                 console.log("Login successful, account set.");
//             }
//         });

//         return () => {
//             if (callbackId) {
//                 msalInstance.removeEventCallback(callbackId);
//             }
//         };
//     }, [msalInstance]);

//     return (
//         <MsalProvider instance={msalInstance}>
//             {children}
//         </MsalProvider>
//     );
// };

// export const useAuthProvider = () => {
//     return { AuthProvider };
// };


import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../auth-config";
import { MsalProvider } from "@azure/msal-react";
import { useEffect, useMemo } from "react";

export const AuthProvider = ({ children }) => {
    const msalInstance = useMemo(() => new PublicClientApplication(msalConfig), []);

    useEffect(() => {
        // Set active account if not already set
        const accounts = msalInstance.getAllAccounts();
        if (!msalInstance.getActiveAccount() && accounts.length > 0) {
            msalInstance.setActiveAccount(accounts[0]);
        }

        // msalInstance.enableAccountStorageEvents();

        const callbackId = msalInstance.addEventCallback((event) => {
            const authResult = event.payload; // no casting in JS

            if (event.eventType === EventType.LOGIN_SUCCESS && authResult?.account) {
                msalInstance.setActiveAccount(authResult.account);

                // Avoid full reload in React apps
                console.log("Login successful, account set.");
            }
        });

        return () => {
            if (callbackId) {
                msalInstance.removeEventCallback(callbackId);
            }
        };
    }, [msalInstance]);

    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
};
export const useAuthProvider = () => {
    return { AuthProvider };
};