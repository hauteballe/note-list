import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import { actions } from "store/features/userSlice";
import { getTimestamp } from "utils/getTimestamp";

import authApi from "./auth";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
});

apiClient.interceptors.request.use(
  function (response) {
    return response;
  },
  async (error) => {
    const { decodedToken, refreshToken } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const timestamp = getTimestamp();
    if (decodedToken.payload.exp < timestamp) {
      try {
        const response = axios.post(
          `${process.env.REACT_APP_BACKEND_HOST}/api/users/auth/refresh`,
          { refreshToken: refreshToken }
        );
        dispatch(
          actions.login({
            token: response.data.token,
            decodedToken: jwt_decode(response.data.token),
            refreshToken: response.data.refreshToken,
          })
        );
      } catch (error) {
        authApi.logOut();
        dispatch(actions.remove());
      }
    }
  }
);
