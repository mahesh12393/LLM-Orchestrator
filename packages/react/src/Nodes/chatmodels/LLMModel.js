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
        label: "Prompt Template",
        name: "promptTemplate",
        type: "PromptTemplate",
      },
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
          // {
          //   label: "gpt-4",
          //   name: "gpt-4",
          // },
          // {
          //   label: "gpt-4-32k",
          //   name: "gpt-4-32k",
          // },
          // {
          //   label: "gpt-35-turbo",
          //   name: "gpt-35-turbo",
          // },
          // {
          //   label: "gpt-35-turbo-16k",
          //   name: "gpt-35-turbo-16k",
          // },
        ],
      },
      // {
      //   label: "Temperature",
      //   name: "temperature",
      //   type: "number",
      //   step: 0.1,
      //   default: 0.9,
      // },
      // {
      //   label: "Max Tokens",
      //   name: "maxTokens",
      //   type: "number",
      //   step: 1,
      // },
      // {
      //   label: "Frequency Penalty",
      //   name: "frequencyPenalty",
      //   type: "number",
      //   step: 0.1,
      // },
      // {
      //   label: "Presence Penalty",
      //   name: "presencePenalty",
      //   type: "number",
      //   step: 0.1,
      // },
      // {
      //   label: "Timeout",
      //   name: "timeout",
      //   type: "number",
      //   step: 1,
      // },
    ];

    this.outputs = [
      {
        label: "Chat Message",
        name: "chatmessage",
        baseClasses: ["ChatMessage"],
      },
    ];
  }
}

export default LLMModel;
