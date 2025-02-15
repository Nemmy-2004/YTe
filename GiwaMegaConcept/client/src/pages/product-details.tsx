import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function ProductDetails() {
  const { id } = useParams();
  
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", id],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Skeleton className="h-[400px] w-full" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">
                {product.description}
              </p>
              <div className="text-sm text-muted-foreground">
                Category: {product.category}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
