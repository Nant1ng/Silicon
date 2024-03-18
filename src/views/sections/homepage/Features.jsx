import React from "react";

import FeatureTop from "../../../assets/images/feature/Feature-top.svg";
import FeatureBottom from "../../../assets/images/feature/Feature-bottom.svg";

const Features = () => {
  return (
    <section id="features">
      <div className="feature-top-content">
        <div className="feature-text-container">
          <h2 className="feature-title">
            Make your money transfer simple and clear
          </h2>
          <div className="list">
            <p className="list-text">
              <img src="./icons/CheckCircle.svg" alt="Checked" />
              Banking transactions are free for you
            </p>
            <p className="list-text">
              <img src="./icons/CheckCircle.svg" alt="Checked" />
              No monthly cash commission
            </p>
            <p className="list-text">
              <img src="./icons/CheckCircle.svg" alt="Checked" />
              Manage paymenys and transactions online
            </p>
          </div>
          <button className="btn btn-theme">
            Learn more{" "}
            <img src="./icons/ArrowWhite.svg" alt="Arrow pointing right icon" />
          </button>
        </div>
        <img src={FeatureTop} alt="Graph" className="feature-image" />
      </div>
      <div className="feature-bottom-content">
        <img src={FeatureBottom} alt="Contacts and a credit card" className="feature-image" />
        <div className="feature-text-container">
          <h2>Receive payment from international bank details</h2>
          <div className="feature-card-container">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="./icons/CreditCard.svg" alt="Credit card icon" />
              </div>
              <p>
                Manage your payments online. Mollis congue egestas egestas
                fermentum fames.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="./icons/Wallet.svg" alt="Wallet icon" />
              </div>
              <p>
                A elementur and imperdiet enim, pretium etiam facilisi aenean
                quam mauris.
              </p>
            </div>
          </div>
          <button className="btn btn-theme">
            Learn more{" "}
            <img src="./icons/ArrowWhite.svg" alt="Arrow pointing right icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
