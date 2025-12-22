import type { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipesByFilter,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectIdRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories: categories,
    });
  },

  searchRecipes: async (filters) => {
    const drinks = await getRecipesByFilter(filters);
    set({
      drinks: drinks,
    });
  },

  selectIdRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set({
      selectedRecipe: selectedRecipe,
    });
  },
});
