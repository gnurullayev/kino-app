import Axios from "axios";

export const BASE_URL = "http://localhost:8000";

export const axiosInstance = Axios.create({
  baseURL: BASE_URL + "/api/v1/",

  headers: {
    Accept: "application/json,text/*;q=0.99",
    "Content-Type": "application/json",
  },
});

export const axiosHeadersSetToken = async (context: any) => {
  axiosInstance.defaults.headers.common = {
    ...axiosInstance.defaults.headers.common,
    "Accept-Language": context.locale,
  };
};

// run before each request
axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export const API = {
  //Home page
  getHome: () => axiosInstance.get("home").then((res) => res.data?.data),

  //Movies
  moviesByCategory: (id: number, params: any) =>
    axiosInstance
      .get("all-movies/" + id, { params })
      .then((res) => res.data?.data),
  movieDetail: (id: number, type: string) =>
    axiosInstance
      .get(`movie-detail/${id}/${type}`)
      .then((res) => res.data?.data),
};
