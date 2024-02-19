import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="icons flex gap-4">
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
      {/* <footer id="main-footer">Copyright &copy; 2024</footer> */}
    </div>
  );
};

export default Footer;
