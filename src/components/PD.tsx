"use client";
import React, { useState } from 'react';
const PD: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    // Update profile details here
    console.log('Profile details updated:', {
      name,
      address,
      location,
      mobile,
      email,
      interests,
    });
  };

  return (
    <div className="flex flex-col " style={{ fontSize: 15}}>
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
      <div className="flex flex-col mb-4" >
        <label htmlFor="name" className="mb-1 font-bold text-br">
          Name
        </label>
        
          <input 
            id="name"
            type="text"
            className="border-b-4 border-br  rounded px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
       
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="address" className="mb-1 font-bold text-br">
          Address
        </label>
      
          <input
            id="address"
            type="text"
            className="border-b-4 border-br  rounded px-2 py-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        
         
      
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="location" className="mb-1 font-bold text-br">
          Location
        </label>
      
          <input
            id="location"
            type="text"
            className="border-b-4 border-br  rounded px-2 py-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
      
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="mobile" className="mb-1 font-bold text-br">
          Mobile
        </label>
        
          <input
            id="mobile"
            type="tel"
            className="border-b-4 border-br  rounded px-2 py-1 "
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
      
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-1 font-bold text-br">
          Email
        </label>
       
          <input
            id="email"
            type="email"
            className="border-b-4 border-br  rounded px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
     
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="interests" className="mb-1 font-bold text-br">
          Interests
        </label>
       
          <textarea
            id="interests"
            className="border-b-4 border-br  rounded px-2 py-1"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
       
      </div>
      {isEditing ? (
        <button
          className="bg-500 bg-button text-white px-4 py-2 rounded-full"
          onClick={handleUpdate}
        >
          save
        </button>
      ) : (
        <button
          className="bg-500 bg-button text-white px-4 py-2 rounded-full"
          onClick={handleEdit}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default PD;
