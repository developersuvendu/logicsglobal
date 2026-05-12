import {
  ShieldAlert,
  Wrench,
  Clock3,
} from "lucide-react";

import "../styles/widgets.css";

const alerts = [
  {
    title: "3 Assets warranty expiring",
    subtitle: "Next 15 days",
    icon: <ShieldAlert size={18} />,
    color: "green",
  },
  {
    title: "2 Assets under repair",
    subtitle: "Check status",
    icon: <Wrench size={18} />,
    color: "orange",
  },
  {
    title: "5 Pending requests",
    subtitle: "Needs approval",
    icon: <Clock3 size={18} />,
    color: "red",
  },
];

const AlertsPanel = () => {
  return (
    <div className="widget-card">
      <h3>Upcoming Alerts</h3>

      <div className="alerts-list">
        {alerts.map((alert, index) => (
          <div className="alert-item" key={index}>
            <div className={`alert-icon ${alert.color}`}>
              {alert.icon}
            </div>

            <div>
              <h4>{alert.title}</h4>
              <p>{alert.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;