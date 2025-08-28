import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, role, image }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h3>{name}</h3>
      <p>{role}</p>
      <button className="follow-btn">Seguir</button>
    </div>
  );
};

export default ProfileCard;
