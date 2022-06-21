import { useLocation, Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  let location = useLocation();
  const token = sessionStorage.getItem("id");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
