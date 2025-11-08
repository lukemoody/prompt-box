import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PromptImgCount } from ".";

// Mock the stores
jest.mock("@/stores/session-store", () => ({
  useSessionStore: jest.fn((selector) => {
    const mockState = {
      activeUser: {
        isAuthenticatied: true,
        credits: 70,
        username: "Bruce Wayne",
      },
    };
    return typeof selector === "function" ? selector(mockState) : mockState;
  }),
}));

jest.mock("@/stores/prompt-store", () => ({
  usePromptStore: jest.fn((selector) => {
    const mockState = {
      promptImgQty: 5,
      setPromptImgQty: jest.fn(),
    };
    return typeof selector === "function" ? selector(mockState) : mockState;
  }),
}));

describe("PromptImgCount", () => {
  test("render PromptImgCount component successfully", () => {
    render(<PromptImgCount />);

    const element = screen.getByTestId("prompt-img-count");
    expect(element).toBeInTheDocument();
  });
});
