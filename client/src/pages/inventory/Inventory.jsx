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
import { useEffect } from "react";
import { getInventoryApi } from "../../api/inventoryApi";
import { getUser } from "../../utils/storage";

import { Search } from "lucide-react";

import "./styles/widgets.css";

const Inventory = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  const [openRequestModal, setOpenRequestModal] = useState(false);

  const [selectedAsset, setSelectedAsset] = useState(null);

  const [activeTab, setActiveTab] = useState("All Assets");

  const role = "employee";

  const [assets, setAssets] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchInventory = async () => {
    try {
      setLoading(true);

      const user = getUser();

      const response = await getInventoryApi(user._id);

      const formattedAssets = response.data.map((item, index) => ({
        id: item._id,

        assetId: `AST-2024-${String(index + 1).padStart(3, "0")}`,

        name: item.assetName || "",

        model: item.model || "",

        brand: item.brand || "",

        category: item.category || "",

        status:
          item.status === "assigned"
            ? "Assigned"
            : item.status === "requested"
              ? "Requested"
              : item.status,

        assignedDate: new Date(item.assignedDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),

        employee: user?.name || "Employee",

        role: user?.role || "Employee",
      }));

      setAssets(formattedAssets);
    } catch (error) {
      console.log("Inventory Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchInventory();
  }, []);

  if (role === "employee") {
    return (
      <div className="inventory-page">
        <div className="inventory-header employee-header">
          <div>
            <h1>Inventory</h1>

            <p>View and request company assets.</p>
          </div>
        </div>

        <div className="employee-toolbar">
          <div className="employee-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search assets by name, category or employee..."
            />
          </div>

          <button
            className="primary-btn"
            onClick={() => setOpenRequestModal(true)}
          >
            Request Asset
          </button>
        </div>

        <div className="employee-table-section">
          <AssetTable
            assets={assets}
            activeTab="All Assets"
            isEmployeeView={true}
          />
        </div>

        <RequestAssetModal
          isOpen={openRequestModal}
          onClose={() => setOpenRequestModal(false)}
          refreshInventory={fetchInventory}
        />

        <AssetDetailsDrawer
          asset={selectedAsset}
          isOpen={!!selectedAsset}
          onClose={() => setSelectedAsset(null)}
        />
      </div>
    );
  }

  /* =========================================
      ADMIN UI
  ========================================= */

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

      <StatsCards />

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
        refreshInventory={fetchInventory}
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
