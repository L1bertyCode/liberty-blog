import ReactDOM from "react-dom/client";
import { App } from "./1app/App";
import s from "./1app/styles/index.module.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(<App />);
