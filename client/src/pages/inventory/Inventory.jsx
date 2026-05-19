import { useState } from "react";
import "./styles/inventory.css";
import StatsCards from "./components/StatsCards";
import AssetTabs from "./components/AssetTabs";
import AssetTable from "./components/AssetTable";
import QuickActions from "./components/QuickActions";
import AlertsPanel from "./components/AlertsPanel";
import RecentRequests from "./components/RecentRequests";
import AddAssetModal from "./components/AddAssetModal";
import RequestAssetModal from "./components/RequestAssetModal";
import AssetDetailsDrawer from "./components/AssetDetailsDrawer";

import "./styles/widgets.css";

const Inventory = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [activeTab, setActiveTab] = useState("All Assets");
  return (
    <div className="inventory-page">
      {/* Header */}
      <div className="inventory-header">
        <div>
          <h1>Inventory Management</h1>
          <p>Manage and track all company assets in one place.</p>
        </div>

        <div className="inventory-header-actions">
          <button
            className="secondary-btn"
            onClick={() => setOpenRequestModal(true)}
          >
            Request Asset
          </button>

          <button className="primary-btn" onClick={() => setOpenAddModal(true)}>
            Add Asset
          </button>
        </div>
      </div>

      <div className="inventory-content">
        <AssetTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="inventory-main-grid">
          <div className="inventory-main-left-section">
            <AssetTable
              activeTab={activeTab}
              onView={(asset) => setSelectedAsset(asset)}
            />
          </div>
          {/* <div className="inventory-main-right-section">
            <QuickActions />
            <AlertsPanel />
          </div> */}
        </div>
        <RecentRequests />
      </div>
      <AddAssetModal
        isOpen={openAddModal}
        onClose={() => setOpenAddModal(false)}
      />
      <RequestAssetModal
        isOpen={openRequestModal}
        onClose={() => setOpenRequestModal(false)}
      />
      <AssetDetailsDrawer
        asset={selectedAsset}
        isOpen={!!selectedAsset}
        onClose={() => setSelectedAsset(null)}
      />
    </div>
  );
};

export default Inventory;
