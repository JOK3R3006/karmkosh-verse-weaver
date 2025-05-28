
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Creators from "./pages/Creators";
import CreateProduct from "./pages/CreateProduct";
import CreatorDashboard from "./pages/CreatorDashboard";
import ProductDetail from "./pages/ProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="creators" element={<Creators />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="creator-dashboard" element={<CreatorDashboard />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
          {/* Catch all unknown routes and redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
