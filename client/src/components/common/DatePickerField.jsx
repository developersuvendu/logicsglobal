import React from "react";
import DatePicker from "react-datepicker";

import { CalendarDays } from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

import "../../styles/Common/datePickerField.css";

const DatePickerField = ({
  label,
  selected,
  onChange,
  placeholder = "Select date",
}) => {
  return (
    <div className="date-picker-group">

      {label && (
        <label className="date-picker-label">
          {label}
        </label>
      )}

      <div className="date-picker-wrapper">

        <DatePicker
          selected={selected}
          onChange={onChange}
          placeholderText={placeholder}
          dateFormat="dd MMM yyyy"
          className="date-picker-input"
          popperPlacement="bottom-start"
          withPortalj
        />

        <CalendarDays
          size={18}
          className="date-picker-icon"
        />

      </div>

    </div>
  );
};

export default DatePickerField;