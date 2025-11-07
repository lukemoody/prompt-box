import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PromptContainer } from ".";

describe("PromptContainer", () => {
  test("render PromptContainer component successfully", () => {
    render(<PromptContainer />);

    const element = screen.getByTestId("prompt-box");
    expect(element).toBeInTheDocument();
  });
});
