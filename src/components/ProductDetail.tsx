import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import AddToCartDialog from "./AddToCartDialog";
import forever_products from "@/products.json";


interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  hasLifetimeWarranty: boolean;
  description?: string;
  features?: string[];
  rating?: number;
  reviews?: number;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Find the product by ID (in a real app, this would come from an API or state management)
  const product = getProductById(id || "");

  const handleAddToCart = () => {
    setIsDialogOpen(true);
  };

  if (!product) {
    return (
      <div className="bg-background min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/shop"
            className="inline-flex items-center text-primary hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist.
            </p>
            <Link to="/shop">
              <Button>Return to Shop</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/shop"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.hasLifetimeWarranty && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Lifetime Warranty
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    {product.reviews && (
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    )}
                  </div>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-3xl font-bold text-primary">
                {product.price.toFixed(2)} FCFA
              </p>
            </div>

            {product.description && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-3">
              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ajouter au panier
              </Button>
            </div>

            {product.hasLifetimeWarranty && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lifetime Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This product comes with our lifetime warranty, ensuring
                    quality and durability for years to come.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <AddToCartDialog
          product={product}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    </div>
  );
};

// Mock function to get product by ID (in a real app, this would be from an API or state management)
const getProductById = (id: string): Product | null => {
  const prod =  Object.values(forever_products).map(
                    (product) =>{
                      let ouput : Product = {
                        id: product.code,
                        name: product.name,
                        price: product.prix,
                        image: product.image,
                        category: product.categorie,
                        hasLifetimeWarranty: false,
                        description:product.description,
                      }
                      return ouput;
                    }
                  )

  return prod.find((product) => product.id === id) || null;
};

export default ProductDetail;
