import { useState } from "react";
import { Link } from "react-router-dom";

import { usePostStore } from "../../../lib/postContext";

import Silicon from "../../../assets/images/Silicon.svg";
import SiliconTextWhite from "../../../assets/images/Silicon-logo-text-white.svg";

const Footer = () => {
  const { postData } = usePostStore();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubscribed(false);
    setError(false);

    const res = await postData(`/subscribe?email=${email}`);

    if (res.status === 200) {
      setIsSubscribed(true);
      setEmail("");
    } else if (res.status >= 400) {
      setError(true);
    }
  };

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
          <form
            onSubmit={handleSubmit}
            noValidate
            className={`form-container 
            ${isSubscribed ? "form-container-succeed" : ""}
            ${error ? "form-container-error" : ""}`}
          >
            <div className="input-group">
              <span className="input-icon">
                <img
                  src={
                    isSubscribed ? "./icons/EnvelopeGreen.svg" :
                    error ? "./icons/EnvelopeRed.svg" :
                    "./icons/Envelope.svg"
                  }
                  alt="Envelope icon"
                />
              </span>
              <input
                id="emailInput"
                type="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                placeholder={isSubscribed ? "Subscribed" : "Your Email"}
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
