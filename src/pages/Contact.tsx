import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Form */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Side - Title */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-display text-primary italic mb-4">
                Paws & Connect
              </h1>
              <p className="text-lg text-foreground">
                Your Pet's Wellbeing is Our Priority
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl h-12 bg-card"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-xl h-12 bg-card"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-card"
                  />
                  <Input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="rounded-xl h-12 bg-card"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="rounded-xl bg-card resize-none"
                />
                <div className="text-right">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-12 bg-primary-light">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center bg-primary/10 rounded-3xl p-8">
            <h2 className="text-3xl font-display text-primary mb-4">
              Service Pet Palette
            </h2>
            <p className="text-foreground">
              With a passion for animals and a commitment to excellence, Pet Palette provides a warm, welcoming space for pets to receive the best possible care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-display text-primary">
                Visit Our Clinic
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-foreground">
                      No.1148, Periyar Nagar,<br />
                      Rajagopalapuram, Pudukkottai.<br />
                      Pin: 622 003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a
                      href="tel:+919751721212"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +91 97517 21212
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a
                      href="mailto:petpalette14@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      petpalette14@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
                    <p className="text-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 rounded-3xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.879632459889!2d78.79849!3d10.38196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIyJzU1LjEiTiA3OMKwNDcnNTQuNiJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pet Palette Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
