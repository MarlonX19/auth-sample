import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import { Layout } from "./pages/layout";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route element={<PublicRoutes />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* protected routes */}

      <Route element={<PrivateRoutes />}>
        <Route
          path="protected"
          element={<h1>outro exemplo de pagina com rota protegida!</h1>}
        />
        <Route path="results" element={<App />} />
      </Route>
    </Route>
  )
);
