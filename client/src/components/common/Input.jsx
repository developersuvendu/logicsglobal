import React from "react";
import "../../styles/Common/input.css";

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  fullWidth = true,
}) => {
  return (
    <div className={`input-group ${fullWidth ? "full" : ""}`}>
      {label && <label className="input-label">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? "input-error" : ""}`}
      />

      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};

export default Input;