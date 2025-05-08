import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "../pages/Home/Home";
import Game from "../pages/Game/Game";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const AppRouter = () => {
  const redirectComponent = <>
    <SignedOut><Home/></SignedOut>
    <SignedIn><Game/></SignedIn>
  </>
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={redirectComponent} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
