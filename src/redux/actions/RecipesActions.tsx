import { Ifood } from "../../interface/Ifood";

export const FETCH_RECIPE_START = "FETCH_RECIPE_START";

export interface FetchRecipeStart {
  type: typeof FETCH_RECIPE_START;
}

export const fetchRecipeStart = (): FetchRecipeStart => {
  return {
    type: FETCH_RECIPE_START,
  };
};

export const FETCH_RECIPE_SUCESS = "FETCH_RECIPE_SUCESS";

export type FetchRecipeSucess = {
  type: typeof FETCH_RECIPE_SUCESS;
  recipes: Ifood[];
};

export const fetchRecipeSucess = (recipes: Ifood[]): FetchRecipeSucess => {
  return {
    type: FETCH_RECIPE_SUCESS,
    recipes,
  };
};

export const FETCH_RECIPE_FAIL = "FETCH_RECIPE_FAIL";

export type FetchRecipeFail = {
  type: typeof FETCH_RECIPE_FAIL;
  error: string;
};

export const fetchRecipeFail = (error: string): FetchRecipeFail => {
  return {
    type: FETCH_RECIPE_FAIL,
    error,
  };
};

export type FoodsActions =
  | FetchRecipeStart
  | FetchRecipeSucess
  | FetchRecipeFail;
