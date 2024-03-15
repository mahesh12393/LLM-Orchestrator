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
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Button, ToolbarSpacer,Icon, Toolbar, Title,Text,ResponsiveGridLayout,
  Card,Form,FormItem,Input,Label,Switch, FlexBox,Tab,TabContainer,IllustratedMessage, BusyIndicator,
  ToolbarSeparator, SegmentedButton, SegmentedButtonItem, DynamicPage, DynamicPageTitle} from '@ui5/webcomponents-react';
import "@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js"

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
        template: "Translate this sentence {userInput} to English",
        promptParameters: {
          userInput: true,
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
  const [showTestInference, setShowTestInference]  = useState(false);
  const [formInputs,setFormInputs] = useState({})
  const [response,setResponse] = useState(false);
  const [loading,setIsLoading] = useState(false);
  const [showTrace,setShowTrace] = useState(true);
  const [showRawResponse,setShowRawResponse] = useState(true);
  const [rawResponse,setRawResponse] = useState(false);
  const [traceResponse,setTraceResponse] = useState(false);



  let outputResponse = {
    "id": "chatcmpl-8xzlbIyb6gzI85aIFpYDoLjbgYitq",
    "choices": [
      {
        "finish_reason": "stop",
        "index": 0,
        "logprobs": null,
        "message": {
          "content": "Where can I find the travel expense report?",
          "role": "assistant",
          "function_call": null,
          "tool_calls": null
        },
        "content_filter_results": {
          "hate": {
            "filtered": false,
            "severity": "safe"
          },
          "self_harm": {
            "filtered": false,
            "severity": "safe"
          },
          "sexual": {
            "filtered": false,
            "severity": "safe"
          },
          "violence": {
            "filtered": false,
            "severity": "safe"
          }
        }
      }
    ],
    "created": 1709309475,
    "model": "gpt-35-turbo",
    "object": "chat.completion",
    "system_fingerprint": null,
    "usage": {
      "completion_tokens": 9,
      "prompt_tokens": 56,
      "total_tokens": 65
    },
    "prompt_filter_results": [
      {
        "content_filter_results": {
          "hate": {
            "filtered": false,
            "severity": "safe"
          },
          "jailbreak": {
            "detected": false,
            "filtered": false
          },
          "self_harm": {
            "filtered": false,
            "severity": "safe"
          },
          "sexual": {
            "filtered": false,
            "severity": "safe"
          },
          "violence": {
            "filtered": false,
            "severity": "safe"
          }
        },
        "prompt_index": 0
      }
    ]
  };
  
  let trace = [
    {
      "name": "templating",
      "wasConfigured": true,
      "output": [
        {
          "role": "system",
          "content": "Your sole purpose is to translate german to english."
        },
        {
          "role": "user",
          "content": "Hi, ich habe eine Frage."
        },
        {
          "role": "assistant",
          "content": "Hi, I have a question."
        },
        {
          "role": "user",
          "content": "Wo finde ich die Reisekostenabrechnung?"
        }
      ]
    },
    {
      "name": "llm",
      "wasConfigured": true,
      "output": {
        "result": {
          "role": "assistant",
          "content": "Where can I find the travel expense report?"
        },
        "usage": {
          "inputTokens": 56,
          "outputTokens": 9,
          "totalTokens": 65
        },
        "finishReason": "stop",
        "rawResponse": {
          "id": "chatcmpl-8xzlbIyb6gzI85aIFpYDoLjbgYitq",
          "choices": [
            {
              "finish_reason": "stop",
              "index": 0,
              "logprobs": null,
              "message": {
                "content": "Where can I find the travel expense report?",
                "role": "assistant",
                "function_call": null,
                "tool_calls": null
              },
              "content_filter_results": {
                "hate": {
                  "filtered": false,
                  "severity": "safe"
                },
                "self_harm": {
                  "filtered": false,
                  "severity": "safe"
                },
                "sexual": {
                  "filtered": false,
                  "severity": "safe"
                },
                "violence": {
                  "filtered": false,
                  "severity": "safe"
                }
              }
            }
          ],
          "created": 1709309475,
          "model": "gpt-35-turbo",
          "object": "chat.completion",
          "system_fingerprint": null,
          "usage": {
            "completion_tokens": 9,
            "prompt_tokens": 56,
            "total_tokens": 65
          },
          "prompt_filter_results": [
            {
              "content_filter_results": {
                "hate": {
                  "filtered": false,
                  "severity": "safe"
                },
                "jailbreak": {
                  "detected": false,
                  "filtered": false
                },
                "self_harm": {
                  "filtered": false,
                  "severity": "safe"
                },
                "sexual": {
                  "filtered": false,
                  "severity": "safe"
                },
                "violence": {
                  "filtered": false,
                  "severity": "safe"
                }
              },
              "prompt_index": 0
            }
          ]
        }
      }
    }
  ];

  let completeResponse = {
    "requestId": "6f0b361e-73af-40ac-88e0-9632afb32fcf",
    "moduleResults": [
        {
            "name": "templating",
            "wasConfigured": true,
            "output": [
                {
                    "role": "system",
                    "content": "Your sole purpose is to translate german to english."
                },
                {
                    "role": "user",
                    "content": "Hi, ich habe eine Frage."
                },
                {
                    "role": "assistant",
                    "content": "Hi, I have a question."
                },
                {
                    "role": "user",
                    "content": "Wo finde ich die Reisekostenabrechnung?"
                }
            ]
        },
        {
            "name": "llm",
            "wasConfigured": true,
            "output": {
                "result": {
                    "role": "assistant",
                    "content": "Where can I find the travel expense report?"
                },
                "usage": {
                    "inputTokens": 56,
                    "outputTokens": 9,
                    "totalTokens": 65
                },
                "finishReason": "stop",
                "rawResponse": {
                    "id": "chatcmpl-8xzlbIyb6gzI85aIFpYDoLjbgYitq",
                    "choices": [
                        {
                            "finish_reason": "stop",
                            "index": 0,
                            "logprobs": null,
                            "message": {
                                "content": "Where can I find the travel expense report?",
                                "role": "assistant",
                                "function_call": null,
                                "tool_calls": null
                            },
                            "content_filter_results": {
                                "hate": {
                                    "filtered": false,
                                    "severity": "safe"
                                },
                                "self_harm": {
                                    "filtered": false,
                                    "severity": "safe"
                                },
                                "sexual": {
                                    "filtered": false,
                                    "severity": "safe"
                                },
                                "violence": {
                                    "filtered": false,
                                    "severity": "safe"
                                }
                            }
                        }
                    ],
                    "created": 1709309475,
                    "model": "gpt-35-turbo",
                    "object": "chat.completion",
                    "system_fingerprint": null,
                    "usage": {
                        "completion_tokens": 9,
                        "prompt_tokens": 56,
                        "total_tokens": 65
                    },
                    "prompt_filter_results": [
                        {
                            "content_filter_results": {
                                "hate": {
                                    "filtered": false,
                                    "severity": "safe"
                                },
                                "jailbreak": {
                                    "detected": false,
                                    "filtered": false
                                },
                                "self_harm": {
                                    "filtered": false,
                                    "severity": "safe"
                                },
                                "sexual": {
                                    "filtered": false,
                                    "severity": "safe"
                                },
                                "violence": {
                                    "filtered": false,
                                    "severity": "safe"
                                }
                            },
                            "prompt_index": 0
                        }
                    ]
                }
            }
        }
    ],
    "orchestrationResult": {
        "result": {
            "role": "assistant",
            "content": "Where can I find the travel expense report?"
        },
        "usage": {
            "inputTokens": 56,
            "outputTokens": 9,
            "totalTokens": 65
        },
        "finishReason": "stop",
        "rawResponse": {
            "id": "chatcmpl-8xzlbIyb6gzI85aIFpYDoLjbgYitq",
            "choices": [
                {
                    "finish_reason": "stop",
                    "index": 0,
                    "logprobs": null,
                    "message": {
                        "content": "Where can I find the travel expense report?",
                        "role": "assistant",
                        "function_call": null,
                        "tool_calls": null
                    },
                    "content_filter_results": {
                        "hate": {
                            "filtered": false,
                            "severity": "safe"
                        },
                        "self_harm": {
                            "filtered": false,
                            "severity": "safe"
                        },
                        "sexual": {
                            "filtered": false,
                            "severity": "safe"
                        },
                        "violence": {
                            "filtered": false,
                            "severity": "safe"
                        }
                    }
                }
            ],
            "created": 1709309475,
            "model": "gpt-35-turbo",
            "object": "chat.completion",
            "system_fingerprint": null,
            "usage": {
                "completion_tokens": 9,
                "prompt_tokens": 56,
                "total_tokens": 65
            },
            "prompt_filter_results": [
                {
                    "content_filter_results": {
                        "hate": {
                            "filtered": false,
                            "severity": "safe"
                        },
                        "jailbreak": {
                            "detected": false,
                            "filtered": false
                        },
                        "self_harm": {
                            "filtered": false,
                            "severity": "safe"
                        },
                        "sexual": {
                            "filtered": false,
                            "severity": "safe"
                        },
                        "violence": {
                            "filtered": false,
                            "severity": "safe"
                        }
                    },
                    "prompt_index": 0
                }
            ]
        }
    }
}

//completeResponse?orchestrationResult?rawResponse




  const onConnect = useCallback((params) => {
    const newEdge = {
      ...params,
      type: "buttonEdge",
      id: `${params.source}-${params.sourceHandle}-${params.target}-${params.targetHandle}`,
    };

    console.log("the params recievd after connecting is ", params)
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
      modelUrl: "https://api.ai.intblore.eu-central-1.mlf-aws-dev.com/v2/inference/deployments/d43bdd8a675fc505",
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
    // console.log(nodes);
    // console.log(edges);
    // const orchestrationMapping = {
    //   LLMModel: "llmModuleConfig",
    //   PromptTemplate: "templatingModuleConfig",
    // };
    // const orchestrationConfig = {
    //   moduleConfigurations: {},
    // };
    // for (let index = 0; index < nodes.length; index++) {
    //   const node = nodes[index];
    //   if (node.data.type === "LLMModel") {
    //     orchestrationConfig.moduleConfigurations[
    //       orchestrationMapping["LLMModel"]
    //     ] = mappingLLMModule(node);
    //   } else if (node.data.type === "PromptTemplate") {
    //     orchestrationConfig.moduleConfigurations[
    //       orchestrationMapping["PromptTemplate"]
    //     ] = mappingPromptTemplate(node);
    //   }
    // }
    // setOrchestrationJSON(JSON.stringify(orchestrationConfig, null, 2));


    // "moduleConfigurations": {
    //   "llmModuleConfig": {
    //     "modelName": "d1a52a0a60bd5f6a",
    //     "modelParams": {
    //       "frequency_penalty": "2",
    //       "presence_penalty": "0.25",
    //       "max_tokens": "920",
    //       "temperature": "2"
    //     },
    //     "modelUrl": ""
    //   },
    //   "templatingModuleConfig": {
    //     "template": "Write a {length} story about: {content}",
    //     "parameterSchema": {
    //       "length": {
    //         "isRequired": false
    //       },
    //       "content": {
    //         "isRequired": false
    //       }
    //     }
    //   }
    // }



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

const getInputVariables = (()=>{
 let obtainedJSON = JSON.parse(orchestrationJSON);
  console.log("the orcjhestration json generated is ", orchestrationJSON[1]);
  const schema = obtainedJSON["moduleConfigurations"]["templatingModuleConfig"]["parameterSchema"];
  console.log("the orcjhestration json generated schema is ", schema);
  
  // ["templatingModuleConfig"];
  const extractedData = Object.entries(schema).map(([key, value]) => ({
    name: key,
    isRequired: value.isRequired,
  }));

  console.log("extracted data os ", extractedData);

  setFormInputs(extractedData.reduce((acc, field) => {
    acc[field.name] = { value: '', isRequired: field.isRequired }; // Object structure for each field
    return acc;
  }, {}));
})

const handleSubmitForm = (event) => {
  // Access all field values from formData
  const fieldValues = Object.values(formInputs).map((fieldData) => fieldData.value);
  console.log("Field Values:", fieldValues);
  console.log("current value of form is ", formInputs)

  event.preventDefault();
  setIsLoading(true)
  console.log("loading is made turu");
  // setResult('Generating Result...'); // Simulate some processing

  setTimeout(() => {
    console.log("inisfe this timeout");
    setResponse(true);
    setRawResponse(true);
    setTraceResponse(true);
    setIsLoading(false);
  }, 3500);
};


const handleChange = (event) => {
  console.log("event recieved is ", event.target);
  const { id, value } = event.target;
  console.log("calues obtained are ", name, value);
  setFormInputs({ ...formInputs, [id]: { ...formInputs[id], value } }); // Update nested object
  console.log("form inputs updated are ", formInputs);
};

function TraceResponse () {
  if(!traceResponse){
    return <></>
  }
  const TraceResponse = JSON.stringify(trace, null, 4)
  return <pre>{TraceResponse}</pre>
}
function OutputRawResponse () {
  // const RawResponse = JSON.stringify(outputResponse, null, 4)

  if(!rawResponse) {
    return <></>;
  }

  const RawResponse = JSON.stringify(completeResponse?.orchestrationResult?.rawResponse, null,4);
  return <pre>{RawResponse}</pre>
}
function OutputResponse () {
  if(loading) {
    return <BusyIndicator active></BusyIndicator>
  }
  if (response){
    const outputMessage = outputResponse["choices"][0]["message"]["content"];
    return <pre>{outputMessage}</pre>
  }
  else {
    return (
    <FlexBox style={{ alignItems:"end"}}>
    <IllustratedMessage name="EmptyList" size="scene" />
    
      {/* <IllustratedMessage name="NoEntries" />  */}
      </FlexBox>
    );
  
  }
  
}


function downloadJSON(data) {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.json'; // Replace with your desired filename
  link.click();
  URL.revokeObjectURL(url); // Revoke the temporary URL
}


  useEffect(()=>{
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
    // getInputVariables();
  },[formInputs])



  return (
    <>
    {showTestInference && <>
      <ResponsiveGridLayout
    columnsL={2}
    columnsM={2}
    columnsS={2}
    columnsXL={2}
>
  <React.Fragment key=".0">
    <FlexBox
      className="responsiveGridLayoutItem"
      style={{
        // background: 'var(--sapAccentColor1)',
        // gridColumn: 'span 1',
        // height:'100%',
        width:"43vw",
        height:"95vh",
        padding:"0.25rem"
      }}
    >
      <Card header={<Toolbar
        design="Auto"
        onClick={function _a(){}}
        onOverflowChange={function _a(){}}
        toolbarStyle="Standard"
        // style={{height:"100vh"}}
      >
        <Button icon="nav-back" onClick={()=>{
           setShowTestInference(false);
        }}></Button>
        <Title>
        Test Inference
        </Title>
        {/* <ToolbarSpacer />    */}
        <ToolbarSpacer />
        <Button design="Emphasized" onClick={(e)=>{
          handleSubmitForm(e)
        }}>Submit</Button>
        
      </Toolbar>
}>

    <Form backgroundDesign="Transparent" style={{alignItems:'center'}}>

    {/* <FormItem label="Sole Form Item">
        <Input type="Text" />
      </FormItem> */}

      {formInputs &&
            Object.keys(formInputs).map((field) => (
              <FormItem label={<Label required={formInputs[field].isRequired}>{field}</Label>} key={field} >
                <Input id={field} type="Text" onInput={(e)=>handleChange(e)}></Input>

              </FormItem>
              // <div key={field}>
              //   <label className={formInputs[field].isRequired? "required" : "optional"} htmlFor={field}>{field}:</label>
              //   <input
              //     type="text" // Adjust type as needed
              //     id={field}
              //     name={field}
              //     value={formInputs[field].value}
              //     onChange={(e)=>handleChange(e)}
              //   />
              //   </div>
            ))}
          <FormItem label={<Label>Show Raw Response</Label>}>
              <Switch onChange={(e)=>{
                // console.log("event recieved is ", e);
                setShowRawResponse(!showRawResponse);
              }}></Switch>
              
              </FormItem>


            <FormItem label={<Label>Show Trace</Label>}>
              <Switch onChange={(e)=>{
                // console.log("event recieved is ", e);
                setShowTrace(!showTrace);
              }}></Switch>
              
              </FormItem>
            
    </Form>

      </Card>
      
    </FlexBox>
    <FlexBox
      // className="responsiveGridLayoutItem"
      style={{
        // background: 'var(--sapAccentColor2)',
        // gridColumn: 'span 1'
        width:"43vw",
        marginLeft:"-6rem",
        padding:"0.25rem",
        // height:"90vh"
      }}
    >
     <Card >
              <TabContainer
            contentBackgroundDesign="Transparent"
            headerBackgroundDesign="Solid"
            onTabSelect={function _a(){}}
            // tabLayout="Standard"
          >
            <Tab 
            style={{
  // overflowY: "auto",
  height: "85vh"
}}
              selected
              text="Response"
            >
              <OutputResponse/>
            </Tab>
            <Tab
             disabled={showRawResponse}
            style={{
              overflowY: "auto",
              height: "85vh"
            }}
              text="Raw Response"
            >
              <OutputRawResponse/>
            </Tab>
            <Tab
            disabled={showTrace}
              text="Trace"
              style={{
                overflowY: "auto",
                height: "85vh"
              }}
            >
              <TraceResponse/>
            </Tab>
          </TabContainer>

     </Card>
      
    </FlexBox>


    </React.Fragment>
    </ResponsiveGridLayout>
    </>
    }
    {!showTestInference && 
    <div style={{ pt: "100px", height: "100%", width: "100%" }}>
      {/* {showJSONFlow && (
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
      )} */}
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
            width: "100%",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05)",
            backgroundColor: "white",
            border: "1px solid #f0f0f0",
            padding: 10,
            // borderRadius: "4px",
            height: "85%",
          }}
        >
          {/* <button onClick={() => setShowJSONFlow(false)}>Close</button> */}
          <pre>{orchestrationJSON}</pre>
        </div>
      )}

    {/* <DynamicPage
    headerTitle={<DynamicPageTitle actions={<>
    <Button design="Emphasized">Edit</Button>
    <Button design="Transparent">Delete</Button>
    <Button design="Transparent">Copy</Button>
    <Button design="Transparent" icon="action"/>
    </>} 
    header={<Title>d520923103491c4a</Title>} 
     >
      </DynamicPageTitle>
      }

    >

    </DynamicPage> */}



      <Toolbar
        design="Auto"
        onClick={function _a(){}}
        onOverflowChange={function _a(){}}
        toolbarStyle="Standard"
      >
        <Title>
        d520923103491c4a
        </Title>
        {/* <ToolbarSpacer />    */}
        <FlexBox>
        <SegmentedButton>
            <React.Fragment key=".0">
              <SegmentedButtonItem pressed onClick={()=>{
          setShowJSONFlow(false)
        }}>
                  Graph
              </SegmentedButtonItem>
            <SegmentedButtonItem onClick={onShowJSONFlow}>
              Config
            </SegmentedButtonItem>
            </React.Fragment>
          </SegmentedButton>
        <ToolbarSeparator />
        <Button design="Emphasized" onClick={()=>{
          setShowTestInference(true);
          getInputVariables();
        }}>Test</Button>
        <Button style={{marginRight:"1rem"}} icon="download" onClick={()=>{
          downloadJSON(orchestrationJSON);
        }}></Button>
        </FlexBox>
      </Toolbar>
      {!showJSONFlow && <div className="reactflow-parent-wrapper">
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
      </div>}
      
    </div>
}
    </>
    
  );
};

export default Canvas;
