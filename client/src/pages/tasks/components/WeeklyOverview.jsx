import React from "react";
import "../styles/weeklyOverview.css";

const weeklyData = [
  {
    day: "Mon",
    date: "28",
    hours: "7h 45m",
    value: 78,
  },
  {
    day: "Tue",
    date: "29",
    hours: "8h 15m",
    value: 86,
  },
  {
    day: "Wed",
    date: "30",
    hours: "6h 30m",
    value: 65,
    active: true,
  },
  {
    day: "Thu",
    date: "01",
    hours: "4h 00m",
    value: 40,
  },
  {
    day: "Fri",
    date: "02",
    hours: "5h 10m",
    value: 52,
  },
];

const WeeklyOverview = () => {
  return (
    <div className="weekly-card">

      {/* HEADER */}
      <div className="weekly-header">

        <div>
          <h3>Weekly Overview</h3>
          <p>This Week</p>
        </div>

        <div className="weekly-summary">
          <span>31h 40m Logged</span>
        </div>

      </div>

      {/* CHART */}
      <div className="weekly-chart">

        {weeklyData.map((item, index) => (
          <div
            className={`chart-item ${
              item.active ? "active" : ""
            }`}
            key={index}
          >

            <span className="chart-hours">
              {item.hours}
            </span>

            <div className="chart-bar-wrapper">

              <div
                className="chart-bar"
                style={{
                  height: `${item.value}%`,
                }}
              ></div>

            </div>

            <div className="chart-label">
              <span>{item.day}</span>
              <small>{item.date}</small>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default WeeklyOverview;