import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

export default function ImportMusic() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
        {t("importmusic-heading")}
        <ChevronLeftIcon
          sx={{
            color: "#f2f2f2",
            position: "absolute",
            top: "18px",
            left: "10px",
          }}
          onClick={() => navigate("/settings")}
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
        {t("importmusic-soundcloud")}
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
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
        {t("importmusic-spotify")}
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
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
        {t("importmusic-mixcloud")}
      </Paper>
      <Divider sx={{ bgcolor: "#18191a" }} />
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
        {t("importmusic-personal-library")}
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
    </div>
  );
}
