import React, { useState } from "react";
import Button from "@mui/material/Button";
/* import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert'; */
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
/* import axios from "axios"; */
/* import { loginEndpoint } from "@components/API"; */

export default function RegistrationForm() {
  const { t } = useTranslation();

  // Storing user input in variables using React state
  const [email, setEmail] = useState("");
  /*  const [emailConfirm, setEmailConfirm] = useState(""); */
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  /*  const [passwordConfirm, setPasswordConfirm] = useState(""); */

  // Checking if user provides correct (matching) emails and passwords
  /* function isSameEmail() {
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
  } */

  // putting correct email, password and username in object to send it to API
  const userRegisterData = {};
  userRegisterData.email = email;
  userRegisterData.password = password;
  userRegisterData.userName = userName;

  // POST REQUEST TO API (after clicking button)
  // TO DO: change console.log to something more useful
  /* function handleSignUp() {
    axios
      .post(loginEndpoint, userRegisterData)
      .then((response) => console.warn(response));
  }
 */
  return (
    <div>
      <form id="registration-form">
        <TextField
          id="standard-basic"
          label="E-Mail"
          variant="standard"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Confirm E-Mail"
          variant="standard"
          type="email"
          /* onChange={(e) => setEmailConfirm(e.target.value)} */
        />
        {/* Error Message below: just testing, not final */}
        {/* {isSameEmail() ? <p /> : <p>E-Mails don't match!</p>} */}
        <TextField
          id="standard-basic"
          label="Choose Your User Name"
          variant="standard"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          type="password"
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          type="password"
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          /* onChange={(e) => setPasswordConfirm(e.target.value)} */
        />
        <Button variant="contained" /* onClick={handleSignUp} */>
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
