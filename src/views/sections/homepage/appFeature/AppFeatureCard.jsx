import React from "react";
import CreditCard from "../../../../assets/icons/CreditCard.svg";

const AppFeatureCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={CreditCard} alt={title} className="card-icon" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default AppFeatureCard;
