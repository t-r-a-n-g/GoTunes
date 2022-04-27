import * as React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SearchButton() {
  const { t } = useTranslation();
  return (
    <div>
      <Link
        to="/search"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Button
            variant="text"
            startIcon={<SearchIcon sx={{ color: "text.secondary" }} />}
            sx={{
              ":hover": {
                bgcolor: "#ffffff",
                color: "text.secondary",
              },
              justifyContent: "flex-start",
              bgcolor: "#ffffff",
              color: "text.secondary",
              textTransform: "unset",
              textDecoration: "none",
            }}
          >
            {t("search-button-text")}
          </Button>
        </Stack>
      </Link>
    </div>
  );
}
