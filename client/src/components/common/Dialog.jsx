import React from 'react'

const Dialog = ({ title, children, onClose, onConfirm }) => {
  return (
    <div className='dialog-overlay'>
      <div className="dialog">
        <div className="dialog-header">
          <h3>{title}</h3>
          <button className="dialog-close" onClick={onClose}>✕</button>
        </div>
        <div className="dialog-content">
          {children}
        </div>
        <div className="dialog-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export { Dialog };
