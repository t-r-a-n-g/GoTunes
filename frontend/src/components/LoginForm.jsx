import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import "./LoginForm.css";
import axios from "axios";
import { loginEndpoint } from "./API";

function LoginForm() {
  const { t } = useTranslation();
  // stateHook for E-Mail textfield
  const [email, setEmail] = React.useState("");
  // stateHook for Password textfield
  const [password, setPassword] = React.useState("");
  // statehook for valid E-Mail -- boolean
  const [emailInvalid, setEmailInvalid] = React.useState(false);

  // stores user login data for further usage
  const userLoginData = {};
  userLoginData.email = email;
  userLoginData.password = password;

  // checks if input from E-Mail textfield contains
  // an @ charackter -- works as an invalid-email test
  function checkEmail() {
    if (email.match(/@/)) {
      setEmailInvalid(false);
      return true;
    }
    setEmailInvalid(true);
    return false;
  }

  // if E-Mail input is okay, then run API request
  function handleLoginRequest() {
    if (checkEmail()) {
      axios.post(loginEndpoint, userLoginData).then((response) => {
        localStorage.setItem("userToken", response.data.token);
      });
    }
  }

  return (
    <form id="login-form">
      <TextField
        // MUI default color pattern for error
        // error will displayed if email input is invalid
        error={emailInvalid === true}
        // MUI default prop for helperText in textfields
        // helperText apears if email input is invalid
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
