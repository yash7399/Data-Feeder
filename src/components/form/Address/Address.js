import { useState } from "react";
import "../../../styles/form.css"

function Address({formData,handleChange}){
    const [addressOpen, setAddressOpen] = useState(false);
    return(
        <>
            <div className="address-section collapsible-section">
              <div
                className="address-heading collapsible-trigger"
                onClick={() => setAddressOpen(!addressOpen)}
              >
                <span className={`caret ${addressOpen ? 'rotated' : ''}`}>▼</span>
                <span className="section-part-heading">Address</span>
              </div>
              <div className={`collapsible-content ${addressOpen ? 'open' : 'closed'}`}>
                <div className="form-grid">
                  {/* Full width Address Lines */}
                  <div className="address-line-fullwidth">
                    <label>
                      <span>Address Line 1</span>
                      <input
                        type="text"
                        name="address.addressLine1"
                        value={formData.address.addressLine1}
                        onChange={handleChange}
                        placeholder="Address Line 1"
                      />
                    </label>
                  </div>
                  <div className="address-line-fullwidth">
                    <label>
                      <span>Address Line 2</span>
                      <input
                        type="text"
                        name="address.addressLine2"
                        value={formData.address.addressLine2}
                        onChange={handleChange}
                        placeholder="Address Line 2"
                      />
                    </label>
                  </div>
                  {/* Rest of fields in grid */}
                  <div className="address-grid">
                    <label>
                      <span>City</span>
                      <input
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        placeholder="City"
                      />
                    </label>
                    <label>
                      <span>State</span>
                      <input
                        type="text"
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleChange}
                        placeholder="State"
                      />

                    </label>
                    <label>
                      <span>Zip</span>
                      <input
                        type="text"
                        name="address.zip"
                        value={formData.address.zip}
                        onChange={handleChange}
                        placeholder="Zip Code"
                      />
                    </label>
                    <label>
                      <span>Country</span>
                      <input
                        type="text"
                        name="address.country"
                        value={formData.address.country}
                        onChange={handleChange}
                        placeholder="Country"
                      />

                    </label>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Address