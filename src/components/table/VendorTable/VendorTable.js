import React from 'react';
import './VendorTable.css';

const VendorTable = () => {
  const vendors = [
    { id: 101, name: "Alpha Tech", ip: "192.168.1.1", port: "8080", online: true },
    { id: 102, name: "Beta Systems", ip: "172.16.254.1", port: "443", online: false },
    { id: 103, name: "Gamma Core", ip: "10.0.0.15", port: "3000",  online: true },
    { id: 104, name: "Delta Data", ip: "192.168.1.50", port: "5000", online: false },
  ];

  const handleEdit = (vendor) => {
    alert(`Edit mode for: ${vendor.name}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      console.log("Deleting vendor with ID:", id);
      // Logic to filter the array or call an API would go here
    }
  };

  return (
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
            <th>Connection</th>
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
              <td>
                <div className="online-indicator">
                  <span className={`dot ${vendor.online ? 'online' : 'offline'}`}></span>
                  {vendor.online ? 'Online' : 'Offline'}
                </div>
              </td>
              <td className="text-center">
                <div className="action-buttons">
                  <button 
                    className="edit-btn" 
                    onClick={() => handleEdit(vendor)}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(vendor.id)}
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
  );
};

export default VendorTable;