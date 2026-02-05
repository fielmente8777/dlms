"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import { contact, countries } from "@/utils/constent";
import { FillMail, FillMessage, FillPhoneIcon, UserIcon } from "@/utils/icons";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface formProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  gridView?: boolean;
  rounded?: boolean;
}

const Form1: React.FC<formProps> = ({
  setOpen,
  gridView = false,
  rounded = false,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91");
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const [startDate, endDate] = dateRange;

  const [error, setError] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDateChange = (update: [Date | null, Date | null]) => {
    setDateRange(update);

    const [start, end] = update;
    const checkInString = start ? start.toISOString().split("T")[0] : "";
    const checkOutString = end ? end.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      checkIn: checkInString,
      checkOut: checkOutString,
    }));

    // Clear date errors when date is selected
    if (error.checkIn || error.checkOut) {
      setError((prev) => ({ ...prev, checkIn: "", checkOut: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      checkIn: "",
      checkOut: "",
      fullName: "",
      PhoneNumber: "",
      EmailId: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.EmailId)) {
      newErrors.EmailId = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.checkIn.trim()) {
      newErrors.checkIn = "Check-in date is required";
      isValid = false;
    }

    if (!formData.checkOut.trim()) {
      newErrors.checkOut = "Check-out date is required";
      isValid = false;
    } else if (startDate && endDate && startDate > endDate) {
      newErrors.checkOut = "Check-out must be after check-in";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: contact.formDomain,
          email: formData?.EmailId,
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber,
          Description: `Check-in ${formData?.checkIn}, Check-out: ${formData?.checkOut},`,
          check_in: `${formData?.checkIn}`,
          check_out: `${formData?.checkOut}`,
          created_from: "website",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        // Reset form completely
        setFormData({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });
        setDateRange([null, null]);
        setError({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
        });

        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);

        if (setOpen) {
          setOpen(false);
        }
        window.open("/marketing-pages/thank-you", "_blank");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`flex flex-col gap-4 w-full bg-secondary`}
      ref={formRef}
    >
      {/* Full Name Field */}
      <div
        className={`w-full flex gap-4 items-center `}
      >
        <label
          htmlFor="fullName"
          className="text-sm max-md:py-3 text-dark uppercase"
        >
          <UserIcon />
        </label>
        <div className="border border-white py-3 flex items-center gap-2 w-full">
          <input
            id="fullName"
            type="text"
            name="fullName"
            aria-label="Full Name*"
            placeholder="Full Name*"
            onChange={handleInputChange}
            value={formData.fullName}
            className="outline-none  w-full text-white px-2 placeholder:text-white"
          />
          {error.fullName && (
            <span className="text-red-500 text-xs px-1 w-full">
              {error.fullName}
            </span>
          )}
        </div>
      </div>

      {/* Phone Number Field */}
      <div className={`w-full flex gap-4 items-center`}>
        <label
          htmlFor="PhoneNumber"
          className="text-sm max-md:py-3 text-dark uppercase"
        >
          <FillPhoneIcon />
        </label>
        <div className=" relative  w-full border border-white py-3 flex items-center gap-2">
          <select
            aria-label="Country Code"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`text-white uppercase focus:outline-none w-full bg-transparent`}
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index + 101}
                value={country.code}
                aria-label={country.name}
                className="bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="PhoneNumber"
            aria-label="Phone Number*"
            placeholder="Contact No.*"
            onChange={handleInputChange}
            value={formData.PhoneNumber}
            className="ps-1 outline-none w-full text-white placeholder:text-white"
          />
          {error.PhoneNumber && (
            <span className="text-red-500 text-xs px-1 w-full">
              {error.PhoneNumber}
            </span>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div className={`w-full flex gap-4 items-center`}>
        <label
          htmlFor="EmailId"
          className="text-sm max-md:py-3 text-dark uppercase"
        >
          <FillMail />
        </label>
        <div className="border border-white py-3 flex items-center gap-2 w-full">
          <input
            type="text"
            name="EmailId"
            aria-label="Email Id*"
            placeholder="Email*"
            onChange={handleInputChange}
            value={formData.EmailId}
            className="outline-none w-full placeholder:text-white text-white px-2"
          />
          {error.EmailId && (
            <span className="text-red-500 text-xs w-full ml-auto">
              {error.EmailId}
            </span>
          )}
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="flex items-center gap-4 justify-center">
        <span>
          <FillMessage />
        </span>
        <button
          type={isSubmitting ? "button" : "submit"}
          aria-label="Book Now"
          className="text-center bg-primary py-4 rounded-full w-full text-secondary hover:bg-primary/95 duration-300 transition-all ease-in-out capitalize"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            <span className="  justify-center gap-2">Submit</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form1;
