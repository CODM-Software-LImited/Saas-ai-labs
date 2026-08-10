import { Link } from 'react-router-dom';
import './ContactSection.css';

function ContactSection() {
  return (
    <>
      {/* CTA Section */}
    <section class="cta-section">
        <div class="cta-container">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join hundreds of enterprises leveraging AI to drive innovation and growth.</p>
            <div class="hero-cta-group">
                {/* <button class="btn-primary mx-2">Contact Us</button> */}

                <Link to="/contact">
                <button class="btn-primary mx-2">Contact Us</button>
                </Link>

                {/* <button class="btn-secondary mx-2">Schedule a Demo</button> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactSection;