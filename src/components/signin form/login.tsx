"use client";
import React, { useState } from "react";
import LOG_button from "./LOG_button";
import For_Button from "./forgot_pwd_button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUserAlt } from "react-icons/fa";

import Link from "next/link";
import Signup_button from "./signin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="pt-2 pb-8" >
      <div
        className="font-bold text-button font-roboto text-center pt-2 pb-2"
        style={{ fontSize: 20}}
      >
        <h1>Login</h1>
      </div>
      <form  style={{ fontSize: 10 }}>
        <div className="font-bold text-button font-roboto flex pt-2 pb-2 container flex pl-4" style={{ fontSize: 14 }}>
          <label htmlFor="username">Username:</label>
          <br />
        </div>
        <div className="pl-4" >
          <input
            className="rounded-full pl-20 pr-20 pb-2 pt-2 border-b border-button border-t shadow-lg" style={{ fontSize: 14 }}
            type="text"
            placeholder="Name"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="font-bold text-button font-roboto pt-4 pb-2 pl-4" style={{ fontSize: 14 }}>
          <label htmlFor="password">Password:</label>
          <br />
        </div>
        <div className="pl-4">
        <input
        
            className="rounded-full pl-20 pr-20 pb-2 pt-2  border-b border-button border-t shadow-lg"
            style={{ fontSize: 14 }}
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pl-4">
        <button
      
          type="submit"
          className="pl-15 pr-15 pt-6 container  "
          onClick={handleLogin}
        >
          <LOG_button />
          <br />
          <div className="flex pt-2 pb-2">
            <For_Button />
          </div>
        </button></div>
        <div
          className="container flex justify-center text-button"
          style={{ fontSize: 25 }}
        >
          ------------ or ------------
        </div>
        <div className="container pl-24">
          <button>
            <FcGoogle
              className=" container margin-10px"
              style={{ fontSize: 25 }}
            />
            <span className="container">Google</span>
          </button>
          <button>
            <FaFacebook className="pl-20 container" style={{ fontSize: 25 }} />
            <span className="pl-20 container ">Facebook</span>
          </button>
          <span
            className=" container flex justify-center pt-6 pr-12 font-roboto font-bold text-button "
            style={{ fontSize: 14 }}
          >
            Don't Have An Account ?
            <Link href="../Signuppage"> <button type="submit"  onClick={handleLogin}>
              <Signup_button/>
            </button></Link>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Login;
