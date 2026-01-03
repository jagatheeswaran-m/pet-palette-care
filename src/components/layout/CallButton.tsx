import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a
      href="tel:+919751721212"
      className="lg:hidden fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Call us"
    >
      <Phone size={24} />
    </a>
  );
};

export default CallButton;
