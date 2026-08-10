import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy">
    <div className="privacy-container container">

      <h1 className="privacy-title text-center Heading3 pb-3">Privacy Policy</h1>
      <p>
        CODM Software Limited is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use disclose, and
        safeguard your personal information when you visit our website{" "}
        <a
          href="https://codmsoftware.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="text-black text-decoration-none"
        >
           https://codmsoftware.co.uk/
        </a>.
      </p>
      <Section title="1. Data Controller">
        <p>
          <strong>CODM Software Limited</strong><br />
          Company House Number : 15333870 <br />
         <b>Address:</b><br/> 1. Regus - Birmingham, Edmund House, edmund house, 12-22 Newhall St, Birmingham B3 3AS, United Kingdom <br/> 2. 71-75 Shelton Street, Covent Garden, London WC2H 9JQ, UK <br/>3. Talent4World LLC 4501 Nightland Dr Plano, TX 75024 - USA
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>IP address, browser type, device information</li>
          <li>Website usage data</li>
        </ul>
      </Section>

      <Section title="3. How We Collect Your Data">
        <ul>
          <li>Contact and enquiry forms</li>
          <li>Cookies and analytics tools</li>
          <li>Direct communication</li>
        </ul>
      </Section>

      <Section title="4. How We Use Your Information">
        <ul>
          <li>Respond to enquiries</li>
          <li>Provide and improve services</li>
          <li>Analytics and performance</li>
          <li>Marketing communications</li>
        </ul>
      </Section>

      <Section title="5. Legal Basis for Processing">
        <ul>
          <li>Consent</li>
          <li>Contractual necessity</li>
          <li>Legal obligations</li>
          <li>Legitimate interests</li>
        </ul>
      </Section>

      <Section title="6. Cookies & Tracking">
        <p>
          We use cookies to improve your experience. You can control cookies
          through your browser settings.
        </p>
      </Section>

      <Section title="7. Sharing Your Information">
        <p>
          We do not sell your personal data. Data may be shared with trusted
          service providers or authorities if required.
        </p>
      </Section>

      <Section title="8. International Data Transfers">
        <p>
          Your data may be processed outside the UK, with appropriate safeguards in place, and only with your prior consent
        </p>
      </Section>

      <Section title="9. Data Retention">
        <p>
          Personal data is retained only as long as necessary for the purposes
          described in this policy.
        </p>
      </Section>

      <Section title="10. Your Rights">
        <ul>
          <li>Access your data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion</li>
          <li>Object to processing</li>
        </ul>
      </Section>

      <Section title="11. Security">
        <p>
          We use appropriate technical and organisational measures to protect
          your personal data.
        </p>
      </Section>

      <Section title="12. Third-Party Links">
        <p>
          We are not responsible for the privacy practices of external websites.
        </p>
      </Section>


      <Section title="13. Changes to This Policy">
        <p>
          We may update this policy from time to time. Updates will be posted on
          this page.
        </p>
      </Section>

      <Section title="14. Contact Us">
        <p className="m-0 pb-4">
          <strong>Email:</strong>
          <a href="mailto:info@codmsoftware.co.uk" className="text-black text-decoration-none"> info@codmsoftware.co.uk</a><br/>
          <strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
        </p>
      </Section>
    </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="privacy-section">
    <h5 className="privacy-heading">{title}</h5>
    {children}
  </section>
);

export default PrivacyPolicy;