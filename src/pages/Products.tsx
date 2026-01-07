import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star, CheckCircle } from "lucide-react";
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
    priceRange: "₹500 - ₹2,500",
    features: ["Natural ingredients", "No artificial preservatives", "Multiple flavors", "All life stages"],
    popular: true,
  },
  {
    id: 2,
    name: "Grooming Supplies Kit",
    description: "Complete grooming essentials including brushes, combs, shampoos, and conditioners for a healthy, shiny coat.",
    image: productGrooming,
    category: "Grooming",
    priceRange: "₹800 - ₹3,000",
    features: ["Professional grade tools", "Hypoallergenic products", "Complete kit", "Suitable for all breeds"],
    popular: false,
  },
  {
    id: 3,
    name: "Interactive Pet Toys",
    description: "Fun and engaging toys to keep your pets entertained. Perfect for mental stimulation and physical activity.",
    image: productToys,
    category: "Toys & Accessories",
    priceRange: "₹200 - ₹1,500",
    features: ["Durable materials", "Safe & non-toxic", "Mental stimulation", "Various sizes available"],
    popular: true,
  },
  {
    id: 4,
    name: "Pet Vitamins & Supplements",
    description: "Essential vitamins and supplements to support your pet's overall health, immune system, and vitality.",
    image: productFood,
    category: "Health & Wellness",
    priceRange: "₹600 - ₹2,000",
    features: ["Vet recommended", "Natural formula", "Immune support", "Joint & bone health"],
    popular: false,
  },
  {
    id: 5,
    name: "Comfortable Pet Beds",
    description: "Soft, cozy beds in various sizes to give your pet the perfect place to rest and sleep.",
    image: productGrooming,
    category: "Bedding & Comfort",
    priceRange: "₹1,000 - ₹5,000",
    features: ["Washable covers", "Orthopedic support", "Multiple sizes", "Durable construction"],
    popular: true,
  },
  {
    id: 6,
    name: "Leashes & Collars",
    description: "Durable and stylish leashes and collars for safe and comfortable walks with your pet.",
    image: productToys,
    category: "Accessories",
    priceRange: "₹300 - ₹1,500",
    features: ["Adjustable fit", "Reflective material", "Strong & durable", "Comfortable padding"],
    popular: false,
  },
  {
    id: 7,
    name: "Pet Dental Care Kit",
    description: "Complete dental hygiene kit with toothbrushes, toothpaste, and dental treats to maintain your pet's oral health.",
    image: productFood,
    category: "Health & Wellness",
    priceRange: "₹400 - ₹1,200",
    features: ["Fresh breath formula", "Prevents plaque buildup", "Vet approved", "Easy to use"],
    popular: false,
  },
  {
    id: 8,
    name: "Pet Carriers & Crates",
    description: "Safe and comfortable carriers for travel and transportation. Available in various sizes for all pet types.",
    image: productGrooming,
    category: "Travel & Transport",
    priceRange: "₹1,500 - ₹6,000",
    features: ["Airline approved", "Ventilated design", "Easy to clean", "Secure locks"],
    popular: true,
  },
  {
    id: 9,
    name: "Pet Training Pads",
    description: "Super absorbent training pads for puppies and senior pets. Leak-proof and odor-controlling.",
    image: productToys,
    category: "Training & Behavior",
    priceRange: "₹300 - ₹1,000",
    features: ["Ultra absorbent", "Leak-proof layers", "Odor control", "Multiple sizes"],
    popular: false,
  },
  {
    id: 10,
    name: "Pet Water Fountains",
    description: "Automatic water fountains with filtration system to provide fresh, flowing water that encourages pets to drink more.",
    image: productFood,
    category: "Accessories",
    priceRange: "₹1,200 - ₹3,500",
    features: ["Triple filtration", "Quiet operation", "Large capacity", "Easy maintenance"],
    popular: true,
  },
  {
    id: 11,
    name: "Flea & Tick Prevention",
    description: "Effective flea and tick prevention solutions including collars, sprays, and spot-on treatments.",
    image: productGrooming,
    category: "Health & Wellness",
    priceRange: "₹500 - ₹2,000",
    features: ["Long-lasting protection", "Waterproof", "Safe formula", "Veterinary grade"],
    popular: false,
  },
  {
    id: 12,
    name: "Pet Clothing & Costumes",
    description: "Stylish and comfortable clothing for pets including sweaters, raincoats, and festive costumes.",
    image: productToys,
    category: "Accessories",
    priceRange: "₹400 - ₹2,000",
    features: ["Comfortable fit", "Easy to wear", "Weather protection", "Multiple designs"],
    popular: false,
  },
  {
    id: 13,
    name: "Pet Feeding Bowls & Mats",
    description: "Non-slip, easy-to-clean feeding bowls and mats. Available in stainless steel, ceramic, and silicone.",
    image: productFood,
    category: "Food & Nutrition",
    priceRange: "₹250 - ₹1,500",
    features: ["Non-slip base", "Dishwasher safe", "Rust resistant", "Various sizes"],
    popular: false,
  },
  {
    id: 14,
    name: "Pet Nail Clippers & Grinders",
    description: "Professional-grade nail care tools with safety guards and ergonomic design for stress-free grooming.",
    image: productGrooming,
    category: "Grooming",
    priceRange: "₹300 - ₹1,200",
    features: ["Safety guard", "Sharp blades", "Quiet operation", "Rechargeable"],
    popular: false,
  },
  {
    id: 15,
    name: "Pet Treat Variety Pack",
    description: "Healthy and delicious treats made with real meat, vegetables, and natural ingredients. Perfect for training.",
    image: productToys,
    category: "Food & Nutrition",
    priceRange: "₹300 - ₹1,200",
    features: ["All-natural", "Low calorie", "Training rewards", "Multiple flavors"],
    popular: true,
  },
];

const categories = [
  "All Products",
  "Food & Nutrition",
  "Grooming",
  "Toys & Accessories",
  "Health & Wellness",
  "Bedding & Comfort",
  "Accessories",
  "Travel & Transport",
  "Training & Behavior",
];

const Products = () => {
  const phoneNumber = "919751721212";
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleEnquiry = (productName: string) => {
    const message = `Hello! I'm interested in enquiring about: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">
              Pet Products
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Quality pet products to keep your furry friends happy and healthy. Enquire via WhatsApp for availability and pricing.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-secondary-dark text-secondary-dark" />
              <span>Premium Quality Products</span>
              <span className="text-border">•</span>
              <span>Trusted Brands</span>
              <span className="text-border">•</span>
              <span>Expert Recommendations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-button"
                    : "bg-card text-foreground hover:bg-primary-lighter"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              {selectedCategory !== "All Products" && ` in ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.popular && (
                      <span className="bg-secondary-dark text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-secondary-dark font-semibold text-lg mb-3">
                    {product.priceRange}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

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
