import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SidebarItem } from ".";

describe("SidebarItem", () => {
  test("render SidebarItem component successfully", () => {
    render(<SidebarItem title="Example" icon={null} />);

    const element = screen.getByTestId("sidebar-item");
    expect(element).toBeInTheDocument();
  });
});
