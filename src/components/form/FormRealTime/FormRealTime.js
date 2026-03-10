import React, { useState, useEffect } from "react";
import "../../../styles/form.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../Header/Header";
import VendorDetails from "../VendorDetails/VendorDetails";
import ContactDetails from "../ContactDetails/ContactDetails";
import Address from "../Address/Address";
import BillingAddress from "../BillingAddress/BillingAddress";
import SegmentWiseDetails from "../SegmentWiseDetails/SegmentWiseDetails";
import CaptchaSection from "../CaptchaSection/CaptchaSection";
import schema from "../Zod/RealTimeSchema.js"

const FormRealTime = ({data}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      billingSameAsAddress: false,
      segment: [],
      segmentDetails: {},
    },
  });

  // --- 3. WATCHERS FOR DYNAMIC UI ---
  const selectedSegments = watch("segment");
  const billingSameAsAddress = watch("billingSameAsAddress");
  const mainAddress = watch("address");

  // Sync billing address if checkbox is clicked
  useEffect(() => {
    if (billingSameAsAddress) {
      setValue("billingAddress", mainAddress);
    }
  }, [billingSameAsAddress, mainAddress, setValue]);

  const onSubmit = (data) => {
    console.log("Final Form Data:", data);
    alert("Form submitted successfully!");
  };

  // --- DATA OPTIONS ---
  const subscriptionTypeValue = {
    "Equity (CM)": ["Real Time/BOD", "EOD Bhavcopy"],
    "F/O": ["Real Time/BOD", "EOD Bhavcopy", "Historicla Trade Data"],
    "Indices": ["Real Time/BOD", "EOD Bhavcopy"]
  };

  const packetCodeValue = {
    "Equity (CM)": ["CN, PN"],
    "F/O": ["FN/FP"],
    "Indices": ["CX"]
  };

  const levelValue = {
    "Equity (CM)": ["Level 1", "Level 2", "Level 3"],
    "F/O": ["Level 1", "Level 2"],
    "Indices": []
  };

  // Inline style object for errors
  const errorStyle = { color: "#ff4d4f", fontSize: "12px", marginTop: "4px", display: "block" };
  const inputErrorBorder = { borderColor: "#ff4d4f" };
  const title = "Data Request Form (Real Time)";

  return (

    <>

      <div className="form-container">
        <Header
          title={title}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="form-section">
            <h3>Vendor Details</h3>
            <VendorDetails
              register={register}
              errors={errors}
              errorStyle={errorStyle}
              inputErrorBorder={inputErrorBorder}
              vendorName={data?.vendorName}
              ipAddress={data?.ipAddress}
              port={data?.port}
              status={data?.status}
            />
          </section>

          <section className="form-section">
            <h3>Contact and Address Details</h3>
            <ContactDetails
                register={register}
                errorStyle={errorStyle}
                errors={errors}
            />

            <Address
              register={register}
              
            />

            {/* Billing Address Section - Collapsible */}
            <BillingAddress
              register={register}
              billingSameAsAddress={billingSameAsAddress}
              errors={errors}
              errorStyle={errorStyle}
            />


          </section>

          <section className="form-section">
            <h3>Data Request Details</h3>
            <div className="form-grid">
              <div className="checkbox-group">
                <span className="field-label">Segment <span className="star">*</span></span>
                <div className="checkbox-container" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                  {["Equity (CM)", "F/O", "Indices"].map((seg) => (
                    <label key={seg}>
                      <input type="checkbox" value={seg} {...register("segment")} /> {seg}
                    </label>
                  ))}
                </div>
                {errors.segment && <span style={errorStyle}>{errors.segment.message}</span>}
              </div>
            </div>

            {selectedSegments?.map((segment) => (
              <SegmentWiseDetails
                segment={segment}
                subscriptionTypeValue={subscriptionTypeValue}
                register={register}
                packetCodeValue={packetCodeValue}
                levelValue={levelValue}
                errors={errors}
                errorStyle={errorStyle}
              />
            ))}

            <CaptchaSection
              register={register}
              errors={errors}
              errorStyle={errorStyle}
            />
          </section>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormRealTime;