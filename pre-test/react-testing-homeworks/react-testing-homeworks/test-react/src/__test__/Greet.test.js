import { render, screen } from "@testing-library/react";
import Greet from "../components/3-Greet/Greet";

describe("Greet Component", () => {
  it("renders undefined text when no name is passed", () => {
    render(<Greet />);
    expect(screen.getByText("hello undefined")).toBeInTheDocument();
  });

  it("renders the correct text when a name is passed", () => {
    render(<Greet name="niki" />);
    expect(screen.getByText("hello niki")).toBeInTheDocument();
  });
});
