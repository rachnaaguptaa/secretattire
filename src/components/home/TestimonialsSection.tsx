import { Star, MessageCircle, Instagram, RefreshCw } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: "whatsapp",
      icon: MessageCircle,
      name: "Priya Sharma",
      location: "Delhi",
      message: "Amazing quality! This is my 5th order and I'm never disappointed. The saree was exactly as shown. ❤️",
      rating: 5,
    },
    {
      type: "instagram",
      icon: Instagram,
      name: "Anjali Patel",
      location: "Mumbai",
      message: "Ordered a kurti set for my sister's wedding. She loved it! Already planning my next order. 🎉",
      rating: 5,
    },
    {
      type: "repeat",
      icon: RefreshCw,
      name: "Sunita Devi",
      location: "Jaipur",
      message: "Been shopping from Secret Attire for 3 years now. Best quality and service. Highly recommend!",
      rating: 5,
    },
    {
      type: "whatsapp",
      icon: MessageCircle,
      name: "Meera Reddy",
      location: "Hyderabad",
      message: "Fast delivery and beautiful packaging! The product quality exceeded my expectations. Thank you! 🙏",
      rating: 5,
    },
    {
      type: "instagram",
      icon: Instagram,
      name: "Kavita Singh",
      location: "Lucknow",
      message: "My go-to brand for ethnic wear. Always trendy designs and comfortable fabrics. Love it! 💕",
      rating: 5,
    },
    {
      type: "repeat",
      icon: RefreshCw,
      name: "Rekha Gupta",
      location: "Bangalore",
      message: "This is my 12th order! The consistency in quality is what keeps me coming back. Excellent!",
      rating: 5,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "whatsapp":
        return "bg-green-100 text-green-600";
      case "instagram":
        return "bg-pink-100 text-pink-600";
      case "repeat":
        return "bg-amber-100 text-amber-600";
      default:
        return "bg-rose-light text-rose-deep";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "whatsapp":
        return "WhatsApp";
      case "instagram":
        return "Instagram";
      case "repeat":
        return "Repeat Customer";
      default:
        return "Review";
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
            Customer Love
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            What Our <span className="text-rose-deep">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real customers. Real feedback. Real trust.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(testimonial.type)}`}>
                  <testimonial.icon size={14} />
                  {getTypeLabel(testimonial.type)}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>

              {/* Message */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center text-rose-deep font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join our community of happy customers</p>
          <a href="#" className="btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
