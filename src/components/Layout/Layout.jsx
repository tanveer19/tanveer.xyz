import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Resume from "../resume/ResumeAnimation";
import PortfolioAnimation from "../portfolio/PortfolioAnimation";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Resume></Resume>
      <section id="work" className="section theme-light dark-bg">
        <div className="container max-w-[1050px] w-full mx-auto">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <PortfolioAnimation />
        </div>
      </section>
      {/* End Portfolio Section */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
