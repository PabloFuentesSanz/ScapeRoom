// GameContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { Puzzle } from "../domain/Game";
import { narrationDialogs } from "../dialogs/dialogs";

interface GameContextType {
  availablePuzzles: Puzzle[];
  setAvailablePuzzles: React.Dispatch<React.SetStateAction<Puzzle[]>>;

  selectedPuzzle: number | null;
  setSelectedPuzzle: React.Dispatch<React.SetStateAction<number | null>>;

  currentHistory: string[];
  setCurrentHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [availablePuzzles, setAvailablePuzzles] = useState<Puzzle[]>([]);
  const [selectedPuzzle, setSelectedPuzzle] = useState<number | null>(null);
  const [currentHistory, setCurrentHistory] = useState<string[]>(narrationDialogs().intro);

  return (
    <GameContext.Provider
      value={{
        availablePuzzles,
        setAvailablePuzzles,
        selectedPuzzle,
        setSelectedPuzzle,
        currentHistory,
        setCurrentHistory,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
};
