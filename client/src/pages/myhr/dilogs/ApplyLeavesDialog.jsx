import { useState } from "react";

import Modal from "../../../components/common/Modal";

import { applyLeaveApi } from "../../../api/leaveApi";

import { getUser } from "../../../utils/storage";

const ApplyLeaveModal = ({ isOpen, onClose, refreshLeaves }) => {
  const [leaveType, setLeaveType] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [reason, setReason] = useState("");

  const [loading, setLoading] = useState(false);

  const calculateDays = (start, end) => {
    const startDate = new Date(start);

    const endDate = new Date(end);

    const difference = endDate - startDate;

    return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleApplyLeave = async () => {
    try {
      if (!leaveType || !startDate || !endDate || !reason) {
        alert("Please fill all fields");

        return;
      }

      setLoading(true);

      const user = getUser();

      const days = calculateDays(startDate, endDate);

      await applyLeaveApi({
        userId: user._id,

        leaveType,

        startDate,

        endDate,

        days,

        reason,
      });

      await refreshLeaves();

      setLeaveType("");

      setStartDate("");

      setEndDate("");

      setReason("");

      onClose();
    } catch (error) {
      console.log("Apply Leave Error :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Apply Leave Request"
      footer={
        <>
          <button className="modal-btn secondary" onClick={onClose}>
            Cancel
          </button>

          <button
            className="modal-btn primary"
            onClick={handleApplyLeave}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Leave Request"}
          </button>
        </>
      }
    >
      <div className="leave-form-grid">
        {/* Leave Type */}
        <div className="form-group">
          <label>Leave Type</label>

          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="">Select Leave</option>

            <option value="Sick Leave">Sick Leave</option>

            <option value="Casual Leave">Casual Leave</option>

            <option value="Annual Leave">Annual Leave</option>
          </select>
        </div>

        {/* Dates */}
        <div className="flex">
          <div
            className="form-group"
            style={{
              width: "50%",
              marginRight: "10px",
            }}
          >
            <label>Start Date</label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div
            className="form-group"
            style={{
              width: "50%",
              marginLeft: "10px",
            }}
          >
            <label>End Date</label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Reason */}
        <div className="form-group">
          <label>Reason</label>

          <textarea
            placeholder="Enter detailed reason for leave"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export { ApplyLeaveModal };
