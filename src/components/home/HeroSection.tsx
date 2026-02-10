import { Calendar, Package, Users, MapPin, Check } from "lucide-react";
import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";
import heroSlide7 from "@/assets/hero-slide-7.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: heroSlide1, alt: "Purple Lehenga Collection", link: "#products" },
    { image: heroSlide2, alt: "Teal Silk Saree", link: "#products" },
    { image: heroSlide3, alt: "Red Bridal Anarkali", link: "#products" },
    { image: heroSlide4, alt: "Pink Chiffon Saree", link: "#products" },
    { image: heroSlide5, alt: "Royal Blue Lehenga", link: "#products" },
    { image: heroSlide6, alt: "Ivory Gold Outfit", link: "#products" },
    { image: heroSlide7, alt: "Maroon Kurta Palazzo", link: "#products" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    { icon: Calendar, label: "Since 2017", value: "7+ Years" },
    { icon: Package, label: "Orders Delivered", value: "5,00,000+" },
    { icon: Users, label: "Happy Customers", value: "Lakhs" },
    { icon: MapPin, label: "Delivery", value: "Pan-India" },
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-light rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream-dark rounded-full blur-3xl" />
      </div>

      <div className="container-width section-padding pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-6">
              ✨ Trusted by Lakhs of Women
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              India's Trusted Women's Fashion Brand{" "}
              <span className="text-gradient-gold">Since 2017</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              5+ Lakh Orders Delivered | Trusted by Repeat Customers Across India
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="trust-badge"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{badge.label}</p>
                    <p className="font-semibold text-sm text-foreground">{badge.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* COD */}
            <div className="flex items-center gap-2 mb-8 text-gold font-medium">
              <Check size={18} />
              <span>Cash on Delivery Available</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-primary">
                Buy Now
              </a>
              <a href="/work-from-home" className="btn-secondary">
                Start Your Own Business Without Investment
              </a>
            </div>
          </div>

          {/* Hero Slideshow */}
          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-light to-cream rounded-3xl blur-2xl opacity-60" />
              
              {/* Slideshow Container */}
              <div className="relative rounded-3xl shadow-elevated overflow-hidden aspect-[3/4] max-h-[600px]">
                {slides.map((slide, index) => (
                  <a
                    key={index}
                    href={slide.link}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-foreground font-medium text-sm hover:bg-white transition-colors">
                      Click to View Product →
                    </span>
                  </a>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-rose-deep" : "w-2.5 bg-border"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-card p-4 animate-fade-up z-10" style={{ animationDelay: "400ms" }}>
                <p className="text-sm text-muted-foreground">Trusted by</p>
                <p className="text-2xl font-serif font-bold text-rose-deep">5,00,000+</p>
                <p className="text-sm font-medium">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
