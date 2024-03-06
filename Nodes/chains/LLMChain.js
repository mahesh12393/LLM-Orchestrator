class LLMChain {
  constructor() {
    this.label = "LLM Chain";
    this.name = "llmChain";
    this.version = 1.0;
    this.type = "LLMChain";
    this.baseClasses = [this.type];
    this.icon = "LLMChain.svg";
    this.category = "Chains";
    this.description = "Chain to run queries against LLMs";
    this.inputs = [
      {
        label: "Language Model",
        name: "model",
        type: "LLMModel",
      },
      {
        label: "Prompt",
        name: "prompt",
        type: "PromptTemplate",
      },
      {
        label: "Output Parser",
        name: "outputParser",
        type: "BaseLLMOutputParser",
        optional: true,
      },
      {
        label: "Input Moderation",
        description:
          "Detect text that could generate harmful output and prevent it from being sent to the language model",
        name: "inputModeration",
        type: "Moderation",
        optional: true,
        list: true,
      },
      {
        label: "Chain Name",
        name: "chainName",
        type: "string",
        placeholder: "Name Your Chain",
        optional: true,
      },
    ];
    this.outputs = [
      {
        label: "LLM Chain",
        name: "llmChain",
        baseClasses: [this.type],
      },
      {
        label: "Output Prediction",
        name: "outputPrediction",
        baseClasses: ["string", "json"],
      },
    ];
  }
}

export default LLMChain;
