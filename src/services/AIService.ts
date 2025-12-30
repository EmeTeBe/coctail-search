import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipePrompt(prompt: string) {
    const result = streamText({
      // model: openrouter("meta-llama/llama-3.3-70b-instruct:free"),
      // model: openrouter("nex-agi/deepseek-v3.1-nex-n1:free"),
      model: openrouter("google/gemma-3n-e2b-it:free"),
      // model: openrouter("tngtech/deepseek-r1t2-chimera:free"),
      prompt: `Eres un mixólogo experto. Responde en español. ${prompt}`,
    });
    return result.textStream;
  },
};
