import React from "react";
import Social from "../Social";
import Service from "../service/Service";

const About = () => {
  return (
    <div>
      <section id="about" className="section theme-light dark-bg">
        <div className="max-w-[1140px] w-full mx-auto">
          <div className="flex justify-center items-center">
            <div
              className="w-1/2"
              //  data-aos="fade-up" data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Ux/Ui Designer</p>
                  <h3>Nairobi Gadot</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="w-1/2"
              // data-aos="fade-up"
              // data-aos-duration="1200"
              // data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p>
                  <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
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
                          <span>(+880) </span>
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
          <Service />
          {/* End .row */}

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
