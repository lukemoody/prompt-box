import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlatformSidebar } from ".";

describe("PlatformSidebar", () => {
  test("render PlatformSidebar component successfully", () => {
    render(<PlatformSidebar navigation={[]} />);

    const element = screen.getByTestId("platform-sidebar");
    expect(element).toBeInTheDocument();
  });
});
