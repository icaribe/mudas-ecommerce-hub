
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

export default function CustomerProfile() {
  const { user, userProfile, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !userProfile)) {
      navigate("/auth");
    } else if (userProfile?.user_type !== "customer") {
      navigate("/auth");
    }
  }, [user, userProfile, isLoading, navigate]);

  if (isLoading || !userProfile) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div>
                <CardTitle>Meu Perfil</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Gerencie suas informações pessoais
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" value={userProfile.full_name || ''} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" value={userProfile.email || ''} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" value={userProfile.phone || ''} readOnly />
            </div>
            <Button>Editar Informações</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
