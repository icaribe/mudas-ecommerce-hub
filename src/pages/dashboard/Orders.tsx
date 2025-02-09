
import { useAuth } from "@/contexts/AuthContext";

export default function Orders() {
  const { staffProfile } = useAuth();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Pedidos</h1>
      <p className="text-muted-foreground">
        Gerencie os pedidos realizados na plataforma.
      </p>
    </div>
  );
}
