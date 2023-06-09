"use client";
import React, { useState } from "react";
import LOG_button from "./LOG_button";
import RectangleFrame from "./framebox";
import forgot_button from "./forgot_pwd_button";
import For_Button from "./forgot_pwd_button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import signin from "../signin";
import Signin_button from "../signin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="pt-2 pb-8">
      <div
        className="font-bold text-button font-roboto text-center pb-8"
        style={{ fontSize: 25 }}
      >
        <h1>Login</h1>
      </div>
      <form>
        <div className="font-bold text-button font-roboto flex pt-2 pb-2">
          <label htmlFor="username">Username:</label>
          <br />
        </div>
        <div>
          <input
            className="rounded-full pl-20 pr-20 pb-2 pt-2 border-b border-button border-t shadow-lg"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="font-bold text-button font-roboto pt-4 pb-2">
          <label htmlFor="password">Password:</label>
          <br />
        </div>
        <div>
          <input
            className="rounded-full pl-20 pr-20 pb-2 pt-2 border-button border-b border-t shadow-lg"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="pl-19 pr-15 pt-4 container  "
          onClick={handleLogin}
        >
          <LOG_button />
          <br />
          <div className="flex pt-2 pb-2">
            <For_Button />
          </div>
        </button>
        <div
          className="container flex justify-center "
          style={{ fontSize: 25 }}
        >
          ------------ or ------------
        </div>
        <div className="pl-20">
          <button>
            <FcGoogle
              className=" container margin-10px"
              style={{ fontSize: 30 }}
            />
            <span className="container">Google</span>
          </button>
          <button>
            <FaFacebook className="pl-20 container" style={{ fontSize: 30 }} />
            <span className="pl-20 container ">Facebook</span>
          </button>
          <span
            className=" pt-8 flex container justify-left "
            style={{ fontSize: 16 }}
          >
            Don't Have An Account ?...
            <button type="submit" onClick={handleLogin}>
              <Signin_button />
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Login;
