import { useRef } from "react";
import { useGame } from "../../contexts/GameContext";
import { useSequentialTypewriter } from "../../hooks/useSequentialTypewriter";
import "./Terminal.css";

interface TerminalProps {
  onSubmit: () => void;
}
export const Terminal: React.FC<TerminalProps> = ({ onSubmit }) => {
  const { availablePuzzles, currentHistory } = useGame();
  const inputRef = useRef<HTMLInputElement>(null);

  const typedLines = useSequentialTypewriter(currentHistory, 50);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputValue = inputRef.current?.value.trim().toLowerCase();
      if (inputValue === "yes") {
        e.preventDefault();
        onSubmit(
          // @ts-ignore: estás usando un handler que espera un FormEvent, así que puedes ignorar aquí
          { preventDefault: () => {} }
        );
        if (inputRef.current) inputRef.current.value = "";
      }
    }
  };
  return (
    <div className="terminal__container">
      <div className="terminal__header">
        <div className="terminal__title">CLERK TERMINAL v1.9.9</div>
        <div className="terminal__buttons">
          <span className="terminal__button terminal__button--red"></span>
          <span className="terminal__button terminal__button--yellow"></span>
          <span className="terminal__button terminal__button--green"></span>
        </div>
      </div>

      <div className="terminal__content">
        <div className="terminal__init">
          <p>LUMON INDUSTRIES - Terminal Seguro</p>
          <p>MDR-SYSTEM v3.1.2</p>
          <p>Todos los comandos están siendo monitorizados</p>
          <p>---------------------------------</p>
        </div>
        {typedLines.map((line, index) => (
          <div
            key={index}
            className={`terminal__line ${line.startsWith(">") ? "terminal__command" : ""}`}
          >
            {line}
          </div>
        ))}
        {availablePuzzles.map((puzzle, index) => (
          <div key={index} className={`terminal__line ${true} ? "terminal__command" : ""}`}>
            {puzzle.name}
          </div>
        ))}
        <div className="terminal__input-line">
          <span className="terminal__prompt">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal__input"
            autoFocus
            spellCheck="false"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};
