import React from "react";
import LoginForm from "@components/LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/profile");
    }
  }, []);
  return (
    <div>
      <h1>Logo Placeholder</h1>
      <LoginForm />
    </div>
  );
}
