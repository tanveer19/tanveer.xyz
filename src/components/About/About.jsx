import React from "react";
import Social from "../Social";
import Skill from "../Skill/Skill";
import Service from "../service/ServiceAnimation";

const About = () => {
  return (
    <div>
      <section id="about" className="section theme-light">
        <div className="max-w-[1050px] w-full mx-auto">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
            <div className="" data-aos="fade-up" data-aos-duration="1200">
              <div className="about-me">
                <div className="img">
                  <div className="img-in flex">
                    <img
                      src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
                      width={626}
                      height={630}
                      alt="about"
                    />
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
              className="ml-5"
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
