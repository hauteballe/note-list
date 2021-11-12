import { ROUTES } from "config/constants";
import { apiClient } from "api/base";

const utf8_to_b64 = (str) => window.btoa(unescape(encodeURIComponent(str)));

const getBasicAuthString = ({ email, password }) => {
  return "Basic " + utf8_to_b64(`${email}:${password}`);
};

const authorizeApiClient = (basicAuth) => {
  apiClient.defaults.headers.common["Authorization"] = basicAuth;
};

const logIn = async ({ email, password }) => {
  const result = {
    ok: true,
  };
  try {
    const basicAuth = getBasicAuthString({ email, password });
    const response = await apiClient.get(ROUTES.authRoute, {
      headers: { Authorization: basicAuth },
    });
    result.data = response.data;
    authorizeApiClient(basicAuth);
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

const authApi = {
  logIn,
  logOut,
  registration,
  getBasicAuthString,
  authorizeApiClient,
};
export default authApi;
