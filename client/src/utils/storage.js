export const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);

  localStorage.setItem("refreshToken", refreshToken);
};

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearStorage = () => {
  localStorage.clear();
};