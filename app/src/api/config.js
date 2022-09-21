// можно ли передавать сюда много BASE_URL? и как ? - Ответ НЕТ

import axios from "axios";
import {LOCAL_STORAGE_KEYS} from "../constants";

// export const BASE_URL = "https://pokeapi.co/api/v2";
export const BASE_URL = "http://localhost:3000";

const apiConfig = {
  baseURL: BASE_URL,
};

const api = axios.create(apiConfig);

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCES_TOKEN);
  axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  return axiosConfig;
});

export { api };
