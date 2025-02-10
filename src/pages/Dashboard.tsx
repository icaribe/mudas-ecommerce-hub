
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { DashboardSidebar } from "@/components/DashboardSidebar";

export default function Dashboard() {
  const { user, staffProfile, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !staffProfile)) {
      navigate("/auth");
    }
  }, [user, staffProfile, isLoading, navigate]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!user || !staffProfile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
