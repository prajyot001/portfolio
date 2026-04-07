import { useState, useEffect } from "react";
import "./ScrollToTop.css";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-btn" onClick={scrollToTop}>
        <ArrowUp size={22} />
      </button>
    )
  );
}