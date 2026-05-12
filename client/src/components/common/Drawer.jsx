import { useEffect } from "react";

import "../../styles/Common/drawer.css";

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  width = "480px",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="drawer-overlay"
      onClick={onClose}
    >
      <div
        className="drawer-container"
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="drawer-header">
          <h3>{title}</h3>

          <button
            className="drawer-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="drawer-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;