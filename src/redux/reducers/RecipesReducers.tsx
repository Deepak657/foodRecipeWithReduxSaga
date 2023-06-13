import { Ifood } from "../../interface/Ifood";
import {
  FETCH_RECIPE_FAIL,
  FETCH_RECIPE_START,
  FETCH_RECIPE_SUCESS,
  FoodsActions,
} from "../actions/RecipesActions";

export interface FoodState {
  recipes: Ifood[];
  error: string | null;
  loading: boolean;
}

const initialState = {
  recipes: [],
  error: null,
  loading: false,
};

export const recipeReducer = (
  state: FoodState = initialState,
  action: FoodsActions
): FoodState => {
  switch (action.type) {
    case FETCH_RECIPE_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECIPE_SUCESS:
      return {
        ...state,
        loading: false,
        recipes: action.recipes,
      };
    case FETCH_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export {};
