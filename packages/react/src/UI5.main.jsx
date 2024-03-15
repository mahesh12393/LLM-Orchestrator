import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ReactFlowContext } from "./context/ReactFlowContext.jsx";
import { ThemeProvider } from '@ui5/webcomponents-react';


function onThemeChanged(sTheme) {
  //Call central theme change function on App.jsx so it will serve standalone app and nested app
}

function onLocalizationChanged(sLocal) {
  //Call central local change function on App.jsx so it will serve standalone app and nested app
}

export function loadReact(params) {
  const root = ReactDOM.createRoot(
    document.getElementById(params.ReactDivName)
  );
  root.render(
    <ReactFlowContext>
      <ThemeProvider>
      <App generateConfig={params.generateConfig} nodeData={params.nodeData} />
      </ThemeProvider>
    </ReactFlowContext>
  );
  return () => {
    root.unmount();
  };
}

window["react"] = loadReact;
window["react_onThemeChanged"] = onThemeChanged;
window["react_onLocalizationChanged"] = onLocalizationChanged;
