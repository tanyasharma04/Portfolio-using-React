import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.linkedin.com/in/tanya-sharma-a2417b25a/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>

          <a href="https://github.com/tanyasharma04" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
