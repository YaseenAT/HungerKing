import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [showmenu, setShowMenu] = useState(false);

  const handleCallMenu = () => {
    setShowMenu(!showmenu);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="sdsd" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#memu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          {" "}
          Log In / Register
        </a>
        <div></div>

        <a href="#home" className="p__opensans">
          Book a Table
        </a>
      </div>
      <div className="smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={"27"}
          // className="app_smallScreen-overlay-logo"
          onClick={() => {
            handleCallMenu();
          }}
        />
        {showmenu ? (
          <div className="app__navbar-links-overlay">
            <MdOutlineRestaurantMenu
              color="#fff"
              fontSize={"27"}
              className="overlay_logo"
              onClick={() => {
                setShowMenu(!showmenu);
              }}
            />
            <ul className="app__navbar-links-sScreen">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#memu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
