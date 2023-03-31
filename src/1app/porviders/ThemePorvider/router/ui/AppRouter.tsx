import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routesConfig } from "7shared/config/routesConfig/routesConfig";
import { PageLoader } from "4widgets/PageLoader";
export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routesConfig).map(({ path, element }) => {
          return <Route path={path} element={element} key={path} />;
        })}
      </Routes>
    </Suspense>
  );
};
