import { call, put, all, fork, takeLatest } from "redux-saga/effects";

import { fetchRecipes } from "./Api";
import {
  FETCH_RECIPE_FAIL,
  FETCH_RECIPE_START,
  fetchRecipeSucess,
} from "./actions/RecipesActions";
import { Ifood } from "../interface/Ifood";

function* onLoadRecipeAsync({ query }: any) {
  try {
    console.log("query" + query);

    const res: Ifood[] = yield call(fetchRecipes, query);
    yield put(fetchRecipeSucess(res));
  } catch (error) {
    yield put({ type: typeof FETCH_RECIPE_FAIL, payload: error });
  }
}

export function* onLoadRecipe() {
  yield takeLatest(FETCH_RECIPE_START, onLoadRecipeAsync);
}

const recipeSaga = [fork(onLoadRecipe)];
export default function* rootSaga() {
  yield all([...recipeSaga]);
}
