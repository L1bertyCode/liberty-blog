import { getUserAuthData } from "6entities/User";
import { RoutePath } from "7shared/config/routesConfig/routesConfig";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({
  children,
}: {
  children: ReactNode;
}) => {
  let auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} />;
  }
  return <>{children}</>;
};
