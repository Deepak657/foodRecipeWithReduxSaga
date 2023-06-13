import { QueryAction, SET_QUERY } from "../actions/QueryAction";

export interface QueryState {
  query: string;
}

const initialState = {
  query: "burger",
};

export const queryReducer = (
  state: QueryState = initialState,
  action: QueryAction
): QueryState => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export {};
