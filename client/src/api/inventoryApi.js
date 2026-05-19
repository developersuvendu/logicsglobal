import axiosInstance from "./axiosInstance";

export const getInventoryApi = async (userId) => {
  const response = await axiosInstance.post("/inventory/get", {
    userId,
  });

  return response.data;
};

export const requestAssetApi = async (requestData) => {
  const response = await axiosInstance.post("/inventory/add", requestData);

  return response.data;
};
