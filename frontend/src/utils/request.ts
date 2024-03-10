import axios from "axios";

const request = axios.create({
    baseURL: "https://auth-5.onrender.com/",
    withCredentials: true,
    credentials: "include", // Add this line
});

export { request }



