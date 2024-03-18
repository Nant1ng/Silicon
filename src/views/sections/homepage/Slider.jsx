import React from "react";

import MobileOne from "../../../assets/images/carousel/Mobile-one.svg";
import MobileTwo from "../../../assets/images/carousel/Mobile-two.svg";
import MobileThree from "../../../assets/images/carousel/Mobile-three.svg";

const Slider = () => {
  return (
    <section id="slider">
      <div className="slider-content">
        <h1 className="slider-title">How Dose It Work?</h1>
        <div className="carousel">
          <div className="carousel-icon">
            <img
              src="./icons/ChevronLeft.svg"
              alt="Chevron pointing left icon"
            />
          </div>
          <div className="carousel-image-container">
            <img
              src={MobileOne}
              alt="Iphone my budget"
              className="carousel-image fade"
            />
            <img
              src={MobileTwo}
              alt="Iphone your card"
              className="carousel-image"
            />
            <img
              src={MobileThree}
              alt="Iphone transfer"
              className="carousel-image fade"
            />
          </div>
          <div className="carousel-icon">
            <img
              src="./icons/ChevronRight.svg"
              alt="Chevron pointing right icon"
            />
          </div>
        </div>
        <div className="slider-description">
          <h3>Step 2. Latest transaction history</h3>
          <p className="slider-description-text">
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
            Arcu sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-background" />
          <div className="progress-bar" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
