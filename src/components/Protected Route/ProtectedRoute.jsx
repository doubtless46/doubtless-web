import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  let {isLoggedIn} = useSelector(state =>state.user);
  if (!isLoggedIn) {
    return <Navigate to="/" replace={true}/>;
  }
  return children;
};


export default ProtectedRoute;
