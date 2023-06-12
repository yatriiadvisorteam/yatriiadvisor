"use client";
import React, { useState } from "react";
import Create_button from "./Create_button";
import Signin_button from "./signin";
import Link from "next/link";

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
    <form onSubmit={handleSubmit} style={{ fontSize: 10 }} >
      <div >
        <div className="container justify-center flex font-bold text-button font-roboto pb-4 pt-1 " style={{ fontSize: 16 }}>
          <h3>Create Account</h3>
        </div >
        
        <label
          className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 16 }}
        >
          First Name:
          <br />
        </label>
        <input
          className="rounded-full pl-20 pr-20 pb-2 pt-2 border-b border-button border-t shadow-lg"
          type="text "
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="pt-2">
        <label  className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 16 }}
        >
          Last Name:
          <br />
        </label>
        <input
          className="rounded-full pl-20 pr-20 pb-2 pt-2  border-b border-button border-t shadow-lg"
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </div>
      <div className="pt-2">
        <label  className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 16}}
        >
          Email ID:
          <br />
        </label>
        <input
          className="rounded-full pl-20 pr-20 pb-2 pt-2  border-b border-button border-t shadow-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="pt-2">
        <label className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 16 }}>
          Password:
          <br />
        </label>
        <input
              className="rounded-full pl-20 pr-20 pb-2 pt-2  border-b border-button border-t shadow-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
      </div>
      <div className="pt-2">
        <label className="container pl-4 font-bold text-button font-roboto "
          style={{ fontSize: 16 }}>
          Confirm Password:
          <br />
        </label>
        <input
            className="rounded-full pl-20 pr-20 pb-2 pt-2  border-b border-button border-t shadow-lg"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
      </div>
      <div className="pt-4">  <label className="container pl-4 pt- font-bold text-button font-roboto "
          style={{ fontSize: 10 }}>
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
            className=" pt-2 flex container justify-center  font-roboto font-bold text-button"
            style={{ fontSize: 12 }}
          >
            Already Have An Account ?...
            <Link href="../Signinpage"><button type="submit" onClick={handleLogin}>
              <Signin_button />
            </button></Link>
          </span>
    </form>
  );
};

export default CreateAccountForm;
