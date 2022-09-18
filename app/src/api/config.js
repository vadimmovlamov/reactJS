import axios from "axios";

// export const BASE_URL = "https://pokeapi.co/api/v2";
export const BASE_URL = "http://localhost:3000";

const apiConfig = {
  baseURL: BASE_URL,
};

export const api = axios.create(apiConfig);

// можно ли передавать сюда много BASE_URL? и как ? - Ответ НЕТ
