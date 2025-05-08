import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed: number = 150) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (index < text.length) {
      const delay = speed * (Math.random() * 2);
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

  return displayedText;
}
