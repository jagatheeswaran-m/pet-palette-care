import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import contactPuppies from "@/assets/contact-puppies.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12">
      {/* Contact Section */}
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <img
              src={contactPuppies}
              alt="Cute puppies"
              className="rounded-3xl shadow-card w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary uppercase tracking-wider text-sm mb-1">
                  Clinic Address
                </h3>
                <p className="text-foreground">
                  No.1148, Periyar Nagar,<br />
                  Rajagopalapuram, Pudukkottai.<br />
                  Pin: 622 003
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary uppercase tracking-wider text-sm mb-1">
                  Phone
                </h3>
                <a href="tel:+919751721212" className="text-foreground hover:text-primary transition-colors">
                  +91 97517 21212
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary uppercase tracking-wider text-sm mb-1">
                  Email
                </h3>
                <a href="mailto:petpalette14@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  petpalette14@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-footer text-footer-foreground mt-12 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            Powered by Pet Palette | © {new Date().getFullYear()} All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
