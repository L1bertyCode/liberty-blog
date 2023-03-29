import { memo } from "react";
import { useTheme } from "./porviders/ThemePorvider";

import { AppRouter } from "./porviders/ThemePorvider/router";
import { Navbar } from "4widgets/Navbar";
import { classNames } from "7shared/lib/classNames/classNames";
import "./styles/index.scss";
import { Sidebar } from "4widgets/Sidebar";
export const App = memo(() => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          <AppRouter />
        </div>
      </div>
    </div>
  );
});
