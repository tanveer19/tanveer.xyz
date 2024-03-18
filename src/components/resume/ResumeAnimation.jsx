import React from "react";
// import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Intern – MERN Stack Developer`,
    jobType: `The Bengal Studio | Remote`,
    jobDuration: `Oct, 2023 – Dec, 2023`,
    timeDuraton: `Full Time`,
    compnayName: "The Bengal Studio ",
    jobDescription: `Responsibilities:
    ❖ Implemented Firebase real-time database, enhancing the user experience by using React.
    ❖ Transformed static HTML components into dynamic React components using cutting-edge packages.
    ❖ Implemented a secure Sign-In page by integrating Firebase SMS authentication.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Executive – Web Maintenance`,
    jobType: `Khan Brothers Group Australia| Onsite`,
    jobDuration: `Sept, 2021 – July, 2023`,
    timeDuraton: `Full Time`,
    compnayName: "Khan Brothers Group Australia",
    jobDescription: `Responsibilities:
    ❖ Demonstrated proficiency in utilizing Amazon Web Services (AWS), including Route 53, EC2, Lightsail.
    ❖ Oversaw the maintenance of 5 WordPress websites, implementing updates, troubleshooting issues.
    ❖ Effectively supervised and coordinated a team of 3 individuals, ensuring optimal workflow.`,
    delayAnimation: "100",
  },
];

const educatonContent = [
  {
    passingYear: "2023-2023",
    degreeTitle: "Complete Web Development",
    instituteName: "Programming Hero",
  },
  {
    passingYear: "2016-2016",
    degreeTitle: "Web Application Development – PHP",
    instituteName: "BITM",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container max-w-[1120px] w-full mx-auto ">
          <div className="title ml-5">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row flex flex-wrap ">
                  <div className="col-md-4 col-xl-3 w-full md:w-1/3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9 w-full md:w-2/3">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url("img/border-dark.png")`,
            }}
          ></div>
          {/* End separated */}

          {/* <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div> */}

          <div className="row align-items-center">
            {/* <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
            </div> */}
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
