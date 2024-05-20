import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login/Login";

const App = () => (
  <>
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </>
);

export default App;
