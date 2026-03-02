import { useState } from "react";
import "../../../styles/form.css"

function Address({
  register
}){
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
                      <input {...register("address.addressLine1")} placeholder="Address Line 1" />
                    </label>
                  </div>
                  <div className="address-line-fullwidth">
                    <label>
                      <span>Address Line 2</span>
                      <input {...register("address.addressLine2")} placeholder="Address Line 2" />
                    </label>
                  </div>
                  {/* Rest of fields in grid */}
                  <div className="address-grid">
                    <label>
                      <span>City</span>
                      <input {...register("address.city")} placeholder="City" />
                    </label>
                    <label>
                      <span>State</span>
                      <input {...register("address.state")} placeholder="State" />

                    </label>
                    <label>
                      <span>Zip</span>
                      <input {...register("address.zip")} placeholder="Zip Code" />
                    </label>
                    <label>
                      <span>Country</span>
                      <input {...register("address.country")} placeholder="Country" />

                    </label>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Address