
import { useAuth } from "@/contexts/AuthContext";

export default function Suppliers() {
  const { staffProfile } = useAuth();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Fornecedores</h1>
      <p className="text-muted-foreground">
        Gerencie os fornecedores da plataforma.
      </p>
    </div>
  );
}
