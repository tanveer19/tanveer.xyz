import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )

      .then(
        () => {
          console.log("SUCCESS!");
          reset();
          setMessage("Your message has been sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row flex flex-wrap">
          <div className="col-md-6 w-1/2">
            <div className="form-group mb-3 mr-3">
              <input
                type="text"
                className="form-control w-full py-2 px-3 block theme-light "
                placeholder="Full name"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6 w-1/2">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control w-full py-2 px-3 block theme-light"
                placeholder="Email address"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12 w-full">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control w-full py-2 px-3 block theme-light"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12 w-full">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control w-full py-2 px-3 block theme-light"
                placeholder="Type comment"
                {...register("comment", { required: true })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">Comment is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">Send Message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Contact;
