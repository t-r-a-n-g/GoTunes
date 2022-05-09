import React from "react";
import IconButton from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      variant="contained"
      id="logout-button"
      sx={{
        mt: "20px",
        alignItems: "center",
        width: "50%",
        ml: "25%",
        mr: "25%",
      }}
      onClick={() => {
        localStorage.removeItem("userToken");
        navigate("/login");
      }}
    >
      <LogoutIcon />
    </IconButton>
  );
}

export default LogoutButton;
