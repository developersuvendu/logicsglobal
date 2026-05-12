import {
  Eye,
  MoreVertical,
} from "lucide-react";

import "../styles/recentRequests.css";

const requests = [
  {
    id: "REQ-2024-001",
    asset: "Monitor 27 Inch",
    employee: "Rakesh Rout",
    role: "Frontend Developer",
    requestedOn: "20 May 2024",
    requiredDate: "25 May 2024",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100",
  },
  {
    id: "REQ-2024-002",
    asset: "MacBook Pro",
    employee: "Ankita Sharma",
    role: "UI Designer",
    requestedOn: "18 May 2024",
    requiredDate: "28 May 2024",
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Pending":
      return "pending";

    case "Approved":
      return "approved";

    default:
      return "";
  }
};

const RecentRequests = () => {
  return (
    <div className="requests-card">
      <div className="requests-header">
        <h3>Recent Asset Requests</h3>

        <button>View All Requests</button>
      </div>

      <table className="requests-table">
        <thead>
          <tr>
            <th>Request</th>
            <th>Employee</th>
            <th>Requested On</th>
            <th>Required Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              {/* Request */}
              <td>
                <div className="request-asset">
                  <img
                    src={request.image}
                    alt={request.asset}
                  />

                  <div>
                    <h4>{request.asset}</h4>
                    <p>{request.id}</p>
                  </div>
                </div>
              </td>

              {/* Employee */}
              <td>
                <div className="request-employee">
                  <div className="request-avatar">
                    {request.employee.charAt(0)}
                  </div>

                  <div>
                    <h4>{request.employee}</h4>
                    <p>{request.role}</p>
                  </div>
                </div>
              </td>

              <td>{request.requestedOn}</td>

              <td>{request.requiredDate}</td>

              <td>
                <span
                  className={`request-status ${getStatusClass(
                    request.status
                  )}`}
                >
                  {request.status}
                </span>
              </td>

              <td>
                <div className="request-actions">
                  <button>
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
  );
};

export default RecentRequests;