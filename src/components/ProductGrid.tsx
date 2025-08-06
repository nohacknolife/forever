import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AddToCartDialog from "./AddToCartDialog";
import forever_products from "@/products.json";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  hasLifetimeWarranty: boolean;
}

interface ProductGridProps {
  products?: Product[];
  selectedCategories?: string[];
}

const prod =  Object.values(forever_products).map(
                  (product) =>{
                    let ouput : Product = {
                      id: product.code,
                      name: product.name,
                      price: product.prix,
                      image: product.image,
                      category: product.categorie,
                      hasLifetimeWarranty: false
                    }
                    return ouput;
                  }
                )

const ProductGrid = ({
  products = prod,
  selectedCategories = [],
}: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter products by category if categories are selected
  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category.toLowerCase()),
        )
      : products;

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  return (
    <div className="bg-background w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {product.hasLifetimeWarranty && (
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary text-primary-foreground"
                    >
                      Lifetime Warranty
                    </Badge>
                  </div>
                )}
              </div>
            </Link>
            <CardContent className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg mb-1 truncate hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">
                  {product.price.toFixed(2)} FCFA
                </span>
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
              </div>
              <button
                className="mt-3 w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => handleAddToCart(product)}
              >
                Ajouter au panier
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex justify-center items-center h-40 w-full">
          <p className="text-muted-foreground">
            No products found in this category.
          </p>
        </div>
      )}

      <AddToCartDialog
        product={selectedProduct}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default ProductGrid;
