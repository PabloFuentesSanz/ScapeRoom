import React from "react";
import "./TypewriterText.css";
import { useTypewriter } from "../../hooks/useTypewriter";

const TypewriterText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 150 }) => {
  const displayedText = useTypewriter(text, speed);

  return (
    <div className="typewriter__container">
      <p className="typewriter__text" data-text={displayedText}>
        {displayedText}
      </p>
      <span className="typewriter__cursor" />
    </div>
  );
};

export default TypewriterText;
