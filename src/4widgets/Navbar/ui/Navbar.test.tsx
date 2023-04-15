import { screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

import { ComponentRender } from "7shared/lib/tests/ComponentRender/ComponentRender";

describe("Navbar", () => {
  test("should return", () => {
    ComponentRender(<Navbar />);
    screen.debug();
  });
});
