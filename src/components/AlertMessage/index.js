import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const AlertMessage = ({ message, onClose, ...rest }) => {
  const isOpen = Boolean(message);
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  }

  const action = (
    <IconButton key="close" onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={isOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        variant="warning"
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={message}
        action={action}
        {...rest}
      />
    </div>
  );
};
