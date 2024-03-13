import React from "react";
import { Link } from "react-router-dom";

import Silicon from "../../../assets/images/Silicon.svg";
import SiliconTextWhite from "../../../assets/images/Silicon-logo-text-white.svg";
import EnvelopeIcon from "../../../assets/icons/Envelope.svg" 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="first-box">
        <Link className="logo">
          <img src={Silicon} alt="Silicon icon" />
          <img src={SiliconTextWhite} alt="Silicon logo text" />
        </Link>
        <p className="footer-text">
          Proin ipsum pharetra, senectus eget scelerisque varius pretium platea
          velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non
          feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor
          ullamcorper sodales ultrices eros.
        </p>
        <div className="subscribe">
          <h2 className="headline">Subscribe to our newsletter</h2>
          <form className="form-container">
            <div className="input-group">
              <span className="input-icon">
                <img src={EnvelopeIcon} alt="Envelope icon"/>
              </span>
              <input
                type="email"
                id="emailInput"
                className="email-input"
                placeholder="Your Email"
                aria-label="Your Email"
              />
            </div>
            <button className="subscribe-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <p className="copy-right">
          2024. All rights reserved. Silicon Template
        </p>
      </div>
      <div className="second-box">
        <div className="navigation">
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>Our Clients</Link>
          <Link>Testimonials</Link>
          <Link>News</Link>
        </div>
        <div className="terms-policy">
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy </Link>
        </div>
      </div>
      <div className="socials">
        <Link>Facebook</Link>
        <Link>Linkedin</Link>
        <Link>Twitter</Link>
        <Link>Instagram</Link>
      </div>
      <div className="contact-us">
        <h4>Contact us</h4>
        <a>example@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
