import { Link } from "react-router-dom";
import gcaLogo from "../../assets/imgs/gcloud/gca-supplier-black.png";
import "./GCloudBadge.css";

/**
 * variant="strip" (default) - slim banner used on service pages.
 * variant="card" - larger showcase card used on Home and About.
 */
function GCloudBadge({ variant = "strip" }) {
  if (variant === "card") {
    return (
      <section className="container my-5" data-aos="fade-up">
        <div className="gcloud-card row g-0 align-items-center">
          <div className="col-lg-4 col-md-5">
            <div className="gcloud-card-logoPanel">
              <img
                src={gcaLogo}
                alt="Government Commercial Agency Supplier"
                className="gcloud-card-logo"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="gcloud-card-body">
              <span className="gcloud-card-eyebrow">
                Public Sector Procurement
              </span>
              <h3 className="gcloud-card-title">
                Now on G&#8209;Cloud 15 &middot; Lot 3: Cloud Support
              </h3>
              <p className="gcloud-card-copy">
                CODM Software Limited is a supplier on Government Commercial
                Agency&rsquo;s RM1557.15 G&#8209;Cloud 15 framework. We provide
                Salesforce, AI, integration, data and cloud application
                services to public sector teams.
              </p>
              <Link to="/g-cloud-15" className="gcloud-card-btn">
                Explore our G&#8209;Cloud 15 services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.25 15.25V6.75H8.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L6.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container my-5">
      <div className="gcloud-badge d-flex align-items-center flex-wrap gap-4 justify-content-between">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <img
            src={gcaLogo}
            alt="Government Commercial Agency Supplier"
            className="gcloud-badge-logo"
          />
          <div>
            <p className="gcloud-badge-title mb-1">
              Also available through G&#8209;Cloud 15 Lot 3: Cloud Support
            </p>
            <p className="gcloud-badge-sub mb-0">
              CODM Software Limited is a supplier on Government Commercial
              Agency&rsquo;s RM1557.15 G&#8209;Cloud 15 framework.
            </p>
          </div>
        </div>
        <Link to="/g-cloud-15" className="gcloud-badge-link">
          View our G&#8209;Cloud 15 services &rarr;
        </Link>
      </div>
    </section>
  );
}

export default GCloudBadge;
