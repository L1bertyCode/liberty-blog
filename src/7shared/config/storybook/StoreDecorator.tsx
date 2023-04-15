import { StoreProvider } from "1app/porviders/StroreProvider";
import { Decorator } from "@storybook/react";

export const StoreDecorator: Decorator = (
  Story,
  { state }
) => {
  return (
    <StoreProvider initialState={state ? state : {}}>
      <Story />
    </StoreProvider>
  );
};
