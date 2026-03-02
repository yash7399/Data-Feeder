import { useState } from "react";
import "../../../styles/form.css"

function BillingAddress({
                register,
                billingSameAsAddress,
                errors,
                errorStyle
}){
    
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
                    {...register("billingSameAsAddress")}
                  />
                  <span>Same as Address</span>
                </label>
                {!billingSameAsAddress && (
                  <div className="form-grid">
                    <div className="address-line-fullwidth">
                      <label>
                        <span>Address Line 1</span>
                        <input {...register("billingAddress.addressLine1")} placeholder="Address Line 1"/>
                      </label>
                    </div>
                    <div className="address-line-fullwidth">
                      <label>
                        <span>Address Line 2</span>
                        <input {...register("billingAddress.addressLine2")} placeholder="Address Line 2"/>
                      </label>
                    </div>
                    <div className="address-grid">
                      <label>
                        <span>City</span>
                        <input {...register("billingAddress.city")} placeholder="City" />
                      </label>
                      <label>
                        <span>State</span>
                        <input {...register("billingAddress.state")} placeholder="State" />

                      </label>
                      <label>
                        <span>Zip</span>
                        <input {...register("billingAddress.zip")} placeholder="Zip Code" />
                      </label>
                      <label>
                        <span>Country</span>
                        <input {...register("billingAddress.country")} placeholder="Country" />

                      </label>
                    </div>
{errors.billingAddress?.addressLine1 && <span style={errorStyle}>{errors.billingAddress.addressLine1.message}</span>}
                  </div>
                )}
              </div>
            </div>
        </>
    )
}

export default BillingAddress;