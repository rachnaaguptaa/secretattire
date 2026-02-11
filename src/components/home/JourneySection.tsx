import { Package, Users, Calendar, Heart } from "lucide-react";
import packagingImage from "@/assets/packaging.jpg";

const JourneySection = () => {
  const stats = [
    { icon: Package, value: "4,00,000+", label: "Orders Delivered" },
    { icon: Users, value: "Lakhs", label: "Repeat Customers" },
    { icon: Calendar, value: "7+", label: "Years in Fashion" },
    { icon: Heart, value: "5,000+", label: "Women Empowered" },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Secret Attire – Trusted by{" "}
            <span className="text-rose-deep">Lakhs Since 2017</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What started as a small dream in 2017 has grown into one of India's most 
            trusted women's fashion brands. Our commitment to quality, transparency, 
            and customer satisfaction has earned us the love of millions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-rose-light rounded-3xl blur-xl" />
            <img
              src={packagingImage}
              alt="Beautiful packaging and sarees"
              className="relative rounded-2xl shadow-card w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
              From Passion to Pan-India Success
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Secret Attire was born from a simple belief: every Indian woman deserves 
                access to beautiful, high-quality fashion at fair prices. Since our 
                founding in 2017, we've stayed true to this mission.
              </p>
              <p>
                Today, we've delivered over 4 lakh orders across India, built a community 
                of loyal repeat customers, and empowered thousands of women to start their 
                own fashion businesses from home.
              </p>
              <p>
                Our success isn't measured in numbers alone—it's in the trust, the smiles, 
                and the confidence we bring to women every single day.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-elegant text-center"
            >
              <div className="icon-circle mx-auto mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="stat-number mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
