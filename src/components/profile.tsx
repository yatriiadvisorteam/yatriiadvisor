import React, { useState } from 'react';

interface ProfileProps {
  name: string;
  profilePic: string;
}

const Profile: React.FC<ProfileProps> = ({ name, profilePic }) => {
  const [updatedProfilePic, setUpdatedProfilePic] = useState(profilePic);
  const [isEditing, setIsEditing] = useState(false);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = event.target?.result as string;
        setUpdatedProfilePic(image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="profile-picture">
        <img src={updatedProfilePic} alt={name} />
        {isEditing && (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
        )}
      </div>
      <h2>{name}</h2>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default Profile;
