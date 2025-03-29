import React from "react";
import "./services.css";
import { BiCheck, BiCheckboxSquare } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Technical Consulting</h3>
          </div>
          <div className="service__scroll-wrapper">
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>E-Commerce Solutions</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Shopify store setup, customization (Liquid), and
                      optimization
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Payment gateway integration, logistics, and marketing
                      automation
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Analytics tracking, SEO best practices, and conversion
                      optimization
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Project & Product Management Support</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Agile/Scrum methodologies for cross-functional teams</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Backlog grooming, sprint planning, and stakeholder
                      communication
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Risk assessment, scope management, and quality assurance
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Cloud & DevOps Consulting</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      AWS deployment and infrastructure setup (EC2, S3, RDS,
                      etc.)
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Docker containerization and Kubernetes orchestration</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>CI/CD pipelines and automated testing</p>
                  </li>
                </ul>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Technical Consulting & Mentorship</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Code reviews and technical architecture guidance</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Best practices for version control (Git/GitHub) and
                      documentation
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Training teams on new technologies and tools</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Fade at bottom */}
          <div className="service__fade-indicator"></div>
        </article>

        {/* SOFTWARE DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <div className="service__scroll-wrapper">
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Full-Stack Web Application Development</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Front-End: React (JavaScript), HTML/CSS</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Back-End: Java (Spring Boot), RESTful API design,
                      Microservices architecture
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Databases: RDBMS (MySQL), NoSQL (MongoDB, DynamoDB)</p>
                  </li>
                </ul>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Mobile Application Development</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Native iOS (Swift) and Android (Java/Kotlin)</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Cross-functional integration of RESTful APIs and cloud
                      services
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Microservices Architecture & Distributed Systems</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Designing loosely coupled, scalable servicese</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Integrating message queues or event-driven systems</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Ensuring high availability and fault tolerance</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Fade at bottom */}
          <div className="service__fade-indicator"></div>
        </article>

        {/* SOCIAL MEDIA MARKETING */}
        <article className="service">
          <div className="service__head">
            <h3>Social Media & Digital Media Marketing</h3>
          </div>
          <div className="service__scroll-wrapper">
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Paid Advertising Campaigns</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Google Ads (Search, Display)</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Facebook & Instagram Ads</p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Audience targeting, budget optimization, and conversion
                      tracking
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Content Strategy & Creation</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Developing engaging, brand-aligned posts and copywriting
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Planning a content calendar for consistent, on-brand
                      messaging
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Using visuals (images, short videos) to increase
                      engagement
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Analytics & Performance Tracking</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Setting up and interpreting platform analytics (e.g.,
                      Facebook Insights, Google Analytics)
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Identifying KPIs (click-through rate, conversion rate,
                      return on ad spend)
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Generating actionable insights to fine-tune campaigns</p>
                  </li>
                </ul>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Audience Segmentation & Growth</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Building custom audience lists, lookalike audiences, or
                      retargeting campaigns
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Community management (responding to comments, messages)
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>Influencer outreach and partnership strategies</p>
                  </li>
                </ul>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>E-Commerce Integration</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Driving traffic to online stores (e.g., Shopify) and
                      optimizing landing pages
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Designing remarketing funnels to recover abandoned carts
                      and boost sales
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Syncing product catalogs with social commerce platforms
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Brand Positioning & Reputation Management</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Developing or refining brand voice and visual identity for
                      social channels
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Monitoring brand mentions, managing customer feedback, and
                      resolving issues proactively
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Ensuring consistent, positive representation of the brand
                      across platforms
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Growth Hacking Techniques</p>
                <ul className="service__sublist">
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      A/B testing of ad creatives, landing pages, and marketing
                      messages
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Implementing viral loops, referral incentives, or
                      limited-time offers
                    </p>
                  </li>
                  <li>
                    <BiCheckboxSquare className="service__sublist-icon" />
                    <p>
                      Experimenting with emerging platforms or features (Reels,
                      Stories, etc.)
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Fade at bottom */}
          <div className="service__fade-indicator"></div>
        </article>
      </div>
    </section>
  );
};

export default Services;
