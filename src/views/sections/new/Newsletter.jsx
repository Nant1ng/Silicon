import { useState } from "react";

import { usePostStore } from "../../../lib/postContext";

const Newsletter = () => {
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
    <section id="newsletter">
      <div className="signup-container">
        <div className="signup-header">
          <h2 className="signup-title">Don't Want to Miss Anything?</h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc3589b28fe9787db1dadd314a469a27f487634aa5cff4e42544eb72505cfb?apiKey=8cc7244e2c8340d18b65f9464fda2ed9&"
            alt="Newsletter icon"
            className="signup-icon"
          />
        </div>
        <div className="signup-content">
          <h5 className="signup-subtitle">Sign up for Newsletters</h5>
          <div className="checkbox-grid">
            <div className="column">
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">
                  Daily Newsletter
                </label>
              </div>
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">
                  Event Updates
                </label>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <input type="checkbox" checked className="checkbox-input" />
                <label htmlFor="">
                  Advertising Updates
                </label>
              </div>
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">
                  Startups Weekly
                </label>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">
                  Week in Review
                </label>
              </div>
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">
                  Podcasts
                </label>
              </div>
            </div>
          </div>
        </div>
        <form className="signup-form" noValidate>
          <div className="input-wrapper">
            <img src="./icons/Envelope.svg" />
            <input
              type="email"
              autoComplete="off"
              placeholder="Your Email"
              aria-label="Enter your email"
              className="email-input"
            />
          </div>
          <button type="submit" className="btn btn-theme">
            Subscribe *
          </button>
        </form>
        <div className="terms-agreement">
          <span className="asterisk">*</span> Yes, I agree to the{" "}
          <a href="#" className="terms-link">
            terms
          </a>{" "}
          and{" "}
          <a href="#" className="privacy-link">
            privacy policy
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
