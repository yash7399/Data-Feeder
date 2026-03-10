import "../../../styles/form.css"

function VendorDetails({
  register, errors, errorStyle, inputErrorBorder,
  vendorName = "",
  ipAddress = "",
  port = "",
  status = "Select",

}) {
  return (
    <>

      <div className="form-grid">
        <label>
          <span className="field-label">Vendor Name <span className="star">*</span></span>
          <input {...register("vendorName")} style={errors.vendorName ? inputErrorBorder : {}}
            placeholder={vendorName} />
          {errors.vendorName && <span style={errorStyle}>{errors.vendorName.message}</span>}
        </label>
        <label>
          <span className="field-label">IP Address <span className="star">*</span></span>
          <input {...register("ipAddress")} style={errors.ipAddress ? inputErrorBorder : {}} placeholder={ipAddress} />
          {errors.ipAddress && <span style={errorStyle}>{errors.ipAddress.message}</span>}
        </label>
        <label>
          <span className="field-label">Port <span className="star">*</span></span>
          <input {...register("port")} style={errors.port ? inputErrorBorder : {}} placeholder={port} />
          {errors.port && <span style={errorStyle}>{errors.port.message}</span>}
        </label>
        <label>
          <span className="field-label">Status <span className="star">*</span></span>
          <select {...register("status")} style={errors.status ? inputErrorBorder : {}}>
            <option value="" disabled selected hidden>
              { status}
            </option>
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