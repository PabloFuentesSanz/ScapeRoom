import React, { useEffect, useState } from "react";
import "./TypewriterText.css";

const TypewriterText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (index < text.length) {
      const delay = speed! * (Math.random() * 2);
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [index, text, speed]);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  return (
    <div className="typewriter__container">
      <h1 className="typewriter__text" data-text={displayedText}>
        {displayedText}
      </h1>
      <span className="typewriter__cursor" />
    </div>
  );
};

export default TypewriterText;
