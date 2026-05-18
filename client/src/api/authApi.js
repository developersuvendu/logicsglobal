import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "../constants/apiConstants";

export const loginApi = async (loginData) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.LOGIN,
    loginData
  );

  return response.data;
};