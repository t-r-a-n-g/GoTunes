import * as React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SearchButton() {
  const { t } = useTranslation();
  return (
    <Link to="/search-result" sx={{ textDecoration: "none" }}>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<SearchIcon sx={{ color: "text.secondary" }} />}
          sx={{ bgcolor: "background.button", color: "text.secondary" }}
        >
          {t("search-button-text")}
        </Button>
      </Stack>
    </Link>
  );
}
