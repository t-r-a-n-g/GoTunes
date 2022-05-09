import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ProtectedRoute({ children }) {
  const { auth } = useContext(UserContext);
  if (!auth.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
  // return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

ProtectedRoute.propTypes = {
  /* user: PropTypes.bool, */
  children: PropTypes.shape(),
};
ProtectedRoute.defaultProps = {
  /*  user: true, */
  children: "",
};
