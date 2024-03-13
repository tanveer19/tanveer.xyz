import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6448680931478!2d90.37347187179331!3d23.79798479279909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1ac91300137%3A0xb9c9b0f8adfb6cb4!2s472%20East%20Kazipara!5e0!3m2!1sen!2sbd!4v1710336811696!5m2!1sen!2sbd"
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
