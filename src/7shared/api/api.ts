import { USER_LOCALSTORAGE_KEY } from "7shared/const/localstorage";
import axios from "axios";
// const baseURL = __IS__DEV__
//   ? "http://localhost:8000"
//   : "https://prod.ru";
export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization:
      localStorage.getItem(USER_LOCALSTORAGE_KEY) || "",
  },
});
