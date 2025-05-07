import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "../pages/Home/Home";
import Game from "../pages/Game/Game";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GAME} element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
