import Modal from "../../../components/common/Modal";

import "../styles/addAssetModal.css";

const AddAssetModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Asset"
      footer={
        <>
          <button className="modal-btn secondary" onClick={onClose}>
            Cancel
          </button>

          <button className="modal-btn primary">Save Asset</button>
        </>
      }
    >
      <div className="asset-form-grid">
        {/* Left */}
        <div className="form-group">
          <label>Asset Name</label>
          <input type="text" placeholder="Enter asset name" />
        </div>

        <div className="form-group">
          <label>Asset ID</label>
          <input type="text" placeholder="AST-2024-001" />
        </div>

        <div className="form-group">
          <label>Category</label>

          <select>
            <option>Select Category</option>
            <option>Laptop</option>
            <option>Mobile</option>
            <option>Accessories</option>
          </select>
        </div>

        <div className="form-group">
          <label>Brand</label>

          <input type="text" placeholder="Apple / Dell / HP" />
        </div>

        {/* Right */}
        <div className="form-group">
          <label>Assigned Employee</label>

          <input type="text" placeholder="Select employee" />
        </div>

        <div className="form-group">
          <label>Purchase Date</label>

          <input type="date" />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select>
            <option>Available</option>
            <option>Assigned</option>
            <option>In Repair</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload Image</label>

          <div className="upload-box">
            <span>Click to upload asset image</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddAssetModal;
