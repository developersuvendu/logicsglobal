import { ShieldCheck } from "lucide-react";

import Drawer from "../../../components/common/Drawer";

import "../styles/assetDetailsDrawer.css";

const getStatusClass = (status) => {
  switch (status) {
    case "Assigned":
      return "assigned";

    case "Available":
      return "available";

    case "In Repair":
      return "repair";

    default:
      return "";
  }
};

const AssetDetailsDrawer = ({
  asset,
  isOpen,
  onClose,
}) => {
  if (!asset) return null;

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Asset Details"
      width="520px"
    >
      {/* TOP CARD */}
      <div className="asset-details-top">
        <img
          src={asset.image}
          alt={asset.name}
        />

        <div className="asset-top-info">
          <h2>{asset.name}</h2>

          <p>{asset.id}</p>

          <span
            className={`asset-status ${getStatusClass(
              asset.status
            )}`}
          >
            {asset.status}
          </span>
        </div>
      </div>

      {/* ASSET INFO */}
      <div className="details-section">
        <h4>Asset Information</h4>

        <div className="details-grid">
          <div className="detail-item">
            <span>Category</span>

            <strong>{asset.category}</strong>
          </div>

          <div className="detail-item">
            <span>Brand</span>

            <strong>{asset.brand}</strong>
          </div>

          <div className="detail-item full-width">
            <span>Model</span>

            <strong>{asset.model}</strong>
          </div>
        </div>
      </div>

      {/* ASSIGNMENT */}
      <div className="details-section">
        <h4>Assigned Employee</h4>

        <div className="assignment-card">
          <div className="assignment-avatar">
            {asset.employee?.charAt(0)}
          </div>

          <div>
            <h5>{asset.employee}</h5>

            <p>{asset.role}</p>
          </div>
        </div>
      </div>

      {/* WARRANTY */}
      <div className="details-section">
        <h4>Warranty</h4>

        <div className="service-item">
          <ShieldCheck size={20} />

          <div>
            <h5>Warranty Expiry</h5>

            <p>{asset.warranty}</p>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AssetDetailsDrawer;