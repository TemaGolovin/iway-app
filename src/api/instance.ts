import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


const reqInterceptor = async (request: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
};

const errReqInterceptor = (error: AxiosError) => Promise.reject(error);


axiosInstance.interceptors.request.use(reqInterceptor, errReqInterceptor);

export { axiosInstance };
