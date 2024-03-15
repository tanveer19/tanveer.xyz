import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const SkillContnet = [
  {
    icon: <IoLogoJavascript size={32} />,
    awardName: "JavaScript",
    // awardFor: "JavaScript",
    delayAnimation: "0",
  },
  {
    icon: <FaReact size={32} />,
    awardName: "React",
    // awardFor: "Site of the day",
    delayAnimation: "200",
  },
  {
    icon: <DiMongodb size={32} />,
    awardName: "MongoDB",
    // awardFor: "Site of the day",
    delayAnimation: "400",
  },
];

const Skill = () => {
  return (
    <>
      <div className="row grid grid-cols-1 md:grid-cols-3 ">
        {SkillContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">{val.icon}</div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Skill;
