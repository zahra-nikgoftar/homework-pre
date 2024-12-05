import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/4-Login/Login";

describe("Login component", () => {
  it("renders a button", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  it("button shows 'login' as the default text", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveTextContent("login");
  });

  it("button text updates to 'logout' when clicked", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent("logout");
  });

  it("button text reverts to 'login' when clicked again", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent("login");
  });
});
