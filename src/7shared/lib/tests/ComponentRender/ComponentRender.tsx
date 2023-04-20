import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";

import {
  StateSchema,
  StoreProvider,
} from "1app/porviders/StoreProvider";
import i18nForTests from "7shared/config/i18n/i18nForTests";

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function ComponentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {}
) {
  const { route = "/", initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        initialState={initialState as StateSchema}
      >
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
