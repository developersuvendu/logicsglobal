import { loginApi } from "../api/authApi";

import { saveTokens, saveUser } from "../utils/storage";

export const loginUser = async (formData) => {
  const response = await loginApi(formData);

  saveTokens(
    response.accessToken,
    response.refreshToken
  );

  saveUser(response.user);

  return response;
};