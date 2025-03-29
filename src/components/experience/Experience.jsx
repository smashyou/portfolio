import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const scrollRefs = useRef([]);
  const [isScrollAtBottom, setScrollAtBottom] = useState([]);

  useEffect(() => {
    const refs = scrollRefs.current; // Stable snapshot

    const updateFade = () => {
      const updated = refs.map((ref) => {
        if (!ref) return false;
        const { scrollTop, scrollHeight, clientHeight } = ref;

        // If not scrollable OR at the bottom
        const isNotScrollable = scrollHeight <= clientHeight;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

        return isNotScrollable || isAtBottom;
      });
      setScrollAtBottom(updated);
    };

    refs.forEach((ref) => {
      if (ref) {
        ref.addEventListener("scroll", updateFade);
      }
    });

    // Trigger it once on mount to evaluate short content
    updateFade();

    return () => {
      refs.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("scroll", updateFade);
        }
      });
    };
  }, []);

  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "JavaScript", level: "Experienced" },
        { name: "Bootstrap", level: "Experienced" },
        { name: "React/Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
      ],
    },
    {
      title: "AI / Backend Development",
      skills: [
        { name: "Java", level: "Experienced" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "PHP", level: "Intermediate" },
        { name: "Node JS", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Flask", level: "Intermediate" },
        { name: "PyTorch", level: "Pre-intermdiate" },
        {
          name: "NoSQL",
          level: "Intermediate",
          extra: "Amazon DynamoDB, MongoDB, Apache Cassandra",
        },
        {
          name: "Relational DB",
          level: "Experienced",
          extra: "SQL, PostgreSQL, MySQL",
        },
      ],
    },
    {
      title: "Cloud / DevOps",
      skills: [
        { name: "Docker", level: "Experienced" },
        { name: "Kubernetes", level: "Intermediate" },
        {
          name: "AWS",
          level: "Intermediate",
          extra: "EKS, ECR, Route 53, ACM",
        },
        { name: "GitHub Actions", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>My Tools </h5>
      <h2>My Experience</h2>

      <div className="experience__outer">
        <div className="experience__container">
          {categories.map((cat, index) => (
            <div key={index} className="experience__wrapper">
              <div className="experience__category">
                <h3>{cat.title}</h3>
              </div>
              <div
                className="experience__scrollable"
                ref={(el) => (scrollRefs.current[index] = el)}
              >
                <div className="experience__scroll-content">
                  {cat.skills.map((skill, idx) => (
                    <article className="experience__details" key={idx}>
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h4>{skill.name}</h4>
                        {skill.extra && <h6>{skill.extra}</h6>}
                        <small className="text-light">{skill.level}</small>
                      </div>
                    </article>
                  ))}
                </div>
                <div
                  className={`experience__fade-indicator ${
                    isScrollAtBottom[index] ? "hidden" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
