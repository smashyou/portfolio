import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// www.dribbble.com/Alien_pixels
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://www.github.com/smashyou",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://www.github.com/smashyou",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    github: "https://www.github.com/smashyou",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 4",
    github: "https://www.github.com/smashyou",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 5",
    github: "https://www.github.com/smashyou",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 6",
    github: "https://www.github.com/smashyou",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h5>(Coming Soon... Currently just some placeholders)</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="/">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="/">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
