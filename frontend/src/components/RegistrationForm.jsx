import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

export default function RegistrationForm() {
  const { t } = useTranslation();
  return (
    <form id="registration-form">
      <TextField id="standard-basic" label="E-Mail" variant="standard" />
      <TextField
        id="standard-basic"
        label="Confirm E-Mail"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        label="Choose Your User Name"
        variant="standard"
      />
      <TextField
        type="password"
        id="standard-basic"
        label="Password"
        variant="standard"
      />
      <TextField
        type="password"
        id="standard-basic"
        label="Confirm Password"
        variant="standard"
      />
      <Button variant="contained">{t("sign-up-button")}</Button>
      <p>
        {t("registration-already-have-acc")} <a href="/">{t("login-button")}</a>
      </p>
    </form>
  );
}
