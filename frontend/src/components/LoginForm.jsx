import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import "./LoginForm.css";
import axios from "axios";

function LoginForm() {
  const { t } = useTranslation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailInvalid, setEmailInvalid] = React.useState(false);

  const userLoginData = {};
  userLoginData.email = email;
  userLoginData.password = password;

  function checkEmail() {
    if (email.match(/@/)) {
      setEmailInvalid(false);
      return true;
    }
    setEmailInvalid(true);
    return false;
  }

  function handleLoginRequest() {
    if (checkEmail()) {
      axios
        .post("http://localhost:5000/api/auth/login", userLoginData)
        .then((response) => {
          localStorage.setItem("userToken", response.data.token);
        });
    }
  }

  return (
    <form id="login-form">
      <TextField
        error={emailInvalid === true}
        helperText={
          emailInvalid === true ? t("login-invalid-email-message") : null
        }
        id="standard-basic"
        label="E-Mail"
        variant="standard"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>
        <a href="/">{t("login-forgot-password")}</a>
      </p>
      <Button
        variant="contained"
        id="button"
        onClick={() => handleLoginRequest()}
      >
        {t("login-button")}
      </Button>
      <p>
        {t("login-no-account-text")} <a href="/">{t("sign-up-button")}</a>
      </p>
    </form>
  );
}

export default LoginForm;
