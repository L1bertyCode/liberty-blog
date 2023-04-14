import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

import { RenderWithTranslation } from "7shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Navbar", () => {
  test("should return", () => {
    render(RenderWithTranslation(<Navbar />));
    screen.debug();
  });
});
