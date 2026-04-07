import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdDownload, MdSend } from "react-icons/md";
export default function Contact() {

  const contactLinks = [
    {
      icon: <FaEnvelope />,

      label: "Email",
      value: "prajyotpatil17004@gmail.com",
      href: "mailto:prajyotpatil17004@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/prajyot001",
      href: "https://github.com/prajyot001",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/prajyot-patil-prajyot001",
      href: "https://linkedin.com/in/prajyot-patil-prajyot001",
    },
  ];

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* TITLE */}
        <h2 className="gradient-text">Let's Connect</h2>

        <p className="contact-subtext">
          Open to collaboration and opportunities
        </p>

        {/* CONTACT CARDS */}
        <div className="contact-grid">
          {contactLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="contact-card">

              <div className="icon-box">{link.icon}</div>

              <h3>{link.label}</h3>
              <p>{link.value}</p>

            </a>
          ))}
        </div>

        {/* FORM */}
        <div className="contact-form-box">

          <h3><MdSend size={20}/> Send Me a Message</h3>

          <p>Let's build something amazing together.</p>

          <form className="contact-form">

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit" className="btn-primary">
              Send Message
            </button>

          </form>

        </div>

        {/* RESUME */}
        <div className="resume-btn">
          <button>
            <MdDownload size={18}/> Download Resume
          </button>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <p>© 2026 Prajyot Patil</p>
          <p>Backend Developer • AI Explorer</p>
        </div>

      </div>

    </section>
  );
}