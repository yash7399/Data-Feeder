import "./SegmentWiseDetails.css"


const inputErrorBorder = { borderColor: "#ff4d4f" };

function SegmentWiseDetails({
  segment,
  subscriptionTypeValue,
  register,
  packetCodeValue,
  levelValue,
  errors,
  errorStyle
}) {
  return (
    <>
      
<div key={segment} className="segment-fields" style={{ border: '1px solid #ddd', padding: '15px', marginTop: '15px', borderRadius: '8px' }}>
                <h3 className="segment-title">{segment} Details</h3>
                <div className="form-grid">

                  {/* Subscription Type */}
                  <label>
                    <span>Subscription Type <span className="star">*</span></span>
                    <select
                      {...register(`segmentDetails.${segment}.subscriptionType`)}
                      style={errors.segmentDetails?.[segment]?.subscriptionType ? inputErrorBorder : {}}
                    >
                      <option value="">Select</option>
                      {subscriptionTypeValue[segment].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                    {errors.segmentDetails?.[segment]?.subscriptionType && (
                      <span style={errorStyle}>{errors.segmentDetails[segment].subscriptionType.message}</span>
                    )}
                  </label>

                  {/* Packet Code */}
                  <label>
                    <span>Packet Code <span className="star">*</span></span>
                    <select
                      {...register(`segmentDetails.${segment}.packetCode`)}
                      style={errors.segmentDetails?.[segment]?.packetCode ? inputErrorBorder : {}}
                    >
                      <option value="">Select</option>
                      {packetCodeValue[segment].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                    {errors.segmentDetails?.[segment]?.packetCode && (
                      <span style={errorStyle}>{errors.segmentDetails[segment].packetCode.message}</span>
                    )}
                  </label>

                  {/* Levels (Conditional) */}
                  {segment !== "Indices" && (
                    <label>
                      <span>Levels <span className="star">*</span></span>
                      <select
                        {...register(`segmentDetails.${segment}.levels`)}
                        style={errors.segmentDetails?.[segment]?.levels ? inputErrorBorder : {}}
                      >
                        <option value="">Select</option>
                        {levelValue[segment].map(v => <option key={v} value={v}>{v}</option>)}
                      </select>
                      {errors.segmentDetails?.[segment]?.levels && (
                        <span style={errorStyle}>{errors.segmentDetails[segment].levels.message}</span>
                      )}
                    </label>
                  )}

                </div>
              </div>
    </>
  )
}

export default SegmentWiseDetails