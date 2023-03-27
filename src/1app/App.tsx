import { memo, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../3pages/AboutPage";
import { MainPage } from "../3pages/MainPage";
import "./styles/index.scss";
export const App = memo(() => {
  return (
    <div className="app">
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
