import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import PropTypes from "prop-types";

import { formatDate } from "utils/formatDate";

import { FormDialogContainer } from "./FormDialog/FormDialogContainer";
import { StyledBox, Wrapper, InnerWrapper, DateText } from "./styled";

const DisplayedNote = ({
  actionsEnabled,
  onEditMode,
  onDeleteBtnClick,
  note,
  dialogOpen,
  setDialogOpen,
  shareNotes,
}) => (
  <Wrapper>
    <StyledBox>
      <Box px="10px">
        <InnerWrapper>
          <Grid container alignContent="center" justifyContent="flex-end">
            {actionsEnabled && (
              <>
                <IconButton onClick={onEditMode}>
                  <ModeEditIcon />
                </IconButton>

                <IconButton onClick={() => onDeleteBtnClick(note)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => setDialogOpen(true)}>
                  <ShareIcon />
                </IconButton>
              </>
            )}

            {dialogOpen && (
              <FormDialogContainer
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                shareNotes={shareNotes}
              />
            )}
          </Grid>
        </InnerWrapper>
      </Box>
      <Box p={4}>
        <Typography variant="h4">{note.title}</Typography>
        <Typography>{note.description}</Typography>
        <Typography component={DateText} variant="caption">
          {formatDate(note.createdAt)}
        </Typography>
      </Box>
    </StyledBox>
  </Wrapper>
);

DisplayedNote.propTypes = {
  actionsEnabled: PropTypes.bool.isRequired,
  onEditMode: PropTypes.func,
  onDeleteBtnClick: PropTypes.func,
  note: PropTypes.object,
  dialogOpen: PropTypes.bool.isRequired,
  setDialogOpen: PropTypes.func.isRequired,
  shareNotes: PropTypes.func.isRequired,
};

export default DisplayedNote;
