"use clint";
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
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-1 font-medium">
          Name
        </label>
        {isEditing ? (
          <input
            id="name"
            type="text"
            className="border border-gray-300 rounded px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="address" className="mb-1 font-medium">
          Address
        </label>
        {isEditing ? (
          <input
            id="address"
            type="text"
            className="border border-gray-300 rounded px-2 py-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          <span>{address}</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="location" className="mb-1 font-medium">
          Location
        </label>
        {isEditing ? (
          <input
            id="location"
            type="text"
            className="border border-gray-300 rounded px-2 py-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        ) : (
          <span>{location}</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="mobile" className="mb-1 font-medium">
          Mobile
        </label>
        {isEditing ? (
          <input
            id="mobile"
            type="tel"
            className="border border-gray-300 rounded px-2 py-1"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        ) : (
          <span>{mobile}</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-1 font-medium">
          Email
        </label>
        {isEditing ? (
          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span>{email}</span>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="interests" className="mb-1 font-medium">
          Interests
        </label>
        {isEditing ? (
          <textarea
            id="interests"
            className="border border-gray-300 rounded px-2 py-1"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        ) : (
          <span>{interests}</span>
        )}
      </div>
      {isEditing ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleUpdate}
        >
          Update
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default PD;
