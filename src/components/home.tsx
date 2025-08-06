import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import ProductGrid from "./ProductGrid";

interface HomeProps {}

const redirectToExternal = () => {
  window.location.href = "https://api.whatsapp.com/send/?phone=%2B2250707379592&text&type=phone_number&app_absent=0";
};

const Home = ({}: HomeProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleFilterChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Des produits pour vos besoins 
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Découvrer notre collection de produits de qualités, 
                d'animaux de compagnies et de plantes médecinales rares
                d'afrique pour tout vos cas d'utilisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link to="/shop">Acheter maintenant</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Découvrez-nous</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <img
                src="../portrait-woman-interacting-with-fruits.jpg"
                alt="Forever Products"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      

      {/* Special Collections - Dogs and Plants */}
      <section className="py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Notre collection spéciale
            </h2>
            <p className="text-muted-foreground">
             Découvrez nos offres uniques pour les amoureux de la santé, des chiens et des plantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dogs Panel */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80"
                  alt="Dog Products"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">
                  Chiots de race
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Chiots de races</h3>
                <p className="text-muted-foreground mb-4">
                  Tout ce dont votre famille à besoin - de beaux chiots pour la sécurité et le bonheur des enfants.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Berger malinois</span>
                    <span className="font-semibold">A partir de 150 000 FCFA</span>
                  </div>
                </div>
                <Button className="w-full" onClick={redirectToExternal}>Acheter vos chiots</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="../front-view-smiley-woman-holding-hair-products.jpg"
                  alt="Produits forever"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-purple-600">
                  Produits Forever
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Produits Forever</h3>
                <p className="text-muted-foreground mb-4">
                  Augmenter votre performance, avec vos produits Forever.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Prix le plus bas</span>
                    <span className="font-semibold">20 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prix moyen</span>
                    <span className="font-semibold">50 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prix max</span>
                    <span className="font-semibold">200 000 FCFA</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/shop">Acheter maintenant</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Plants Panel */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                  alt="Plant Products"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">
                  Botanique
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Plante médecinales
                </h3>
                <p className="text-muted-foreground mb-4">
                  Retrouver la qualité du naturel, avec vos plantes médecinales.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Hysoppe</span>
                    <span className="font-semibold">30 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jatropha rouge</span>
                    <span className="font-semibold">50 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moringa</span>
                    <span className="font-semibold">40 000 FCFA</span>
                  </div>
                </div>
                <Button className="w-full" onClick={redirectToExternal}>Acheter des plantes</Button>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Parcourir la boutique</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid selectedCategories={[]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
