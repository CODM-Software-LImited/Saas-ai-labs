import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import "odometer/themes/odometer-theme-default.css";
import './index.css';

import { HelmetProvider } from "react-helmet-async";

import { AuthProvider } from './SmartPortal/auth/hook/auth-provider.jsx';


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    {/* <MsalProvider instance={msalInstance}> */}
    {/* <AuthProvider> */}
    <HelmetProvider>
    <App/>
    </HelmetProvider>
    {/* </AuthProvider> */}
    {/* </MsalProvider> */}
   </ThemeProvider>
)
