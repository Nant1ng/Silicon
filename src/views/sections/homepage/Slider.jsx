import React from "react";

import MobileOne from "../../../assets/images/carousel/Mobile-one.svg";
import MobileTwo from "../../../assets/images/carousel/Mobile-two.svg";
import MobileThree from "../../../assets/images/carousel/Mobile-three.svg";

const Slider = () => {
  return (
    <section id="slider">
      <div className="content">
        <h1 className="slider-title">How Dose It Work?</h1>
        <div className="carousel">
          <div className="icon">
            <img
              src="./icons/ChevronLeft.svg"
              alt="Chevron pointing left icon"
            />
          </div>
          <div className="image-container">
            <img src={MobileOne} alt="Iphone my budget" className="fade" />
            <img src={MobileTwo} alt="Iphone your card" />
            <img src={MobileThree} alt="Iphone transfer" className="fade" />
          </div>
          <div className="icon">
            <img
              src="./icons/ChevronRight.svg"
              alt="Chevron pointing right icon"
            />
          </div>
        </div>
        <div className="description">
          <h3>Step 2. Latest transaction history</h3>
          <p>
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
