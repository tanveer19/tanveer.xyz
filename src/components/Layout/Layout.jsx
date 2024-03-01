import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Slider></Slider>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
