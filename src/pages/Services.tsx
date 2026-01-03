import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import serviceTreatment from "@/assets/service-treatment.jpg";
import serviceGrooming from "@/assets/service-grooming.jpg";
import serviceSurgery from "@/assets/service-surgery.jpg";
import serviceVaccination from "@/assets/service-vaccination.jpg";
import serviceBoarding from "@/assets/service-boarding.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";

const services = [
  {
    title: "Pet Treatment",
    description: "Comprehensive medical care and interventions to keep your animals healthy. Our experienced veterinarians diagnose and treat a wide range of conditions, from common illnesses to complex health issues.",
    image: serviceTreatment,
  },
  {
    title: "Pet Grooming",
    description: "Professional grooming services including bathing, haircuts, nail trimming, ear cleaning, and more. We maintain your pet's cleanliness, health, and appearance with gentle, loving care.",
    image: serviceGrooming,
  },
  {
    title: "Pet Surgery",
    description: "State-of-the-art surgical procedures performed by skilled veterinary surgeons. From routine spaying/neutering to complex surgeries, we ensure the highest standards of care and safety.",
    image: serviceSurgery,
  },
  {
    title: "Vaccination",
    description: "Essential immunizations to protect your pets from common diseases. We create personalized vaccination schedules based on your pet's age, lifestyle, and health needs.",
    image: serviceVaccination,
  },
  {
    title: "Pet Boarding",
    description: "A safe, comfortable, and loving environment for your pets while you're away. Our boarding facility provides spacious accommodations, regular exercise, and round-the-clock care.",
    image: serviceBoarding,
  },
  {
    title: "Consultation",
    description: "Expert advice and guidance on pet health, nutrition, behavior, and preventive care. Our veterinarians take time to understand your concerns and provide personalized recommendations.",
    image: serviceConsultation,
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-6">
              Our Services
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              With a passion for animals and a commitment to excellence, Pet Palette provides a warm, welcoming space for pets to receive the best possible care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-service group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="default" asChild>
                    <Link to="/appointment">Book Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-display text-primary mb-4">
            Need a Custom Service?
          </h2>
          <p className="text-foreground mb-8 max-w-lg mx-auto">
            Contact us to discuss your pet's specific needs. We're here to help!
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
