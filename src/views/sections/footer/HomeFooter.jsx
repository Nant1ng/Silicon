import React from "react";
import { Link } from "react-router-dom";

import Silicon from "../../../assets/images/Silicon.svg";
import SiliconText from "../../../assets/images/Silicon-logo-text.svg";
import Appstore from "../../../assets/images/appstore.svg";
import Googleplay from "../../../assets/images/googleplay.svg";

const HomeFooter = () => {
  return (
    <footer className="home-footer">
        <Link to="/" className="logo">
          <img src={Silicon} alt="Silicon icon" />
          <img src={SiliconText} alt="Silicon logo text" />
        </Link>
      <div className="navigation">
        <Link>Overview</Link>
        <Link>Features</Link>
        <Link>News</Link>
        <Link>Contact</Link>
        <Link>Account</Link>
      </div>
      <div className="market-btns">
        <img src={Appstore} alt="Appstore logo" className="market-btn" />
        <img src={Googleplay} alt="Googleplay logo" className="market-btn" />
      </div>
      <div className="social-btns">
        <Link to="">
        <button>
          <i className="social-icon fa-brands fa-square-facebook" />
          </button>
        </Link>
        <Link to="">
        <button>
          <i className="social-icon fa-brands fa-twitter" />
          </button>
        </Link>
        <Link to="">
        <button>
          <i className="social-icon fa-brands fa-instagram" />
          </button>
        </Link>
        <Link to="">
          <button>
            <i className="social-icon fa-brands fa-youtube" />
          </button>
        </Link>
      </div>
      <div className="copy-right">
        <p>
          2024. All rights reserved. Pulvinar urna condimentum amet tempor,
          ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet
          quisque turpis non. Feugiat in odio non nunc ornare consectetur.
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
