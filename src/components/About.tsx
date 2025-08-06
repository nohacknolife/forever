import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Comment devenir distributeur Forever ?
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Avec Forever, entrez dans un monde d'opportunités
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Etapes à suivre</h2>
              <p className="text-muted-foreground mb-4">
                Tout d'abord, vous devez préparer certains éléments.
              </p>
              <li>La photocopie de votre CNI</li>
              <li>Une adresse électronique (E-Mail)</li>
              <li>Votre achat selon votre budget.</li>
              <br />
              <p className="text-muted-foreground mb-4">
                En suite, Vous faites un achat minimum de produits d'une valeur de <b>408 000 Fcfa</b>. Vous avez le choix des produits.
                Ou bien un achat de <b>306 000 Fcfa</b>. Ici c'est un pack déjà choisit.
                Toutefois si vous n'avez pas ce budget, veuillez nous contacter pour des facilités.
                Après votre achat de produits selon votre budget, Forever vous donne un numéro partenaire international pour vos prochains achats avec désormais une réduction permanente de base de <b>30%</b>.
                *Ce pourcentage de réduction pourrait aller jusqu'à <b>48%</b> selon des critères définis par l'entreprise.
                Vous achetez donc désormais les produits au prix de gros avec votre identifiant dans tous les pays où il y a Forever.
                Alors venez vous inscrire directement dans nos locaux et bénéficiez des avantages de partenaire.
              </p>
              <p className="text-muted-foreground">
                We partner with manufacturers who share our commitment to
                excellence and sustainability, ensuring that every purchase you
                make is an investment in quality.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="../close-up-delivery-person-with-parcel.jpg"
                alt="Our workshop"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à investir?
          </h2>
          <p className="text-muted-foreground mb-6">
            Découvrer un monde avec multiples possibilités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
                              <Link to="/shop">Parcourir notre boutique</Link>
                            </Button>
            <Button size="lg" variant="outline" asChild>
                              <Link to="/contact">Nous contacter</Link>
                            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
