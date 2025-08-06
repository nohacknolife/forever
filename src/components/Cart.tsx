import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { ThemeToggle } from "./ThemeProvider";



const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const navigate = useNavigate();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleOrder = () => {


    if (items.length === 0) {
      alert("Votre panier est vide");
      return;
    }
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Veuillez remplir votre nom et numéro de téléphone");
      return;
    }
     window.location.href = "https://api.whatsapp.com/send/?phone=%2B2250707379592&text&type=phone_number&app_absent=0";
    //navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Voir Panier</h1>
          <p className="text-muted-foreground text-lg">
            Vérifiez vos articles et finalisez votre commande.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  Articles dans votre panier ({items.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Votre panier est vide
                    </p>
                    <Link to="/shop">
                      <Button>Continuer vos achats</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 border rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.category}
                          </p>
                          <p className="font-bold">{item.price.toFixed(2)} FCFA</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">
                            {(item.price * item.quantity).toFixed(2)} FCFA
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary & Customer Info */}
          <div className="space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informations Client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="customerName">Nom complet</Label>
                  <Input
                    id="customerName"
                    type="text"
                    placeholder="Votre nom complet"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="customerPhone">Numéro de téléphone</Label>
                  <Input
                    id="customerPhone"
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{getTotalPrice().toFixed(2)} FCFA</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>Payante</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{getTotalPrice().toFixed(2)} FCFA</span>
                </div>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleOrder}
                  disabled={items.length === 0}
                >
                  Commander
                </Button>
                <Link to="/shop" className="block">
                  <Button variant="outline" className="w-full">
                    Continuer vos achats
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
