import React, { useState } from 'react';

const ProfilePic: React.FC = () => {
  const [profileImage, setProfileImage] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (profileImage) {
      window.open(profileImage, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="relative">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 cursor-pointer"
            onClick={handleImageClick}
          />
        ) : (
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 cursor-pointer" />
        )}
        <label htmlFor="imageUpload" className="absolute bottom-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleImageClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  );
};

export default ProfilePic;
