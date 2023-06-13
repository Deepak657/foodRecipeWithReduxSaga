export const SET_QUERY = "SET_QUERY";

export type SetQuery = {
  type: typeof SET_QUERY;
  query: string;
};

export const setQuery = (query: string): SetQuery => {
  return {
    type: SET_QUERY,
    query,
  };
};

export type QueryAction = SetQuery;
