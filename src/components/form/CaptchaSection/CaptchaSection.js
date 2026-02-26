import "../../../styles/form.css"

function CaptchaSection({formData,handleChange}){
    return(
        <>
            <div className="captcha-section">
              <label>
                <span className="section-part-heading">Enter Captcha <span className="star">*</span></span>
                <div className="captcha-box">
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    // required
                  />

                  <span className="captcha-code">U9pO5</span>
                  <button type="button" className="reload-btn">Reload</button>
                </div>
              </label>
            </div>
        </>
    )
}

export default CaptchaSection