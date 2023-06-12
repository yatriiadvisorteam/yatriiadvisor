"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import UP_Button from "./sub_button";
import { link } from "fs";
import Link from "next/link";

const NewPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your password validation and submission logic here
  };

  return (
    <div className="frame">
      <div
        className="font-bold text-button font-roboto text-center pt-2 pb-2"
        style={{ fontSize: 25 }}
      >
        <h1>Change Password</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="font-bold text-button font-roboto flex pl-4 pt-2 pb-2">
            <label htmlFor="password">New Password</label>
          </div>
          <div className="relative">
            <input
              className="rounded-full pl-20 pr-20 pb-2 pt-2 border-button border-b border-t shadow-lg"
              style={{ fontSize: 14 }} 
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-4 top-3 cursor-pointer"
              onClick={handlePasswordToggle}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="font-bold text-button font-roboto flex pt-2 pl-4 pb-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <div className="relative">
            <input
              className="rounded-full pl-20 pr-20 pb-2 pt-2 border-button border-b border-t shadow-lg"
              style={{ fontSize: 14 }} 
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="absolute right-4 top-3 cursor-pointer"
              onClick={handleConfirmPasswordToggle}
            />
          </div>
        </div><div className="container flex justify-center pt-4">
  
    <button type="submit" className='container flex justify-center flex pt-2 pb-2'>
      <UP_Button/>
    </button>
</div>
<div><Link href="../Forgotpasswordpage/Verify"><button type="submit" className='container flex justify-center font-roboto font-underline text-button flex pt-2 pb-2 hover:text-br'>Back</button></Link></div>

       
      </form>
    </div>
  );
};

export default NewPasswordForm;
