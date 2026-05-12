import React, { useState } from "react";

import "../styles/logWorkPanel.css";

const LogWorkPanel = ({ logs, setLogs }) => {
  const [formData, setFormData] = useState({
    task: "",
    date: "",
    startTime: "",
    endTime: "",
    workType: "Development",
    billable: true,
    description: "",
  });

  const calculateDuration = (start, end) => {
    if (!start || !end) return "00h 00m";

    const startTime = new Date(`2000-01-01 ${start}`);
    const endTime = new Date(`2000-01-01 ${end}`);

    const diff = endTime - startTime;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `${hours}h ${minutes}m`;
  };

  const duration = calculateDuration(
    formData.startTime,
    formData.endTime
  );

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.task ||
      !formData.startTime ||
      !formData.endTime
    ) {
      alert("Please fill required fields");
      return;
    }

    const newLog = {
      id: `LGTS-${Math.floor(
        Math.random() * 900 + 100
      )}`,

      title: formData.task,

      type: "task",

      project: formData.workType,

      start: formData.startTime,

      end: formData.endTime,

      duration,

      status: "pending",

      billable: formData.billable,

      assignee: "J",

      note: formData.description,
    };

    setLogs([newLog, ...logs]);

    setFormData({
      task: "",
      date: "",
      startTime: "",
      endTime: "",
      workType: "Development",
      billable: true,
      description: "",
    });
  };

  return (
    <div className="log-panel">

      {/* HEADER */}
      <div className="panel-header">

        <h3>Log Work</h3>

        <button className="timer-btn">
          ▶ Start Timer
        </button>

      </div>

      <div className="form-group">
        <label>Task</label>

        <select
          name="task"
          value={formData.task}
          onChange={handleChange}
        >
          <option value="">
            Select task
          </option>

          <option>
            Employee Dashboard UI
          </option>

          <option>
            Fix Login API Issue
          </option>

          <option>
            User Profile UI
          </option>
        </select>
      </div>

      {/* DATE */}
      <div className="form-group">
        <label>Date</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      {/* TIME */}
      <div className="time-row">

        <div className="form-group">
          <label>Start Time</label>

          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>End Time</label>

          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Duration</label>

          <input
            type="text"
            value={duration}
            readOnly
          />
        </div>

      </div>

      {/* WORK TYPE */}
      <div className="time-row">

        <div className="form-group flex-1">

          <label>Work Type</label>

          <select
            name="workType"
            value={formData.workType}
            onChange={handleChange}
          >
            <option>Development</option>
            <option>Testing</option>
            <option>Meeting</option>
            <option>Research</option>
            <option>Design</option>
          </select>

        </div>

        <div className="billable-box">

          <label>Billable</label>

          <input
            type="checkbox"
            name="billable"
            checked={formData.billable}
            onChange={handleChange}
          />

        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="form-group">

        <label>Description</label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="What did you work on?"
        />

      </div>

      {/* SAVE */}
      <button
        className="save-btn"
        onClick={handleSubmit}
      >
        Save Log
      </button>
    </div>
  );
};

export default LogWorkPanel;