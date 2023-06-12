"use client";
import { useState } from "react";
import V_Button from "./V";
import Link from "next/link";

const Verification = () => {
  const [code, setCode] = useState("");

  const handleChange = (e: any) => {
    const entered = e.target.value.replace(/\D/, ""); // Remove non-digit characters
    setCode(entered.slice(0, 6)); // Limit code to 6 digits
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle verification code submission
    console.log("Verification code submitted:", code);
    // Add your code to verify the entered code
  };

  return (
    <div>
      <div
        className="font-bold text-button font-roboto pt-8 text-center pb-4"
        style={{ fontSize: 24 }}
      >
        <h1>Verification Code</h1>
      </div>
      <div className="font-bold text-button font-roboto pt-8 text-center pb-4"
        style={{ fontSize: 12}}> Enter Verification OTP</div>
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-full pl-4 pr-4 text-center pb-2 pt-2 pr-2 border-b border-button border-t shadow-lg"
          style={{ fontSize: 14 }}
          placeholder="Enter Code"
          type="text"
          value={code}
          onChange={handleChange}
          maxLength={6} // Limit input to 6 characters
          pattern="\d *" // Only allow digits as input
        />
        <div className="font-bold text-button font-roboto pt-2 text-center pb-4"
        style={{ fontSize: 12}}>Didn't Recieve OPT ! <button type="submit" className="font-roboto font-underline text-button  hover:text-br">Resend</button> </div>
        <div >
          <Link href="../Forgotpasswordpage/newpwd">
            <button type="submit"
            className="container flex justify-center flex pt-2 pb-1">
              <V_Button />
            </button>
          </Link>
        </div>

        <div>
          {" "}
          <Link href="../Forgotpasswordpage">
            <button
              type="submit"
              className="container flex justify-center font-roboto font-underline text-button flex pt-1 pb-2 hover:text-br"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Verification;
