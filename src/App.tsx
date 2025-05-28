
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndividualProjectsPage from './pages/IndividualProjectsPage';
import InstitutionalBuildsPage from './pages/InstitutionalBuildsPage';
import GovernmentContractsPage from './pages/GovernmentContractsPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ContractorDashboard from './pages/contractor/ContractorDashboard';
import CustomerDashboard from './pages/customer/CustomerDashboard';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services/individual-projects" element={<IndividualProjectsPage />} />
          <Route path="/services/institutional-builds" element={<InstitutionalBuildsPage />} />
          <Route path="/services/government-contracts" element={<GovernmentContractsPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Contractor Routes */}
          <Route path="/contractor/dashboard" element={<ContractorDashboard />} />
          
          {/* Customer Routes */}
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
