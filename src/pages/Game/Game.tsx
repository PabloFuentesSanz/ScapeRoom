import { SignOutButton } from "@clerk/clerk-react";
import { Terminal } from "../../system-ui/Terminal/Terminal";
import "./Game.css";
import { useGlitch } from "../../hooks/useGlitch";
import { useEffect } from "react";
import { useGame } from "../../contexts/GameContext";
import { narrationDialogs } from "../../dialogs/dialogs";
const Game = () => {
  const { glitchEffect, triggerGlitch } = useGlitch(200);
  const { setCurrentHistory } = useGame();

  useEffect(() => {
    triggerGlitch();
  }, []);

  const handleSubmit = () => {
    setCurrentHistory(narrationDialogs().briefing);
  };
  return (
    <div className="game__container">
      <SignOutButton />
      {glitchEffect && <div className="glitch-overlay"></div>}
      <Terminal onSubmit={handleSubmit} />
    </div>
  );
};

export default Game;
