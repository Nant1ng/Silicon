import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

import Silicon from "../../../assets/images/Silicon.svg";
import SiliconText from "../../../assets/images/Silicon-logo-text.svg";

import DropDownMenu from "./DropDownMenu";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="nav-item">
            <Link id="logo" to="/">
              <img src={Silicon} alt="Silicon icon" />

              <img
                className="silicon-logo-text"
                src={SiliconText}
                alt="Silicon logo text"
              />
            </Link>
            <nav className="nav-menu">
              <NavLink to="/overview">Overview</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
          <div className="right-side">
            <div className="theme-switch-wrapper none">
              <label htmlFor="theme-switch-mode">Light</label>
              <label className="theme-switch">
                <input id="theme-switch-mode" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label htmlFor="theme-switch-mode">Dark</label>
            </div>
            <Link className="btn btn-theme" to="/signin">
              <i className="fa-regular fa-user" />
              Sign in / up
            </Link>
          </div>
          <div className="burger-menu">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              direction="right"
            />
          </div>
        </div>
      </header>
      {isOpen ? <DropDownMenu /> : null}
    </>
  );
};

export default Header;
