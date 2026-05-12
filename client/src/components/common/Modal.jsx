import React, { useEffect } from "react";
import "../../styles/Common/modal.css";

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  footer,
  hideHeader = false,
  hideFooter = false,
  customClass = "",
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // 🔥 prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-container ${customClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        {!hideHeader && (
          <div className="modal-header">
            <h3>{title}</h3>

            <button className="modal-close" onClick={onClose}>
              ✕
            </button>
          </div>
        )}

        <div className="modal-body">{children}</div>


        {!hideFooter && footer && (
          <div className="modal-footer">{footer}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
