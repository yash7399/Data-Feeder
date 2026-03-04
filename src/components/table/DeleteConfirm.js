import React from 'react';
import './DeleteConfirm.css';

const DeleteConfirm = ({ isOpen, onConfirm, onCancel, vendorName }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-confirm-overlay" onClick={onCancel}>
      <div className="delete-confirm-card" onClick={(e) => e.stopPropagation()}>
        <div className="delete-confirm-header">
          <h3>Confirm Deletion</h3>
        </div>
        
        <div className="delete-confirm-body">
          <p>Are you sure you want to delete this vendor?</p>
          <div className="vendor-name">
            <strong>"{vendorName || 'Vendor Name'}"</strong>
          </div>
          <p className="warning-text">
            This action cannot be undone.
          </p>
        </div>

        <div className="delete-confirm-actions">
          <button 
            className="btn btn-cancel" 
            onClick={onCancel}
          >
            No, Cancel
          </button>
          <button 
            className="btn btn-confirm" 
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
