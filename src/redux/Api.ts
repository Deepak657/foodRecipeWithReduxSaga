import axios from "axios";
import { apiKey, baseUrl } from "../const";

export const fetchRecipes = async (query: string) => {
  const res = await axios.get(
    `${baseUrl}/complexSearch?query=${query}&apiKey=${apiKey}`
  );
  return res.data.results;
};
