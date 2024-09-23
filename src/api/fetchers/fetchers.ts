import { axiosInstance } from "../instance";

export const getTripsList = async () => {
  const { data } = await axiosInstance.get("/orders/trips");
  return data;
};


export const login = async (loginData: {login: string, password: string}) => {
  const { data } = await axiosInstance.post("/auth/login", loginData);
  return data;
};
