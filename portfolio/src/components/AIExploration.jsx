import "./AIExploration.css";
import { Brain, Sparkles, BookOpen, TrendingUp } from "lucide-react";

export default function AIExploration() {

  const explorations = [
  {
    icon: <Brain />,
    title: "NLP-Based Search Systems",
    description:
      "Developing intelligent search systems using natural language processing to understand context and semantic meaning.",
    tech: ["NLTK", "spaCy", "Transformers"],
  },
  {
    icon: <BookOpen />,
    title: "Research API Integration",
    description:
      "Integrating APIs like arXiv and Semantic Scholar to fetch, process, and analyze research papers programmatically.",
    tech: ["REST APIs", "JSON Processing", "Data Aggregation"],
  },
  {
    icon: <Sparkles />,
    title: "Machine Learning Applications",
    description:
      "Applying machine learning models for prediction, classification, and recommendation systems.",
    tech: ["scikit-learn", "Pandas", "NumPy"],
  },
  {
    icon: <TrendingUp />,
    title: "AI-Powered Backend Systems",
    description:
      "Combining backend engineering with AI to build intelligent, scalable, and data-driven applications.",
    tech: ["Spring Boot + AI", "Microservices", "API Design"],
  },
];

  return (
    <section id="ai" className="ai-section">

      {/* Background */}
      <div className="ai-bg"></div>

      <div className="ai-container">

        <h2 className="gradient-text">AI Exploration</h2>

        <p className="ai-subtext">
          Bridging backend development with AI technologies
        </p>

        {/* CARDS */}
        <div className="ai-grid">

          {explorations.map((item, idx) => (
            <div key={idx} className="ai-card">

              <div className="ai-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="ai-tech">
                {item.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* FINAL BOX */}
        <div className="ai-highlight">

          <h3>Why AI + Backend?</h3>

          <p>
            I believe the future of software lies in intelligent systems that understand and learn.
            By combining backend engineering with AI, I build smart and adaptive solutions.
          </p>

        </div>

      </div>

    </section>
  );
}