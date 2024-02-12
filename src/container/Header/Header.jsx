import React from "react";

import "./Header.css";
import {images} from "../../constants";
import { SubHeading } from "../../components";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info" >
      <SubHeading tittle="Chase the new flavour" />
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        tell us about menu and explore the wine enjoy environment tell us about
        menu and explore the wine enjoy environment tell us about menu and
        explore the wine enjoy environment
      </p>
      <button className="custom__button" type="button" >Explore</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_image" />
    </div>
  </div>
);

export default Header;
