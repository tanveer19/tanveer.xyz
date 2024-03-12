import React from "react";
import Social from "../Social";
import Skill from "../Skill/Skill";
import Service from "../service/ServiceAnimation";
import { GiBeard } from "react-icons/gi";

const About = () => {
  return (
    <div>
      <section id="about" className="section theme-light">
        <div className="max-w-[1050px] w-full mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-1/2" data-aos="fade-up" data-aos-duration="1200">
              <div className="about-me">
                <div className="img">
                  <div className="img-in flex">
                    {/* <img src="img/about/about-me.jpg" alt="about" /> */}
                    <GiBeard size={384} />
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
              className="w-1/2"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Front-end Developer. I'm from Dhaka. I code and create
                    web elements for amazing people around the world. I like
                    work with new people. New people new Experiences.
                  </p>
                </div>
                <div className="info-list">
                  <div className="flex justify-between">
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
                            <a
                              className="bg-green-300"
                              href="https://call.whatsapp.com/voice/u20fsp76St16GhbML9k6Z8"
                            >
                              WhatsApp
                            </a>
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

          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Service></Service>

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url("img/border-dark.png")`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Skills</h3>
          </div>
          <Skill></Skill>

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
