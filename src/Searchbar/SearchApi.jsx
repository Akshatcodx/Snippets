import axios from "axios";

export const searchProduct = (searchQuery) => {
  return axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`);
};
