import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import { AppRoutes } from "./AppRoutes";

const queryClient = new QueryClient();

console.log("App loading...");

const App = () => {
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <LanguageProvider>
              <AppRoutes />
            </LanguageProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("App crash:", error);
    return (
      <div style={{ padding: '20px', color: 'red', background: 'white' }}>
        <h1>App Crashed</h1>
        <pre>{String(error)}</pre>
      </div>
    );
  }
};
export default App;
