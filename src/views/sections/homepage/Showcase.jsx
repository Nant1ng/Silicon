import React from "react";
import { Link } from "react-router-dom";

import Appstore from "../../../assets/images/appstore.svg";
import Googleplay from "../../../assets/images/googleplay.svg";
import ShowcaseMobiles from "../../../assets/images/Showcase-mobiles.svg";

const Showcase = () => {
  return (
    <section id="showcase">
      <div className="container">
        <div className="content">
          <h1>Mange All Your Money in One App</h1>
          <p>
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          <div className="download-app">
            <Link>
              <img src={Appstore} alt="Appstore logo" />
            </Link>
            <Link>
              <img src={Googleplay} alt="Googleplay logo" />
            </Link>
          </div>
          <Link className="more">
            <span className="icon-wrapper">
              <img
                src="./icons/ChevronDown.svg"
                alt="Arrow pointing down"
                className="icon"
              />
            </span>
            <span className="link-text">Discover more</span>
          </Link>
        </div>
        <img
          id="showcase-image"
          src={ShowcaseMobiles}
          alt="Two mobile phones"
        />
      </div>
    </section>
  );
};

export default Showcase;
