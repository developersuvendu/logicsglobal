import axiosInstance from "./axiosInstance";

import { API_ENDPOINTS } from "../constants/apiConstants";

export const getLeavesApi = async (data) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.LEAVES.GET,

    data,
  );

  return response.data;
};

export const applyLeaveApi = async (data) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.LEAVES.APPLY,

    data,
  );

  return response.data;
};
