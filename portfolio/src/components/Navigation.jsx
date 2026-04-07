import { useState, useEffect } from "react";
import "./Navigation.css";
import { Menu, X } from "lucide-react";

export default function Navigation() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "AI Exploration", href: "#ai" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>

        <div className="nav-container">

          {/* LOGO */}
          <div
            className="logo gradient-text"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            PP
          </div>

          {/* DESKTOP MENU */}
          <div className="nav-links">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.href)}>
                {item.label}
                <span className="underline"></span>
              </button>
            ))}
          </div>

          {/* MOBILE ICON */}
          <div className="mobile-menu-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => scrollToSection(item.href)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}