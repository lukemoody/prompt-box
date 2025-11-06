import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from ".";

describe("Header", () => {
  test("render Header component successfully", () => {
    render(<Header />);

    const element = screen.getByTestId("header");
    expect(element).toBeInTheDocument();
  });
});
