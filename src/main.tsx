import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./lib/auth/authConfig.ts";
import { MsalProvider } from "@azure/msal-react";
import { router } from "./routes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const queryClient = new QueryClient();

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </MsalProvider>
  </React.StrictMode>
);
