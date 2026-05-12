import React from "react";
import Button from "../../../components/common/Button";
import "../styles/taskHeader.css";

const tabs = [
  { label: "Board", value: "board" },
  { label: "Backlog", value: "backlog" },
  { label: "List", value: "list" },
  { label: "TimeSheet", value: "timesheet" },
  { label: "Reports", value: "reports" },
];

const TaskHeader = ({
  onCreate,
  onAddColumn,
  onOpenSprint,
  activeTab,
  onTabChange,
  sprint,
}) => {
  const getStatusLabel = () => {
    if (sprint.status === "active") return "Active Sprint";
    if (sprint.status === "planned") return "Planned Sprint";
    if (sprint.status === "completed") return "Completed";
    return "";
  };

  return (
    <div className="task-header">
      <div className="task-header-top">
        <div className="sprint-info">
          <h2>
            Logics Sprint 2026-27 <span className="dropdown">▾</span>
          </h2>

          <div className="sprint-bar">

            <span className={`status-pill ${sprint.status}`}>
              {getStatusLabel()}
            </span>

            <span className="sprint-name">{sprint.name}</span>

            {/* DATE */}
            {sprint.startDate && sprint.endDate && (
              <span className="sprint-date">
                📅{" "}
                {new Date(sprint.startDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}{" "}
                –{" "}
                {new Date(sprint.endDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
            )}

            {/* MORE MENU */}
            <button onClick={onOpenSprint} className="more-btn">
              ⋯
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - TABS */}
        <div className="pill-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`pill ${activeTab === tab.value ? "active" : ""}`}
              onClick={() => onTabChange(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
