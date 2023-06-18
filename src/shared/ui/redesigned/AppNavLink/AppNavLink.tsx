import { ReactNode, memo } from "react";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./AppNavLink.module.scss";

export type AppNavLinkVariant = "primary" | "secondary" | "red";

interface AppNavLinkProps extends NavLinkProps {
  children: ReactNode;
  variant?: AppNavLinkVariant;
  className?: string;
}

export const AppNavLink = memo((props: AppNavLinkProps) => {
  const { className, to, children, variant = "primary", ...otherProps } = props;
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        classNames(s.appNavLink, { [s.active]: isActive }, [
          className,
          s[variant],
        ])
      }
      // className={({ isActive }) =>
      //   classNames(`${s.appNavLink} ${isActive ? s.active : ""}`, {}, [
      //     className,
      //     s[variant],
      //   ])
      // }
      {...otherProps}>
      {children}
    </NavLink>
  );
});
