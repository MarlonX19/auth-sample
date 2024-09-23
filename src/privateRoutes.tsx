import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
} from "@azure/msal-react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    <AuthenticatedTemplate>
      <Outlet />
    </AuthenticatedTemplate>
  ) : (
    <UnauthenticatedTemplate>
      <Navigate to="/login" state={{ from: location }} replace />
    </UnauthenticatedTemplate>
  );
};
