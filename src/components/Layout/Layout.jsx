import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import About from "../About/About";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
