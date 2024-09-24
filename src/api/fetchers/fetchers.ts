import { TripsResponse } from "../api-types";
import { axiosInstance } from "../instance";

export const getTripsList = async () => {
  const { data } = await axiosInstance.get<TripsResponse>("/orders/trips");
  return data;
};


export const login = async (loginData: {login: string, password: string}) => {
  const { data } = await axiosInstance.post<{ result: { token: string } }>("/auth/login", loginData);
  return data;
};
