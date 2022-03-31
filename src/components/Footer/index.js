import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaStackOverflow,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-success bg-opacity-50">
      <div className="text-center">
        <h1>
        <span>
          <a href="mailto:lounsbury.naomi@gmail.com">
            <FaRegEnvelope />
          </a>
        </span>
        <span>
          <a href="https://github.com/Naomilounsbury">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="http://linkedin.com/in/naomi-lounsbury-8a847225">
            <FaLinkedin />
          </a>
        </span>
        <span>
          <a href="http://instagram.com/naomilounsbury">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href="https://stackoverflow.com/users/17155220/naomi">
            <FaStackOverflow />
          </a>
        </span>
        </h1>
      </div>
    </footer>
  );
}
