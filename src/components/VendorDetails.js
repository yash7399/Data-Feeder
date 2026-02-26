import "../styles/Header.css"

function VendorDetails({formData,handleChange}){
    return(
        <>
        
            <div className="form-grid">
              <label>
                <span className="section-part-heading">Vendor Name <span className="star">*</span></span>
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleChange}
                //   required
                />
              </label>
              <label>
                <span className="section-part-heading">IP Address <span className="star">*</span></span>
                <input
                  type="text"
                  name="ipAddress"
                  value={formData.ipAddress}
                  onChange={handleChange}
                //   required
                />
              </label>
              <label>
                <span className="section-part-heading">Port <span className="star">*</span></span>
                <input
                  type="text"
                  name="port"
                  value={formData.port}
                  onChange={handleChange}
                //   required
                />
              </label>
              <label>
                <span className="section-part-heading">Status <span className="star">*</span></span>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Active</option>
                  <option>Deactive</option>
                </select>
              </label>
            </div>
        </>
    )
}

export default VendorDetails;