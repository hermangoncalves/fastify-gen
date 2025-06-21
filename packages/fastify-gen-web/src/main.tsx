import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProjectProvider } from "./contexts/ProjectContext.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ProjectProvider>
        <App />
      </ProjectProvider>
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
