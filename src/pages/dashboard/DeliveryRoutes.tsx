
import { useAuth } from "@/contexts/AuthContext";

export default function DeliveryRoutes() {
  const { staffProfile } = useAuth();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Rotas de Entrega</h1>
      <p className="text-muted-foreground">
        Gerencie as rotas de entrega dos pedidos.
      </p>
    </div>
  );
}
