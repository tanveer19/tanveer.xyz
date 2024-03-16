import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map mx-2">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5410070165753!2d90.3722743760522!3d23.799353686893856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c732b114e169%3A0x43b3a7043ed48d1d!2sEast%20Kazipara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710595813475!5m2!1sen!2sbd"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
