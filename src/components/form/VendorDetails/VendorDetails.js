import "../../../styles/form.css"

function VendorDetails({register,errors,errorStyle,inputErrorBorder}){
    return(
        <>
        
            <div className="form-grid">
            <label>
              <span className="field-label">Vendor Name <span className="star">*</span></span>
              <input {...register("vendorName")} style={errors.vendorName ? inputErrorBorder : {}} />
              {errors.vendorName && <span style={errorStyle}>{errors.vendorName.message}</span>}
            </label>
            <label>
              <span className="field-label">IP Address <span className="star">*</span></span>
              <input {...register("ipAddress")} style={errors.ipAddress ? inputErrorBorder : {}} />
              {errors.ipAddress && <span style={errorStyle}>{errors.ipAddress.message}</span>}
            </label>
            <label>
              <span className="field-label">Port <span className="star">*</span></span>
              <input {...register("port")} style={errors.port ? inputErrorBorder : {}} />
              {errors.port && <span style={errorStyle}>{errors.port.message}</span>}
            </label>
            <label>
              <span className="field-label">Status <span className="star">*</span></span>
              <select {...register("status")} style={errors.status ? inputErrorBorder : {}}>
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {errors.status && <span style={errorStyle}>{errors.status.message}</span>}
            </label>
          </div>
        </>
    )
}

export default VendorDetails;