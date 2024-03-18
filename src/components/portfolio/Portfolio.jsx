import React from "react";
import PortfolioAnimation from "./PortfolioAnimation";

const Portfolio = () => {
  return (
    <div>
      <section id="work" className="section theme-light ">
        <div className="container max-w-[1120px] w-full mx-auto">
          <div className="title ml-5">
            <h3>My Portfolio.</h3>
          </div>
          <PortfolioAnimation />
        </div>
      </section>
      {/* End Portfolio Section */}
    </div>
  );
};

export default Portfolio;
