import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import enTranslations from "@shopify/polaris/locales/en.json";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider i18n={enTranslations}>
        <App />
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>
);
