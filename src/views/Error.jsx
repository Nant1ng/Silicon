import React from "react";
import { Link } from "react-router-dom";

import Error404 from "../assets/images/404.svg";

const Error = () => {
  return (
    <main className="error-page">
      <img loading="lazy" src={Error404} alt="Page not found illustration" />
      <h1 className="error-title">Ooops!</h1>
      <p className="error-description">
        The page you are looking for is not available.
      </p>
      <div>
        <Link to="/" className="btn btn-theme">
          <img src="./icons/Home.svg" className="icon" alt="Home icon" />
          <span>Go to homepage</span>
        </Link>
      </div>
    </main>
  );
};

export default Error;
