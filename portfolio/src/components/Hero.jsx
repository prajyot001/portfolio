import "./Hero.css";

import { Download, ChevronDown, MapPin, Calendar, Briefcase } from "lucide-react";

export default function Hero() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">

      <div className="hero-container">

        <div className="hero-content">

          {/* Profile Image */}
          <div className="hero-image">
            <div className="glow"></div>

            <img
              src="src/assets/profile.jpg"
              alt="profile"
            />
          </div>

          {/* Text Content */}
          <div className="hero-text">

            <h1 className="gradient-text">Prajyot Patil</h1>

            <h2>Backend Developer + AI Explorer</h2>

            <p>
              Building scalable backend systems with <span>Java & Spring Boot</span> while
              exploring <span>AI-powered solutions</span>.
            </p>

            {/* Info Row */}
            <div className="hero-info">
              <div>
                <Briefcase size={16} /> Open to Opportunities
              </div>
              <div>
                <MapPin size={16} /> India
              </div>
              <div>
                <Calendar size={16} /> Available for Projects
              </div>
            </div>

            {/* Buttons */}
            <div className="hero-buttons">

              <button onClick={() => scrollToSection("projects")} className="btn-primary">
                View Projects
              </button>

              <button onClick={() => scrollToSection("contact")} className="btn-outline">
                Contact Me
              </button>

              <button className="btn-outline">
                <Download size={18} /> Resume
              </button>

            </div>

          </div>

        </div>

        {/* Scroll Down Icon */}
        <div className="scroll-down">
          <ChevronDown size={32} />
        </div>

      </div>

    </section>
  );
}