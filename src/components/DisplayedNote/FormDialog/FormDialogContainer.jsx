import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import authApi from "api/auth";

import FormDialog from "./FormDialog";

export const FormDialogContainer = ({
  dialogOpen,
  setDialogOpen,
  shareNotes,
}) => {
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    const response = await authApi.getUsersList();
    if (response.ok) {
      setUsersData(response.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [selectedEmails, setSelectedEmails] = useState([]);

  return (
    <FormDialog
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      setSelectedEmails={setSelectedEmails}
      usersData={usersData}
      shareNotes={shareNotes}
      selectedEmails={selectedEmails}
    />
  );
};

FormDialogContainer.propTypes = {
  dialogOpen: PropTypes.bool.isRequired,
  setDialogOpen: PropTypes.func.isRequired,
  shareNotes: PropTypes.func.isRequired,
};
