
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Suppliers from "./pages/dashboard/Suppliers";
import Products from "./pages/dashboard/Products";
import Orders from "./pages/dashboard/Orders";
import DeliveryRoutes from "./pages/dashboard/DeliveryRoutes";
import Customers from "./pages/dashboard/Customers";
import Finances from "./pages/dashboard/Finances";
import { AuthProvider } from "./contexts/AuthContext";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="suppliers" element={<Suppliers />} />
                  <Route path="products" element={<Products />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="routes" element={<DeliveryRoutes />} />
                  <Route path="customers" element={<Customers />} />
                  <Route path="finances" element={<Finances />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
