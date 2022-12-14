import React from "react";
import ReactDOM from "react-dom/client";
import "react-windows-ui/dist/react-windows-ui.min.css";
import "react-windows-ui/icons/fonts/fonts.min.css";
import App from "./App";
import "./app-config.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);