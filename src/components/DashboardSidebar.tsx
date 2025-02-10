
import {
  CircleDollarSign,
  Home,
  Package,
  Route,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-2">
            <Package className="h-6 w-6" />
            <span className="font-semibold">Admin</span>
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
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
