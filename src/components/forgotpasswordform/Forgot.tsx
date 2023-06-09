"use client";
import { useState } from 'react';
import RB from './Rest_pwd';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div ><div
    className="font-bold text-button font-roboto text-center pb-8"
    style={{ fontSize: 25 }}
  >
      <h1>Forgot Password</h1></div>
      <form onSubmit={handleSubmit}><div className="font-bold text-button font-roboto flex pt-2 pb-2">
        <label htmlFor="email">Email</label><br/></div>
        <input 
        className="rounded-full pl-20 pr-20 pb-2 pt-2 border-b border-button border-t shadow-lg"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        <button type="submit" className='container flex justify-center pt-8'><RB/></button>
      </form>
    </div>
  );
};

export default ForgotPassword;
