import { AppButton, AppButtonVariant } from "./AppButton";
import { render, screen } from "@testing-library/react";

describe("AppButton", () => {
  test("should return test", () => {
    render(<AppButton>test</AppButton>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("should return test clear", () => {
    render(<AppButton variant={"clear"}>test</AppButton>);
    expect(screen.getByText("test")).toHaveClass("clear");
    screen.debug();
  });
});
