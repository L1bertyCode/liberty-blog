import { Decorator } from "@storybook/react";
import "app/styles/index.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";
import { Suspense } from "react";
export const I18nDecorator: Decorator = (Story) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};
