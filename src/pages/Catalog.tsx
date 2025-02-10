
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Navbar, useCart } from "@/components/Navbar";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const { addToCart } = useCart();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_variations (
            *
          ),
          product_categories (
            name,
            slug
          )
        `)
        .eq("active", true);

      if (error) throw error;
      return data;
    },
  });

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product: any) => {
    const lowestPriceVariation = product.product_variations.reduce(
      (min: any, current: any) => (current.price < min.price ? current : min),
      product.product_variations[0]
    );

    addToCart({
      id: product.id,
      name: product.name,
      price: lowestPriceVariation.price,
      quantity: 1,
      image_url: product.image_url || "/placeholder.svg",
    });

    toast({
      title: "Produto adicionado ao carrinho",
      description: "Continue comprando ou finalize seu pedido",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Nosso Catálogo</h1>
        
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[400px] w-full" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts?.map((product) => {
              const lowestPrice = Math.min(
                ...product.product_variations.map((v: any) => v.price)
              );
              
              return (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <img
                      src={product.image_url || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-xl font-bold text-primary">
                        {formatPrice(lowestPrice)}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between gap-4">
                      {product.product_categories && (
                        <Badge variant="secondary" className="text-xs">
                          {product.product_categories.name}
                        </Badge>
                      )}
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Adicionar
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
