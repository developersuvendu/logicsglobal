import { Eye, MoreVertical } from "lucide-react";

import "../styles/assetTable.css";
import { inventoryAssets } from "../inventoryData";

// const assets = [
//   {
//     id: "AST-2024-001",
//     name: "MacBook Pro M2",
//     employee: "Suvendu Mohanta",
//     role: "UI/UX Developer",
//     category: "Laptop",
//     assignedDate: "12 May 2024",
//     status: "Assigned",
//     image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=100",
//   },
//   {
//     id: "AST-2024-002",
//     name: "Dell UltraSharp 24",
//     employee: "Rakesh Rout",
//     role: "Frontend Developer",
//     category: "Monitor",
//     assignedDate: "10 May 2024",
//     status: "Assigned",
//     image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100",
//   },
//   {
//     id: "AST-2024-003",
//     name: "iPhone 15 Pro",
//     employee: "Pooja Nayak",
//     role: "HR Executive",
//     category: "Mobile",
//     assignedDate: "18 May 2024",
//     status: "Available",
//     image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100",
//   },
//   {
//     id: "AST-2024-004",
//     name: "Sony WH-1000XM5",
//     employee: "Amit Kumar",
//     role: "Project Manager",
//     category: "Accessories",
//     assignedDate: "05 May 2024",
//     status: "In Repair",
//     image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=100",
//   },
// ];

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

const AssetTable = ({ activeTab, onView }) => {
  const filteredAssets =
    activeTab === "All Assets"
      ? inventoryAssets
      : inventoryAssets.filter((asset) => {
          switch (activeTab) {
            case "Assigned Assets":
              return asset.status === "Assigned";

            case "Available Assets":
              return asset.status === "Available";

            case "In Repair":
              return asset.status === "In Repair";

            case "Lost Assets":
              return asset.status === "Lost";

            default:
              return true;
          }
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
              <th>Employee</th>
              <th>Category</th>
              <th>Assigned Date</th>
              {activeTab === "All Assets" && <th>Status</th>}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset.id}>
                {/* Asset */}
                <td>
                  <div className="asset-info">
                    <img src={asset.image} alt={asset.name} />

                    <div>
                      <h4>{asset.name}</h4>
                      <p>{asset.id}</p>
                    </div>
                  </div>
                </td>

                {/* Employee */}
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
                <td>
                  <div className="table-actions">
                    <button onClick={() => onView(asset)}>
                      <Eye size={18} />
                    </button>

                    <button>
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetTable;
