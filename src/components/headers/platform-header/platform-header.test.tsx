import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlatformHeader } from ".";

describe("PlatformHeader", () => {
  test("render PlatformHeader component successfully", () => {
    render(<PlatformHeader />);

    const element = screen.getByTestId("platform-header");
    expect(element).toBeInTheDocument();
  });
});
