"use client"
import React, { useState } from 'react';

interface ProfileDetailsProps {
  name: string;
  address: string;
  location: string;
  mobile: string;
  mailID: string;
  interestedPlace: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  name: initialName,
  address: initialAddress,
  location: initialLocation,
  mobile: initialMobile,
  mailID: initialMailID,
  interestedPlace: initialInterestedPlace,
}) => {
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);
  const [location, setLocation] = useState(initialLocation);
  const [mobile, setMobile] = useState(initialMobile);
  const [mailID, setMailID] = useState(initialMailID);
  const [interestedPlace, setInterestedPlace] = useState(initialInterestedPlace);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform any save/update logic here if needed
  };

  return (
    <div>
      <h2>Profile Details</h2>
      <p><strong>Name:</strong><div> {isEditing ? <input value={name} onChange={(e) => setName(e.target.value)} /> : name}</div></p>
      <p><strong>Address:</strong><div> {isEditing ? <input value={address} onChange={(e) => setAddress(e.target.value)} /> : address}</div></p>
      <p><strong>Location:</strong><div> {isEditing ? <input value={location} onChange={(e) => setLocation(e.target.value)} /> : location}</div></p>
      <p><strong>Mobile:</strong><div> {isEditing ? <input value={mobile} onChange={(e) => setMobile(e.target.value)} /> : mobile}</div></p>
      <p><strong>Email:</strong><div> {isEditing ? <input value={mailID} onChange={(e) => setMailID(e.target.value)} /> : mailID}</div></p>
      <p><strong>Interested Place to Visit:</strong><div> {isEditing ? <input value={interestedPlace} onChange={(e) => setInterestedPlace(e.target.value)} /> : interestedPlace}</div></p>

      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default ProfileDetails;
