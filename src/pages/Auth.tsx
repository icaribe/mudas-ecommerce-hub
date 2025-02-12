
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState<"customer" | "vendor" | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Redirecionar com base no tipo de usuário
      const { data: profile } = await supabase
        .from("user_profiles")
        .select("user_type")
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
        .maybeSingle();

      toast.success("Login realizado com sucesso!");

      if (!profile) {
        // Se não houver perfil, redirecionar para uma página padrão ou mostrar erro
        toast.error("Perfil não encontrado. Por favor, entre em contato com o suporte.");
        return;
      }

      if (profile.user_type === "vendor") {
        navigate("/vendor/dashboard");
      } else {
        navigate("/customer/dashboard");
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      toast.error(error.message === "Invalid login credentials"
        ? "Credenciais inválidas. Verifique seu email e senha."
        : "Erro ao fazer login. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      toast.error("Por favor, selecione o tipo de usuário");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Criar usuário no Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error("Erro ao criar usuário");

      // 2. Criar perfil do usuário
      const { error: profileError } = await supabase
        .from("user_profiles")
        .insert([
          {
            user_id: authData.user.id,
            user_type: userType,
            full_name: fullName,
            phone,
            email,
          },
        ]);

      if (profileError) throw profileError;

      // 3. Criar perfil específico baseado no tipo
      const userProfileResponse = await supabase
        .from("user_profiles")
        .select("id")
        .eq("user_id", authData.user.id)
        .single();

      if (userProfileResponse.error) throw userProfileResponse.error;

      if (userType === "customer") {
        const { error: customerError } = await supabase
          .from("customer_profiles")
          .insert([
            {
              user_profile_id: userProfileResponse.data.id,
            },
          ]);

        if (customerError) throw customerError;
      } else {
        const { error: vendorError } = await supabase
          .from("vendor_profiles")
          .insert([
            {
              user_profile_id: userProfileResponse.data.id,
            },
          ]);

        if (vendorError) throw vendorError;
      }

      toast.success("Conta criada com sucesso! Por favor, faça login.");
      
      // Resetar formulário
      setEmail("");
      setPassword("");
      setFullName("");
      setPhone("");
      setUserType(null);
    } catch (error: any) {
      console.error("Erro ao criar conta:", error);
      toast.error(error.message === "User already registered"
        ? "Este email já está registrado. Por favor, faça login."
        : "Erro ao criar conta. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <Package className="h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Bem-vindo(a)
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Faça login ou crie sua conta para continuar
          </p>
        </div>

        <Card>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Cadastro</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Entre com suas credenciais para acessar sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleSignUp}>
                <CardHeader>
                  <CardTitle>Criar Conta</CardTitle>
                  <CardDescription>
                    Preencha seus dados para criar uma nova conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="userType">Tipo de Usuário</Label>
                    <Select
                      value={userType || undefined}
                      onValueChange={(value: "customer" | "vendor") =>
                        setUserType(value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de usuário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer">Cliente</SelectItem>
                        <SelectItem value="vendor">Viveirista</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newEmail">Email</Label>
                    <Input
                      id="newEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Senha</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Criando conta..." : "Criar Conta"}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
