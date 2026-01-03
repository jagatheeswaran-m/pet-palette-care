import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Award } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import heroPets from "@/assets/hero-pets.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every pet like our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in veterinary care.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're committed to support local pet owners and animal welfare initiatives.",
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 gradient-hero">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary leading-tight mb-6">
                About Pet Palette
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Pet Palette, we're passionate about providing top-notch veterinary care to furry friends in our community. Our state-of-the-art clinic is dedicated to deliver exceptional service, compassion, and expertise to ensure your pets receive the best possible care.
              </p>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-primary rounded-[2.5rem] transform rotate-3" />
                <img
                  src={aboutHero}
                  alt="Happy pets outdoors"
                  className="relative z-10 rounded-[2.5rem] shadow-card w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Section */}
      <section className="py-16 md:py-24 bg-primary-light">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display text-primary italic mb-6">
                Providing Safe, Convenient Exercise for Your Bestie
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-foreground leading-relaxed mb-4">
                Just like humans, pets need regular exercise to maintain their physical and mental well-being. It helps control their weight, keeps their joints and muscles strong, and can even prevent behavioral problems by burning off excess energy.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Dogs:</strong> Need daily walks, playtime, and mental stimulation. The amount varies by breed and age.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Cats:</strong> Often get their exercise through play, climbing, and jumping. Indoor cats especially need structured playtime to prevent obesity and boredom.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Small Animals:</strong> Pets like rabbits, guinea pigs, or ferrets also need exercise. Setting up a safe play area where they can explore and move around is crucial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <img
                src={heroPets}
                alt="Pets"
                className="rounded-[2.5rem] shadow-card w-full max-w-md"
              />
            </div>
            
            <div className="flex-1 space-y-12">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-display text-primary mb-8">
                  Our Goals
                </h2>
              </div>

              {/* Values */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-primary">Our Values</h3>
                </div>
                <div className="space-y-2 text-foreground">
                  {values.map((value) => (
                    <p key={value.title}>
                      <strong>{value.title}:</strong> {value.description}
                    </p>
                  ))}
                </div>
              </div>

              {/* Mission */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-primary">Our Mission</h3>
                </div>
                <p className="text-foreground mb-4">
                  Our mission is to build long-lasting relationships with you and your pets, based on trust, empathy, and open communication. We strive to:
                </p>
                <ul className="space-y-2 text-foreground">
                  <li>• Provide personalized, comprehensive care for your pets.</li>
                  <li>• Foster a warm, welcoming environment for both you and your pets.</li>
                  <li>• Support the well-being of our community through pet education and outreach programs.</li>
                </ul>
              </div>

              {/* Teams */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-primary">Our Teams</h3>
                </div>
                <p className="text-foreground">
                  Meet our experienced and caring team of veterinarians, nurses, and support staff, dedicated to making your pet's visit as comfortable and stress-free as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-display text-primary mb-4">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-foreground mb-8">
            Book an appointment today and experience the Pet Palette difference.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
