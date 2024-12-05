import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App"; 

describe("App integration tests", () => {
  it("should display a single <li> when a todo item is added", () => {
    render(<App />);

    
    const input = screen.getByPlaceholderText("write a todo");
    const button = screen.getByText("Add Todo");

   
    fireEvent.change(input, { target: { value: "Buy groceries" } });
    fireEvent.click(button);

    
    const listItem = screen.getByText("Buy groceries");
    expect(listItem).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("should display multiple <li> elements when multiple todo items are added", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("write a todo");
    const button = screen.getByText("Add Todo");

   
    fireEvent.change(input, { target: { value: "Buy groceries" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Clean the hous" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Walk the dog" } });
    fireEvent.click(button);

    
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(screen.getByText("list1")).toBeInTheDocument();
    expect(screen.getByText("list2")).toBeInTheDocument();
    expect(screen.getByText("list3")).toBeInTheDocument();
  });
});
