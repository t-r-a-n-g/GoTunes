import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import "./LoginForm.css";
import axios from "axios";
import validator from "validator";
import { useNavigate, Link } from "react-router-dom";
import { loginEndpoint } from "./API";

function LoginForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // stateHook for E-Mail textfield
  const [email, setEmail] = React.useState("");
  // stateHook for Password textfield
  const [password, setPassword] = React.useState("");
  // stateHook for valid E-Mail -- boolean
  const [emailInvalid, setEmailInvalid] = React.useState(false);
  // stateHook vor response status of API request
  const [status, setStatus] = React.useState();

  // stores user login data for further usage
  const userLoginData = {};
  userLoginData.email = email;
  userLoginData.password = password;

  // checks if E-Mail has valid format
  function checkEmail() {
    if (validator.isEmail(email)) {
      setEmailInvalid(false);
      return true;
    }
    setEmailInvalid(true);
    return false;
  }

  // if E-Mail is okay, then run API request
  function handleLoginRequest(e) {
    e.preventDefault();
    if (checkEmail()) {
      axios
        .post(loginEndpoint, userLoginData)
        .then((response) => {
          setStatus(response.status);
          // localStorage.setItem stores anything in browser storage
          localStorage.setItem(
            "userToken",
            JSON.stringify(response.data.token)
          );
          // after correct login auto navigate to /page-u-want
          navigate("/profile");
        })
        // save response error in status variable
        .catch((error) => {
          setStatus(error.response.status);
        });
    }
  }

  return (
    <form id="login-form" onSubmit={(e) => handleLoginRequest(e)}>
      <TextField
        // error and helper text for different events
        error={emailInvalid === true || status === 403 || status === 400}
        helperText={
          (emailInvalid === true || status === 400
            ? t("login-invalid-email-message")
            : null) || status === 403
            ? t("email-and-password-not-match")
            : null
        }
        id="login-email"
        sx={{ width: 3 / 4 }}
        label={t("textfield-form-email-label")}
        variant="standard"
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        error={status === 403}
        helperText={status === 403 ? t("email-and-password-not-match") : null}
        id="login-password"
        sx={{ width: 3 / 4 }}
        label={t("textfield-form-password-label")}
        variant="standard"
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>
        <a id="forgott-password-button" href="/">
          {t("login-forgot-password")}
        </a>
      </p>
      <Button
        variant="contained"
        id="login-button"
        type="submit"
        sx={{ px: 8, py: 1 }}
      >
        {t("login-button")}
      </Button>
      {status === 500 ? (
        <p>Internal server error arrived, please try again later?</p>
      ) : null}
      <p id="no-account">
        {t("login-no-account-text")}{" "}
        <Link to="/registration">{t("sign-up-button")}</Link>
      </p>
    </form>
  );
}

export default LoginForm;
