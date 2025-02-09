
import { useAuth } from "@/contexts/AuthContext";

export default function Products() {
  const { staffProfile } = useAuth();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Produtos</h1>
      <p className="text-muted-foreground">
        Gerencie os produtos disponíveis na plataforma.
      </p>
    </div>
  );
}
