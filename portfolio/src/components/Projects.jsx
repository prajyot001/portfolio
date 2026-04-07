import "./Projects.css";
import { ExternalLink, Lightbulb, Code, Zap } from "lucide-react";

export default function Projects() {

  const projects = [
    {
      name: "Inventory & Billing System",
      image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7",
      problem: "Manual billing is slow, error-prone, and hard to track.",
      solution: "Built Java system with MySQL to automate billing and manage stock.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      features: [
        "Role-based login",
        "Stock management",
        "Reports & analytics",
        "Invoice system"
      ],
      future: [
        "AI-based sales prediction",
        "Convert to web app",
        "Barcode scanning",
        "Multi-store support"
      ],
      github: "#",
    },
    {
      name: "Research Query Builder",
      image: "https://images.unsplash.com/photo-1678845530864-18a666ca9762",
      problem: "Finding research papers is time-consuming.",
      solution: "Built API-based system using arXiv & Semantic Scholar.",
      tech: ["Python", "NLP", "APIs", "Flask"],
      features: [
        "Multi-source search",
        "Smart filtering",
        "Ranking system",
        "Export results"
      ],
      future: [
        "AI semantic search",
        "Recommendations",
        "Graph visualization",
        "Integration tools"
      ],
      github: "#",
    }
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        <h2 className="gradient-text">Featured Projects</h2>

        {projects.map((p, idx) => (
          <div key={idx} className="project-card">

            {/* IMAGE */}
            <div className="project-image">
              <img src={p.image} alt="project" />
            </div>

            <div className="project-content">

              {/* HEADER */}
              <div className="project-header">
                <h3>{p.name}</h3>
                <a href={p.github} target="_blank">
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* PROBLEM + SOLUTION */}
              <div className="project-boxes">

                <div className="box problem">
                  <h4><Zap size={16}/> Problem</h4>
                  <p>{p.problem}</p>
                </div>

                <div className="box solution">
                  <h4><Code size={16}/> Solution</h4>
                  <p>{p.solution}</p>
                </div>

              </div>

              {/* TECH */}
              <div className="tech">
                {p.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* FEATURES */}
              <ul className="features">
                {p.features.map((f, i) => (
                  <li key={i}>▹ {f}</li>
                ))}
              </ul>

              {/* FUTURE */}
              <div className="future">
                <h4><Lightbulb size={16}/> Future Scope</h4>
                {p.future.map((f, i) => (
                  <p key={i}>→ {f}</p>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}