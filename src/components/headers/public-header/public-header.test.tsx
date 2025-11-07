import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PublicHeader } from ".";

describe("PublicHeader", () => {
  test("render PublicHeader component successfully", () => {
    render(<PublicHeader />);

    const element = screen.getByTestId("public-header");
    expect(element).toBeInTheDocument();
  });
});
