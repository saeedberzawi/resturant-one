import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo-chef.png";
import "./navbar.css";

// style way 2
const mystyle = {
  fontSize: "20px",
  color: "white",
  textDecoration: "none",
  fontFamily: "var(--font-family)",
};

const Menu = () => (
  <ul className="navbar__list">
    <NavLink
      to="/"
      // style step 1
      style={{
        fontSize: "20px",
        color: "white",
        textDecoration: "none",
        fontFamily: "var(--font-family)",
      }}
    >
      Home
    </NavLink>
    <NavLink to="/menu" style={mystyle}>
      Menu
    </NavLink>
    <NavLink to="/contact" style={mystyle}>
      Contact
    </NavLink>
    <NavLink to="/about" style={mystyle}>
      About
    </NavLink>
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <p className="navbar__logo-text">
          UNION<span>-BRZ</span>
        </p>
      </div>
      <Menu />
      <div className="toggle">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="toggle__one">
            <ul>
              <li>
                <NavLink to="/" style={mystyle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" style={mystyle}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={mystyle}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={mystyle}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
