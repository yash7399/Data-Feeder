import "./SegmentWiseDetails.css"

function SegmentWiseDetails({
                segment,
                segmentData,
                subscriptionTypeValue,
                levelValue,
                handleSegmentFieldChange,
                packetCodeValue,
                isDelayed
}){
    return(
        <>
            <div key={segment} className="segment-fields">
                <h4>{segment} Details</h4>
                <div className="form-grid">
                  <label>
                    <span className="section-part-heading">Subscription Type <span className="star">*</span></span>
                    <select
                      value={segmentData[segment]?.subscriptionType || ""}
                      onChange={(e) => handleSegmentFieldChange(segment, "subscriptionType", e.target.value)}
                    >
                      <option value="">Select</option>
                      {subscriptionTypeValue[segment]?.map((value) => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span className="section-part-heading">Packet Code <span className="star">*</span></span>
                    <select
                      value={segmentData[segment]?.packetCode || ""}
                      onChange={(e) => handleSegmentFieldChange(segment, "packetCode", e.target.value)}
                    >
                      <option value="">Select</option>
                      {packetCodeValue[segment]?.map((value) => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </select>
                  </label>

                  {(isDelayed || segment !== "Indices"  )&& (
                    <label>
                      <span className="section-part-heading">{isDelayed?"TimeFrame":"Levels"} <span className="star">*</span></span>
                      <select
                        value={segmentData[segment]?.levels || ""}
                        onChange={(e) => handleSegmentFieldChange(segment, "levels", e.target.value)}
                      >
                        <option value="">Select</option>
                        {levelValue[segment]?.map((value) => (
                          <option key={value} value={value}>{value}</option>
                        ))}
                      </select>
                    </label>
                  )}
                </div>
              </div>
        </>
    )
}

export default SegmentWiseDetails