import React, { useState } from "react";
import Modal from "../../../components/common/Modal";
import Input from "../../../components/common/Input";
import Dropdown from "../../../components/common/Dropdown";
import Button from "../../../components/common/Button";
import "../styles/CreateTaskModal.css";
import DatePickerField from "../../../components/common/DatePickerField";

const CreateTaskModal = ({ isOpen, onClose, onCreate }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "",
    type: "task",
    status: "todo",
    startDate: null,
    endDate: null,
    sprint: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return;

    onCreate({
      id: Date.now(),
      ...form,
    });

    onClose();

    setForm({
      title: "",
      description: "",
      assignee: "",
      priority: "",
      type: "task",
      status: "todo",
      startDate: "",
      endDate: "",
      sprint: "",
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Create ${form.type}`}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create {form.type}</Button>
        </>
      }
    >
      <div className="create-task">
        {/* TYPE */}
        <div className="type-toggle">
          {["epic", "story", "task", "bug"].map((t) => (
            <button
              key={t}
              className={`type-btn ${form.type === t ? "active" : ""}`}
              onClick={() => handleChange("type", t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <Input
          label="Title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        {/* DESCRIPTION */}
        <div className="field">
          <label>Description</label>
          <textarea
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        {/* DATES */}
        <div className="date-row">
          <div className="field">
            <DatePickerField
              label="Start Date"
              selected={form.startDate}
              onChange={(date) => handleChange("startDate", date)}
            />
          </div>

          <div className="field">
            <DatePickerField
              label="End Date"
              selected={form.endDate}
              onChange={(date) => handleChange("endDate", date)}
            />
          </div>
        </div>

        {/* DROPDOWNS */}
        <Dropdown
          label="Sprint"
          value={form.sprint}
          onChange={(val) => handleChange("sprint", val)}
          options={[
            { label: "Sprint 1", value: "Sprint 1" },
            { label: "Sprint 2", value: "Sprint 2" },
            { label: "Sprint 3", value: "Sprint 3" },
          ]}
        />

        <Dropdown
          label="Assignee"
          value={form.assignee}
          onChange={(val) => handleChange("assignee", val)}
          options={[
            { label: "John", value: "john" },
            { label: "Ravi", value: "ravi" },
          ]}
        />

        <Dropdown
          label="Priority"
          value={form.priority}
          onChange={(val) => handleChange("priority", val)}
          options={[
            { label: "High", value: "high" },
            { label: "Medium", value: "medium" },
            { label: "Low", value: "low" },
          ]}
        />

        <Dropdown
          label="Status"
          value={form.status}
          onChange={(val) => handleChange("status", val)}
          options={[
            { label: "To Do", value: "todo" },
            { label: "In Progress", value: "inprogress" },
            { label: "Done", value: "done" },
          ]}
        />
      </div>
    </Modal>
  );
};

export default CreateTaskModal;
