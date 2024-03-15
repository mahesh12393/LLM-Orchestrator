import React from "react";
import Canvas from "./Canvas";
import LLMModel from "./Nodes/chatmodels/LLMModel";
import PromptTemplate from "./Nodes/prompts/PromptTemplate";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestInference from "./TestInference";


function App({ generateConfig, nodeData }) {
  nodeData = [new LLMModel(), new PromptTemplate()];
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas nodeData={nodeData} />
    </div>
  );
}

// function HomeComponent({ generateConfig, nodeData }) {
//   nodeData = [new LLMModel(), new PromptTemplate()];
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas nodeData={nodeData} />
//      </div>
//   );
// }

// function App({ generateConfig, nodeData }) {
//   return (
//     <Router>
//       <Routes>
        
//         <Route path="/" element={<HomeComponent generateConfig={generateConfig} nodeData={nodeData} />} />  {/* Route for Home page */}
//         <Route path="/test" element={<TestInference />} />  {/* Route for About page */}
//         {/* Add more routes for other pages */}
//       </Routes>
//     </Router>
//   );
// }



// function App({ generateConfig, nodeData }) {
//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Canvas nodeData={nodeData} />
//     </div>
//   );
// }

export default App;
