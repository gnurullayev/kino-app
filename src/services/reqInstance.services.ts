import axios,{ InternalAxiosRequestConfig } from "axios";
import { getItem } from "../helpers/persistanceStorage";

axios.defaults.baseURL = ""

axios.interceptors.request.use(function (config:InternalAxiosRequestConfig):InternalAxiosRequestConfig {
    const token:string | null = getItem("token")

    const authorization:string = token ? `Bearer ${token}` : ""

    config.headers.Authorization = authorization

    return config;
})

export default axios;