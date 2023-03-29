import { memo } from "react";
import { NavLink } from "react-router-dom";

import { useTheme } from "./porviders/ThemePorvider";

import { classNames } from "7shared/lib/classNames/classNames";
import "./styles/index.scss";
import { AppRouter } from "./porviders/ThemePorvider/router";
import { Navbar } from "4widgets/Navbar";

export const App = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Change theme</button>

      <AppRouter />
    </div>
  );
});
