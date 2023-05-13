import { useContext } from "react";
import { Navigate } from "react-router-dom";
 
import AuthContext from "./AuthContext";
 
const ProtectedRoute = ({ children, accessBy }) => {
  const { users } = useContext(AuthContext);
 
  if (accessBy === "non-authenticated") {
    if (!users) {
      return children;
    }
  } else if (accessBy === "authenticated") {
    if (users) {
      return children;
    }
  }
 
  return <Navigate to="/"></Navigate>;
};
 
export default ProtectedRoute;