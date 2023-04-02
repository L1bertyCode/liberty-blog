import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("should return", () => {
    render(<Navbar />);
    screen.debug();
  });
});
