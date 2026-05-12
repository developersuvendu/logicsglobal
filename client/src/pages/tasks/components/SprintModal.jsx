import React, { useState, useEffect } from "react";
import Modal from "../../../components/common/Modal";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import "../styles/sprintModal.css";

const SprintModal = ({
  isOpen,
  onClose,
  sprint,
  setSprint,
  setTasks, // ✅ include properly
}) => {
  const [form, setForm] = useState(sprint);

  useEffect(() => {
    setForm(sprint);
  }, [sprint]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setSprint(form);
    onClose();
  };

  const handleStartSprint = () => {
    setSprint((prev) => ({ ...prev, status: "active" }));
    onClose();
  };

  const handleCompleteSprint = () => {
    const moveToBacklog = window.confirm(
      "Move unfinished tasks to backlog?"
    );

    setSprint((prev) => ({ ...prev, status: "completed" }));

    if (moveToBacklog && setTasks) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.sprintId === sprint.id && task.status !== "done"
            ? { ...task, sprintId: null } // backlog
            : task
        )
      );
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sprint Settings">
      <div className="sprint-form">

        {/* Name */}
        <Input
          label="Sprint Name"
          value={form.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        {/* Goal */}
        <Input
          label="Sprint Goal"
          value={form.goal || ""}
          onChange={(e) => handleChange("goal", e.target.value)}
        />

        {/* Dates */}
        <Input
          label="Start Date"
          type="date"
          value={form.startDate || ""}
          onChange={(e) => handleChange("startDate", e.target.value)}
        />

        <Input
          label="End Date"
          type="date"
          value={form.endDate || ""}
          onChange={(e) => handleChange("endDate", e.target.value)}
        />

        {/* Status */}
        <div className="status">
          Status: <strong>{sprint.status}</strong>
        </div>

        {/* Actions */}
        <div className="modal-actions">
          {sprint.status === "planned" && (
            <Button onClick={handleStartSprint}>
              Start Sprint
            </Button>
          )}

          {sprint.status === "active" && (
            <>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button onClick={handleCompleteSprint}>
                Complete Sprint
              </Button>
            </>
          )}

          {sprint.status === "completed" && (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          )}
        </div>

        <Button variant="outline" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </Modal>
  );
};

export default SprintModal;