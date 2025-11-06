import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "@/app/page";

// TODO: This is a random test added whilst setting up RTL/Jest.
describe("test page", () => {
  test("render test", () => {
    render(<LandingPage />);

    const element = screen.getByTestId("test");
    expect(element).toBeInTheDocument();
  });
});
