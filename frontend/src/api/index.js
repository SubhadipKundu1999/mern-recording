import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8000/"
})


Api.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("Profile")).token
      }`;
    }
    return req;
  });

export const logIn=(authData)=> Api.post("/user/login",authData);
  export const signUp=(authData)=> Api.post("/user/signup",authData);
