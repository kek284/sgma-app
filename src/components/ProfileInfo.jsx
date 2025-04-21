// src/components/ProfileInfo.jsx
import React from 'react';

const ProfileInfo = ({ user }) => {
  return (
    <div className="profile-info">
      <img src={user.avatar} alt={user.name} className="profile-avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileInfo;
