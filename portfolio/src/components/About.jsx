import "./About.css";
import { Code2, Brain, Target, Award, BookOpen, Rocket } from "lucide-react";

export default function About() {
  const card = [
    { icon: <Code2 />, value: "10+", label: "Projects Built" },
    { icon: <BookOpen />, value: "5+", label: "Technologies" },
    { icon: <Rocket />, value: "2+", label: "Major Apps" },
    { icon: <Award />, value: "100%", label: "Commitment" },
  ];
  const stats = [
    { icon: <Code2 />, value: "10+", label: "Projects Built" },
    { icon: <BookOpen />, value: "5+", label: "Technologies" },
    { icon: <Rocket />, value: "2+", label: "Major Apps" },
    { icon: <Award />, value: "100%", label: "Commitment" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="gradient-text">About Me</h2>

        <p className="about-subtext">
          A passionate developer focused on backend systems and AI solutions.
        </p>

        {/* STATS */}
        <div className="about-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CARDS */}
        <div className="about-cards">
          <div className="card">
            <div className="card-icon">
              <Code2 />
            </div>
            <h3>What I'm Learning</h3>
            <p>Java, Spring Boot and AI/ML concepts with NLP.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Target />
            </div>

            <h3>Problems I Solve</h3>
            <p>Scalable backend systems and AI-powered solutions.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Brain />
            </div>
            <h3>My Goal</h3>
            <p>Become backend + AI architect.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
