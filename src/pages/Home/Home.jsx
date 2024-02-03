import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main id="home">
        <h1 className="lg-heading">
          Tanveer
          <span className="text-secondary">Hossain</span>
          Jony
        </h1>

        <h2 className="sm-heading">Front End Developer</h2>

        <h2 className="sm-heading">
          <Link to="/work" className="nav-link">
            🔥 My Work 🔥
          </Link>
        </h2>

        <div className="icons">
          <a href="https://github.com/tanveer19" target="_blank">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://twitter.com/thjbd19" target="_blank">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tanveer-hossain-jony/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </main>
      {/* <div className="element"></div> */}
    </div>
  );
};

export default Home;
