import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
/* import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert'; */
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { registerEndpoint } from "./API";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const { t } = useTranslation();

  // Storing user input in variables using React state
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // Checking if user provides correct (matching) emails and passwords
  function isSameEmail() {
    if (email === emailConfirm) {
      return true;
    }
    return false;
  }

  function isSamePassword() {
    if (password === passwordConfirm) {
      return true;
    }
    return false;
  }

  // putting correct email, password and username in object to send it to API
  const userRegisterData = {};
  userRegisterData.username = username;
  userRegisterData.email = email;
  userRegisterData.password = password;

  // POST REQUEST TO API on SignUp Button, only possible if emails and passwords match
  // update state of status in response and error response
  const [status, setStatus] = useState("");
  const handleSignUp = useCallback(() => {
    if (isSameEmail && isSamePassword) {
      axios
        .post(registerEndpoint, userRegisterData)
        .then((response) => {
          setStatus(response.status);
        })
        .catch((error) => {
          setStatus(error.response.status);
        });
    }
  });

  return (
    <div>
      <form id="registration-form">
        <TextField
          id="registration-email"
          label="E-Mail"
          variant="standard"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="registration-confirm-email"
          label="Confirm E-Mail"
          variant="standard"
          type="email"
          required
          onChange={(e) => setEmailConfirm(e.target.value)}
        />
        {/* Error Message below: just testing, not final */}
        {isSameEmail() ? (
          <p />
        ) : (
          <p className="error-message">
            {t("registration-emails-not-matching")}
          </p>
        )}
        <TextField
          id="registration-username"
          label="Choose Your User Name"
          variant="standard"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          id="registration-password"
          label="Password"
          variant="standard"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          type="password"
          id="registration-confirm-password"
          label="Confirm Password"
          variant="standard"
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {isSamePassword() ? (
          <p />
        ) : (
          <p className="error-message">
            {t("registration-password-not-matching")}
          </p>
        )}
        {status === 400 ? <p>{t("registration-false-email-format")}</p> : ""}
        {status === 409 ? <p>{t("registration-acc-already-exists")}</p> : ""}
        {status === 500 ? <p>{t("registration-internal-server-error")}</p> : ""}
        <Button variant="contained" onClick={handleSignUp}>
          {t("sign-up-button")}
        </Button>
        <p>
          {t("registration-already-have-acc")}{" "}
          <a href="/">{t("login-button")}</a>
        </p>
      </form>
      {/* Snackbar isn't working so far */}
    </div>
  );
}
