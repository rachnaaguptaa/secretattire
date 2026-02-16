import { Calendar, Package, Users, MapPin, Check } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Your Exact Product Images + Links
  const slides = [
    {
      image:
        "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec5indo19.webp",
      link: "https://lyvstor.com/product/chinon-indo-western-shrug-plazzo-set/1427",
      alt: "Chinon Indo Western Shrug Plazzo Set",
    },
    {
      image:
        "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/product/gallery/gallery_687e58730d1629.18541540.jpg",
      link: "https://lyvstor.com/product/launch-floral-design-georgette-gown-saree/976",
      alt: "Floral Design Georgette Gown Saree",
    },
    {
      image:
        "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec7ank54.webp",
      link: "https://lyvstor.com/product/vichitra-silk-anarkali-with-dupatta/1576",
      alt: "Vichitra Silk Anarkali With Dupatta",
    },
    {
      image:
        "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec6gwn40.webp",
      link: "https://lyvstor.com/product/georgette-embroidered-gown-with-attached-dupatta-belt/1445",
      alt: "Georgette Embroidered Gown",
    },
    {
      image:
        "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/nov17urg1.webp",
      link: "https://lyvstor.com/product/fendy-silk-embroidered-anarkali-gown-with-dupatta-wedding-special/1391",
      alt: "Fendy Silk Embroidered Anarkali Gown",
    },
    {
      image:
        "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec11sr39.webp",
      link: "https://lyvstor.com/product/ready-to-wear-georgette-saree-with-lace-work/1536",
      alt: "Ready To Wear Georgette Saree",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 sec auto change

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
      <div className="container-width section-padding pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              India's Trusted Women's Fashion Brand{" "}
              <span className="text-gradient-gold">Since 2017</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              5+ Lakh Orders Delivered | Trusted by Repeat Customers Across India
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="trust-badge">
                  <badge.icon className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {badge.label}
                    </p>
                    <p className="font-semibold text-sm">
                      {badge.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-8 text-gold font-medium">
              <Check size={18} />
              <span>Cash on Delivery Available</span>
            </div>

            <a
              href="https://lyvstor.com/brand/secretattire/4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Shop Collection
            </a>
          </div>

          {/* RIGHT SLIDESHOW */}
          <div className="relative">
            <div className="relative rounded-3xl shadow-elevated overflow-hidden aspect-[3/4] max-h-[600px]">

              {slides.map((slide, index) => (
                <a
                  key={index}
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/90 rounded-full text-sm font-medium">
                    View Product →
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
                    index === currentSlide
                      ? "w-8 bg-rose-deep"
                      : "w-2.5 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
