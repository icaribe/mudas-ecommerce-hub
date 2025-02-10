
import {
  CircleDollarSign,
  Home,
  Package,
  Route,
  ShoppingCart,
  Truck,
  Users,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function DashboardSidebar() {
  const { staffProfile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/auth");
      toast.success("Sessão encerrada com sucesso");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      toast.error("Erro ao encerrar sessão");
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-2">
            <Package className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="font-semibold">Admin</span>
              <span className="text-xs text-muted-foreground">
                {staffProfile?.full_name}
              </span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <NavLink to="/dashboard">
              <SidebarMenuButton tooltip="Início">
                <Home className="h-4 w-4" />
                <span>Início</span>
              </SidebarMenuButton>
            </NavLink>
            <NavLink to="/dashboard/products">
              <SidebarMenuButton tooltip="Produtos">
                <Package className="h-4 w-4" />
                <span>Produtos</span>
              </SidebarMenuButton>
            </NavLink>
            <NavLink to="/dashboard/suppliers">
              <SidebarMenuButton tooltip="Fornecedores">
                <Truck className="h-4 w-4" />
                <span>Fornecedores</span>
              </SidebarMenuButton>
            </NavLink>
            <NavLink to="/dashboard/orders">
              <SidebarMenuButton tooltip="Pedidos">
                <ShoppingCart className="h-4 w-4" />
                <span>Pedidos</span>
              </SidebarMenuButton>
            </NavLink>
            <NavLink to="/dashboard/routes">
              <SidebarMenuButton tooltip="Rotas">
                <Route className="h-4 w-4" />
                <span>Rotas</span>
              </SidebarMenuButton>
            </NavLink>
            <NavLink to="/dashboard/customers">
              <SidebarMenuButton tooltip="Clientes">
                <Users className="h-4 w-4" />
                <span>Clientes</span>
              </SidebarMenuButton>
            </NavLink>
            <NavLink to="/dashboard/finances">
              <SidebarMenuButton tooltip="Financeiro">
                <CircleDollarSign className="h-4 w-4" />
                <span>Financeiro</span>
              </SidebarMenuButton>
            </NavLink>
            <SidebarMenuButton onClick={handleLogout} className="text-destructive">
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
