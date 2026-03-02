import "../../../styles/form.css"

function ContactDetails({register,errorStyle,errors}){
    return(
        <>
        
        <div className="form-grid">
            <label>
              <span className="field-label">Mobile Number <span className="star">*</span></span>
              <input {...register("mobileNumber")} placeholder="9876543210" />
              {errors.mobileNumber && <span style={errorStyle}>{errors.mobileNumber.message}</span>}
            </label>
            <label>
              <span className="field-label">Registration Date <span className="star">*</span></span>
              <input type="date" {...register("registrationDate")} />
              {errors.registrationDate && <span style={errorStyle}>{errors.registrationDate.message}</span>}
            </label>
          </div>
        </>
    )
}

export default ContactDetails;