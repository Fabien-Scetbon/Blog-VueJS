import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: {
    "Content-Type": "application/json",
    "app-id": "637f81b76ca608f48c297a67",
  },
});
export default instance;
