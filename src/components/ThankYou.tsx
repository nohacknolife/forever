import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const ThankYou = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart when the thank you page loads
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="text-center">
          <CardHeader className="pb-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl font-bold text-green-600 mb-2">
              Merci pour votre commande !
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-lg text-muted-foreground">
              <p className="mb-4">
                Votre commande a été reçue avec succès. Notre service client va
                bientôt vous contacter pour confirmer les détails et organiser
                la livraison.
              </p>
              <p className="font-semibold text-foreground">
                Nous vous remercions de votre confiance !
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4 text-lg">
                Prochaines étapes :
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <p className="text-sm">
                    Notre équipe va vérifier votre commande et vos informations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <p className="text-sm">
                    Un membre de notre service client vous contactera dans les
                    24 heures
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <p className="text-sm">
                    Nous organiserons ensemble la livraison de vos produits
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Besoin d'aide ?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+225 0707379592</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>jumeauxzanlou@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/">
                <Button size="lg">Retour à l'accueil</Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" size="lg">
                  Continuer vos achats
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
