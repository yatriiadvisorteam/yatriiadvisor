"use client";
import { useState } from "react";
import RB from "./Rest_pwd";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        className="font-bold text-button font-roboto pt-8 text-center pb-4"
        style={{ fontSize: 24 }}
      >
        <h1>Forgot Password</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="font-bold text-button font-roboto container pl-6  pt-2 pb-2">
          <label htmlFor="email">Email</label>
          <br />
        </div>
        <input
          className="rounded-full pl-20 pr-20 pb-2 pt-2 pr-2 border-b border-button border-t shadow-lg"
          style={{ fontSize: 14 }}
          type="email"
          placeholder="Enter E-Mail ID"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <div className="container flex pt-4">
          <Link href="../Forgotpasswordpage/Verify">
            <button
              type="submit"
              className="container flex justify-center flex pt-2 pb-2"
            >
              <RB />
            </button>
          </Link>
        </div>
        <Link href="../Signinpage">
          {" "}
          <div>
            <button
              type="submit"
              className="container flex justify-center font-roboto font-underline text-button flex pt-2 pb-2 hover:text-br"
            >
              Back
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
