import { Navigate } from "react-router-dom";

import { getLocalstorage } from "../../functions/localStorage";
const ProtectedRoute = ({ children }) => {
  // getting login info from local storage
  const logstate = getLocalstorage();
  if (logstate === false) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
