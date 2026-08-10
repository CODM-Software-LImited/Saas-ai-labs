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

export default brandConfig[brand];