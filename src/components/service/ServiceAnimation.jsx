import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "PSD/Figma to HTML",
    descriptions: `Your relaible partner to convert PSD to HTML using cutting edge technologies`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "PSD/Figma to React",
    descriptions: `Your relaible partner to convert PSD to React using cutting edge technologies`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "WordPress",
    descriptions: `I like to work with WordPress too! Let me know if you a fan of WordPress`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row flex gap-6">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
