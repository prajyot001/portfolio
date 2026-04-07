import "./App.css";

import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import AIExploration from "./components/AIExploration.jsx";
import Contact from "./components/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="app">

      {/* 🌌 Background Effects */}
      <div className="bg-effects">
        <div className="bg-circle purple"></div>
        <div className="bg-circle pink"></div>
        <div className="bg-circle blue"></div>
      </div>

      {/* Content */}
      <div className="content">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIExploration />
        <Contact />
        <ScrollToTop />
      </div>

    </div>
  );
}