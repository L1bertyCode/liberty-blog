import {
  UserRole,
  getUserAuthData,
  getUserRoles,
} from "entities/User";
import { RoutePath } from "shared/config/routesConfig/routesConfig";
import { ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: ReactNode;
  roles?: UserRole[];
}

export const RequireAuth = ({
  children,
  roles,
}: RequireAuthProps) => {
  const location = useLocation();

  let auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      console.log("hasRole", hasRole);

      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return (
      <Navigate
        to={RoutePath.main}
        state={{ from: location }}
        replace
      />
    );
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate
        to={RoutePath.main}
        state={{ from: location }}
        replace
      />
    );
  }

  return <>{children}</>;
};
