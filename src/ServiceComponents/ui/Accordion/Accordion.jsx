import React from "react";
import "./Accordion.css";

// `id` must be unique when several accordions share a page (e.g. /faq).
const Accordion = ({ title, items, defaultOpen = 0, id = "accordionExample" }) => {
  return (
    <>
      {title && (
        <h4 className="mt-3 pt-4 mb-3 border-top">{title}</h4>
      )}
      <div className="accordion mt-4 " id={id}>
        {items.map((item, index) => (
          <div key={item.number} className="accordion-item border-bottom">
            <h3 className="accordion-header" id={`${id}-heading${item.number}`}>
              <button
                className={`accordion-button ${
                  index === defaultOpen ? "" : "collapsed"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${id}-collapse${item.number}`}
                aria-expanded={index === defaultOpen ? "true" : "false"}
                aria-controls={`${id}-collapse${item.number}`}
              >
                <span className="circleIcon purple-bg me-3">
                  {item.number}
                </span>
                <span className="accordion_title">{item.title}</span>
              </button>
            </h3>
            <div
              id={`${id}-collapse${item.number}`}
              className={`accordion-collapse collapse ${
                index === defaultOpen ? "show" : ""
              }`}
              aria-labelledby={`${id}-heading${item.number}`}
              data-bs-parent={`#${id}`}
            >
              <div className="accordion-body">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;