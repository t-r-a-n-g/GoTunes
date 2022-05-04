import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import authService from "../services/AuthService";

function ProtectedRoute({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loginFailed, setLoginFailed] = useState(false);

  useEffect(async () => {
    try {
      setUser(await authService.getCurrentUser());
    } catch (err) {
      setLoginFailed(true);
      setUser(false);
    }
  }, []);

  if (loginFailed) {
    return <Navigate to="/login" replace />;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

ProtectedRoute.propTypes = {
  /* user: PropTypes.bool, */
  children: PropTypes.shape(),
};
ProtectedRoute.defaultProps = {
  /*  user: true, */
  children: "",
};

export default ProtectedRoute;
