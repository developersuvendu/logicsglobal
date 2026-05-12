import React, { useState } from "react";

import TimesheetToolbar from "./TimesheetToolbar";
import TimesheetStats from "./TimesheetStats";
import WorkLogs from "./WorkLogs";
import LogWorkPanel from "./LogWorkPanel";
import WeeklyOverview from "./WeeklyOverview";
import TimeDistribution from "./TimeDistribution";
import TopTasks from "./TopTasks";

import "../styles/timesheet.css";

const initialLogs = [
  {
    id: "LGTS-204",
    title: "Employee Dashboard UI",
    type: "story",
    project: "Foundation Setup",
    start: "09:00",
    end: "11:30",
    duration: "2h 30m",
    status: "approved",
    billable: true,
    assignee: "J",
    note: "Implemented employee summary cards and charts.",
  },
  {
    id: "LGTS-202",
    title: "Fix Login API Issue",
    type: "bug",
    project: "Research & Knowledge",
    start: "11:45",
    end: "13:15",
    duration: "1h 30m",
    status: "pending",
    billable: false,
    assignee: "R",
    note: "Fixed authentication token validation issue.",
  },
  {
    id: "LGTS-201",
    title: "User Profile UI",
    type: "task",
    project: "User Authentication",
    start: "14:00",
    end: "16:00",
    duration: "2h 00m",
    status: "approved",
    billable: true,
    assignee: "A",
    note: "Created profile overview and activity section.",
  },
];

const Timesheet = ({ sprint }) => {
  const [logs, setLogs] = useState(initialLogs);

  return (
    <div className="timesheet-page">
      {/* Toolbar */}
      <TimesheetToolbar sprint={sprint} />

      {/* Stats */}
      <TimesheetStats logs={logs} />

      {/* Main Layout */}
      <div className="timesheet-content">
        {/* LEFT */}
        <div className="timesheet-left">
          <WorkLogs logs={logs} />

          <WeeklyOverview logs={logs} />
        </div>

        {/* RIGHT */}
        <div className="timesheet-right">
          <LogWorkPanel logs={logs} setLogs={setLogs} />

          <div className="time-sheet-taskmanagment-section">
            <TimeDistribution logs={logs} />

            <TopTasks logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timesheet;
