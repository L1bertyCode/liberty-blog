import { memo, Suspense, useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import { useTheme } from "./porviders/ThemePorvider";

import { AboutPage } from "3pages/AboutPage";
import { MainPage } from "3pages/MainPage";

import { classNames } from "7shared/lib/classNames/classNames";
import "./styles/index.scss";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from "./porviders/ThemePorvider/lib/ThemeContext";

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
