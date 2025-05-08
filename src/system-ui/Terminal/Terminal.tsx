import "./Terminal.css";

interface TerminalProps {
  history: string[];
}
export const Terminal: React.FC<TerminalProps> = ({ history }) => {
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
        {history.map((line, index) => (
          <div
            key={index}
            className={`terminal__line ${line.startsWith(">") ? "terminal__command" : ""}`}
          >
            {line}
          </div>
        ))}
        <div className="terminal__input-line">
          <span className="terminal__prompt">&gt;</span>
          <input
            type="text"
            className="terminal__input"
            autoFocus
            spellCheck="false"
          />
          <span className={`terminal__cursor`}></span>
        </div>
      </div>
    </div>
  );
};
