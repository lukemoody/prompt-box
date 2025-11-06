import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PromptBox } from ".";

describe("PromptBox", () => {
  test("render PromptBox component successfully", () => {
    render(<PromptBox />);

    const element = screen.getByTestId("prompt-box");
    expect(element).toBeInTheDocument();
  });
});
