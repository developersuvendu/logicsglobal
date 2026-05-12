import Modal from "../../../components/common/Modal";

// import "../styles/ApplyLeaveModal.css";

const ApplyLeaveModal = ({ isOpen, onClose }) => {
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

          <button className="modal-btn primary">Submit Leave Request</button>
        </>
      }
    >
      <div className="leave-form-grid">
        {/* Left */}
        <div className="form-group">
          <label>Leave Type</label>
          <select>
            <option>Select Leave</option>
            <option>Sick Leave</option>
            <option>Casual Leave</option>
            <option>Paid Leave</option>
          </select>
        </div>
      <div className="flex">
        <div className="form-group" style={{"width":"50%", "marginRight":"10px"}}>
          <label>Start Date</label>
          <input type="date" />
        </div>

        <div className="form-group" style={{"width":"50%", "marginLeft":"10px"}}>
          <label>End Date</label>
          <input type="date" />
        </div>
      </div>

        <div className="form-group">
          <label>Reason</label>
          <textarea name="reason" id="reason" placeholder="Enter detailed reason for leave"></textarea>
        </div>


      </div>
    </Modal>
  );
};

export { ApplyLeaveModal };
