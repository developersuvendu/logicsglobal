import { useState } from "react";

import { X } from "lucide-react";

import Modal from "../../../components/common/Modal";
import Dropdown from "../../../components/common/Dropdown";

import "../styles/requestAssetModal.css";

import { requestAssetApi } from "../../../api/inventoryApi";

import { getUser } from "../../../utils/storage";

const categoryOptions = [
  { label: "Laptop", value: "laptop" },
  { label: "Monitor", value: "monitor" },
  { label: "Keyboard", value: "keyboard" },
  { label: "Mouse", value: "mouse" },
  { label: "Headset", value: "headset" },
  { label: "Webcam", value: "webcam" },
  { label: "Mouse Pad", value: "mousepad" },
  { label: "Laptop Stand", value: "laptopstand" },
  { label: "Docking Station", value: "dock" },
  { label: "Mobile", value: "mobile" },
  { label: "Tablet", value: "tablet" },
  { label: "Charger", value: "charger" },
];

// const priorityOptions = [
//   { label: "Low", value: "low" },
//   { label: "Medium", value: "medium" },
//   { label: "High", value: "high" },
// ];

const RequestAssetModal = ({ isOpen, onClose, refreshInventory }) => {
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  // const [priority, setPriority] =
  //   useState("medium");
  const handleSubmitRequest = async () => {
    try {
      if (!category) {
        alert("Please select asset category");

        return;
      }

      setLoading(true);

      const user = getUser();

      await requestAssetApi({
        userId: user._id,

        assetName: category,

        category,
      });

      await refreshInventory();

      setCategory("");

      setNotes("");

      onClose();
    } catch (error) {
      console.log("Request Asset Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      hideHeader={true}
      hideFooter={true}
      customClass="request-modal-container"
    >
      <div className="request-modal">
        {/* HEADER */}
        <div className="request-header">
          <div>
            <h2>Request Asset</h2>

            <p>Submit a request for company inventory items.</p>
          </div>

          <button className="request-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="request-body">
          {/* CATEGORY */}
          <div className="request-field">
            <Dropdown
              label="Asset Category"
              options={categoryOptions}
              value={category}
              onChange={setCategory}
              placeholder="Select asset category"
              searchable={true}
            />
          </div>

          {/* PRIORITY */}
          {/* <div className="request-field">
            <Dropdown
              label="Priority"
              options={priorityOptions}
              value={priority}
              onChange={setPriority}
              placeholder="Select priority"
            />
          </div> */}

          {/* DATE */}
          {/* <div className="request-field">
            <label>
              Required Date
            </label>

            <input type="date" />
          </div> */}

          {/* REASON */}
          {/* <div className="request-field">
            <label>Reason</label>

            <input
              type="text"
              placeholder="Enter reason for request"
            />
          </div> */}

          {/* NOTES */}
          <div className="request-field full-width">
            <label>Additional Notes</label>

            <textarea
              placeholder="Write additional details..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="request-footer">
          <button className="request-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="request-submit-btn"
            onClick={handleSubmitRequest}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RequestAssetModal;
