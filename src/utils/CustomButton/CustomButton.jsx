import React from "react";
import "./CustomButton.css";

const CustomButton = ({
  text,
  icon,              
  iconPosition = "right", 
  variant = "filled",
  color = "purple",   
  className = "",   
  onClick,
}) => {
  return (
    <button
      className={`custom-btn ${variant} ${color} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <span className="btn-icon">{icon}</span>
      )}
      {text && <span className="btn-text">{text}</span>}
      {icon && iconPosition === "right" && (
        <span className="btn-icon">{icon}</span>
      )}
    </button>
  );
};

export default CustomButton;