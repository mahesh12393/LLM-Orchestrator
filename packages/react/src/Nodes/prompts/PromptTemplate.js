class PromptTemplate {
  constructor() {
    this.label = "Prompt Template";
    this.name = "promptTemplate";
    this.version = 1.0;
    this.type = "PromptTemplate";
    this.baseClasses = [this.type];
    this.icon = "PromptTemplate.svg";
    this.category = "Prompts";
    this.description = "Schema to represent a basic prompt for an LLM";
    this.inputs = [
      {
        label: "Template",
        name: "template",
        type: "string",
        rows: 20,
        placeholder: `What is a good name for a company that makes {product}?`,
      },
      {
        label: "Format Prompt Parameters",
        name: "promptParameters",
        type: "booleanTable",
        optional: true,
        acceptVariable: true,
        list: true,
      },
    ];
  }
}

export default PromptTemplate;
