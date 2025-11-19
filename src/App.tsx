import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndividualProjectsPage from './pages/IndividualProjectsPage';
import InstitutionalBuildsPage from './pages/InstitutionalBuildsPage';
import GovernmentContractsPage from './pages/GovernmentContractsPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import Reports from './pages/admin/Reports';
import NewsManagement from './pages/admin/NewsManagement';
import Settings from './pages/admin/Settings';
import ContractorDashboard from './pages/contractor/ContractorDashboard';
import EmployeeManagement from './pages/contractor/EmployeeManagement';
import RawMaterials from './pages/contractor/RawMaterials';
import ContractorReports from './pages/contractor/ContractorReports';
import ProjectManagement from './pages/contractor/ProjectManagement';
import QualityControl from './pages/contractor/QualityControl';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import ProjectOverview from './pages/customer/ProjectOverview';
import CustomerReports from './pages/customer/CustomerReports';
import CustomerNotifications from './pages/customer/CustomerNotifications';
import DocumentLibrary from './pages/customer/DocumentLibrary';
import PaymentsBilling from './pages/customer/PaymentsBilling';
import ChangeOrders from './pages/customer/ChangeOrders';
import SitePhotos from './pages/customer/SitePhotos';
import SafetyCompliance from './pages/customer/SafetyCompliance';
import Support from './pages/customer/Support';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/news" element={<NewsManagement />} />
            <Route path="/admin/settings" element={<Settings />} />
            
            {/* Contractor Routes */}
            <Route path="/contractor/dashboard" element={<ContractorDashboard />} />
            <Route path="/contractor/projects" element={<ProjectManagement />} />
            <Route path="/contractor/employees" element={<EmployeeManagement />} />
            <Route path="/contractor/materials" element={<RawMaterials />} />
            <Route path="/contractor/quality" element={<QualityControl />} />
            <Route path="/contractor/reports" element={<ContractorReports />} />
            
            {/* Customer Routes */}
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="/customer/projects" element={<ProjectOverview />} />
            <Route path="/customer/reports" element={<CustomerReports />} />
            <Route path="/customer/notifications" element={<CustomerNotifications />} />
            <Route path="/customer/documents" element={<DocumentLibrary />} />
            <Route path="/customer/payments" element={<PaymentsBilling />} />
            <Route path="/customer/change-orders" element={<ChangeOrders />} />
            <Route path="/customer/photos" element={<SitePhotos />} />
            <Route path="/customer/safety" element={<SafetyCompliance />} />
            <Route path="/customer/support" element={<Support />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
