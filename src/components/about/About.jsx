import React from "react";
import "./about.css";
import ME from "../../assets/hiking.jpg";
import { FaAward } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

const about = ({ setActiveNav }) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7+ years as an engineering professional</small>
            </article>

            <article className="about__card">
              <FaChartLine className="about__icon" />
              <h5>Entrepreneur</h5>
              <small>2 successful E-Commerce exits</small>
            </article>

            <article className="about__card">
              <ImBooks className="about__icon" />
              <h5>Student of life</h5>
              <small>Consuming knowledge is my hobby</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            ratione quaerat. Id sapiente fuga nostrum illo nulla atque ratione
            hic provident, cupiditate molestiae accusamus ducimus eos reiciendis
            ab aliquam aperiam!
          </p>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className="btn btn-primary"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
