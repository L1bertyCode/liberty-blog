import { memo } from "react";
import MainPage from "../3pages/MainPage/MainPage";
import "./styles/index.scss";
export const App = memo(() => {
  return (
    <div className="app">
      <p>adfasdf</p>
      <MainPage />
    </div>
  );
});
