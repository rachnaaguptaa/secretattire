import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Calendar, Briefcase, TrendingUp, Heart, Star, Tv } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const Founder = () => {
  const achievements = [
    { icon: Briefcase, title: "Founder, Secret Attire", description: "Since 2017" },
    { icon: Calendar, title: "7+ Years", description: "In E-commerce & Social Selling" },
    { icon: Users, title: "5,000+ Women", description: "Empowered to Start Businesses" },
    { icon: Heart, title: "Advocate", description: "For Women-Led Businesses" },
  ];

  const milestones = [
    { year: "2017", title: "The Beginning", description: "Started Secret Attire with a vision to make quality fashion accessible to every Indian woman." },
    { year: "2019", title: "Scaling Up", description: "Crossed 1 lakh orders and expanded product range to include complete ethnic wear collections." },
    { year: "2021", title: "Women Empowerment", description: "Launched the Work From Home program, enabling 2,000+ women to start their own businesses." },
    { year: "2023", title: "National Recognition", description: "Featured on Ideabaaz for innovation in women-led social commerce." },
    { year: "2024", title: "17+ Lakh Orders", description: "Achieved milestone of 17+ lakh deliveries with lakhs of loyal repeat customers." },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 section-padding gradient-hero">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-6">
                Meet the Founder
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Rachna <span className="text-gradient-gold">Gupta</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Women entrepreneur and social commerce leader since 2017, building 
                Secret Attire into a trusted brand and empowering 5,000+ women through 
                zero-investment online selling.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-light flex items-center justify-center text-rose-deep flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-light to-cream rounded-3xl blur-2xl opacity-60" />
              <img
                src={founderImage}
                alt="Rachna Gupta - Founder of Secret Attire"
                className="relative rounded-3xl shadow-elevated w-full max-w-md mx-auto object-cover"
              />
              
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-0 bg-background rounded-2xl shadow-card p-4">
                <div className="flex items-center gap-2">
                  <Award className="text-gold" size={24} />
                  <div>
                    <p className="text-xs text-muted-foreground">Featured on</p>
                    <p className="font-semibold text-foreground">Ideabaaz TV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-width max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              The Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              From Vision to <span className="text-rose-deep">Reality</span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed mb-6">
              In 2017, Rachna Gupta started Secret Attire with a simple but powerful vision: 
              to make beautiful, quality fashion accessible to every Indian woman, regardless 
              of where they lived.
            </p>
            <p className="leading-relaxed mb-6">
              Coming from a background in fashion and understanding the challenges faced by 
              women in tier-2 and tier-3 cities, she saw an opportunity to bridge the gap 
              between quality fashion and accessibility through the power of social commerce.
            </p>
            <p className="leading-relaxed mb-6">
              What started as a small operation has now grown into one of India's most trusted 
              women's fashion brands, delivering over 17 lakh orders across the country. But 
              for Rachna, the numbers tell only part of the story.
            </p>
            <p className="leading-relaxed">
              Her true passion lies in empowering other women. Through the Work From Home 
              program, she has enabled over 5,000 women to start their own fashion businesses 
              with zero investment, helping them achieve financial independence and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Key <span className="text-rose-deep">Milestones</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-cream font-serif font-bold text-lg flex-shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="card-elegant flex-1 !p-6">
                  <p className="text-sm text-gold font-semibold mb-1">{milestone.year}</p>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              Media & Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Featured on <span className="text-rose-deep">National Television</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognized for innovation and women empowerment in social commerce
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-elegant text-center p-8 lg:p-12">
              <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
                <Tv className="text-gold" size={40} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Featured on Ideabaaz
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Rachna's innovative approach to women empowerment through social commerce 
                was featured on Ideabaaz, highlighting how Secret Attire is transforming 
                lives across India.
              </p>
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Celebrating innovation, entrepreneurship, and women-led businesses
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
              "My dream is to empower a million women to become financially independent 
              through their own fashion businesses."
            </blockquote>
            <p className="mt-6 text-lg text-rose-deep font-semibold">
              — Rachna Gupta, Founder
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Join the <span className="text-gradient-gold">Secret Attire</span> Family
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to shop premium fashion or start your own business, 
            we're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary">
              Shop Now
            </a>
            <a href="/work-from-home" className="btn-secondary">
              Start Your Business
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Founder;
