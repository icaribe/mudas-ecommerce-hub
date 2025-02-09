
import { useEffect } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  Truck,
  Users,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { user, staffProfile, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !staffProfile)) {
      navigate("/");
    }
  }, [user, staffProfile, isLoading, navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!user || !staffProfile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-muted p-4">
          <div className="space-y-4">
            <div className="px-3 py-2">
              <h2 className="text-lg font-semibold">Painel Administrativo</h2>
              <p className="text-sm text-muted-foreground">{staffProfile.full_name}</p>
              <p className="text-xs text-muted-foreground capitalize">
                {staffProfile.role}
              </p>
            </div>
            <Separator />
            <nav className="space-y-2">
              <Link to="/dashboard/products">
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="mr-2 h-4 w-4" />
                  Produtos
                </Button>
              </Link>
              <Link to="/dashboard/suppliers">
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Fornecedores
                </Button>
              </Link>
              <Link to="/dashboard/orders">
                <Button variant="ghost" className="w-full justify-start">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Pedidos
                </Button>
              </Link>
              <Link to="/dashboard/routes">
                <Button variant="ghost" className="w-full justify-start">
                  <Truck className="mr-2 h-4 w-4" />
                  Rotas de Entrega
                </Button>
              </Link>
            </nav>
            <Separator />
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
