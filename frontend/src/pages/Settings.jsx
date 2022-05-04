import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "@mui/material/Slider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import LogoutButton from "@components/Authentification/Logout";
import { useNavigate } from "react-router-dom";

// Hide Log Out Button
// 9 Tabs

/* const marks = [
  {
    value: 5,
    label: "0 sec",
  },
  {
    value: 95,
    label: "5 sec",
  },
]; */

export default function Settings() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

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
      <Paper
        sx={{
          height: "63px",
          bgcolor: "#282828",
          lineHeight: "63px",
          mb: "3rem",
          borderRadius: "0",
        }}
      >
        {t("settings-heading")}
        <ChevronLeftIcon
          sx={{
            color: "#f2f2f2",
            position: "absolute",
            top: "18px",
            left: "10px",
          }}
          onClick={() => navigate("/profile")}
        />
      </Paper>
      <Paper
        sx={{
          bgcolor: "#282828",
          height: "50px",
          textAlign: "left",
          lineHeight: "50px",
          borderRadius: "0",
          px: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {t("settings-your-profil")}
        <ChevronRightIcon
          sx={{
            color: "#f2f2f2",
            display: "inline-block",
            verticalAlign: "middle",
            justifyContent: "space-between",
          }}
        />
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
      <Paper
        sx={{
          bgcolor: "#282828",
          height: "50px",
          textAlign: "left",
          lineHeight: "50px",
          borderRadius: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
        }}
      >
        {t("settings-interface-style")}
        <ChevronRightIcon
          sx={{
            color: "#f2f2f2",
            display: "inline-block",
            verticalAlign: "middle",
            justifyContent: "space-between",
          }}
        />
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
      <Paper
        sx={{
          bgcolor: "#282828",
          height: "50px",
          textAlign: "left",
          lineHeight: "50px",
          borderRadius: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
        }}
      >
        {t("settings-your-insights")}
        <ChevronRightIcon
          sx={{
            color: "#f2f2f2",
            display: "inline-block",
            verticalAlign: "middle",
            justifyContent: "space-between",
          }}
        />
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
      <Paper
        sx={{
          bgcolor: "#282828",
          height: "50px",
          textAlign: "left",
          lineHeight: "50px",
          borderRadius: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
        }}
      >
        {t("settings-streaming-quality")}
        <ChevronRightIcon
          sx={{
            color: "#f2f2f2",
            display: "inline-block",
            verticalAlign: "middle",
            justifyContent: "space-between",
          }}
        />
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
      <Paper
        sx={{
          bgcolor: "#282828",
          height: "100px",
          textAlign: "left",
          lineHeight: "50px",
          mb: "3rem",
          borderRadius: "0",
          px: "10px",
        }}
      >
        Crossfading
        <Slider size="small" defaultValue={70} aria-label="Small" />
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
      <Paper
        sx={{
          bgcolor: "#282828",
          height: "50px",
          textAlign: "left",
          lineHeight: "50px",
          mb: "3rem",
          borderRadius: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
        }}
        onClick={() => navigate("/importmusic")}
      >
        {t("settings-sync-your-music")}
        <ChevronRightIcon
          sx={{
            color: "#f2f2f2",
            display: "inline-block",
            verticalAlign: "middle",
            justifyContent: "space-between",
          }}
        />
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
      <Paper
        sx={{
          bgcolor: "#282828",
          height: "50px",
          textAlign: "left",
          lineHeight: "50px",
          borderRadius: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
        }}
        onClick={handleOpen}
      >
        {t("settings-log-out")}
        <ChevronRightIcon
          sx={{
            color: "#f2f2f2",
            display: "inline-block",
            verticalAlign: "middle",
            justifyContent: "space-between",
          }}
        />
      </Paper>

      {/* Modal */}

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

          <h2 style={{ textAlign: "center" }}>{t("modal-form-logout")}</h2>
          <p id="parent-modal-description" />
          <LogoutButton />
        </Box>
      </Modal>
    </div>
  );
}
