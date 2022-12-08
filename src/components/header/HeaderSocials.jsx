import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://wwww.linkedin.com/in/johnminryu" target="#">
        <BsLinkedin />
      </a>
      <a href="https://wwww.github.com/smashyou" target="#">
        <BsGithub />
      </a>
      <a href="https://wwww.instagram.com/johnminryu" target="#">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
