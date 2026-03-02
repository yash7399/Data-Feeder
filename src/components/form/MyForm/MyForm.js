import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "../../../App.css";

// --- 1. ZOD VALIDATION SCHEMA ---
const schema = z.object({
    vendorName: z.string().min(2, "Vendor Name is required"),
    ipAddress: z.string()
        .min(7, "IP address required")
        .regex(
            /^(?:(?:25[0,5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            "Enter valid IPv4 (192.168.1.1)"
        ),
    port: z.string().regex(/^\d+$/, "Port must be a numeric value"),
    status: z.string().min(1, "Please select a status"),
    mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Invalid 10-digit mobile number"),
    registrationDate: z.string().min(1, "Registration date is required"),

    // Address Validation
    address: z.object({
        addressLine1: z.string().min(1, "Address Line 1 is required"),
        addressLine2: z.string().optional(),
        city: z.string().min(1, "City is required"),
        state: z.string().min(1, "State is required"),
        zip: z.string().min(5, "Invalid Zip code"),
        country: z.string().min(1, "Country is required"),
    }),

    billingSameAsAddress: z.boolean(),

    // Billing Address (Validated only if billingSameAsAddress is false)
    billingAddress: z.object({
        addressLine1: z.string().optional(),
        addressLine2: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zip: z.string().optional(),
        country: z.string().optional(),
    }),

    segment: z.array(z.string()).min(1, "Select at least one segment"),

    // Dynamic Segment Details Validation
    segmentDetails: z.record(
        z.string(),
        z.object({
            subscriptionType: z.string().min(1, "Required"),
            packetCode: z.string().min(1, "Required"),
            levels: z.string().optional(),
        })
    ),

    captcha: z.string().refine((val) => val === "U9pO5", {
        message: "Incorrect captcha code",
    }),
}).refine((data) => {
    // Custom logic: If billing is NOT same as address, check billing fields
    if (!data.billingSameAsAddress) {
        return !!data.billingAddress.addressLine1 && !!data.billingAddress.city;
    }
    return true;
}, {
    message: "Please complete billing address",
    path: ["billingAddress.addressLine1"]
});

const MyForm = () => {
    // --- 2. INITIALIZE REACT HOOK FORM ---
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

    return (
        <div className="form-container">
            <div className="form-header">
                <a href="https://ncdex.com/">
                    <img className="form-header-img" src="https://globalprimenews.com/wp-content/uploads/2019/11/IMG-20191114-WA0010-1024x434.jpg" alt="NCDEX Logo" />
                </a>
                <h1 className="form-title">Data Request Form - CM</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* VENDOR INFO */}
                <section className="form-section">
                    <h2 className="section-title">Vendor Information</h2>
                    <div className="form-grid">
                        <label>
                            <span className="field-label">Vendor Name <span className="star">*</span></span>
                            <input {...register("vendorName")} style={errors.vendorName ? inputErrorBorder : {}} />
                            {errors.vendorName && <span style={errorStyle}>{errors.vendorName.message}</span>}
                        </label>
                        <label>
                            <span className="field-label">IP Address <span className="star">*</span></span>
                            <input {...register("ipAddress")} style={errors.ipAddress ? inputErrorBorder : {}} />
                            {errors.ipAddress && <span style={errorStyle}>{errors.ipAddress.message}</span>}
                        </label>
                        <label>
                            <span className="field-label">Port <span className="star">*</span></span>
                            <input {...register("port")} style={errors.port ? inputErrorBorder : {}} />
                            {errors.port && <span style={errorStyle}>{errors.port.message}</span>}
                        </label>
                        <label>
                            <span className="field-label">Status <span className="star">*</span></span>
                            <select {...register("status")} style={errors.status ? inputErrorBorder : {}}>
                                <option value="">Select</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            {errors.status && <span style={errorStyle}>{errors.status.message}</span>}
                        </label>
                    </div>
                </section>

                {/* CONTACT DETAILS & ADDRESS */}
                <section className="form-section">
                    <h2 className="section-title">Vendor Contact Details</h2>
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

                    <div className="address-section">
                        <h3 className="subsection-title">📍 Address</h3>
                        <div className="form-grid">
                            <input {...register("address.addressLine1")} placeholder="Address Line 1" />
                            <input {...register("address.addressLine2")} placeholder="Address Line 2" />
                            <input {...register("address.city")} placeholder="City" />
                            <input {...register("address.state")} placeholder="State" />
                            <input {...register("address.zip")} placeholder="Zip Code" />
                            <input {...register("address.country")} placeholder="Country" />
                        </div>
                        {errors.address && <span style={errorStyle}>Please complete mandatory address fields.</span>}
                    </div>

                    {/* BILLING ADDRESS */}
                    <div className="address-section">
                        <div className="billing-header" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <h3 className="subsection-title">💳 Billing Address</h3>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                                <input type="checkbox" {...register("billingSameAsAddress")} />
                                Same as Address
                            </label>
                        </div>

                        {!billingSameAsAddress && (
                            <div className="form-grid">
                                <input {...register("billingAddress.addressLine1")} placeholder="Billing Line 1" />
                                <input {...register("billingAddress.city")} placeholder="City" />
                                <input {...register("billingAddress.state")} placeholder="State" />
                                <input {...register("billingAddress.zip")} placeholder="Zip Code" />
                            </div>
                        )}
                        {errors.billingAddress?.addressLine1 && <span style={errorStyle}>{errors.billingAddress.addressLine1.message}</span>}
                    </div>
                </section>

                {/* DATA REQUEST DETAILS */}
                <section className="form-section">
                    <h2 className="section-title">Data Request Details</h2>
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

                    {selectedSegments?.map((segment) => (
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
                    ))}
                </section>

                {/* CAPTCHA */}
                <div className="captcha-section" style={{ marginTop: '20px' }}>
                    <label>
                        <span className="field-label">Enter Captcha <span className="star">*</span></span>
                        <div className="captcha-box" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <input {...register("captcha")} style={{ padding: '8px' }} />
                            <span className="captcha-code" style={{ background: '#eee', padding: '5px 10px', fontWeight: 'bold' }}>U9pO5</span>
                        </div>
                        {errors.captcha && <span style={errorStyle}>{errors.captcha.message}</span>}
                    </label>
                </div>

                <div className="form-buttons" style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
                    <button type="submit" className="submit-btn">Submit</button>
                    <button type="button" className="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default MyForm;