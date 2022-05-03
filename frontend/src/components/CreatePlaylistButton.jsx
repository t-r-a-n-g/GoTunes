import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
/* import Stack from "@mui/material/Stack"; */
/* import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert"; */
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

// Alert
/* const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
}); */

export default function CreatePlaylist() {
  const [open, setOpen] = React.useState(false);
  const [playlistTitle, setPlaylistTitle] = React.useState("");
  /*   const [alert, setAlert] = React.useState(false); */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /*   const handleAlert = () => setAlert(true); */
  const { t } = useTranslation();

  /* SAVE PLAYLIST TO DB */

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

  // token an http request hängen bei post statement ( an header )
  const token = JSON.parse(localStorage.getItem("userToken"));

  const config = {
    headers: { "x-access-token": token },
  };

  const savePlaylist = () => {
    /*     console.log(playlistTitle); */
    axios
      .post(
        "http://localhost:5000/api/playlists",
        { title: playlistTitle },
        config
      )
      .then((res) => {
        // Add Snackbar
        console.error("ADD PLAYLIST TO DB RESPONSE: ", res);
      });
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
                value={playlistTitle}
                onChange={(event) => {
                  setPlaylistTitle(event.target.value);
                }}
              />

              <Button
                onClick={() => {
                  savePlaylist();
                  handleClose();
                }}
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
              {/*  <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  onChange={handleAlert}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Playlist succesfully created!
                  </Alert>
                </Snackbar>
              </Stack> */}
            </form>
          </p>
        </Box>
      </Modal>
    </div>
  );
}
