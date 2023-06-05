import { UserRole } from "@/entities/User";
import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
export type ExtendsRouteProps = AppRouteProps & {
  icon?: ReactNode;
};
