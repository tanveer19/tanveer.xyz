import React from "react";
import Contact from "./Contact";
import Map from "./Map";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <section id="contactus" className="section theme-light dark-bg">
        <div className="container max-w-[1120px] w-full mx-auto">
          <div className="row flex flex-wrap">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb w-full md:w-2/5 "
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 m-15px-tb w-full md:w-3/5"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form mx-2">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            <div
              className="col-12 w-full"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Map />
              {/* End google-map */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  );
};

export default ContactUs;
