import { Calendar, Package, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  const trustBadges = [
    { icon: Calendar, label: "Since 2017", value: "7+ Years" },
    { icon: Package, label: "Orders Delivered", value: "5,00,000+" },
    { icon: Users, label: "Happy Customers", value: "Lakhs" },
    { icon: MapPin, label: "Delivery", value: "Pan-India" },
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
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
              5+ Lakh Orders Delivered | Loved by Repeat Customers Across India
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary">
                Buy Now
              </a>
              <a href="/work-from-home" className="btn-secondary">
                Work With Us (Free)
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-light to-cream rounded-3xl blur-2xl opacity-60" />
              <img
                src={heroImage}
                alt="Beautiful Indian woman in elegant saree with shopping bags"
                className="relative rounded-3xl shadow-elevated w-full object-cover max-h-[600px]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-card p-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
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
