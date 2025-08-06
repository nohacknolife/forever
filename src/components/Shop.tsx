import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import ProductGrid from "./ProductGrid";
import FilterSidebar from "./FilterSidebar";
import { ThemeToggle } from "./ThemeProvider";
import { useCart } from "../contexts/CartContext";

interface ShopProps {}

const Shop = ({}: ShopProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { getTotalItems } = useCart();

  const handleFilterChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="min-h-screen bg-background">
     
      {/* Main Content */}
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Parcourir notre collection</h1>
          <p className="text-muted-foreground text-lg">
            Decouvrer nos produits forever
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid selectedCategories={selectedCategories} />
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Shop;
