import axios from "axios";
import { getItem } from "../helpers/persistanceStorage";

axios.defaults.baseURL = ""

axios.interceptors.request.use(function (config):any {
    const token:string | null = getItem("token")

    const authorization:string = token ? `Bearer ${token}` : ""

    config.headers.Authorization = authorization

    return config;
})

export default axios;