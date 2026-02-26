import { useState } from "react";
import "../../../styles/form.css"

function BillingAddress({formData,handleChange,handleBillingSameChange}){
    
  const [billingOpen, setBillingOpen] = useState(false);
    return(
        <>
             <div className="address-section collapsible-section">
              <div
                className="billing-header collapsible-trigger"
                onClick={() => setBillingOpen(!billingOpen)}
              >
                <span className={`caret ${billingOpen ? 'rotated' : ''}`}>▼</span>
                <span className="section-part-heading">Billing Address</span>
              </div>
              <div className={`collapsible-content ${billingOpen ? 'open' : 'closed'}`}>
                <label className="same-address-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.billingSameAsAddress}
                    onChange={handleBillingSameChange}
                  />
                  <span>Same as Address</span>
                </label>
                {!formData.billingSameAsAddress && (
                  <div className="form-grid">
                    <div className="address-line-fullwidth">
                      <label>
                        <span>Address Line 1</span>
                        <input
                          type="text"
                          name="billingAddress.addressLine1"
                          value={formData.billingAddress.addressLine1}
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
                          name="billingAddress.addressLine2"
                          value={formData.billingAddress.addressLine2}
                          onChange={handleChange}
                          placeholder="Address Line 2"
                        />
                      </label>
                    </div>
                    <div className="address-grid">
                      <label>
                        <span>City</span>
                        <input
                          type="text"
                          name="billingAddress.city"
                          value={formData.billingAddress.city}
                          onChange={handleChange}
                          placeholder="City"
                        />
                      </label>
                      <label>
                        <span>State</span>
                        <input
                        type="text"
                          name="billingAddress.state"
                          value={formData.billingAddress.state}
                          onChange={handleChange}
                          placeholder="State"
                        />

                      </label>
                      <label>
                        <span>Zip</span>
                        <input
                          type="text"
                          name="billingAddress.zip"
                          value={formData.billingAddress.zip}
                          onChange={handleChange}
                          placeholder="Zip Code"
                        />
                      </label>
                      <label>
                        <span>Country</span>
                        <input
                        type="text"
                          name="billingAddress.country"
                          value={formData.billingAddress.country}
                          onChange={handleChange}
                          placeholder="Country"

                        />

                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </>
    )
}

export default BillingAddress;