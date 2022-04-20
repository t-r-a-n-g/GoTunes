import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  user: PropTypes.bool,
  children: PropTypes.elementType,
};
ProtectedRoute.defaultProps = {
  user: true,
  children: "",
};

export default ProtectedRoute;
