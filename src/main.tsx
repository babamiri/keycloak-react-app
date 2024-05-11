import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Router } from "./routes";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloak } from "./keycloak/Keycloak";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ReactKeycloakProvider>
);

