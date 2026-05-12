import {
  Package,
  Laptop,
  CheckCircle,
  Clock3,
} from "lucide-react";

import "../styles/statsCards.css";

const statsData = [
  {
    id: 1,
    title: "Total Assets",
    value: 245,
    change: "+12 from last month",
    icon: <Package size={28} />,
    color: "blue",
  },
  {
    id: 2,
    title: "Assigned",
    value: 180,
    change: "+8 from last month",
    icon: <Laptop size={28} />,
    color: "green",
  },
  {
    id: 3,
    title: "Available",
    value: 42,
    change: "-3 from last month",
    icon: <CheckCircle size={28} />,
    color: "orange",
  },
  {
    id: 4,
    title: "Pending Requests",
    value: 12,
    change: "+4 from last month",
    icon: <Clock3 size={28} />,
    color: "red",
  },
];

const StatsCards = () => {
  return (
    <div className="stats-grid">
      {statsData.map((item) => (
        <div className="stats-card" key={item.id}>
          <div className={`stats-icon ${item.color}`}>
            {item.icon}
          </div>

          <div className="stats-info">
            <h4>{item.title}</h4>
            <h2>{item.value}</h2>
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;