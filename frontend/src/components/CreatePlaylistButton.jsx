import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

export default function CreatePlaylist() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  /* SAVE PLAYLIST TO DB */
  const savePlaylist = () => {};
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#282828",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      {/* Button opens up Modal to Create new Playlist */}
      <Button
        variant="text"
        startIcon={
          <AddIcon
            sx={{
              color: "text.secondary",
              width: "75px",
              height: "75px",
            }}
          />
        }
        sx={{
          ":hover": {
            opacity: "0.7",
            color: "text.secondary",
          },
          bgcolor: "#282828",
          color: "#fffff",
          textDecoration: "none",
          width: "150px",
          height: "150px",
          bottom: "10px",
        }}
        onClick={handleOpen}
      />

      <Typography component="div" variant="h5">
        Create Playlist
      </Typography>

      {/* // MODAL */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              left: "90%",
              right: "0",
              top: "10px",
              bottom: "0",
            }}
          />

          <h2 id="parent-modal-title">
            {t("modal-form-createnewplaylist-heading")}
          </h2>
          <p id="parent-modal-description">
            <form>
              <TextField
                fullWidth
                label="Playlist Name"
                id="fullWidth"
                sx={{ mb: "2px" }}
              />

              <Button
                onClick={savePlaylist}
                variant="contained"
                sx={{
                  mt: "20px",
                  alignItems: "center",
                  width: "50%",
                  ml: "25%",
                  mr: "25%",
                }}
                size="large"
              >
                {t("modal-form-createnewplaylist-button")}
              </Button>
            </form>
          </p>
        </Box>
      </Modal>
    </div>
  );
}
