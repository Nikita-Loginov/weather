import ReactDOM from "react-dom/client";

import { AppProvider } from "../providers/app-provider";

import "../styles/index.scss";
import "../styles/reset.scss";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AppProvider />);
}
