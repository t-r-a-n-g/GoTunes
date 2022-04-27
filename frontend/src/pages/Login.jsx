import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Authentification/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/profile");
    }
  }, []);
  return (
    <div>
      <img
        src="https://i.imgur.com/46Jg1Gw.png"
        style={{ marginTop: "10vh" }}
        alt="logo"
      />
      <h1 style={{ marginTop: 0 }}>Go Tunes</h1>
      <LoginForm />
    </div>
  );
}
