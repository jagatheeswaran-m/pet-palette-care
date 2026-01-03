import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  const phoneNumber = "919751721212";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I need assistance.")}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="flex items-center justify-around py-2">
        <a
          href="tel:+919751721212"
          className="flex flex-col items-center gap-1 px-4 py-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Phone size={22} />
          <span className="text-xs font-medium">Call</span>
        </a>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-4 py-2 text-[#25D366] hover:text-[#20BD5A] transition-colors"
        >
          <MessageCircle size={22} />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        
        <Link
          to="/appointment"
          className="flex flex-col items-center gap-1 px-4 py-2 text-secondary-dark hover:text-secondary-dark/80 transition-colors"
        >
          <Calendar size={22} />
          <span className="text-xs font-medium">Book</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNav;
