import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../componets/styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import faceBook from "../componets/Imags/SocialIcon/facebook.png";
// import WhatsApp from "../componets/Imags/SocialIcon/whatsapp.png";
// import LinkedIN from "../componets/Imags/SocialIcon/linkedin.png";

import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const form = useRef();

  


  const sendEmail = (e) => {
    e.preventDefault();



    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;
  
    if (userName === "" || userEmail === "" || message === "") {
      alert("Please fill in all the required fields");
      return;
    }




    emailjs
      .sendForm(
        "service_f4fr6e3",
        "template_0azbcly",
        form.current,
        "xa22aNJ4xf-5JlQBE"
      )
      .then(
        (result) => {
          form.current.reset();
          alert("Message sent successfully!");
        },
       
      );
  };

  const phoneNumber = "+201115446452";
  const Email = "Marblesegypt007@gmail.com";
  const location = "https://maps.app.goo.gl/ZZbL3iQbXNKvKUcN9";

  return (
    <div className="Contact" id="Contact">
      <div className="Email">
        <div className="us">
          <span>CONTACT US</span>
          <h3>Why People Choose Us</h3>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input type="text" name="user_name" placeholder="Enter Your Name" />
          {/* <label>Email</label> */}
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />
          {/* <label>Message</label> */}
          <textarea
            name="message"
            placeholder="Enter Your Message"
            style={{ height: "100px", padding: "20px", resize: "none" }}
            maxLength={100}
          />
          <input type="submit" id="submit" value="Send" />
        </form>
      </div>

      <div className="details">
        <div>
          <p>Where to find us?</p>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhoneAlt} /> :
            </span>{" "}
            <a
              href={`tel:${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here To Call US
            </a>
          </p>

          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> :
            </span>{" "}
            <a
              href={`mailto:${Email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here To Send Massege
            </a>
          </p>

          <p>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> :
            </span>{" "}
            <a href={location} target="_blank" rel="noopener noreferrer">
            Click Here To Find US In Maps
            </a>
          </p>
          {/* <section className="SocialMedia">
            <span>
              <a href="">
                <img src={faceBook} />
              </a>
            </span>
            <span>
              <a href="">
                <img src={WhatsApp} />
              </a>
            </span>

            <span>
              <a href="">
                <img src={LinkedIN} />
              </a>
            </span>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
