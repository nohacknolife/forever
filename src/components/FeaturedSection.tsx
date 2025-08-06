import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

interface FeaturedProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  testimonials: Testimonial[];
}

interface FeaturedSectionProps {
  title?: string;
  subtitle?: string;
  products?: FeaturedProduct[];
}

const FeaturedSection = ({
  title = "Our Top-Rated Forever Products",
  subtitle = "Quality items built to last a lifetime",
  products = [
    {
      id: "1",
      name: "Cast Iron Skillet",
      image:
        "https://images.unsplash.com/photo-1574181609941-50c53ab5e9a4?w=500&q=80",
      price: 89.99,
      rating: 4.9,
      testimonials: [
        {
          id: "t1",
          name: "Sarah L.",
          quote:
            "I've had this skillet for 5 years and it's still perfect. Worth every penny!",
          rating: 5,
        },
      ],
    },
    {
      id: "2",
      name: "Leather Messenger Bag",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
      price: 249.99,
      rating: 4.8,
      testimonials: [
        {
          id: "t2",
          name: "Michael T.",
          quote:
            "This bag ages beautifully and the craftsmanship is outstanding.",
          rating: 5,
        },
      ],
    },
    {
      id: "3",
      name: "Titanium Water Bottle",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
      price: 45.99,
      rating: 4.7,
      testimonials: [
        {
          id: "t3",
          name: "Alex K.",
          quote:
            "Virtually indestructible. I've taken it everywhere from hiking to office meetings.",
          rating: 5,
        },
      ],
    },
  ],
}: FeaturedSectionProps) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className="absolute top-2 right-2 bg-primary">
                  Lifetime Warranty
                </Badge>
              </div>
              <CardContent className="flex-1 flex flex-col p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm ml-2 text-muted-foreground">
                    {product.rating.toFixed(1)}
                  </span>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <h4 className="font-medium text-sm mb-2">
                    Customer Testimonial
                  </h4>
                  {product.testimonials.length > 0 && (
                    <div className="italic text-sm text-muted-foreground">
                      "{product.testimonials[0].quote}"
                      <div className="mt-1 font-medium not-italic">
                        — {product.testimonials[0].name}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
