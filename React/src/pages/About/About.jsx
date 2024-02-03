import React from "react";

const About = () => {
  return (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things</h2>
        <div className="about-info">
          <img src="img/background.jpg" alt="" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              I am dynamic, honest, punctual, hardworking and I like to give
              attention to details.
            </p>
            <p>I love travelling, walking and playing chess occasionally.</p>
            <p>Skills: HTML, CSS, JS</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
