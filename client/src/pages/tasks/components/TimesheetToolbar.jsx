import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

import "../styles/timesheetToolbar.css";

const TimesheetToolbar = ({ sprint }) => {
  return (
    <div className="timesheet-toolbar">

      {/* LEFT */}
      <div className="toolbar-left">

        <div className="view-switcher">
          <button className="active">Day</button>
          <button>Week</button>
          <button>Calendar</button>
        </div>

      </div>

      {/* RIGHT */}
      <div className="toolbar-right">

        <button className="date-nav-btn">
          <ChevronLeft size={16} />
        </button>

        <div className="selected-date">
          <CalendarDays size={16} />
          <span>Wed, 30 Apr 2025</span>
        </div>

        <button className="date-nav-btn">
          <ChevronRight size={16} />
        </button>

      </div>
    </div>
  );
};

export default TimesheetToolbar;