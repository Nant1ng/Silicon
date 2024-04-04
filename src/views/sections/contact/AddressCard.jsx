import React from "react";

const AddressCard = ({ data }) => {
  const { title, address, phone, weekdaysOpen, weekendOpen } = data;
  return (
    <div className="address-card">
      <h4>{title}</h4>
      <div className="card-content">
        <p className="card-row">
          <img src="./icons/Location.svg" alt="Location icon" />
          {address}
        </p>
        <p className="card-row">
          <img src="./icons/SmallPhone.svg" alt="Small phone icon" />
          {phone}
        </p>
        <p className="card-row">
          <img src="./icons/Clock.svg" alt="Clock icon" />
          <strong>Mon-Fri:</strong> {weekdaysOpen}
        </p>
        <p className="last-card-row">
          <strong>Sat-Sun:</strong> {weekendOpen}
        </p>
        
      </div>
    </div>
  );
};

export default AddressCard;
