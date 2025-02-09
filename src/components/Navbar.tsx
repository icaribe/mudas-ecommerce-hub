
import { ShoppingCart, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Mudas para Mudar</SheetTitle>
                  <SheetDescription>
                    Navegue por nosso catálogo
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  <a href="/" className="block px-4 py-2 hover:bg-accent rounded-md">
                    Início
                  </a>
                  <a href="/products" className="block px-4 py-2 hover:bg-accent rounded-md">
                    Produtos
                  </a>
                  <a href="/about" className="block px-4 py-2 hover:bg-accent rounded-md">
                    Sobre
                  </a>
                </div>
              </SheetContent>
            </Sheet>
            <a href="/" className="font-semibold text-xl">Mudas para Mudar</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-10 w-64"
                placeholder="Buscar plantas..."
                type="search"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
