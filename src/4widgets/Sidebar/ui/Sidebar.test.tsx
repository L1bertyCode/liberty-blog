import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { RenderWithTranslation } from "7shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("should return Sidebar", () => {
    render(
      RenderWithTranslation(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      )
    );
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("should return Sidebar", () => {
    render(
      RenderWithTranslation(
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      )
    );
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
