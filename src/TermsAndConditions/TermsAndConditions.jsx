import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title text-center">Terms and Conditions</h1>
      <p>
        Welcome to <strong>CODM Software Limited </strong>
        These Terms and Conditions govern your use of our website {" "}
        <a
          href="https://codmsoftware.co.uk/"
          target="_blank"
          rel="noreferrer"
        >
          https://codmsoftware.co.uk/
        </a>
      </p>

      <p>
        By accessing or using this Website, you agree to be bound by these Terms
        and Conditions. If you do not agree, please do not use our Website.
      </p>

      <Section title="1. Use of the Website">
        <ul>
          <li>Use the Website only for lawful purposes</li>
          <li>Do not attempt unauthorised access</li>
          <li>Do not copy or redistribute Website content without permission</li>
          <li>Do not introduce malware or harmful material</li>
        </ul>
      </Section>

      <Section title="2. Intellectual Property">
        <p>
          All content on this Website, including text, graphics, logos, designs,
          software, and code, is the intellectual property of CODM Software
          Limited unless otherwise stated.
        </p>
      </Section>

      <Section title="3. Website Content & Services Disclaimer">
        <p>
          Website content is provided for general information only and does not
          constitute professional or technical advice. Services are subject to
          separate written agreements.
        </p>
      </Section>

      <Section title="4. User Enquiries & Communication">
        <p>
          Submitting an enquiry does not create a contractual relationship. We
          may contact you regarding your enquiry.
        </p>
      </Section>

      <Section title="5. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, CODM Software Limited is not
          liable for losses arising from Website use, downtime, data loss, or
          reliance on Website content.
        </p>
      </Section>

      <Section title="6. Third-Party Links">
        <p>
          We are not responsible for content, availability, or privacy practices
          of third-party websites linked from this Website.
        </p>
      </Section>

      {/* <Section title="7. Confidentiality">
        <p>
          Information shared via the Website is treated as non-confidential
          unless agreed otherwise in writing.
        </p>
      </Section> */}

      <Section title="7. Termination">
        <p>
          We reserve the right to suspend or terminate access to the Website if
          these Terms are breached.
        </p>
      </Section>

      <Section title="8. Changes to These Terms">
        <p>
          We may update these Terms at any time. Continued use of the Website
          constitutes acceptance of updated Terms.
        </p>
      </Section>

    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="terms-section">
    <h2 className="terms-heading">{title}</h2>
    {children}
  </section>
);

export default TermsAndConditions;