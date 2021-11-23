import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";

import { ROUTES } from "config/constants";
import authApi from "api/auth";
import SignUp from "./SignUp";

const SignUpContainer = () => {
  const history = useHistory();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const response = await authApi.registration({ data: values });

    if (response.ok) {
      history.push(ROUTES.signIn);
    } else {
      enqueueSnackbar(response.error.response.data, {
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
  return <SignUp onSubmit={onSubmit} />;
};

export default SignUpContainer;
