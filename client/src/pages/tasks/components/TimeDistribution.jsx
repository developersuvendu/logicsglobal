import React from "react";
import "../styles/timeDistribution.css";

const distributionData = [
  {
    label: "Development",
    hours: "15h 30m",
    percent: "48%",
    color: "#5B5CF6",
  },
  {
    label: "Testing",
    hours: "6h 10m",
    percent: "19%",
    color: "#22C55E",
  },
  {
    label: "Meeting",
    hours: "4h 00m",
    percent: "12%",
    color: "#F59E0B",
  },
  {
    label: "Research",
    hours: "3h 20m",
    percent: "10%",
    color: "#EC4899",
  },
  {
    label: "Others",
    hours: "2h 40m",
    percent: "8%",
    color: "#94A3B8",
  },
];

const TimeDistribution = () => {
  return (
    <div className="distribution-card">
      <div className="distribution-header">
        <h3>Time Distribution</h3>
        <span>This Week</span>
      </div>

      <div className="distribution-chart-wrapper">

        <div className="donut-chart">

          <div className="donut-inner">
            <h2>31h</h2>
            <p>Logged</p>
          </div>

        </div>

      </div>

      <div className="distribution-legend">

        {distributionData.map((item, index) => (
          <div
            className="legend-item"
            key={index}
          >

            <div className="legend-left">

              <span
                className="legend-dot"
                style={{
                  background: item.color,
                }}
              ></span>

              <div>
                <h5>{item.label}</h5>
                <p>{item.hours}</p>
              </div>

            </div>

            <span className="legend-percent">
              {item.percent}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TimeDistribution;