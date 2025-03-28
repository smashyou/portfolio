import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/reactjs_ppt.png";
import IMG2 from "../../assets/jackpotteller.png";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

// www.dribbble.com/Alien_pixels
const data = [
  {
    id: 1,
    image: IMG1,
    title: "React.js Presentation",
    subtitle:
      "An engaging presentation powered by React.js and Next.js, featuring interactive demos.",
    github: "https://www.github.com/smashyou/reactjs-presentation",
    demo: "https://reactjs-presentation.vercel.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Jackpot Teller AI",
    subtitle:
      "Provides AI‑driven jackpot number predictions, generates winning frequency graphs for each number, and includes a manual combination generator for creating custom sets of numbers.",
    github: "https://github.com/smashyou/AI_Jackpot_Generator",
    demo: "https://www.jackpotteller.com",
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Project 3",
  //   subtitle: "Project 3",
  //   github: "https://www.github.com/smashyou",
  //   demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Project 4",
  //   subtitle: "Project 4",
  //   github: "https://www.github.com/smashyou",
  //   demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Project 5",
  //   subtitle: "Project 5",
  //   github: "https://www.github.com/smashyou",
  //   demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Project 6",
  //   subtitle: "Project 6",
  //   github: "https://www.github.com/smashyou",
  //   demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, subtitle, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-content">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h6>{subtitle}</h6>
              </div>
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
