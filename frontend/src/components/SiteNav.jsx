import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import "./SiteNav.css";

export default function SiteNav() {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box id="sitenav-outter-container">
      <BottomNavigation
        id="sitenav-container"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/profile")}
          label={t("profile")}
          icon={<AccountBoxIcon sx={{ fontSize: "verylarge" }} />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/search-genre")}
          label={t("search")}
          icon={<ManageSearchIcon sx={{ fontSize: "verylarge" }} />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/library")}
          label={t("library")}
          icon={<LibraryMusicIcon sx={{ fontSize: "verylarge" }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
