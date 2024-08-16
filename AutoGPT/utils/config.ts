import type { AutoGPTConfig, LLMModel } from "./types";


// Define the DEFAULT_CONFIG constant with the correct structure
const DEFAULT_CONFIG: AutoGPTConfig = {
  models: {
    mainLoopModel: "gemini-1.5-pro-exp-0801",
    schemaFixingModel: "gemini-1.5-pro-exp-0801",
    plugins: {
      agentModel: "openrouter-1",
      browserModel: "openrouter-1",
      codeCreationModel: "gemini-1.5-pro-exp-0801",
    },
  },
};

let config: AutoGPTConfig = DEFAULT_CONFIG;

export function initConfig(configToSet: AutoGPTConfig): void {
  config = configToSet;
}

export function getConfig() {
  return config;
}

export function updatePartialConfig(
  partialConfig: Partial<AutoGPTConfig>
): void {
  config = { ...config, ...partialConfig };
}

export function getModelConfigWithModel(
  model: LLMModel
): AutoGPTConfig["models"] {
  return {
    mainLoopModel: model,
    schemaFixingModel: model,
    plugins: {
      agentModel: model,
      browserModel: model,
      codeCreationModel: model,
    },
  };
}
