import React from "react";

// const conctInfo = {
//   phone: "+04 6545-9535-6515",
//   email: " nairobi-designer@domain.com",
// };

const sliderContent = {
  name: "Tanveer Hossain Jony",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services .`,
  btnText: " Resume",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="max-w-[1140px] w-full pl-5 flex justify-center">
          <div className="full-screen">
            <div className="w-full md:w-3/4 mt-16">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <p className="loop-text lead">Front-End Developer</p>
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="https://drive.google.com/file/d/18j0ZeQD7jsAoKZCoy4n_acflZcFoHyFA/view?usp=drive_link"
                    target="_blank"
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url("img/slider/home-banner2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
