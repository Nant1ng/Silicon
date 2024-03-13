import React from "react";

import BrandOne from "../../../assets/images/brands/brand-1.svg";
import BrandTwo from "../../../assets/images/brands/brand-2.svg"
import BrandThree from "../../../assets/images/brands/brand-3.svg"
import BrandFour from "../../../assets/images/brands/brand-4.svg"
import BrandFive from "../../../assets/images/brands/brand-5.svg"
import BrandSix from "../../../assets/images/brands/brand-6.svg"

const Brands = () => {
  return (
    <section id="brands">
      <div className="container">
        <div className="box">
          <img src={BrandOne} alt="brand 1" />
        </div>
        <div className="box">
          <img src={BrandTwo} alt="brand 2" />
        </div>
        <div className="box">
          <img src={BrandThree} alt="brand 3" />
        </div>
        <div className="box">
          <img src={BrandFour} alt="brand 4" />
        </div>
        <div className="box">
          <img src={BrandFive} alt="brand 5" />
        </div>
        <div className="box">
          <img src={BrandSix} alt="brand 6" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
