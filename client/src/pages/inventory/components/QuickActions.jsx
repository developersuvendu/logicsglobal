import {
  Plus,
  Laptop,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

import "../styles/widgets.css";

const actions = [
  {
    title: "Add New Asset",
    icon: <Plus size={18} />,
  },
  {
    title: "Assign Asset",
    icon: <Laptop size={18} />,
  },
  {
    title: "Request Asset",
    icon: <ClipboardList size={18} />,
  },
];

const QuickActions = () => {
  return (
    <div className="widget-card">
      <h3>Quick Actions</h3>

      <div className="quick-actions-list">
        {actions.map((action, index) => (
          <button
            className="quick-action-item"
            key={index}
          >
            <div className="quick-action-left">
              <div className="quick-action-icon">
                {action.icon}
              </div>

              <span>{action.title}</span>
            </div>

            <ArrowRight size={18} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;