import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./react-flow.css";
import "./index.css";
import { ReactFlowContext } from "./context/ReactFlowContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactFlowContext>
      <App />
    </ReactFlowContext>
  </React.StrictMode>
);
