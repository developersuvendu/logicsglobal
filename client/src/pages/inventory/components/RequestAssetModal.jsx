import { Laptop, Monitor, Headphones, Smartphone } from "lucide-react";

import Modal from "../../../components/common/Modal";

import "../styles/requestAssetModal.css";

const assetOptions = [
  {
    title: "Laptop",
    icon: <Laptop size={20} />,
  },
  {
    title: "Monitor",
    icon: <Monitor size={20} />,
  },
  {
    title: "Accessories",
    icon: <Headphones size={20} />,
  },
  {
    title: "Mobile",
    icon: <Smartphone size={20} />,
  },
];

const RequestAssetModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      hideHeader={true}
      hideFooter={true}
      customClass="request-modal-container"
    >
      <div className="request-modal-layout">
        {/* LEFT PANEL */}
        <div className="request-left-panel">
          <div className="request-illustration">
            <Laptop size={56} />
          </div>

          <h2>Request New Asset</h2>

          <p>
            Easily request company assets for your work needs. Your request will
            be reviewed and approved by the admin team.
          </p>

          <div className="request-tips">
            <div className="tip-item">✓ Select correct asset category</div>

            <div className="tip-item">✓ Mention proper reason</div>

            <div className="tip-item">✓ Choose required priority</div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="request-right-panel">
          <div className="request-form-header">
            <h3>Asset Request Form</h3>

            <button onClick={onClose}>✕</button>
          </div>

          {/* Asset Type */}
          <div className="request-field">
            <label>Select Asset Type</label>

            <div className="asset-options-grid">
              {assetOptions.map((item, index) => (
                <button
                  className={`asset-option ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Priority */}
          <div className="request-field">
            <label>Priority</label>

            <select>
              <option>Medium</option>
              <option>Low</option>
              <option>High</option>
            </select>
          </div>

          {/* Date */}
          <div className="request-field">
            <label>Required Date</label>

            <input type="date" />
          </div>

          {/* Reason */}
          <div className="request-field">
            <label>Reason</label>

            <input type="text" placeholder="Enter reason for request" />
          </div>

          {/* Notes */}
          <div className="request-field">
            <label>Additional Notes</label>

            <textarea placeholder="Write additional details..." />
          </div>

          {/* Upload */}
          <div className="request-field">
            <label>Attachment</label>

            <div className="request-upload-box">Upload supporting document</div>
          </div>

          {/* Footer */}
          <div className="request-form-footer">
            <button className="request-cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button className="request-submit-btn">Submit Request</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RequestAssetModal;
