import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

function LoginForm() {
  const { t } = useTranslation();
  return (
    <form id="login-form">
      <TextField id="standard-basic" label="E-Mail" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <p>
        <a href="/">{t("login-forgot-password")}</a>
      </p>
      <Button variant="contained">{t("login-button")}</Button>
      <p>
        {t("login-no-account-text")} <a href="/">{t("sign-up-button")}</a>
      </p>
    </form>
  );
}

export default LoginForm;
