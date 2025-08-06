import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Minus, Plus } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useToast } from "./ui/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface AddToCartDialogProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const AddToCartDialog = ({
  product,
  isOpen,
  onClose,
}: AddToCartDialogProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (value: string) => {
    const num = parseInt(value);
    if (!isNaN(num) && num > 0) {
      setQuantity(num);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Produit ajouté au panier",
        description: `${quantity} x ${product.name} ajouté(s) au panier`,
      });
      setQuantity(1);
      onClose();
    }
  };

  const handleClose = () => {
    setQuantity(1);
    onClose();
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter au panier</DialogTitle>
          <DialogDescription>
            Choisissez la quantité pour {product.name}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
              <p className="font-bold">{product.price.toFixed(2)} FCFA</p>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantité
            </Label>
            <div className="col-span-3 flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
                className="text-center w-20"
                min="1"
              />
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">
              {(product.price * quantity).toFixed(2)} FCFA
            </span>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Annuler
          </Button>
          <Button onClick={handleAddToCart}>Ajouter au panier</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartDialog;
