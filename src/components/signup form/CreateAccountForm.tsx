"use client";
import React, { useState } from "react";
import Create_button from "./Create_button";
import Signin_button from "../signin";

const CreateAccountForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState("");

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleTermsAgreementChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsAgreed(event.target.checked);
  };

  const handlePolicySelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPolicy(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Handle form submission logic here
    // e.g., validation, API calls, etc.

    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      termsAgreed,
      selectedPolicy,
    });
  };

  function handleLogin(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <form onSubmit={handleSubmit} style={{ fontSize: 25 }} >
      <div >
        <div className="container justify-center flex font-bold text-button font-roboto  ">
          <h3>Create Account</h3>
        </div>
        
        <label
          className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 20 }}
        >
          First Name:
          <br />
        </label>
        <input
          className="rounded-full pl-20 pr-20 pb-1 pt-1 border-b border-button border-t shadow-lg"
          type="text "
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label  className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 20 }}
        >
          Last Name:
          <br />
        </label>
        <input
          className="rounded-full pl-20 pr-20 pb-1 pt-1 border-b border-button border-t shadow-lg"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label  className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 20 }}
        >
          Email ID:
          <br />
        </label>
        <input
          className="rounded-full pl-20 pr-20 pb-1 pt-1 border-b border-button border-t shadow-lg"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 20 }}>
          Password:
          <br />
        </label>
        <input
              className="rounded-full pl-20 pr-20 pb-1 pt-1 border-b border-button border-t shadow-lg"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
      </div>
      <div>
        <label className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 20 }}>
          Confirm Password:
          <br />
        </label>
        <input
            className="rounded-full pl-20 pr-20 pb-1 pt-1 border-b border-button border-t shadow-lg"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
      </div>
      <div className="pt-4">  <label className="container pl-4 pt- font-bold text-button font-roboto "
          style={{ fontSize: 20 }}>
      <input className="pr-2 "
            type="radio"
            value="policyOption1"
            checked={selectedPolicy === "policyOption1"}
            onChange={handlePolicySelectionChange}
          />
            Agree the Terms service and Policy </label>
      </div><div className=" container justify-center flex pt-4">
      <button type="submit" className="font:medium">
        <Create_button />
      </button></div>
      <span
            className=" pt-8 flex container justify-center  font-roboto font-bold text-button"
            style={{ fontSize: 16 }}
          >
            Already Have An Account ?...
            <button type="submit" onClick={handleLogin}>
              <Signin_button />
            </button>
          </span>
    </form>
  );
};

export default CreateAccountForm;
