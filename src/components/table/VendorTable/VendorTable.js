import React, { useState } from 'react';
import './VendorTable.css';
import DeleteConfirm from './DeleteConfirm';
import FormRealTime from '../../form/FormRealTime/FormRealTime';
import { useNavigate } from 'react-router-dom';

const VendorTable = () => {
  const vendors = [
    { id: 101, name: "Alpha Tech", ip: "192.168.1.1", port: "8080", online: true },
    { id: 102, name: "Beta Systems", ip: "172.16.254.1", port: "443", online: false },
    { id: 103, name: "Gamma Core", ip: "10.0.0.15", port: "3000", online: true },
    { id: 104, name: "Delta Data", ip: "192.168.1.50", port: "5000", online: false },
  ];

  // State for DeleteConfirm
  const [showConfirm, setShowConfirm] = useState(false);
  const [vendorToDelete, setVendorToDelete] = useState(null);

  const navigate=useNavigate();

  const handleEdit = (id) => {
    navigate(`/real-time/edit/${id}`)
  };

  // Open delete confirmation for specific vendor
  const handleDeleteClick = (vendor) => {
    setVendorToDelete(vendor);
    setShowConfirm(true);
  };

  // Confirm deletion
  const handleConfirm = () => {
    console.log('Deleting vendor:', vendorToDelete?.name);
    // TODO: Add your delete API call here
    // Remove from vendors list (demo)
    // vendors = vendors.filter(v => v.id !== vendorToDelete.id);
    setShowConfirm(false);
    setVendorToDelete(null);
  };

  // Cancel deletion
  const handleCancel = () => {
    setShowConfirm(false);
    setVendorToDelete(null);
  };

  return (
    <>
      <div className="table-container">
        <div className="table-header">
          <h2>Vendor Management List</h2>
        </div>
        <table className="modern-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Vendor Name</th>
              <th>IP Address</th>
              <th>Port</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor.id}>
                <td>{index + 1}</td>
                <td className="font-bold">{vendor.name}</td>
                <td><code>{vendor.ip}</code></td>
                <td>{vendor.port}</td>
                <td className="text-center">
                  <div className="action-buttons">
                    <button 
                      className="edit-btn" 
                      onClick={() => handleEdit(vendor.id)}
                    >
                      Edit
                    </button>
                    <button 
                      className="delete-btn" 
                      onClick={() => handleDeleteClick(vendor)}  // Pass vendor here
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal - Always centered */}
      <DeleteConfirm
        isOpen={showConfirm}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        vendorName={vendorToDelete?.name || ''}
      />
    </>
  );
};

export default VendorTable;
