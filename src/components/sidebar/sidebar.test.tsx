import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "./sidebar";

describe("Sidebar", () => {
  test("render Sidebar component successfully", () => {
    render(<Sidebar />);

    const element = screen.getByTestId("sidebar");
    expect(element).toBeInTheDocument();
  });
});
