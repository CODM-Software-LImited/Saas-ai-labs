import saaslogo from '../../src/assets/saalaiLogo.png';
import codmlogo from "../../src/assets/imgs/template/image17.png";
import ukFlag from '../../src/assets/imgs/contact-4/Flag of UK.png';
import indiaFlag from '../../src/assets/imgs/contact-4/Flag_of_India.png';

const codmFavicon = "/CodmFavicon.svg";
const SaaaAiFavicon = "saasfavicon.png";
const hostname = window.location.hostname;
const brandConfig = {
  codm: {
    name: "CODM Software",
    siteUrl: "https://codmsoftware.co.uk",
    logo:codmlogo,
    key:"codm_Logo",
    title : "",
    favicon:codmFavicon,
    address: "UKRegus - Edmund House, 12-22 Newhall St, Birmingham B3 3AS, UK",
    flag: ukFlag,
    copyright: "Copyright © 2026 CodM Software Ltd. All Rights Reserved",
  },
  saasai: {
    name: "SaasAi Labs",
    siteUrl: "https://saasailabs.codmsoftware.co.uk",
    logo: saaslogo,
    key:"saas_logo",
    title: "SaasAi Labs | Modern SaaS Solutions",
    favicon:SaaaAiFavicon ,
    address: "IHDP Business Park second floor Sector 127, Noida",
    flag: indiaFlag,
    copyright: "Copyright © 2026 SAAS AI Labs All Rights Reserved"
  }
};

let brand = "codm";

if (hostname.includes("saasailabs")) {
  brand = "saasai";
}

// Build-time override (VITE_BRAND=saasai npm run build) so each domain gets
// its own prerendered HTML; see docs/ai-visibility/REPORT.md.
if (brandConfig[import.meta.env.VITE_BRAND]) {
  brand = import.meta.env.VITE_BRAND;
}

// Dev-only preview switch: http://localhost:5173/?brand=saasai
if (import.meta.env.DEV) {
  const preview = new URLSearchParams(window.location.search).get("brand");
  if (preview && brandConfig[preview]) brand = preview;
}

export default brandConfig[brand];