import axios, { AxiosInstance, AxiosError } from "axios";

const BASE_URL = "http://localhost:8080";

export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

//*defaultAxiosInstance.interceptors.request.use(
  //(config) => {
    //const correctPath: boolean = config.url !== "login";
    //if (localStorage.getItem("accessToken") !== "" && correctPath) {
      //config.headers.Authorization = `Bearer ${localStorage.getItem(
        //"accessToken"
      //)}`;
    //}
    //return config;
  //},
  //(error: AxiosError) => {
    //return Promise.reject(error);
  //}
//);