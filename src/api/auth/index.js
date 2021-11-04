import axios from "axios";
import { ROUTES } from "config/constants";

const utf8_to_b64 = (str) => window.btoa(unescape(encodeURIComponent(str)));

export const logIn = async ({ email, password }) => {
  const result = {
    ok: true,
  };
  try {
    const basicAuth = "Basic " + utf8_to_b64(`${email}:${password}`);
    await axios.get(
      `${process.env.REACT_APP_BACKEND_HOST}${ROUTES.authRoute}`,
      {
        headers: { Authorization: basicAuth },
      }
    );
    axios.defaults.headers.common["Authorization"] = basicAuth;
  } catch (error) {
    result.ok = false;
    result.error = error;
  }
  return result;
};

export const registration = async ({ newUser }) => {
  const result = {
    ok: true,
  };
  try {
    await axios.post(
      `${process.env.REACT_APP_BACKEND_HOST}${ROUTES.usersRoute}`,
      newUser
    );
  } catch (error) {
    result.ok = false;
    result.error = error;
  }
  return result;
};
