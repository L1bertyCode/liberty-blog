import { memo, Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../3pages/AboutPage";
import { MainPage } from "../3pages/MainPage";
import { classNames } from "../7shared/lib/classNames/classNames";
import { Theme } from "./porviders/ThemePorvider/lib/ThemeContext";
import { useTheme } from "./porviders/ThemePorvider/lib/useTheme";
import "./styles/index.scss";

export const App = memo(() => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>

      <NavLink to="/">MainPage</NavLink>
      <NavLink to="/about">AboutPage</NavLink>
      <Suspense fallback="laoding">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
});
