import React from "react";
import Canvas from "./Canvas";
import LLMModel from "./Nodes/chatmodels/LLMModel";
import PromptTemplate from "./Nodes/prompts/PromptTemplate";

function App({ generateConfig, nodeData }) {
  nodeData = [new LLMModel(), new PromptTemplate()];
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas nodeData={nodeData} />
    </div>
  );
}

// function App({ generateConfig, nodeData }) {
//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Canvas nodeData={nodeData} />
//     </div>
//   );
// }

export default App;
