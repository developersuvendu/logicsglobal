import React from "react";
import {
  Sparkles,
  AlertTriangle,
  ClipboardCheck,
  Clock3,
  MoreVertical,
} from "lucide-react";

import "../styles/workLogs.css";

// const logs = [
//   {
//     id: "LGTS-204",
//     title: "Employee Dashboard UI",
//     type: "story",
//     project: "Foundation Setup",
//     start: "09:00 AM",
//     end: "11:30 AM",
//     duration: "2h 30m",
//     status: "approved",
//     billable: true,
//     assignee: "J",
//     note:
//       "Implemented employee summary cards and charts.",
//   },
//   {
//     id: "LGTS-202",
//     title: "Fix Login API Issue",
//     type: "bug",
//     project: "Research & Knowledge",
//     start: "11:45 AM",
//     end: "01:15 PM",
//     duration: "1h 30m",
//     status: "pending",
//     billable: false,
//     assignee: "R",
//     note:
//       "Fixed authentication token validation issue.",
//   },
//   {
//     id: "LGTS-201",
//     title: "User Profile UI",
//     type: "task",
//     project: "User Authentication",
//     start: "02:00 PM",
//     end: "04:00 PM",
//     duration: "2h 00m",
//     status: "approved",
//     billable: true,
//     assignee: "A",
//     note:
//       "Created profile overview and activity section.",
//   },
// ];

const getIcon = (type) => {
  switch (type) {
    case "story":
      return <Sparkles size={18} />;
    case "bug":
      return <AlertTriangle size={18} />;
    default:
      return <ClipboardCheck size={18} />;
  }
};

const WorkLogs = ({ logs }) => {
  return (
    <div className="worklogs-card">

      {/* HEADER */}
      <div className="worklogs-header">
        <h3>Work Logs</h3>

        <div className="worklogs-actions">
          <button className="filter-btn">
            All Tasks
          </button>

          <button className="filter-btn active">
            Today
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="worklogs-list">

        {logs.map((log, index) => (
          <div className="log-item" key={index}>

            {/* TIMELINE */}
            <div className="log-timeline">
              <span className="timeline-time">
                {log.start}
              </span>

              <div className="timeline-line">
                <div className="timeline-dot"></div>
              </div>
            </div>

            <div className="log-content">

              <div className={`log-icon ${log.type}`}>
                {getIcon(log.type)}
              </div>

              <div className="log-body">

                <div className="log-top">

                  <div>
                    <span className="task-id">
                      {log.id}
                    </span>

                    <h4>{log.title}</h4>
                  </div>

                  <button className="more-btn">
                    <MoreVertical size={16} />
                  </button>
                </div>

                {/* META */}
                <div className="log-meta">

                  <span className="project-name">
                    {log.project}
                  </span>

                  <div className="time-range">
                    <Clock3 size={14} />

                    {log.start} - {log.end}
                  </div>

                  <div className="duration-pill">
                    {log.duration}
                  </div>
                </div>

                {/* NOTE */}
                <p className="log-note">
                  {log.note}
                </p>

                {/* FOOTER */}
                <div className="log-footer">

                  <div className="log-badges">

                    <span
                      className={`status-badge ${log.status}`}
                    >
                      {log.status}
                    </span>

                    <span
                      className={`billing-badge ${
                        log.billable
                          ? "billable"
                          : "nonbillable"
                      }`}
                    >
                      {log.billable
                        ? "Billable"
                        : "Non-billable"}
                    </span>

                  </div>

                  <div className="log-avatar">
                    {log.assignee}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* ADD LOG */}
      <button className="add-log-btn">
        + Add Another Log
      </button>

    </div>
  );
};

export default WorkLogs;