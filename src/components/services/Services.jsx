import React, { useRef, useEffect, useState } from "react";
import "./services.css";
import { BiCheck, BiCheckboxSquare } from "react-icons/bi";

const Services = () => {
  const scrollRefs = useRef([]);
  const [scrolledToBottom, setScrolledToBottom] = useState([]);

  useEffect(() => {
    const refs = scrollRefs.current;

    const handleScroll = () => {
      const newStates = refs.map((ref) => {
        if (!ref) return false;
        return ref.scrollTop + ref.clientHeight >= ref.scrollHeight;
      });
      setScrolledToBottom(newStates);
    };

    refs.forEach((ref) => {
      if (ref) {
        ref.addEventListener("scroll", handleScroll);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("scroll", handleScroll);
        }
      });
    };
  }, []);

  const services = [
    {
      title: "Technical Consulting",
      items: [
        {
          label: "E-Commerce Solutions",
          subitems: [
            "Shopify store setup, customization (Liquid), and optimization",
            "Payment gateway integration, logistics, and marketing automation",
            "Analytics tracking, SEO best practices, and conversion optimization",
          ],
        },
        {
          label: "Project & Product Management Support",
          subitems: [
            "Agile/Scrum methodologies for cross-functional teams",
            "Backlog grooming, sprint planning, and stakeholder communication",
            "Risk assessment, scope management, and quality assurance",
          ],
        },
        {
          label: "Cloud & DevOps Consulting",
          subitems: [
            "AWS deployment and infrastructure setup (EC2, S3, RDS, etc.)",
            "Docker containerization and Kubernetes orchestration",
            "CI/CD pipelines and automated testing",
          ],
        },
        {
          label: "Technical Consulting & Mentorship",
          subitems: [
            "Code reviews and technical architecture guidance",
            "Best practices for version control (Git/GitHub) and documentation",
            "Training teams on new technologies and tools",
          ],
        },
      ],
    },
    {
      title: "Software Development",
      items: [
        {
          label: "Full-Stack Web Application Development",
          subitems: [
            "Front-End: React (JavaScript), HTML/CSS",
            "Back-End: Java (Spring Boot), RESTful API design, Microservices architecture",
            "Databases: RDBMS (MySQL), NoSQL (MongoDB, DynamoDB)",
          ],
        },
        {
          label: "Mobile Application Development",
          subitems: [
            "Native iOS (Swift) and Android (Java/Kotlin)",
            "Cross-functional integration of RESTful APIs and cloud services",
          ],
        },
        {
          label: "Microservices Architecture & Distributed Systems",
          subitems: [
            "Designing loosely coupled, scalable services",
            "Integrating message queues or event-driven systems",
            "Ensuring high availability and fault tolerance",
          ],
        },
      ],
    },
    {
      title: "Social Media & Digital Media Marketing",
      items: [
        {
          label: "Paid Advertising Campaigns",
          subitems: [
            "Google Ads (Search, Display)",
            "Facebook & Instagram Ads",
            "Audience targeting, budget optimization, and conversion tracking",
          ],
        },
        {
          label: "Content Strategy & Creation",
          subitems: [
            "Developing engaging, brand-aligned posts and copywriting",
            "Planning a content calendar for consistent, on-brand messaging",
            "Using visuals (images, short videos) to increase engagement",
          ],
        },
        {
          label: "Analytics & Performance Tracking",
          subitems: [
            "Setting up and interpreting platform analytics (e.g., Facebook Insights, Google Analytics)",
            "Identifying KPIs (click-through rate, conversion rate, return on ad spend)",
            "Generating actionable insights to fine-tune campaigns",
          ],
        },
        {
          label: "Audience Segmentation & Growth",
          subitems: [
            "Building custom audience lists, lookalike audiences, or retargeting campaigns",
            "Community management (responding to comments, messages)",
            "Influencer outreach and partnership strategies",
          ],
        },
        {
          label: "E-Commerce Integration",
          subitems: [
            "Driving traffic to online stores (e.g., Shopify) and optimizing landing pages",
            "Designing remarketing funnels to recover abandoned carts and boost sales",
            "Syncing product catalogs with social commerce platforms",
          ],
        },
        {
          label: "Brand Positioning & Reputation Management",
          subitems: [
            "Developing or refining brand voice and visual identity for social channels",
            "Monitoring brand mentions, managing customer feedback, and resolving issues proactively",
            "Ensuring consistent, positive representation of the brand across platforms",
          ],
        },
        {
          label: "Growth Hacking Techniques",
          subitems: [
            "A/B testing of ad creatives, landing pages, and marketing messages",
            "Implementing viral loops, referral incentives, or limited-time offers",
            "Experimenting with emerging platforms or features (Reels, Stories, etc.)",
          ],
        },
      ],
    },
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{service.title}</h3>
            </div>

            <div
              className="service__scroll-wrapper"
              ref={(el) => (scrollRefs.current[index] = el)}
            >
              <ul className="service__list">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <BiCheck className="service__list-icon" />
                    <p>{item.label}</p>
                    {item.subitems && (
                      <ul className="service__sublist">
                        {item.subitems.map((sub, subidx) => (
                          <li key={subidx}>
                            <BiCheckboxSquare className="service__sublist-icon" />
                            <p>{sub}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`service__fade-indicator ${
                scrolledToBottom[index] ? "hidden" : ""
              }`}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
