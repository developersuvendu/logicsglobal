import {
  Eye,
  MoreVertical,
  Laptop,
  Monitor,
  Smartphone,
  Headphones,
} from "lucide-react";

import "../styles/assetTable.css";

const getStatusClass = (status) => {
  switch (status) {
    case "Assigned":
      return "assigned";

    case "Available":
      return "available";

    case "In Repair":
      return "repair";
    case "Requested":
      return "requested";

    default:
      return "";
  }
};

const getAssetIcon = (category) => {
  switch (category) {
    case "Laptop":
      return <Laptop size={28} />;

    case "Monitor":
      return <Monitor size={28} />;

    case "Mobile":
      return <Smartphone size={28} />;

    case "Accessories":
      return <Headphones size={28} />;

    default:
      return <Laptop size={28} />;
  }
};

const AssetTable = ({
  assets = [],
  // onView,
  activeTab,
  isEmployeeView = false,
}) => {
  const filteredAssets =
    activeTab === "All Assets"
      ? assets
      : assets.filter((asset) => {
          if (activeTab === "Assigned Assets")
            return asset.status === "Assigned";

          if (activeTab === "Available Assets")
            return asset.status === "Available";

          if (activeTab === "In Repair") return asset.status === "In Repair";

          if (activeTab === "Lost Assets") return asset.status === "Lost";

          return true;
        });

  return (
    <div className="asset-table-card">
      <div className="table-header">
        <h3>{activeTab}</h3>
      </div>

      <div className="table-wrapper">
        <table className="asset-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Model</th>

              {!isEmployeeView && <th>Employee</th>}

              <th>Category</th>
              <th>Assigned Date</th>

              {activeTab === "All Assets" && <th>Status</th>}

              {/* <th>Actions</th> */}
            </tr>
          </thead>

          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset.id}>
                {/* Asset */}
                <td>
                  <div className="asset-info">
                    <div className="asset-icon-box">
                      {getAssetIcon(asset.category)}
                    </div>

                    <div>
                      <h4>{asset.name}</h4>
                      <p>{asset.assetId}</p>
                    </div>
                  </div>
                </td>
               <td>{asset.model || "-"}</td>
         
                {!isEmployeeView && (
                  <td>
                    <div className="employee-info">
                      <div className="employee-avatar">
                        {asset.employee.charAt(0)}
                      </div>

                      <div>
                        <h4>{asset.employee}</h4>
                        <p>{asset.role}</p>
                      </div>
                    </div>
                  </td>
                )}

                <td>{asset.category}</td>

                <td>{asset.assignedDate}</td>

                {/* Status */}
                {activeTab === "All Assets" && (
                  <td>
                    <span
                      className={`status-badge ${getStatusClass(asset.status)}`}
                    >
                      {asset.status}
                    </span>
                  </td>
                )}

                {/* Actions */}
                {/* <td>
                  <div className="table-actions">
                    <button
                      onClick={() => onView(asset)}
                    >
                      <Eye size={18} />
                    </button>

                    {!isEmployeeView && (
                      <button>
                        <MoreVertical size={18} />
                      </button>
                    )}
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetTable;
