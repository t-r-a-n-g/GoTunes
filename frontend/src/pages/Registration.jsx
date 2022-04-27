import React from "react";
import RegistrationForm from "../components/Authentification/RegistrationForm";

export default function Login() {
  return (
    <div>
      <img
        src="https://i.imgur.com/46Jg1Gw.png"
        style={{ marginTop: "5vh" }}
        alt="logo"
      />
      <h1 style={{ marginTop: 0 }}>Go Tunes</h1>
      <RegistrationForm />
    </div>
  );
}
