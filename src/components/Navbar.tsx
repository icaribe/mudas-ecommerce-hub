
import { ShoppingCart, Menu, Search, ArrowLeft } from "lucide-react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showBackButton = location.pathname !== "/";
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            {showBackButton && (
              <Button variant="ghost" size="icon" onClick={handleGoBack}>
                <ArrowLeft className="h-6 w-6" />
              </Button>
            )}
            
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
                  <a href="/catalog" className="block px-4 py-2 hover:bg-accent rounded-md">
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
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Carrinho de Compras</SheetTitle>
                  <SheetDescription>
                    {cartItemsCount === 0 
                      ? "Seu carrinho está vazio"
                      : `${cartItemsCount} ${cartItemsCount === 1 ? 'item' : 'itens'} no carrinho`
                    }
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[65vh] mt-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-4">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-sm font-medium">{item.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Qtd: {item.quantity}
                            </p>
                          </div>
                          <p className="text-sm font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
                {cartItemsCount > 0 && (
                  <div className="space-y-4 mt-6">
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">{formatPrice(cartTotal)}</span>
                    </div>
                    <Button className="w-full" onClick={() => setIsCartOpen(false)}>
                      Finalizar Compra
                    </Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
