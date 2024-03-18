import React from "react";
import Social from "../Social";
import Skill from "../Skill/Skill";
import Service from "../service/ServiceAnimation";

const About = () => {
  return (
    <div>
      <section id="about" className="section theme-light dark-bg">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
            <div className="" data-aos="fade-up" data-aos-duration="1200">
              <div className="about-me">
                <div className="img">
                  <div className="img-in flex">
                    <img src="/img/about/about-me-3.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Front-end Developer</p>
                  <h3>Tanveer Hossain Jony</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="ml-5 md:ml-24"
              // data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    Hands-on experience in JavaScript, React, MongoDB and
                    Firebase Database. I have worked using Route 53, EC2,
                    Lightsail of AWS to manage WordPress websites.
                  </p>
                </div>
                <div className="info-list">
                  <div className="md:flex justify-between mr-14">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Tanveer Hossain Jony</span>
                        </li>

                        <li>
                          <label>Age: </label>
                          <span>37 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Dhaka</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>
                            <a href="tel:+8801600312882">Call Me</a>
                          </span>
                        </li>

                        <li>
                          <label>Telegram: </label>
                          <span>@Thjbd19</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url("img/border-dark.png")`,
            }}
          ></div>
          {/* End separated */}

          <div className="ml-5">
            <div className="title">
              <h3>What I do?</h3>
            </div>

            <Service></Service>
          </div>

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url("img/border-dark.png")`,
            }}
          ></div>
          {/* End separated */}

          <div className="ml-5">
            <div className="title">
              <h3>Skills</h3>
            </div>
            <Skill></Skill>
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url("img/border-dark.png")`,
            }}
          ></div>
          {/* End separated */}
        </div>
      </section>
    </div>
  );
};

export default About;
