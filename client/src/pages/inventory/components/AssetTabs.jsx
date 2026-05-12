import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import AssetFilterPopup from "./AssetFilterPopup";
import "../styles/assetTabs.css";
import { assetTabs } from "../inventoryData";

// const tabs = [
//   "All Assets",
//   "Assigned Assets",
//   "Available Assets",
//   "In Repair",
//   "Lost Assets",
// ];
const AssetTabs = ({ activeTab, setActiveTab }) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="asset-tabs-wrapper">
      {/* Tabs */}
      <div className="asset-tabs">
        {assetTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`asset-tab ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="asset-filters">
        {/* Search */}
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search assets by name, id or employee..."
          />
        </div>

        <div className="filter-popup-wrapper">
          <button
            className="filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          <AssetFilterPopup
            isOpen={showFilters}
            onClose={() => setShowFilters(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default AssetTabs;
