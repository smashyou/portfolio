import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import metadata from "../../../package.json";
const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        John Min Ryu
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com/in/johnminryu" target="#">
          <BsLinkedin />
        </a>
        <a href="https://github.com/smashyou" target="#">
          <FaGithub />
        </a>
        <a href="https://instagram.com/johnminryu" target="#">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; johnminryu.com All rights reserved</small>
      </div>
      <div className="footer__version">
        <small>Version {metadata.version}</small>
      </div>
    </footer>
  );
};

export default Footer;
