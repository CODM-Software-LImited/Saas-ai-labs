import "./HeaderWithBg.css";
import bgImg from "../../assets/imgs/page-header/bg-line.png";

const HeaderWithBg = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="S_firstSection_Container section-page-header py-10 fix position-relative">
      <div className="container position-relative z-1 mt-5">
        <div className="text-start">

          <h3>{title}</h3>

          <div className="d-flex align-items-center flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="d-flex align-items-center">

                {crumb.link ? (
                  <a
                    href={crumb.link}
                    className="d-flex text-decoration-none black-text"
                  >
                    <p className="mb-0 text-900 fw-bold">
                      {crumb.label}
                    </p>
                  </a>
                ) : (
                  <p className={`mb-0 ${crumb.color || ""}`}>
                    {crumb.label}
                  </p>
                )}

                {/* SVG Arrow (Except Last) */}
                {index < breadcrumbs.length - 1 && (
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
                    />
                  </svg>
                )}

              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Background Image */}
      <img
        className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
        src={bgImg}
        width="100%"
        alt="background"
      />
    </section>
  );
};

export default HeaderWithBg;