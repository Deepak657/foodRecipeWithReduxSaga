import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { useSelector, shallowEqual } from "react-redux";
import rootSaga from "./Sagas";
import { FoodState, recipeReducer } from "./reducers/RecipesReducers";

const sagaMiddleware = createSagaMiddleware();

export const useGSelector = <Selected = unknown,>(
  selector: (state: Store) => Selected
): Selected => useSelector(selector, shallowEqual);

export interface Store {
  data: FoodState;
}

const rootReducer = combineReducers({
  data: recipeReducer,
});

const middleware: any = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
