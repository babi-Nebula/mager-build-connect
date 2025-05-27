
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndividualProjectsPage from './pages/IndividualProjectsPage'; // Import new page
import InstitutionalBuildsPage from './pages/InstitutionalBuildsPage'; // Import new page
import GovernmentContractsPage from './pages/GovernmentContractsPage'; // Import new page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/individual-projects" element={<IndividualProjectsPage />} />
          <Route path="/services/institutional-builds" element={<InstitutionalBuildsPage />} />
          <Route path="/services/government-contracts" element={<GovernmentContractsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
