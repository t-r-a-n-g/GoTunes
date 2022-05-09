import React, { useCallback, useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import axios from "axios";
import validator from "validator";
import { useNavigate, Link } from "react-router-dom";
import { registerEndpoint } from "../API";
import "./RegistrationForm.css";
import UserContext from "../../contexts/UserContext";
// TO DO: ROUTING TO ANOTHER PAGE AFTER SUCCESSFUL REGISTRATION

export default function RegistrationForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Storing user input in variables using React state
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { auth } = useContext(UserContext);
  // Checking if user provides correct (matching) emails and passwords
  function isSameEmail() {
    // this returns true if both matches, false if not
    return email === emailConfirm;
  }

  function isSamePassword() {
    return password === passwordConfirm;
  }

  // Checking if email format is valid
  const [isEmailValid, setIsEmailValid] = useState("");

  const checkEmailValid = () => {
    if (validator.isEmail(email)) {
      setIsEmailValid(true);
    } else setIsEmailValid(false);
  };

  // putting correct email, password and username in object to send it to API
  const userRegisterData = {};
  userRegisterData.username = username;
  userRegisterData.email = email;
  userRegisterData.password = password;

  // POST REQUEST TO API on SignUp Button
  // only possible if emails and passwords match and if email format is valid
  // update state of status in response and error response
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Function to be executed when submitting SignUp Form
  const handleSignUp = useCallback((e) => {
    e.preventDefault();
    // make API request when all checks passed
    if (isSameEmail && isSamePassword && isEmailValid) {
      axios
        .post(registerEndpoint, userRegisterData)
        .then((response) => {
          /*  console.log(response); */
          setStatus(response.status);
          // localStorage.setItem(
          //  "userToken",
          //  JSON.stringify(response.data.token)
          // );
          auth.setToken(response.data.token);
          navigate("/profile");
        })
        .catch((error) => {
          setStatus(error.response.status);
          setErrorMsg(error.response.data.errors);
        });
    }
  });

  // pulling out error messages from error code 409
  let errorMsgUsername = "";
  let errorMsgEmail = "";
  if (errorMsg.length === 2) {
    errorMsgUsername = errorMsg[0].username;
    errorMsgEmail = errorMsg[1].email;
  } else if (errorMsg.length === 1) {
    if (errorMsg[0].username) {
      errorMsgUsername = errorMsg[0].username;
    }
    if (errorMsg[0].email) {
      errorMsgEmail = errorMsg[0].email;
    }
  }

  return (
    <div>
      <form id="registration-form" onSubmit={handleSignUp}>
        <TextField
          id="registration-email"
          label={t("textfield-form-email-label")}
          sx={{ width: 3 / 4 }}
          variant="standard"
          /* type="email" */
          required
          error={isEmailValid === false}
          helperText={
            isEmailValid === false ? t("registration-invalid-email") : ""
          }
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => checkEmailValid()}
        />

        <TextField
          id="registration-confirm-email"
          label={t("textfield-form-confirmemail-label")}
          sx={{ width: 3 / 4 }}
          variant="standard"
          /* type="email" */
          required
          error={isSameEmail() === false}
          helperText={
            isSameEmail() ? "" : t("registration-emails-not-matching")
          }
          onChange={(e) => setEmailConfirm(e.target.value)}
        />

        {status === 409 ? <p>{t(errorMsgEmail)}</p> : ""}
        {status === 400 ? <p>{t("registration-false-email-format")}</p> : ""}
        <TextField
          id="registration-username"
          label={t("textfield-form-username-label")}
          sx={{ width: 3 / 4 }}
          variant="standard"
          required
          onBlur={(e) => setUsername(e.target.value)}
        />
        {status === 409 ? <p>{t(errorMsgUsername)}</p> : ""}
        <TextField
          type="password"
          id="registration-password"
          label={t("textfield-form-password-label")}
          sx={{ width: 3 / 4 }}
          variant="standard"
          required
          onBlur={(e) => setPassword(e.target.value)}
        />
        <TextField
          type="password"
          id="registration-confirm-password"
          label={t("textfield-form-confirmpassword-label")}
          sx={{ width: 3 / 4 }}
          variant="standard"
          required
          error={isSamePassword() === false}
          helperText={
            isSamePassword() ? "" : t("registration-password-not-matching")
          }
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {status === 500 ? <p>{t("registration-internal-server-error")}</p> : ""}
        <Button
          sx={{ px: 8, py: 1, marginTop: "2rem" }}
          variant="contained"
          type="submit"
        >
          {t("sign-up-button")}
        </Button>
        <p id="got-account">
          {t("registration-already-have-acc")}{" "}
          <Link to="/login">{t("login-button")}</Link>
        </p>
      </form>
    </div>
  );
}
