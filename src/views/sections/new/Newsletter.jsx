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
    console.log("qwer");
  };

  return (
    <section id="newsletter">
      <div className="signup-container">
        <div className="signup-header">
          <h2 className="signup-title">Don't Want to Miss Anything?</h2>
          <img
            loading="lazy"
            src="./icons/NewsletterArrow.svg"
            alt="Newsletter icon"
          />
        </div>
        <div className="signup-content">
          <h5 className="signup-title">Sign up for Newsletters</h5>
          <div className="checkbox-grid">
            <div className="column">
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">Daily Newsletter</label>
              </div>
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">Event Updates</label>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <input type="checkbox" checked className="checkbox-input" />
                <label htmlFor="">Advertising Updates</label>
              </div>
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">Startups Weekly</label>
              </div>
            </div>
            <div className="column">
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">Week in Review</label>
              </div>
              <div className="row">
                <input type="checkbox" className="checkbox-input" />
                <label htmlFor="">Podcasts</label>
              </div>
            </div>
          </div>
        </div>
        <form className="signup-form" noValidate onSubmit={handleSubmit}>
          <div
            className={`input-wrapper
          ${isSubscribed ? "input-wrapper-succeed" : ""}
          ${error ? "input-wrapper-error" : ""}`}
          >
            <img
              src={
                isSubscribed ? "./icons/EnvelopeGreen.svg" : 
                error ? "./icons/EnvelopeRed.svg" :
                "./icons/Envelope.svg"
              }
              alt="Envelope icon"
            />
            <input
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isSubscribed ? "Subscribed" : "Your Email"}
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
