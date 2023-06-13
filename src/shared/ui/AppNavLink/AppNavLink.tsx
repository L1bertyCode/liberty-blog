import { ReactNode, memo } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./AppNavLink.module.scss";

export enum AppNavLinkVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}
interface AppNavLinkProps extends NavLinkProps {
  children: ReactNode;
  variant?: AppNavLinkVariant;
  className?: string;
}

export const AppNavLink = memo((props: AppNavLinkProps) => {
  const {
    className,
    to,
    children,
    variant = AppNavLinkVariant.PRIMARY,
    ...otherProps
  } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(`${s.appNavLink} ${isActive ? s.active : ""}`, {}, [
          className,
          s[variant],
        ])
      }
      {...otherProps}>
      {children}
    </NavLink>
  );
});
