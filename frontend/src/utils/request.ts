import axios from "axios";

const request = axios.create({
  baseURL: "https://auth-5.onrender.com/",
});

export { request };
