import { GameProvider } from "./contexts/GameContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <GameProvider>
      <AppRouter />
    </GameProvider>
  );
}

export default App;
