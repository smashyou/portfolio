import React from "react";
import "./about.css";
import ME from "../../assets/hiking.jpg";
import { FaAward } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

const about = () => {
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
            John Ryu is a software engineer and aspiring Entrepreneur with a
            proven track record of turning innovative ideas into impactful
            products. After earning his Bachelor of Science in Computer Science
            from Temple University, he dove headfirst into roles at both
            startups and major tech companies, including Comcast, where he
            helped develop the Xfinity Flex streaming platform and enhance the
            cloud-based X1 Guide interface for millions of customers. Alongside
            these industry achievements, John has also launched his own
            e-commerce venture and led multiple cross-functional projects,
            consistently demonstrating a can-do attitude, grit, and a relentless
            drive for learning new technologies.
          </p>
          <p>
            Guided by the mindset of a “student of life,” John embodies the
            principle of lifelong learning, taking joy in every opportunity to
            acquire new skills and tackle fresh challenges. He believes in
            “being the energy you want to attract,” maintaining a positive,
            growth-oriented perspective to inspire collaboration and innovation
            within his teams. His personal mantra—“make sure the choices you
            make are worth the losses you will take”—reflects his commitment to
            thoughtful decision-making and resilience. By merging technical
            expertise with a genuine passion for continuous improvement, John
            strives to create solutions that positively impact businesses and
            end-users alike.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
