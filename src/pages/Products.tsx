import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import productFood from "@/assets/product-food.jpg";
import productGrooming from "@/assets/product-grooming.jpg";
import productToys from "@/assets/product-toys.jpg";

const products = [
  {
    id: 1,
    name: "Premium Pet Food",
    description: "High-quality, nutritious food for dogs and cats. Made with natural ingredients to keep your pet healthy and energetic.",
    image: productFood,
    category: "Food & Nutrition",
  },
  {
    id: 2,
    name: "Grooming Supplies Kit",
    description: "Complete grooming essentials including brushes, combs, shampoos, and conditioners for a healthy, shiny coat.",
    image: productGrooming,
    category: "Grooming",
  },
  {
    id: 3,
    name: "Interactive Pet Toys",
    description: "Fun and engaging toys to keep your pets entertained. Perfect for mental stimulation and physical activity.",
    image: productToys,
    category: "Toys & Accessories",
  },
  {
    id: 4,
    name: "Pet Vitamins & Supplements",
    description: "Essential vitamins and supplements to support your pet's overall health, immune system, and vitality.",
    image: productFood,
    category: "Health & Wellness",
  },
  {
    id: 5,
    name: "Comfortable Pet Beds",
    description: "Soft, cozy beds in various sizes to give your pet the perfect place to rest and sleep.",
    image: productGrooming,
    category: "Bedding & Comfort",
  },
  {
    id: 6,
    name: "Leashes & Collars",
    description: "Durable and stylish leashes and collars for safe and comfortable walks with your pet.",
    image: productToys,
    category: "Accessories",
  },
];

const Products = () => {
  const phoneNumber = "919751721212";

  const handleEnquiry = (productName: string) => {
    const message = `Hello! I'm interested in enquiring about: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">
              Pet Products
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              Quality pet products to keep your furry friends happy and healthy. Enquire via WhatsApp for availability and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-3xl shadow-card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Button
                    variant="whatsapp"
                    className="w-full"
                    onClick={() => handleEnquiry(product.name)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-display text-primary mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-foreground mb-8 max-w-lg mx-auto">
            We stock a wide range of pet products. Contact us with your requirements and we'll help you find what you need.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const message = "Hello! I'm looking for specific pet products. Can you help?";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            <MessageCircle className="h-5 w-5" />
            Chat with Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
