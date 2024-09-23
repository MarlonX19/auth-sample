import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
} from "@azure/msal-react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  // const token = localStorage.getItem("token::");
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  console.log("===isAuthenticated here in public routes", isAuthenticated);

  return !isAuthenticated ? (
    <UnauthenticatedTemplate>
      <Outlet />
    </UnauthenticatedTemplate>
  ) : (
    <AuthenticatedTemplate>
      <Navigate to="/results" state={{ from: location }} replace />
    </AuthenticatedTemplate>
  );
};
