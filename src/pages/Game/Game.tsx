import { SignOutButton } from "@clerk/clerk-react";
import { Terminal } from "../../system-ui/Terminal/Terminal";
import { mainMenuDialog } from "../../assets/dialogs/mainMenuDialog";

const Game = () => {
  const dialogHistory = mainMenuDialog;

  return (
    <div>
      <SignOutButton />
      <Terminal history={dialogHistory} />
    </div>
  );
};

export default Game;
