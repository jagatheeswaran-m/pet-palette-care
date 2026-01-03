import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] bg-gradient-to-b from-primary-lighter via-background to-background flex items-center overflow-hidden">
        {/* Subtle wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full h-16 md:h-24"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
        
        <div className="container relative z-10 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-primary leading-tight mb-6">
              The Perfect Care for Stronger, Happier & Healthier Pets
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Complete pet care services you can trust – from routine checkups to grooming and boarding.
            </p>
            
            <p className="text-sm md:text-base text-foreground/70 mb-8 tracking-wide">
              Pet Treatment • Grooming • Boarding • Vaccination • Consultation
            </p>
            
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
              asChild
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
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
