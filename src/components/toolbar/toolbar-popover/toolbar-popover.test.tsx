import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ToolbarPopover } from ".";

describe("ToolbarPopover", () => {
  test("render ToolbarPopover component successfully", () => {
    render(<ToolbarPopover trigger="Click me">EXAMPLE</ToolbarPopover>);

    const element = screen.getByTestId("toolbar-popover");
    expect(element).toBeInTheDocument();
  });
});
