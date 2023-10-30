import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { NavigationProvider } from "./providers/navigation.provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NavigationProvider />
    </ThemeProvider>
  </React.StrictMode>
);
