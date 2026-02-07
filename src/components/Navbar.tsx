import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Work From Home", path: "/work-from-home" },
    { name: "About Founder", path: "/founder" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container-width section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-rose-deep">
              Secret<span className="text-gold">Attire</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-medium ${
                  isActive(link.path) ? "text-rose-deep" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#"
              className="btn-primary !py-3 !px-6 text-sm"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    isActive(link.path) ? "text-rose-deep" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#"
                className="btn-primary text-center mt-2"
              >
                Buy Now
              </a>
              <a
                href="tel:+919034828632"
                className="flex items-center gap-2 text-muted-foreground mt-2"
              >
                <Phone size={18} />
                +91 9034828632
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
