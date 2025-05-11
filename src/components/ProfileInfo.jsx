// src/components/ProfileInfo.jsx
import React from 'react';
import './../styles/ProfileInfo.css';

const ProfileInfo = ({ user }) => {
  return (
    <div className="profile-info">
      <img src={user.avatar} alt="Аватар" className="profile-avatar" />
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default ProfileInfo;