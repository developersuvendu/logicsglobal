import React from "react";
import "../../styles/Common/dropdown.css";

const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select",
}) => {
  return (
    <div className="dropdown-group">
      {label && <label className="dropdown-label">{label}</label>}

      <select
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;