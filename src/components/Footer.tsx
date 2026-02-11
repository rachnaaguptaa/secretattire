import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream">
      <div className="container-width section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SecretAttire Logo" className="h-10 w-auto" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold">
                Secret<span className="text-gold">Attire</span><sup className="text-xs align-super">®</sup>
              </h3>
            </div>
            <p className="text-cream/80 mb-6 max-w-md">
              India's trusted women's fashion brand since 2017. Delivering quality, 
              style, and trust to lakhs of happy customers across the nation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/secretattir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/secretattir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/919034828632"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-cream/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-cream/80 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <a href="#" className="text-cream/80 hover:text-gold transition-colors">
                  Buy Now
                </a>
              </li>
              <li>
                <Link to="/work-from-home" className="text-cream/80 hover:text-gold transition-colors">
                  Work From Home
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-cream/80 hover:text-gold transition-colors">
                  About Founder
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919034828632"
                  className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors"
                >
                  <Phone size={18} />
                  +91 9034828632
                </a>
              </li>
              <li>
                <a
                  href="mailto:secretattire215@gmail.com"
                  className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors"
                >
                  <Mail size={18} />
                  Secretattire215@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/20">
          <p className="text-sm text-cream/60">© 2017-2026 SecretAttire.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
