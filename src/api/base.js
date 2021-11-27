import axios from "axios";
import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

import authApi from "api/auth";
import { actions } from "store/features/userSlice";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
});

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (403 === error.response.status) {
      const { enqueueSnackbar, closeSnackbar } = useSnackbar();
      enqueueSnackbar(error.response.status, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <CloseIcon />
          </IconButton>
        ),
      });

      const dispatch = useDispatch();
      authApi.logOut();
      dispatch(actions.remove());
    } else {
      return Promise.reject(error);
    }
  }
);
