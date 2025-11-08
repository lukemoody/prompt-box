import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { PlatformSidebar } from ".";

describe("PlatformSidebar", () => {
  test("render PlatformSidebar component successfully", () => {
    render(
      <MemoryRouter>
        <PlatformSidebar navigation={[]} />
      </MemoryRouter>
    );

    const element = screen.getByTestId("platform-sidebar");
    expect(element).toBeInTheDocument();
  });
});
