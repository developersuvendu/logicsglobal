import React from "react";
import "../styles/topTasks.css";

const tasks = [
  {
    id: "LGTS-204",
    title: "Employee Dashboard UI",
    hours: "12h 30m",
    progress: 92,
  },
  {
    id: "LGTS-201",
    title: "User Profile UI",
    hours: "9h 45m",
    progress: 78,
  },
  {
    id: "LGTS-202",
    title: "Fix Login API Issue",
    hours: "6h 20m",
    progress: 60,
  },
  {
    id: "LGTS-205",
    title: "Timesheet APIs",
    hours: "5h 15m",
    progress: 48,
  },
];

const TopTasks = () => {
  return (
    <div className="top-tasks-card">

      {/* HEADER */}
      <div className="top-tasks-header">

        <h3>Top Tasks</h3>

        <span>This Sprint</span>

      </div>

      {/* LIST */}
      <div className="top-tasks-list">

        {tasks.map((task, index) => (
          <div
            className="top-task-item"
            key={index}
          >

            {/* RANK */}
            <div className="task-rank">
              {index + 1}
            </div>

            {/* CONTENT */}
            <div className="task-details">

              <div className="task-top">

                <div>
                  <span className="task-id">
                    {task.id}
                  </span>

                  <h4>{task.title}</h4>
                </div>

                <span className="task-hours">
                  {task.hours}
                </span>

              </div>

              {/* PROGRESS */}
              <div className="task-progress">

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${task.progress}%`,
                    }}
                  ></div>

                </div>

                <span className="progress-value">
                  {task.progress}%
                </span>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* FOOTER */}
      <button className="view-all-btn">
        View All Tasks
      </button>

    </div>
  );
};

export default TopTasks;