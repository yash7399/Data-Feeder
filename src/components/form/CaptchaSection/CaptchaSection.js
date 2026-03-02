import "../../../styles/form.css"

function CaptchaSection({
  register,
  errors,
  errorStyle
}){
    return(
        <>
            <div className="captcha-section" >
          <label>
            <span className="section-part-heading">Enter Captcha <span className="star">*</span></span>
            <div className="captcha-box" >
              <input {...register("captcha")}  />
              <span className="captcha-code" >U9pO5</span>
		<button type="button" className="reload-btn">Reload</button>
            </div>
            {errors.captcha && <span style={errorStyle}>{errors.captcha.message}</span>}
          </label>
        </div>
        </>
    )
}

export default CaptchaSection