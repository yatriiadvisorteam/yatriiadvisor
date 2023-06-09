"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import UP_Button from "./sub_button";
import { link } from "fs";

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
        className="font-bold text-button font-roboto text-center pb-8"
        style={{ fontSize: 25 }}
      >
        <h1>Change Password</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="font-bold text-button font-roboto flex pt-2 pb-2">
            <label htmlFor="password">New Password</label>
          </div>
          <div className="relative">
            <input
              className="rounded-full pl-20 pr-20 pb-2 pt-2 border-button border-b border-t shadow-lg"
              type={showPassword ? "text" : "password"}
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
          <div className="font-bold text-button font-roboto flex pt-2 pb-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <div className="relative">
            <input
              className="rounded-full pl-20 pr-20 pb-2 pt-2 border-button border-b border-t shadow-lg"
              type={showConfirmPassword ? "text" : "password"}
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
        </div><div className="container flex justify-center pt-8">
  
    <button type="submit">
      <UP_Button/>
    </button>
  
</div>

       
      </form>
    </div>
  );
};

export default NewPasswordForm;
