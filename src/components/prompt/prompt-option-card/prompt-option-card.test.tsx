import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { PromptOptionCard } from ".";
import { PromptOptionType } from "@/types/prompts";

describe("PromptOptionCard", () => {
  test("render PromptOptionCard component successfully", () => {
    const MOCK: PromptOptionType = {
      heading: "string",
      text: "string",
      imgSrc: "string",
      type: "imageGen",
      status: null,
      icon: <></>,
    };

    render(
      <MemoryRouter>
        <PromptOptionCard item={MOCK} />
      </MemoryRouter>
    );

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("data-element", "prompt-option-card");
  });
});
