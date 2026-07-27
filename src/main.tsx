import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { installInspectionGuard } from "./lib/inspectionGuard";

installInspectionGuard();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
