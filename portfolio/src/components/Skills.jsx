import "./Skills.css";
import { Coffee, Database, Code, Cpu, Wrench } from "lucide-react";

export default function Skills() {

  const skillCategories = [
  {
    icon: <Coffee />,
    title: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: <Code />,
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "REST API", level: 85 },
      { name: "JDBC", level: 75 },
    ],
  },
  {
    icon: <Database />,
    title: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    icon: <Cpu />,
    title: "AI / ML",
    skills: [
      { name: "NLP Basics", level: 65 },
      { name: "API Integration", level: 75 },
    ],
  },
  {
    icon: <Wrench />,
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        <h2 className="gradient-text">Skills & Expertise</h2>

        <div className="skills-grid">

          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">

              <div className="skill-header">
                <div className="icon-box">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">

                  <div className="skill-top">
                    <span>{skill.name}</span>
                    <span className="percent">{skill.level}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: skill.level + "%" }}
                    ></div>
                  </div>

                </div>
              ))}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}