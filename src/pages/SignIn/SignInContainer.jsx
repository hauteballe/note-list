import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { ROUTES } from "config/constants";
import authApi from "api/auth";
import { actions } from "store/features/userSlice";

import SignIn from "./SignIn";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const response = await authApi.logIn({ ...values });
    if (response.ok) {
      dispatch(
        actions.login({
          token: response.data.token,
          ...response.data.user,
        })
      );
      history.push(ROUTES.myNotes);
    } else {
      enqueueSnackbar(response.error, {
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
    }
  };

  return <SignIn onSubmit={onSubmit} />;
};

export default SignInContainer;
