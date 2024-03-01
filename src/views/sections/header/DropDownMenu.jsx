import React from "react";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <div className="dropdown-menu">
      <nav className="container" aria-label="Main menu">
        <Link to="/overview">Overview</Link>
        <Link to="/feature">Features</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default DropDownMenu;
