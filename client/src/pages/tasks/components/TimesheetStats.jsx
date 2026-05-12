import React from "react";
import { Clock3, CalendarCheck, PieChart, ClipboardList, CheckCircle2 } from "lucide-react";
import ComplianceGauge from "./ComplianceGauge";  // ← ADD THIS
import "../styles/timesheetStats.css";

const TimesheetStats = ({ logs }) => {
  const totalMinutes = logs.reduce((acc, log) => {
    const [hours, minutes] = log.duration.match(/\d+/g).map(Number);
    return acc + hours * 60 + minutes;
  }, 0);

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  const todayLogged = `${totalHours}h ${remainingMinutes}m`;
  const sprintLogged = `${totalHours * 8}h ${remainingMinutes}m`;
  const remainingCapacity = `${60 - totalHours}h ${remainingMinutes}m`;
  const activeTasks = logs.length;

  const stats = [
    {
      title: "Today Logged",
      value: todayLogged,
      sub: "of 8h",
      percent: 81,
      icon: <Clock3 size={40} />,
      color: "purple",
    },
    {
      title: "Sprint Logged",
      value: sprintLogged,
      sub: "of 60h",
      percent: 80,
      icon: <CalendarCheck size={20} />,
      color: "green",
    },
    {
      title: "Remaining Capacity",
      value: remainingCapacity,
      sub: "of 60h",
      percent: 20,
      icon: <PieChart size={20} />,
      color: "orange",
    },
    {
      title: "Active Tasks",
      value: activeTasks,
      sub: "in progress",
      percent: 65,
      icon: <ClipboardList size={20} />,
      color: "blue",
    },
    {
      title: "Compliance",
      value: "92%",
      sub: "Good • On Track",
      percent: 92,
      icon: <CheckCircle2 size={20} />,
      color: "success",
      compliance: true,
    },
  ];

  return (
    <div className="timesheet-stats">
      {stats.map((item, index) => (
        <div className="timesheet-stats-card" key={index}>
          <div className="timesheet-stats-top">
            <div className={`timesheet-stats-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="timesheet-stats-info">
              <span>{item.title}</span>

              {item.compliance ? (
                <div className="timesheet-stats-value-row">
                  <p style={{ color: "#16a34a", fontWeight: 600, fontSize: "12px", margin: 0 }}>
                    Good • On Track
                  </p>
                </div>
              ) : (
                <div className="timesheet-stats-value-row">
                  <h3>{item.value}</h3>
                  <p>{item.sub}</p>
                </div>
              )}
            </div>
          </div>

          {!item.compliance ? (
            <div className="timesheet-stats-bottom">
              <div className="progress-track">
                <div
                  className={`progress-fill ${item.color}`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
              <span>{item.percent}%</span>
            </div>
          ) : (
            <div className="compliance-wrapper">
              <ComplianceGauge percent={item.percent} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimesheetStats;