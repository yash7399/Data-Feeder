import "../styles/Header.css"

function APIDetails({formData,handleChange}){
    return(
        <>
        
            <div className="form-grid">
              <label>
                <span className="section-part-heading">Username <span className="star">*</span></span>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                //   required
                />
              </label>
              <label>
                <span className="section-part-heading">Password <span className="star">*</span></span>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                //   required
                />
              </label>
              <label>
                <span className="section-part-heading">Secret Key <span className="star">*</span></span>
                <input
                  type="text"
                  name="secretKey"
                  value={formData.secretKey}
                  onChange={handleChange}
                //   required
                />
              </label>
            </div>
        </>
    )
}

export default APIDetails;