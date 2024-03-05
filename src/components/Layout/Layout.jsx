import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Resume from "../resume/ResumeAnimation";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Resume></Resume>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
