import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PromptContainer } from ".";

// Mock Next.js router hooks
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("PromptContainer", () => {
  test("render PromptContainer component successfully", () => {
    render(<PromptContainer />);

    const element = screen.getByTestId("prompt-box");
    expect(element).toBeInTheDocument();
  });
});
