import { useEffect, useState } from "react";

export function useSequentialTypewriter(lines: string[], speed = 50) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentTypedLine, setCurrentTypedLine] = useState("");
  useEffect(() => {
    setVisibleLines([]);
    setCurrentLineIndex(0);
    setCurrentTypedLine("");
  }, [lines]);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      const charIndex = currentTypedLine.length;

      if (charIndex < currentLine.length) {
        const delay = speed * (Math.random() * 2);
        timeoutId = setTimeout(() => {
          setCurrentTypedLine((prev) => prev + currentLine.charAt(charIndex));
        }, delay);
      } else {
        setVisibleLines((prev) => [...prev, currentLine]);
        setCurrentTypedLine("");
        setCurrentLineIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [lines, currentTypedLine, currentLineIndex, speed]);

  return [...visibleLines, currentTypedLine];
}
