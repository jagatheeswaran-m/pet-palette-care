import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

import heroPets from "@/assets/hero-pets.jpg";
import serviceTreatment from "@/assets/service-treatment.jpg";
import serviceGrooming from "@/assets/service-grooming.jpg";
import serviceSurgery from "@/assets/service-surgery.jpg";
import serviceVaccination from "@/assets/service-vaccination.jpg";
import serviceBoarding from "@/assets/service-boarding.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import specialOfferPet from "@/assets/special-offer-pet.jpg";

const services = [
  {
    title: "Pet Treatment",
    description: "Medical care and interventions to keep animals healthy and manage any illnesses or injuries.",
    image: serviceTreatment,
    link: "/services",
  },
  {
    title: "Pet Grooming",
    description: "A range of activities aimed at maintaining the cleanliness, health, and appearance of your pet.",
    image: serviceGrooming,
    link: "/services",
  },
  {
    title: "Pet Surgery",
    description: "Medical procedures performed to address health issues, injuries, or conditions in pets.",
    image: serviceSurgery,
    link: "/services",
  },
  {
    title: "Vaccination",
    description: "Essential immunizations to protect your pets from common diseases and ensure their wellbeing.",
    image: serviceVaccination,
    link: "/services",
  },
  {
    title: "Pet Boarding",
    description: "A safe and comfortable home away from home for your pets while you're away.",
    image: serviceBoarding,
    link: "/services",
  },
  {
    title: "Consultation",
    description: "Expert advice and guidance on pet health, nutrition, and behavior from our veterinarians.",
    image: serviceConsultation,
    link: "/services",
  },
];

const testimonials = [
  {
    text: "The team is simply amazing! They treated my puppy with such care and love. I couldn't ask for a better experience.",
    author: "Priya M.",
  },
  {
    text: "From routine checkups to grooming, they always go above and beyond. My cat actually enjoys visiting the clinic!",
    author: "Rajesh K.",
  },
  {
    text: "My dog had a tough time, but thanks to Pet Palette for support and caring, he's back to his playful self!",
    author: "Anita S.",
  },
];

const Index = () => {
  const phoneNumber = "919751721212";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I would like to book an appointment.")}`;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] gradient-hero flex items-center overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-2xl" />
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary leading-tight mb-6">
                The Perfect Care for Stronger, Happier & Healthier Pets
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Pet Treatment | Grooming | Boarding | Vaccination | Consultation
              </p>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                At Pet Palette, we provide top-notch veterinary care to furry friends in our community with compassion and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" asChild>
                  <Link to="/appointment">Book Appointment</Link>
                </Button>
                <Button variant="heroOutline" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative">
                {/* Purple decorative shape */}
                <div className="absolute -top-8 -right-8 w-full h-full bg-primary rounded-[3rem] transform rotate-6" />
                <img
                  src={heroPets}
                  alt="Happy dog and cat"
                  className="relative z-10 rounded-[3rem] shadow-card w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dotted path decoration */}
        <svg className="absolute bottom-0 left-0 w-full h-24" preserveAspectRatio="none">
          <path
            d="M0,60 Q200,20 400,60 T800,60 T1200,60 T1600,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="text-foreground/20"
          />
        </svg>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-secondary rounded-[2.5rem] p-8 md:p-12 text-center shadow-soft">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              Welcome To Pet Palette
            </h2>
            <p className="text-foreground leading-relaxed">
              At Pet Palette, we're passionate about providing top-notch veterinary care to furry friends in our community. Our state-of-the-art clinic is dedicated to deliver exceptional service, compassion, and expertise to ensure your pets receive the best possible care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With a passion for animals and a commitment to excellence, Pet Palette provides a warm, welcoming space for pets to receive the best possible care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.link}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1">
              <img
                src={specialOfferPet}
                alt="Special offer pet"
                className="rounded-[2.5rem] shadow-card max-w-sm mx-auto lg:mx-0"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-display text-primary italic mb-4">
                Special Offer
              </h2>
              <p className="text-2xl text-secondary-dark font-semibold mb-4">
                15% Off all prices
              </p>
              <p className="text-foreground mb-6">
                Schedule a vaccination appointment and receive a complimentary health checkup for your furry friend!
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/appointment">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display text-primary text-center mb-12">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-lighter rounded-2xl p-6 shadow-soft"
              >
                <p className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-primary font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
