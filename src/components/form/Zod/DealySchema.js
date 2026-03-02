
import * as z from "zod";

 const schema = z.object({
  vendorName: z.string().min(2, "Vendor Name is required"),
  ipAddress: z.string()
  .min(1, "IP address required")
  .regex(
    /^(?:(?:25[0,5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    "Enter valid IPv4 (eg. 192.168.1.1)"
  ),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(/^[a-zA-Z0-0_]+$/, "Only letters, numbers, and underscores allowed"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Must contain at least one special character"),
  secretKey:z.string().min(2, "Secret Key is required"),
  port: z.string()
    .min(1,"Please enter port")
    .regex(/^\d+$/, "Port must be a numeric value"),
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

  captcha: z.string()
  .min(1,"Please enter captcha")
  .refine((val) => val === "U9pO5", {
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

export default schema