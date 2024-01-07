import { ADD_NEW_PRODUCT } from "./ApiUrls";
import axios from "axios";
export const addNewProduct = (payload) => {
  axios.post(ADD_NEW_PRODUCT, payload);
};
