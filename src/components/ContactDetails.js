import "../styles/Header.css"

function ContactDetails({formData,handleChange}){
    return(
        <>
        
        <div className="form-grid">
              <label>
                <span className="section-part-heading">Mobile Number <span className="star">*</span></span>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                //   required
                />
              </label>
              <label>
                <span className="section-part-heading">Registration Date <span className="star">*</span></span>
                <input
                  type="date"
                  name="registrationDate"
                  value={formData.registrationDate}
                  onChange={handleChange}
                //   required
                />
              </label>
            </div>
        </>
    )
}

export default ContactDetails;