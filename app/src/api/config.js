import axios from "axios";

export const BASE_URL = "https://pokeapi.co/api/v2"

const apiConfig = {
    baseURL : BASE_URL,
}

export const api = axios.create(apiConfig)

// можно ли передавать сюда много BASE_URL? и как ?