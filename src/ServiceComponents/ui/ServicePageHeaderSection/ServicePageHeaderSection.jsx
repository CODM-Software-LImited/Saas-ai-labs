import React from "react";
import "./ServicePageHeaderSection.css";

const ServicePageHeaderSection = ({ 
  title = "Service Title", 
  breadcrumb = ["Home", "Current Page"], 
  bgImg 
}) => {
  return (
    <section className="ServicePageHeaderSection_Container section-page-header py-10 fix position-relative">
      <div className="container position-relative z-1 mt-5">
        <div className="text-start">
          <h3>{title}</h3>

          <div className="d-flex align-items-center">
            {/* Breadcrumb */}
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx === 0 ? (
                  <a href="/" className="d-flex text-decoration-none black-text">
                    <p className="mb-0 text-900 fw-bold">{item}</p>
                  </a>
                ) : (
                  <p className="purple-text mb-0 fw-bold">{item}</p>
                )}

                {idx < breadcrumb.length - 1 && (
                  <svg
                    className="mx-3 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                  >
                    <path
                      className="stroke-dark"
                      d="M1 1.5L6.5 6.75L1 12"
                      stroke="#111827"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Background image */}
      {bgImg && (
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src={bgImg}
          width="60%"
          alt="Background"
        />
      )}
    </section>
  );
};


export default ServicePageHeaderSection;