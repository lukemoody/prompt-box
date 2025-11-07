import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ToolbarPill } from ".";

describe("ToolbarPill", () => {
  test("render ToolbarPill component successfully", () => {
    render(<ToolbarPill />);

    const element = screen.getByTestId("toolbar-pill");
    expect(element).toBeInTheDocument();
  });
});
