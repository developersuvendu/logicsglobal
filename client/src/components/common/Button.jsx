import React from "react";
import "../../styles/Common/button.css";
import "../../pages/tasks/styles/tasks.css"

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  icon,
  fullWidth = false,
  type = "button",
  className = "", 
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${
        fullWidth ? "btn-full" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;