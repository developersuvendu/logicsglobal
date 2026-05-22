import React from "react";

import { ArrowRight } from "lucide-react";

const missedTargets = [
  {
    id: "LOG-128",
    title: "Payment gateway integration",
    assignee: "Rahul Sharma",
    target: "Done",
    status: "In Progress",
    delay: "3 days",
    delayType: "danger",
  },

  {
    id: "LOG-117",
    title: "Email notification setup",
    assignee: "Jignesh Surampudi",
    target: "In Review",
    status: "In Progress",
    delay: "2 days",
    delayType: "danger",
  },

  {
    id: "LOG-104",
    title: "Mobile responsive issue",
    assignee: "Renu Sharma",
    target: "QA Testing",
    status: "In Review",
    delay: "2 days",
    delayType: "danger",
  },

  {
    id: "LOG-093",
    title: "User reporting module",
    assignee: "Suvendu Mohanta",
    target: "Done",
    status: "In Review",
    delay: "4 days",
    delayType: "danger",
  },

  {
    id: "LOG-076",
    title: "API rate limit handling",
    assignee: "Krishna Kumar",
    target: "Done",
    status: "In Progress",
    delay: "1 day",
    delayType: "success",
  },
];

const MissedTargetsTable = () => {
  return (
    <div className="reports-card missed-targets-card">
      {/* HEADER */}

      <div className="reports-card-header">
        <div>
          <h3>Missed Targets</h3>
        </div>
      </div>

      {/* TABLE */}

      <div className="missed-targets-table">
        {/* TABLE HEADER */}

        <div className="missed-table-header">
          <span>ID</span>
          <span>Title</span>
          <span>Assignee</span>
          <span>Target</span>
          <span>Current Status</span>
          <span>Delay</span>
        </div>

        {/* ROWS */}

        {missedTargets.map((item) => (
          <div className="missed-table-row" key={item.id}>
            <div className="missed-id">
              {item.id}
            </div>

            <div className="missed-title">
              {item.title}
            </div>

            <div className="missed-cell">
              {item.assignee}
            </div>

            <div className="missed-cell">
              {item.target}
            </div>

            <div className="missed-cell">
              {item.status}
            </div>

            <div>
              <span className={`delay-badge ${item.delayType}`}>
                {item.delay}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}

      <button className="missed-targets-link">
        View all missed targets

        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default MissedTargetsTable;