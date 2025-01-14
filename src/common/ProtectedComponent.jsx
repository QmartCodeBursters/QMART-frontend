import { Navigate } from "react-router-dom";
import Cookies from "cookie"

export const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("jwt"); // Or use a global state like `email`

  return token ? children : <Navigate to="/login" replace />;
};
