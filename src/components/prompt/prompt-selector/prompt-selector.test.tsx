import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PromptSelector } from ".";

describe("PromptImgCount", () => {
  test("render PromptImgCount component successfully", () => {
    render(<PromptSelector />);

    const element = screen.getByTestId("prompt-selector");
    expect(element).toBeInTheDocument();
  });
});
