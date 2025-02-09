
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Truck, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fadeIn">
              Transforme seu Espaço com Nossas Mudas
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto fadeIn">
              Entregamos vida e beleza diretamente na sua porta. Plantas selecionadas com cuidado para seu jardim.
            </p>
            <Link to="/catalog">
              <Button className="fadeIn" size="lg">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 text-center fadeIn">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Plantas Selecionadas</h3>
                <p className="text-muted-foreground">
                  Mudas de alta qualidade, cultivadas com amor e cuidado.
                </p>
              </div>
              
              <div className="p-6 text-center fadeIn">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Entrega Garantida</h3>
                <p className="text-muted-foreground">
                  Entregamos com cuidado em todo o Distrito Federal.
                </p>
              </div>
              
              <div className="p-6 text-center fadeIn">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Agende sua Entrega</h3>
                <p className="text-muted-foreground">
                  Escolha o melhor dia para receber suas mudas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
