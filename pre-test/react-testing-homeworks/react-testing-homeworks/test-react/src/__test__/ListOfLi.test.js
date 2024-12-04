import { render, screen } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";

describe("ListOfLi Component", () => {
  it("renders the correct number of li elements", () => {
    const usernames = ["zahra", "mahdi", "milad", "mohammad"];
    render(<ListOfLi usernames={usernames} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(usernames.length);
  });
});
