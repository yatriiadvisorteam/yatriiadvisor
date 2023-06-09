"use client";
import React, { useState } from "react";
import V_button from "./Verify-button";
import { AiOutlineInfoCircle } from "react-icons/ai";


const SO = () => {
  const [verificationOption, setVerificationOption] = useState("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your verification logic here
  };

  return (
    <div className="SO container justify-center">
      <div className="font-bold text-button font-roboto text-center pb-8" style={{ fontSize: 25 }}>
        <h1>Forgot Password</h1>
      </div><div className="container justify-center flex pt-4 pb-4">
      <AiOutlineInfoCircle
              className=" container margin-10px text-unkown "
              style={{ fontSize: 120 }}
            /></div>
            <div className="container justify-left text-button font-bold font-roboto pt-4 pb-4" style={{ fontSize: 12 }}>Make selection to send OTP </div>
      <form onSubmit={handleSubmit}>
        <div className="option-container border rounded-md border-button pt-4 pb-4 pl-4 pr-3  font-roboto font-bold text-button" style={{ fontSize: 18}} >
          <label className="option-label">
            <input
              type="radio"
              name="verificationOption"
              value="mobile"
              checked={verificationOption === "mobile"}
              onChange={handleOptionChange}
            />
           -----    Mobile Number
          </label>
        </div><br/>
        <div className="option-container border rounded-md border-button pt-4 pb-4 pl-3 pr-3 font-roboto font-bold text-button" style={{ fontSize: 18}}>
          <label className="option-label">
            <input
              size={20}
              type="radio"
              name="verificationOption"
              value="email"
              checked={verificationOption === "email"}
              onChange={handleOptionChange}
            />
            -----   Email
          </label>
        </div><div className="flex container justify-center pl-19 pr-15 pt-4">
        <button type="submit"><V_button/></button></div>
      </form>
    </div>
  );
};

export default SO;
