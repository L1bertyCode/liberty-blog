import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AboutPage } from "3pages/AboutPage";
import { MainPage } from "3pages/MainPage";
import { routesConfig } from "7shared/config/routesConfig/routesConfig";
export const AppRouter = () => {
  return (
    <Suspense fallback="laoding">
      <Routes>
        {Object.values(routesConfig).map(({ path, element }) => {
          return <Route path={path} element={element} key={path} />;
        })}
      </Routes>
    </Suspense>
  );
};
