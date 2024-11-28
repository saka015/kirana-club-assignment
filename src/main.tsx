import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import enTranslations from "@shopify/polaris/locales/en.json";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </StrictMode>
);
