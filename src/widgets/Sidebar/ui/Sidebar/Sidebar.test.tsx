import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { RenderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { StoreProvider } from "app/providers/StoreProvider";

describe("Sidebar", () => {
  test("should return Sidebar", () => {
    render(
      RenderWithTranslation(
        <BrowserRouter>
          <StoreProvider>
            <Sidebar />
          </StoreProvider>
        </BrowserRouter>
      )
    );
    expect(
      screen.getByTestId("sidebar")
    ).toBeInTheDocument();
  });
  test("should return Sidebar", () => {
    render(
      RenderWithTranslation(
        <BrowserRouter>
          <StoreProvider>
            <Sidebar />
          </StoreProvider>
        </BrowserRouter>
      )
    );
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(
      screen.getByTestId("sidebar")
    ).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass(
      "collapsed"
    );
  });
});
