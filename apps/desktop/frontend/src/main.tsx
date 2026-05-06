import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppShell } from "./app/AppShell";
import "./app/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppShell />
  </StrictMode>
);
