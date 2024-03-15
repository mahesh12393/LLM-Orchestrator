import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./react-flow.css";
import "./index.css";
import { ReactFlowContext } from "./context/ReactFlowContext.jsx";
import { ThemeProvider } from "@ui5/webcomponents-react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactFlowContext>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </ReactFlowContext>
  </React.StrictMode>
);
