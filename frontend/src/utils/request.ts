import axios from "axios";

const request = axios.create({
    baseURL :"http://localhost:8080/",
    withCredentials : true,
})


export {request}




