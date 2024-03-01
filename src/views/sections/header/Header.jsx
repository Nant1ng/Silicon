import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

import Silicon from "../../../assets/images/Silicon.svg";

import DropDownMenu from "./DropDownMenu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="nav-item">
            <a id="logo" href="/">
              <img src="Silicon.svg" alt="Silicon icon" />
              
              <img
                className="silicon-logo-text"
                src="../../../assets/images/Dilicon-logo-text.svg"
                alt="Silicon logo text"
              />
            </a>
            <nav className="nav-menu">
              <a href="/overview">Overview</a>
              <a href="/features">Features</a>
              <a href="/news">News</a>
              <a href="/contact">Contact</a>
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
            <button className="btn-theme">
              <i className="fa-regular fa-user" />
              Sign in / up
            </button>
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
