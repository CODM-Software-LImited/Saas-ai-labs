import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceMainPagePills.css";

const ServiceMainPagePills = ({ pillLabel, title, description, link }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div
      className="position-relative d-inline-block mx-2"
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      {/* Pill */}
      <span
        className="badge rounded-pill purple-pill-bg px-3 py-2 text-white"
        style={{ cursor: "pointer" }}
      >
        {pillLabel}
      </span>

      {/* Card */}
      {showCard && (
        <div
          className="card shadow p-3 position-absolute"
          style={{
            top: "90%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "260px",
            zIndex: 9999,
          }}
        >
          <h6 className="fw-bold">{title}</h6>

          <p className="text-muted" style={{ fontSize: "14px" }}>
            {description}
          </p>

          <Link
            to={link}
            className="text-primary fw-semibold text-decoration-none"
          >
            Read More →
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceMainPagePills;
