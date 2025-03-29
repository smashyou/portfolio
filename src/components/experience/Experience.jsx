import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>My Tools </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* FRONTEND DEVELOPMENT */}
        <div className="experience__category experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__scroll-wrapper">
            <div className="experience__scroll-content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React/Next.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          {/* Fade sits here outside scrollable div */}
          <div className="experience__fade-indicator"></div>
        </div>

        {/* AI / BACKEND DEVELOPMENT */}
        <div className="experience__category experience__backend">
          <h3>AI / Backend Development</h3>
          <div className="experience__scroll-wrapper">
            <div className="experience__scroll-content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Spring Boot</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Flask</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>PyTorch</h4>
                  <small className="text-light">Pre-intermdiate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>NoSQL</h4>
                  <h6>Amazon DynamoDB, MongoDB, Apache Cassandra</h6>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Relational DB</h4>
                  <h6>SQL, PostgreSQL, MySQL</h6>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          {/* Fade sits here outside scrollable div */}
          <div className="experience__fade-indicator"></div>
        </div>
        {/* Cloud / DevOps */}
        <div className="experience__category experience__clouddevops">
          <h3>Cloud / DevOps</h3>
          <div className="experience__scroll-wrapper">
            <div className="experience__scroll-content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Docker</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Kubernetes</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>AWS</h4>
                  <h6>EKS, ECR, Route 53, ACM</h6>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>GitHub Actions</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          {/* Fade sits here outside scrollable div */}
          <div className="experience__fade-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default experience;
