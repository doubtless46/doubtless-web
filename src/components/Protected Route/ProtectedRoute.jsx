import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  let auth = true;
  if (!auth) {
    return <Navigate to="/" replace={true}/>;
  }
  return children;
};

export default ProtectedRoute;
