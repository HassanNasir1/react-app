const key = "onlinequiz";
const storeToken = async (data) => {
  await localStorage.setItem(key, data);
};
const getToken = async () => {
  return await localStorage.getItem(key);
};
const removeToken = async () => {
  localStorage.removeItem(key);
  return;
};

export { storeToken, getToken, removeToken };
