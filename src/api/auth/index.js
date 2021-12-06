import { ROUTES } from "config/constants";
import { apiClient } from "api/base";

const authorizeApiClient = (token) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const logIn = async (data) => {
  const result = {
    ok: true,
  };
  try {
    const response = await apiClient.post(ROUTES.authRoute, data);
    result.data = response.data;
    authorizeApiClient(response.data.token);
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const logOut = () => {
  delete apiClient.defaults.headers.common["Authorization"];
};

const registration = async ({ data }) => {
  const result = {
    ok: true,
  };
  try {
    await apiClient.post(ROUTES.usersRoute, data);
  } catch (error) {
    result.ok = false;
    result.error = error;
  }
  return result;
};

const getUsersList = async () => {
  const result = {
    ok: true,
  };
  try {
    const response = await apiClient.get(ROUTES.usersRoute);
    result.data = response.data;
  } catch (error) {
    result.ok = false;
    result.error = error.response.data;
  }
  return result;
};

const authApi = {
  logIn,
  logOut,
  registration,
  authorizeApiClient,
  getUsersList,
};
export default authApi;
