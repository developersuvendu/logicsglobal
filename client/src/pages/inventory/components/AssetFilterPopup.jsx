import { X, ChevronDown } from "lucide-react";

import "../styles/assetFilterPopup.css";

const AssetFilterPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="assets-filter-popup">
      {/* Header */}
      <div className="filter-popup-header">
        <h3>Filters</h3>

        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      {/* Body */}
      <div className="filter-popup-body">

        {/* Category */}
        <div className="filter-group">
          <label>Category</label>

          <button className="filter-select">
            All Categories
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Status */}
        <div className="filter-group">
          <label>Status</label>

          <button className="filter-select">
            All Status
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Brand */}
        <div className="filter-group">
          <label>Brand</label>

          <input
            type="text"
            placeholder="Search brand"
          />
        </div>

        {/* Employee */}
        <div className="filter-group">
          <label>Employee</label>

          <input
            type="text"
            placeholder="Search employee"
          />
        </div>

        {/* Purchase Date */}
        <div className="filter-group full-width">
          <label>Purchase Date</label>

          <input type="date" />
        </div>
      </div>

      {/* Footer */}
      <div className="filter-popup-footer">
        <button className="reset-btn">
          Reset
        </button>

        <button className="apply-btn">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default AssetFilterPopup;