import axiosInstance from "./axiosInstance";

export const getDocumentsApi =
  async (data) => {
    const response =
      await axiosInstance.post(
        "/document/get",
        data
      );

    return response.data;
  };

export const uploadDocumentApi =
  async (formData) => {
    const response =
      await axiosInstance.post(
        "/document/add",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };