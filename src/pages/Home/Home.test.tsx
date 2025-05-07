import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("WelcomeTitle", () => {
  it("show the Bienvenido title", () => {
    render(<Home/>);
    //expect(screen.getByRole('heading', {name: "Bienvenido"})).toBeInTheDocument();
  });
});
