import axios from "axios";
import store from "../store";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 3000,
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: "Bearer " + store.state.token,
  };
  return config;
});

api.interceptors.response.use((result) => {
  return result;
});

export default api;
