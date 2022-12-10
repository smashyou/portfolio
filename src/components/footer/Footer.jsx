import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Footer = ({ setActiveNav }) => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        John Min Ryu
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#home" onClick={() => setActiveNav("#home")}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={() => setActiveNav("#about")}>
            About
          </a>
        </li>
        <li>
          <a href="/#experience" onClick={() => setActiveNav("#experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="/#services" onClick={() => setActiveNav("#services")}>
            Services
          </a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#contact" onClick={() => setActiveNav("#contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="#">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/johnminryu" target="#">
          <FiInstagram />
        </a>
        <a href="https://github.com/smashyou" target="#">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; johnminryu.com All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
