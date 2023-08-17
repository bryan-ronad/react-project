import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
  let { authenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!authenticated) return <Navigate to="/login" replace={true} />;
  else return <Component {...props} />;
};

export default ProtectedRoute;
