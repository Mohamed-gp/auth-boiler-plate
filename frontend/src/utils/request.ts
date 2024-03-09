import axios from "axios";

const request = axios.create({
    baseURL :"https://auth-4.onrender.com/",
    withCredentials : true,
})


export {request}




