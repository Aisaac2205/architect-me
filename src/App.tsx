import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import i18n from "./i18n/i18n";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const LanguageSync = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = pathname.startsWith('/en') ? 'en' : 'es';
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <LanguageSync />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/en" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
