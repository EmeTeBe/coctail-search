import type { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISliceType = {
  recipe: string;
  generateRecipe: (prompt: string) => Promise<void>;
  isGenerating: boolean;
};

export const createAISlice: StateCreator<AISliceType> = (set) => ({
  recipe: "",
  isGenerating: false,
  generateRecipe: async (prompt) => {
    set({ recipe: "", isGenerating: true });
    const data = await AIService.generateRecipePrompt(prompt);
    for await (const chunk of data) {
      set((state) => ({
        recipe: state.recipe + chunk,
        isGenerating: false,
      }));
    }
  },
});
