import { render, screen, waitFor } from "@testing-library/react";
import UserTable from "../components/7-UserTable/UserTable";

const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "111-222-3333",
  },
  { id: 2, name: "Bob Brown", email: "bob@example.com", phone: "444-555-6666" },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone: "777-888-9999",
  },
];

describe("UserTable component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("fetches and renders a table of users", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockUsers));

    render(<UserTable />);

    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );

    const rows = await waitFor(() => screen.getAllByTestId("user-row"));

    expect(rows).toHaveLength(mockUsers.length);

    expect(rows[0]).toHaveTextContent("1");
    expect(rows[0]).toHaveTextContent("Alice Johnson");
    expect(rows[0]).toHaveTextContent("alice@example.com");
    expect(rows[0]).toHaveTextContent("111-222-3333");
  });

  test("renders a row for each user fetched from the API", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockUsers));

    render(<UserTable />);

    const rows = await waitFor(() => screen.getAllByTestId("user-row"));

    mockUsers.forEach((user, i) => {
      expect(rows[i]).toHaveTextContent(user.id.toString());
      expect(rows[i]).toHaveTextContent(user.name);
      expect(rows[i]).toHaveTextContent(user.email);
      expect(rows[i]).toHaveTextContent(user.phone);
    });
  });
});
