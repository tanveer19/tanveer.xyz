import React from "react";

const Contact = () => {
  return (
    <div>
      <main id="contact">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me:</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>
            thjbd19 at gmail.com
          </div>

          <div>
            <span className="text-secondary">Address:</span>
            Dhaka, Bangladesh.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
