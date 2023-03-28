import { memo } from "react";
import { NavLink } from "react-router-dom";

import { useTheme } from "./porviders/ThemePorvider";

import { classNames } from "7shared/lib/classNames/classNames";
import "./styles/index.scss";
import { AppRouter } from "./porviders/ThemePorvider/router";

export const App = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <NavLink to="/">MainPage</NavLink>
      <NavLink to="/about">AboutPage</NavLink>
      <AppRouter />
    </div>
  );
});
