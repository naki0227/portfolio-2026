import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import { Pitch } from "./pages/Pitch";

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <ErrorBoundary>
            <RouterProvider router={router} />
            <Analytics />
          </ErrorBoundary>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
