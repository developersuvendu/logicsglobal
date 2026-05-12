import { Laptop, Calendar, User, ShieldCheck, Wrench } from "lucide-react";

import Drawer from "../../../components/common/Drawer";

import "../styles/assetDetailsDrawer.css";

const AssetDetailsDrawer = ({ asset, isOpen, onClose }) => {
    if (!asset) return null;
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Asset Details"
      width="560px"
    >
      {/* Top Card */}
      <div className="asset-details-top">
        <img
          src={asset.image}
          alt={asset.name}
        />

        <div className="asset-top-info">
          <h2>{asset.name}</h2>

          <p>{asset.id}</p>

          <span className="asset-status {getStatusClass(asset.status)}">
            {asset.status}
          </span>
        </div>
      </div>

      {/* Section */}
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

          <div className="detail-item">
            <span>Model</span>
            <strong>{asset.model}</strong>
          </div>

          <div className="detail-item">
            <span>Purchase Date</span>
            <strong>{asset.purchaseDate}</strong>
          </div>
        </div>
      </div>

      {/* Assignment */}
      <div className="details-section">
        <h4>Assignment Information</h4>

        <div className="assignment-card">
          <div className="assignment-avatar">S</div>

          <div>
            <h5>{asset.employee}</h5>
            <p>{asset.role}</p>
          </div>
        </div>
      </div>

      {/* Warranty */}
      <div className="details-section">
        <h4>Warranty & Service</h4>

        <div className="service-list">
          <div className="service-item">
            <ShieldCheck size={18} />

            <div>
              <h5>Warranty Expiry</h5>
              <p>{asset.warranty}</p>
            </div>
          </div>

          <div className="service-item">
            <Wrench size={18} />

            <div>
              <h5>Last Service</h5>
              <p>{asset.lastService}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="details-section">
        <h4>Recent Activity</h4>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <h5>Assigned to employee</h5>
              <p>12 May 2024</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <h5>Asset serviced</h5>
              <p>18 June 2025</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <h5>Warranty updated</h5>
              <p>20 June 2025</p>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AssetDetailsDrawer;
