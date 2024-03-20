import React, { useState } from "react";
import { usePostStore } from "../../../lib/postContext";

const Subscribe = () => {
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
    <section id="subscribe">
      <div className="container">
        <div className="subscribe-content">
          <div className="subscribe-text">
            <img
              src="./icons/Notification.svg"
              alt="Notification icon"
              className="subscribe-icon"
            />
            <h4>
              Subscribe to our newsletter to stay informed about latest updates
            </h4>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className={`subscribe-form
        ${isSubscribed ? "subscribe-form-succeed" : ""}
        ${error ? "subscribe-form-error" : ""}`}
          >
            <div className="subscribe-wrapper">
              <img
                src={
                  isSubscribed
                    ? "./icons/EnvelopeGreen.svg"
                    : error
                    ? "./icons/EnvelopeRed.svg"
                    : "./icons/Envelope.svg"
                }
                alt="Envelope icon"
                className="icon"
              />
              <input
                type="email"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isSubscribed ? "Subscribed" : "Your Email"}
                aria-label="Your Email"
                className="subscribe-input"
              />
            </div>
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
