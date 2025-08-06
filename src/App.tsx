import { Suspense } from "react";
import { useRoutes, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import { ThemeProvider, ThemeToggle } from "./components/ThemeProvider";
import { useCart } from "./contexts/CartContext";
import { Toaster } from "./components/ui/toaster";
import routes from "tempo-routes";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const { getTotalItems } = useCart();

  return (
    <ThemeProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <>
          <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="font-bold text-xl">Forever Products</div>
                    <nav className="hidden md:flex items-center gap-6">
                      <Link to="/" className="text-sm font-medium text-primary">
                        Accueil
                      </Link>
                      <Link
                        to="/shop"
                        className="text-sm font-medium hover:text-primary"
                      >
                        Boutique
                      </Link>
                      <Link
                        to="/about"
                        className="text-sm font-medium hover:text-primary"
                      >
                        A propos
                      </Link>
                      <Link
                        to="/contact"
                        className="text-sm font-medium hover:text-primary"
                      >
                        Contact
                      </Link>
                    </nav>
          </div>

          <div className="flex items-center gap-4">

            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  {getTotalItems()}
                </Badge>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
            <footer className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Forever Products</h3>
              <p className="text-muted-foreground">
                Des produits de qualités destinés à notre bien être de tous les jours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Boutique</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    A propos de nous 
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Débuter son commerce Forever
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Garrantie
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Boîte aux lettres</h3>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Forever Products. Tout droit réservé.
            </p>
          </div>
        </div>
      </footer>
          </>
        </Suspense>
        <Toaster />
    </ThemeProvider>
  );
}

export default App;
