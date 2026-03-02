import "../../../styles/form.css"

function APIDetails({
  register,
  errors,
  errorStyle
}){
    return(
        <>
        
            <div className="form-grid">
              <label>
                <span className="section-part-heading">Username <span className="star">*</span></span>
                <input {...register("username")} placeholder="9876543210" />
                {errors.username && <span style={errorStyle}>{errors.username.message}</span>}
              </label>
              <label>
                <span className="section-part-heading">Password <span className="star">*</span></span>
                <input {...register("password")} placeholder="9876543210" />
                {errors.password && <span style={errorStyle}>{errors.password.message}</span>}
              </label>
              <label>
                <span className="section-part-heading">Secret Key <span className="star">*</span></span>
                <input {...register("secretKey")} placeholder="9876543210" />
                {errors.secretKey && <span style={errorStyle}>{errors.secretKey.message}</span>}
              </label>
            </div>
        </>
    )
}

export default APIDetails;