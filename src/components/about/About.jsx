import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import ME from "../../assets/hiking.jpg";
import { FaAward } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

const ICONS = {
  FaAward: <FaAward className="about__icon" />,
  FaChartLine: <FaChartLine className="about__icon" />,
  ImBooks: <ImBooks className="about__icon" />,
};

const About = () => {
  const scrollRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      if (!el) return;
      const isBottom =
        Math.abs(el.scrollTop + el.clientHeight - el.scrollHeight) <= 1;
      setIsAtBottom(isBottom);
    };

    if (el) {
      el.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const aboutCards = [
    {
      icon: "FaAward",
      title: "Experience",
      subtitle: "7+ years as an engineering professional",
    },
    {
      icon: "FaChartLine",
      title: "Entrepreneur",
      subtitle: "2 successful E-Commerce exits",
    },
    {
      icon: "ImBooks",
      title: "Student of life",
      subtitle: "Consuming knowledge is my hobby",
    },
  ];

  const aboutParagraphs = [
    `John Ryu is a software engineer and aspiring Entrepreneur with a proven track record of turning innovative ideas into impactful products. After earning his Bachelor of Science in Computer Science from Temple University, he dove headfirst into roles at both startups and major tech companies, including Comcast, where he helped develop the Xfinity Flex streaming platform and enhance the cloud-based X1 Guide interface for millions of customers. Alongside these industry achievements, John has also launched his own e-commerce venture and led multiple cross-functional projects, consistently demonstrating a can-do attitude, grit, and a relentless drive for learning new technologies.`,

    `Guided by the mindset of a “student of life,” John embodies the principle of lifelong learning, taking joy in every opportunity to acquire new skills and tackle fresh challenges. He believes in “being the energy you want to attract,” maintaining a positive, growth-oriented perspective to inspire collaboration and innovation within his teams. His personal mantra—“make sure the choices you make are worth the losses you will take”—reflects his commitment to thoughtful decision-making and resilience. By merging technical expertise with a genuine passion for continuous improvement, John strives to create solutions that positively impact businesses and end-users alike.`,
  ];

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* Image Column */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        {/* Content Column */}
        <div className="about__content">
          <div className="about__cards">
            {aboutCards.map((card, idx) => (
              <article className="about__card" key={idx}>
                {ICONS[card.icon]}
                <div>
                  <h5>{card.title}</h5>
                  <small>{card.subtitle}</small>
                </div>
              </article>
            ))}
          </div>

          {/* Scrollable Bio */}
          <div className="about__text-wrapper">
            <div className="about__text-scroll" ref={scrollRef}>
              {aboutParagraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
            <div
              className={`about__fade-indicator ${isAtBottom ? "hidden" : ""}`}
            />
          </div>

          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
