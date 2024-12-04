import { render, screen } from "@testing-library/react";
import Text from "../components/1-Text/Text";

describe("Text Component test", () => {
  it("render Welcome To APS", () => {
    render(<Text headingText={"Welcome To APS"} />);
    expect(screen.getByText("WelcomE To APS")).toBeItTheDocument();
  });
  it("should render the headingText prop value", () => {
    const testHeadingText = "Hello";
    render(<Text headingText={testHeadingText} />);
    expect(screen.getByText(testHeadingText)).toBeItTheDocument();
  });
});
