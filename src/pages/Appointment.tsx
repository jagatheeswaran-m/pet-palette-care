import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MessageCircle } from "lucide-react";

const appointmentTypes = [
  "Pet Treatment",
  "Pet Grooming",
  "Vaccination",
  "Pet Surgery",
  "Pet Boarding",
  "Consultation",
  "Health Checkup",
  "Emergency",
];

const Appointment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    petName: "",
    species: "",
    breed: "",
    age: "",
    sex: "",
    ownerName: "",
    phone: "",
    city: "",
    appointmentType: "",
    preferredDate: "",
    time: "",
    email: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      petName: "",
      species: "",
      breed: "",
      age: "",
      sex: "",
      ownerName: "",
      phone: "",
      city: "",
      appointmentType: "",
      preferredDate: "",
      time: "",
      email: "",
      comments: "",
    });

    setIsSubmitting(false);

    // Optional: redirect to WhatsApp
    const phoneNumber = "919751721212";
    const message = `New Appointment Request:\n\nPet: ${formData.petName} (${formData.species})\nOwner: ${formData.ownerName}\nPhone: ${formData.phone}\nType: ${formData.appointmentType}\nDate: ${formData.preferredDate}\nTime: ${formData.time}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Show confirmation with option to continue via WhatsApp
    setTimeout(() => {
      if (window.confirm("Would you like to confirm via WhatsApp for faster response?")) {
        window.open(whatsappUrl, "_blank");
      }
    }, 500);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-12 md:py-20 gradient-hero">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display text-primary italic mb-4">
              Appointment Booking
            </h1>
            <p className="text-lg text-foreground">
              Ask a Question or Schedule a Play Date!
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-card rounded-3xl shadow-card p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pet Name */}
              <div>
                <Input
                  name="petName"
                  placeholder="Pet Name"
                  value={formData.petName}
                  onChange={handleChange}
                  required
                  className="rounded-xl h-12"
                />
              </div>

              {/* Species */}
              <div>
                <Input
                  name="species"
                  placeholder="Species (Dog, Cat, etc.)"
                  value={formData.species}
                  onChange={handleChange}
                  required
                  className="rounded-xl h-12"
                />
              </div>

              {/* Breed */}
              <div>
                <Input
                  name="breed"
                  placeholder="Breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className="rounded-xl h-12"
                />
              </div>

              {/* Age */}
              <div>
                <Input
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="rounded-xl h-12"
                />
              </div>

              {/* Sex */}
              <div>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground"
                >
                  <option value="">Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Owner Name */}
              <div>
                <Input
                  name="ownerName"
                  placeholder="Owner Name"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  className="rounded-xl h-12"
                />
              </div>

              {/* Phone */}
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="rounded-xl h-12"
                />
              </div>

              {/* City */}
              <div>
                <Input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="rounded-xl h-12"
                />
              </div>

              {/* Appointment Type */}
              <div>
                <select
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground"
                >
                  <option value="">Type of Appointment</option>
                  {appointmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <Input
                  name="preferredDate"
                  type="date"
                  placeholder="Preferred Date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="rounded-xl h-12"
                />
              </div>

              {/* Time */}
              <div>
                <Input
                  name="time"
                  type="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  className="rounded-xl h-12"
                />
              </div>

              {/* Email */}
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl h-12"
                />
              </div>

              {/* Comments */}
              <div className="md:col-span-2">
                <Textarea
                  name="comments"
                  placeholder="Comments or special requests..."
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>
            </div>

            <div className="mt-8 text-right">
              <Button
                type="submit"
                variant="default"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Appointment"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
