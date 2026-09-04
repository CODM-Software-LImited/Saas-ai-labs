import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactComponents from "../../ContactComponents/ContactComponents";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return <ContactComponents />;
}

export default Contact;
