import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipePrompt(prompt: string) {
    const result = streamText({
      model: openrouter("meta-llama/llama-3.3-70b-instruct:free"),
      prompt: `Eres un mixólogo experto. Responde en español. ${prompt}`,
    });
    return result.textStream;
  },
};
