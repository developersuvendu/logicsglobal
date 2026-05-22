import React from "react";

import {
  CircleCheck,
  BadgeCheck,
  FlaskConical,
  LoaderCircle,
  ListTodo,
} from "lucide-react";

const statusData = [
  {
    id: 1,
    name: "Done",
    achieved: 24,
    missed: 4,
    percent: 85,
    icon: <CircleCheck size={16} />,
    iconClass: "green",
  },

  {
    id: 2,
    name: "In Review",
    achieved: 8,
    missed: 3,
    percent: 73,
    icon: <BadgeCheck size={16} />,
    iconClass: "purple",
  },

  {
    id: 3,
    name: "QA Testing",
    achieved: 6,
    missed: 2,
    percent: 75,
    icon: <FlaskConical size={16} />,
    iconClass: "orange",
  },

  {
    id: 4,
    name: "In Progress",
    achieved: 4,
    missed: 1,
    percent: 80,
    icon: <LoaderCircle size={16} />,
    iconClass: "blue",
  },

  {
    id: 5,
    name: "Backlog",
    achieved: 2,
    missed: 1,
    percent: 67,
    icon: <ListTodo size={16} />,
    iconClass: "gray",
  },
];

const TargetStatusCard = () => {
  return (
    <div className="reports-card target-status-card">
      {/* HEADER */}

      <div className="reports-card-header">
        <div>
          <h3>Target Status Overview</h3>
        </div>
      </div>

      {/* TABLE */}

      <div className="target-status-table">
        {/* HEADER */}

        <div className="target-table-header">
          <span>Target Status</span>
          <span>Achieved</span>
          <span>Missed</span>
          <span>Achievement %</span>
        </div>

        {/* ROWS */}

        {statusData.map((item) => (
          <div className="target-table-row" key={item.id}>
            {/* STATUS */}

            <div className="target-status-name">
              <div className={`status-icon ${item.iconClass}`}>{item.icon}</div>

              <span>{item.name}</span>
            </div>

            {/* ACHIEVED */}

            <div className="target-cell">{item.achieved}</div>

            {/* MISSED */}

            <div className="target-cell">{item.missed}</div>

            {/* PROGRESS */}

            <div className="target-progress-cell">
              <div className="target-progress-bar">
                <div
                  className="target-progress-fill"
                  style={{
                    width: `${item.percent}%`,
                  }}
                />
              </div>

              <span>{item.percent}%</span>
            </div>
          </div>
        ))}

        {/* FOOTER */}

        <div className="target-table-footer">
          <span>Total</span>

          <span>44</span>

          <span>11</span>

          <span>80%</span>
        </div>
      </div>
    </div>
  );
};

export default TargetStatusCard;
