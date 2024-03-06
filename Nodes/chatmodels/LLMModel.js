class LLMModel {
  constructor() {
    this.label = "LLM Model";
    this.name = "llmModel";
    this.version = 1.0;
    this.type = "LLMModel";
    this.baseClasses = [this.type];
    this.icon = "LLMModel.svg";
    this.category = "Chat Models";
    this.description =
      "Wrapper around OpenAI large language models that use the Chat endpoint";
    this.inputs = [
      {
        label: "Cache",
        name: "cache",
        type: "BaseCache",
        optional: true,
      },
      {
        label: "Model Name",
        name: "modelName",
        type: "options",
        options: [
          {
            label: "gpt-4",
            name: "gpt-4",
          },
          {
            label: "gpt-4-32k",
            name: "gpt-4-32k",
          },
          {
            label: "gpt-35-turbo",
            name: "gpt-35-turbo",
          },
          {
            label: "gpt-35-turbo-16k",
            name: "gpt-35-turbo-16k",
          },
        ],
        default: "gpt-35-turbo",
        optional: true,
      },
      {
        label: "Temperature",
        name: "temperature",
        type: "number",
        step: 0.1,
        default: 0.9,
        optional: true,
      },
      {
        label: "Max Tokens",
        name: "maxTokens",
        type: "number",
        step: 1,
        optional: true,
        additionalParams: true,
      },
      {
        label: "Frequency Penalty",
        name: "frequencyPenalty",
        type: "number",
        step: 0.1,
        optional: true,
        additionalParams: true,
      },
      {
        label: "Presence Penalty",
        name: "presencePenalty",
        type: "number",
        step: 0.1,
        optional: true,
        additionalParams: true,
      },
      {
        label: "Timeout",
        name: "timeout",
        type: "number",
        step: 1,
        optional: true,
        additionalParams: true,
      },
    ];
  }
}

export default LLMModel;
