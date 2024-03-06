import React, { useCallback, useContext, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
  useStore,
} from "reactflow";
import "./index.css";
import ButtonEdge from "./ButtonEdge";
import { flowContext } from "../context/ReactFlowContext";
import { getUniqueNodeId, initNode } from "../utils/genericHelper";
import AddNodes from "./AddNodes";
import CanvasNode from "./CanvasNode";
import dagre from "dagre";
import { useEffect } from "react";

const nodeTypes = {
  customNode: CanvasNode,
};
const edgeTypes = { buttonEdge: ButtonEdge };

const position = { x: 0, y: 0 };
const initialNodes = [
  {
    id: "llmModel_0",
    position: {
      x: 793,
      y: 264.6,
    },
    type: "customNode",
    data: {
      label: "LLM Model",
      name: "llmModel",
      version: 1,
      type: "LLMModel",
      baseClasses: ["LLMModel"],
      icon: "LLMModel.svg",
      category: "Chat Models",
      description:
        "Wrapper around OpenAI large language models that use the Chat endpoint",
      inputs: {
        promptTemplate: "{{promptTemplate_0.data.instance}}",
        model: "d1a52a0a60bd5f6a",
        model_parameters: {
          frequency_penalty: "2",
          presence_penalty: "0.25",
          max_tokens: "920",
          temperature: "2",
        },
      },
      outputs: {
        chatmessage: "",
      },
      inputAnchors: [
        {
          label: "Prompt Template",
          name: "promptTemplate",
          type: "PromptTemplate",
          id: "llmModel_0-input-promptTemplate-PromptTemplate",
        },
      ],
      inputParams: [
        {
          label: "Model",
          name: "model",
          type: "options",
          options: [
            {
              modelName: "tiiuae--falcon-40b-instruct",
              modelVersion: "latest",
              deploymentId: "df5dbba96cb3a71d",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 2048, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 0.5],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-4-32k",
              modelVersion: "latest",
              deploymentId: "ddfb94994c3858b6",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 32768, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "d14beb93a45996ec",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "aicore-mock-model",
              modelVersion: "latest",
              deploymentId: "d0a866c163443e86",
              supported: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "ddc38ca694e982e7",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "d8cf8be9bae730e3",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "deee2d46e76a399c",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-4-32k",
              modelVersion: "latest",
              deploymentId: "d026ad138d52653c",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 32768, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo-16k",
              modelVersion: "latest",
              deploymentId: "dab034272a47dfaa",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 16385, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "d1a52a0a60bd5f6a",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "db89f8186edd5145",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "dbd635633c0819e1",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-35-turbo",
              modelVersion: "latest",
              deploymentId: "d43bdd8a675fc505",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 4096, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
            {
              modelName: "gpt-4",
              modelVersion: "latest",
              deploymentId: "db343d56fd2e4bb7",
              supported: true,
              inputParams: [
                {
                  name: "frequency_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "presence_penalty",
                  values: [-2, 2, 0.01, 0],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "max_tokens",
                  values: [0, 8192, 1, 500],
                  type: "number",
                  controller_type: "slider",
                },
                {
                  name: "temperature",
                  values: [0, 2, 0.01, 1],
                  type: "number",
                  controller_type: "slider",
                },
              ],
              experimental: false,
              previewModel: false,
            },
          ],
          id: "llmModel_0-input-modelName-options",
        },
      ],
      outputAnchors: [
        {
          id: "llmModel_0-output-llmModel-ChatMessage",
          name: "chatmessage",
          label: "Chat Message",
          description: "",
          type: "ChatMessage",
        },
      ],
      id: "llmModel_0",
      selected: true,
    },
    width: 360,
    height: 570,
    selected: true,
    positionAbsolute: {
      x: 793,
      y: 264.6,
    },
    dragging: false,
  },
  {
    id: "promptTemplate_0",
    position: {
      x: 450,
      y: 71.60000000000004,
    },
    type: "customNode",
    data: {
      label: "Prompt Template",
      name: "promptTemplate",
      version: 1,
      type: "PromptTemplate",
      baseClasses: ["PromptTemplate"],
      icon: "PromptTemplate.svg",
      category: "Prompts",
      description: "Schema to represent a basic prompt for an LLM",
      inputs: {
        template: "Write a {length} story about: {content}",
        promptParameters: {
          length: false,
          content: false,
        },
      },
      inputAnchors: [],
      inputParams: [
        {
          label: "Template",
          name: "template",
          type: "string",
          rows: 20,
          placeholder:
            "What is a good name for a company that makes {product}?",
          id: "promptTemplate_0-input-template-string",
        },
        {
          label: "Format Prompt Parameters",
          name: "promptParameters",
          type: "booleanTable",
          optional: true,
          acceptVariable: true,
          list: true,
          id: "promptTemplate_0-input-promptParameters-booleanTable",
        },
      ],
      outputs: {},
      outputAnchors: [
        {
          id: "promptTemplate_0-output-promptTemplate-PromptTemplate",
          name: "promptTemplate",
          label: "Prompt Template",
          description: "Schema to represent a basic prompt for an LLM",
          type: "PromptTemplate",
        },
      ],
      id: "promptTemplate_0",
      selected: false,
    },
    width: 252,
    height: 591,
    selected: false,
    positionAbsolute: {
      x: 450,
      y: 71.60000000000004,
    },
    dragging: false,
  },
];

const initialEdges = [
  {
    source: "promptTemplate_0",
    sourceHandle: "promptTemplate_0-output-promptTemplate-PromptTemplate",
    target: "llmModel_0",
    targetHandle: "llmModel_0-input-promptTemplate-PromptTemplate",
    type: "buttonEdge",
    id: "promptTemplate_0-promptTemplate_0-output-promptTemplate-PromptTemplate-llmModel_0-llmModel_0-input-promptTemplate-PromptTemplate",
  },
];

const Canvas = ({ nodeData }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [selectedNode, setSelectedNode] = useState(null);
  const [isUpsertButtonEnabled, setIsUpsertButtonEnabled] = useState(false);

  const [showJSONFlow, setShowJSONFlow] = useState(false);
  const [orchestrationJSON, setOrchestrationJSON] = useState({});

  const reactFlowWrapper = useRef(null);
  const { reactFlowInstance, setReactFlowInstance } = useContext(flowContext);

  const onConnect = useCallback((params) => {
    const newEdge = {
      ...params,
      type: "buttonEdge",
      id: `${params.source}-${params.sourceHandle}-${params.target}-${params.targetHandle}`,
    };

    const targetNodeId = params.targetHandle.split("-")[0];
    const sourceNodeId = params.sourceHandle.split("-")[0];
    const targetInput = params.targetHandle.split("-")[2];

    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === targetNodeId) {
          let value;
          const inputAnchor = node.data.inputAnchors.find(
            (ancr) => ancr.name === targetInput
          );
          const inputParam = node.data.inputParams.find(
            (param) => param.name === targetInput
          );

          if (inputAnchor && inputAnchor.list) {
            const newValues = node.data.inputs[targetInput] || [];
            if (targetInput === "tools") {
              // rearrangeToolsOrdering(newValues, sourceNodeId)
            } else {
              newValues.push(`{{${sourceNodeId}.data.instance}}`);
            }
            value = newValues;
          } else if (inputParam && inputParam.acceptVariable) {
            value = node.data.inputs[targetInput] || "";
          } else {
            value = `{{${sourceNodeId}.data.instance}}`;
          }
          node.data = {
            ...node.data,
            inputs: {
              ...node.data.inputs,
              [targetInput]: value,
            },
          };
        }
        return node;
      })
    );

    setEdges((eds) => addEdge(newEdge, eds));
  });

  const mappingLLMModule = (node) => {
    const llmConfig = {
      modelName: node.data.inputs.model,
      modelParams: node.data.inputs.model_parameters,
      modelUrl: "",
    };
    return llmConfig;
  };

  const mappingPromptTemplate = (node) => {
    const promptConfig = {
      template: node.data.inputs.template,
      parameterSchema: {},
    };
    const promptParams = node.data.inputs["promptParameters"];
    console.log(promptParams);
    Object.keys(promptParams).forEach((param) => {
      promptConfig.parameterSchema[param] = { isRequired: promptParams[param] };
    });
    return promptConfig;
  };

  const onShowJSONFlow = () => {
    console.log(nodes);
    console.log(edges);
    const orchestrationMapping = {
      LLMModel: "llmModuleConfig",
      PromptTemplate: "templatingModuleConfig",
    };
    const orchestrationConfig = {
      moduleConfigurations: {},
    };
    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];
      if (node.data.type === "LLMModel") {
        orchestrationConfig.moduleConfigurations[
          orchestrationMapping["LLMModel"]
        ] = mappingLLMModule(node);
      } else if (node.data.type === "PromptTemplate") {
        orchestrationConfig.moduleConfigurations[
          orchestrationMapping["PromptTemplate"]
        ] = mappingPromptTemplate(node);
      }
    }
    setOrchestrationJSON(JSON.stringify(orchestrationConfig, null, 2));
    setShowJSONFlow(true);
  };

  const onNodeClick = useCallback((event, clickedNode) => {
    setSelectedNode(clickedNode);
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === clickedNode.id) {
          node.data = {
            ...node.data,
            selected: true,
          };
        } else {
          node.data = {
            ...node.data,
            selected: false,
          };
        }

        return node;
      })
    );
  });

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setNodes((nds) =>
      nds.map((node) => {
        node.data = {
          ...node.data,
          selected: false,
        };
        return node;
      })
    );
  });

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      let nodeData = event.dataTransfer.getData("application/reactflow");
      // check if the dropped element is valid
      if (typeof nodeData === "undefined" || !nodeData) {
        return;
      }

      nodeData = JSON.parse(nodeData);

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left - 100,
        y: event.clientY - reactFlowBounds.top - 50,
      });

      const newNodeId = getUniqueNodeId(nodeData, reactFlowInstance.getNodes());

      const newNode = {
        id: newNodeId,
        position,
        type: nodeData.type !== "StickyNote" ? "customNode" : "stickyNote",
        data: initNode(nodeData, newNodeId),
      };

      // setSelectedNode(newNode);
      setNodes((nds) =>
        nds.concat(newNode).map((node) => {
          if (node.id === newNode.id) {
            node.data = {
              ...node.data,
              selected: true,
            };
          } else {
            node.data = {
              ...node.data,
              selected: false,
            };
          }

          return node;
        })
      );
      setTimeout(() => {}, 0);
    },

    // eslint-disable-next-line
    [reactFlowInstance]
  );

  return (
    <div style={{ pt: "70px", height: "100%", width: "100%" }}>
      {showJSONFlow && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            opacity: 0.8,
            zIndex: 1500,
          }}
        ></div>
      )}
      {showJSONFlow && (
        <div
          style={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            position: "absolute",
            zIndex: 2000,
            width: "80%",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)",
            backgroundColor: "white",
            border: "1px solid #f0f0f0",
            padding: 36,
            borderRadius: "8px",
            height: "80%",
          }}
        >
          <button onClick={() => setShowJSONFlow(false)}>Close</button>
          <pre>{orchestrationJSON}</pre>
        </div>
      )}

      <button
        style={{ position: "absolute", right: 10, top: 10, zIndex: 1000 }}
        onClick={onShowJSONFlow}
      >
        Show JSON
      </button>
      <div className="reactflow-parent-wrapper">
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onNodeClick={onNodeClick}
            onEdgesChange={onEdgesChange}
            onPaneClick={onPaneClick}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            minZoom={0.1}
          >
            <Controls
              position="bottom-center"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            />
            <Background color="#aaa" gap={16} />
            <AddNodes nodesData={nodeData} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
