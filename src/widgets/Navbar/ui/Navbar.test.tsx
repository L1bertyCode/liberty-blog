import { screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";

describe("Navbar", () => {
  test("should return", () => {
    componentRender(<Navbar />);
  });
});
