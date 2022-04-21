import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const [userLoggedIn, setUserLoggedIn] = React.useState(
    !localStorage.getItem("userToken")
  );
  if (!userLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  /* user: PropTypes.bool, */
  children: PropTypes.object,
};
ProtectedRoute.defaultProps = {
  /*  user: true, */
  children: "",
};

export default ProtectedRoute;
