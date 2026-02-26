import React, { useState, useEffect } from "react";
import "../../../styles/form.css";
import Header from "../Header/Header";
import VendorDetails from "../VendorDetails/VendorDetails";
import ContactDetails from "../ContactDetails/ContactDetails";
import Address from "../Address/Address";
import BillingAddress from "../BillingAddress/BillingAddress";
import SegmentWiseDetails from "../SegmentWiseDetails/SegmentWiseDetails";
import CaptchaSection from "../CaptchaSection/CaptchaSection";

const FormRealTime = () => {
  const [formData, setFormData] = useState({
    vendorName: "",
    ipAddress: "",
    port: "",
    status: "",
    mobileNumber: "",
    registrationDate: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    },
    billingAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    },
    billingSameAsAddress: false,
    segment: [],
    captcha: "",
  });

  const [segmentData, setSegmentData] = useState({});
  
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

  const countries = ["India", "USA", "UK", "UAE", "Singapore", "Other"];
  const states = ["Maharashtra", "Delhi", "Gujarat", "Karnataka", "Tamil Nadu", "Punjab", "Other"];

  const segmentOptions = [
    { id: "equity", value: "Equity (CM)", label: "Equity (CM)" },
    { id: "fo", value: "F/O", label: "F/O" },
    { id: "indices", value: "Indices", label: "Indices" }
  ];



  const handleSegmentChange = (value, checked) => {
    const currentSegments = formData.segment || [];

    if (checked) {
      setFormData({
        ...formData,
        segment: [...currentSegments, value]
      });
      setSegmentData(prev => ({
        ...prev,
        [value]: {
          subscriptionType: "",
          packetCode: "",
          levels: ""
        }
      }));
    } else {
      const newSegments = currentSegments.filter(segment => segment !== value);
      setFormData({
        ...formData,
        segment: newSegments
      });
      setSegmentData(prev => {
        const newData = { ...prev };
        delete newData[value];
        return newData;
      });
    }
  };

  const handleSegmentFieldChange = (segment, field, value) => {
    setSegmentData(prev => ({
      ...prev,
      [segment]: {
        ...prev[segment],
        [field]: value
      }
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.") || name.startsWith("billingAddress.")) {
      const field = name.split(".")[1];
      const section = name.split(".")[0];
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBillingSameChange = (e) => {
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      billingSameAsAddress: checked,
      ...(checked ? {
        billingAddress: {
          ...prev.address
        }
      } : {
        billingAddress: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zip: "",
          country: ""
        }
      })
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Segment Data:", segmentData);
    alert("Form submitted successfully!");
  };

  const title="Data Request Form (Real Time)";

  return (

    <>

      <div className="form-container">
        <Header
            title={title} 
        />
        <form onSubmit={handleSubmit}>
          <section className="form-section">
            <h3>Vendor Details</h3>
            <VendorDetails 
              formData={formData}
              handleChange={handleChange}
            />
          </section>

          <section className="form-section">
            <h3>Contact and Address Details</h3>
            <ContactDetails
              formData={formData}
              handleChange={handleChange}
            />

            <Address
              formData={formData}
              handleChange={handleChange}
            />

            {/* Billing Address Section - Collapsible */}
           <BillingAddress
              formData={formData}
              handleChange={handleChange}
              handleBillingSameChange={handleBillingSameChange}
            />


          </section>

          <section className="form-section">
            <h3>Data Request Details</h3>
            <div className="form-grid">
              <label className="checkbox-group">
                <span className="section-part-heading">Segment <span className="star">*</span></span>
                <div className="checkbox-container">
                  {segmentOptions.map((option) => (
                    <label key={option.id} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.segment.includes(option.value)}
                        onChange={(e) => handleSegmentChange(option.value, e.target.checked)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </label>
            </div>

            {formData.segment.map((segment) => (
              <SegmentWiseDetails
                segment={segment}
                segmentData={segmentData}
                subscriptionTypeValue={subscriptionTypeValue}
                levelValue={levelValue}
                handleSegmentFieldChange={handleSegmentFieldChange}
                packetCodeValue={packetCodeValue}
                isDelayed={false}
              />
            ))}

            <CaptchaSection
              formData={formData}
              handleChange={handleChange}
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