import { memo, Suspense, useState } from "react";
import { ErrorBoundary } from "./porviders/ErrorBoundary";
import { useTheme } from "./porviders/ThemePorvider";
import { AppRouter } from "./porviders/ThemePorvider/router";

import { Navbar } from "4widgets/Navbar";
import { Sidebar } from "4widgets/Sidebar";

import { classNames } from "7shared/lib/classNames/classNames";
import "./styles/index.scss";
import Modal from "7shared/ui/Modal/Modal";

export const App = memo(() => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >123</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>123</Modal>

        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </Suspense>
  );
});
