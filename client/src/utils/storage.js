export const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);

  localStorage.setItem("refreshToken", refreshToken);
};

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const clearStorage = () => {
  localStorage.clear();
};
