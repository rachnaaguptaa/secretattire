import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Clock, Wallet, Share2, Package, Truck, Shield, TrendingUp, CheckCircle, Users, Star } from "lucide-react";
import workFromHomeImage from "@/assets/work-from-home.jpg";

const WorkFromHome = () => {
  const benefits = [
    { icon: Clock, title: "Work Anytime", description: "Flexible hours that fit your schedule" },
    { icon: Wallet, title: "Zero Investment", description: "Completely free to join and start" },
    { icon: Home, title: "Work From Home", description: "No office commute, work from anywhere" },
    { icon: Share2, title: "Social Selling", description: "Sell via WhatsApp, Instagram, Facebook" },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Products",
      description: "Browse our extensive catalog of trendy sarees, kurtis, suits, and accessories.",
    },
    {
      number: "02",
      title: "Set Your Price",
      description: "Add your own margin to our wholesale prices and share with your network.",
    },
    {
      number: "03",
      title: "Get Orders",
      description: "Receive orders from your customers via WhatsApp, Instagram, or Facebook.",
    },
    {
      number: "04",
      title: "We Ship",
      description: "We pack and ship directly to your customer under your brand name.",
    },
  ];

  const weHandle = [
    { icon: Package, text: "Packaging & Dispatch" },
    { icon: Shield, text: "Quality Check" },
    { icon: Wallet, text: "Cash on Delivery (COD)" },
    { icon: Truck, text: "Complete Order Fulfillment" },
  ];

  const successStories = [
    { name: "Pooja Verma", location: "Lucknow", earnings: "₹25,000+/month", period: "6 months" },
    { name: "Neha Agarwal", location: "Jaipur", earnings: "₹40,000+/month", period: "1 year" },
    { name: "Suman Devi", location: "Patna", earnings: "₹15,000+/month", period: "3 months" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 section-padding gradient-hero">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-6">
                💼 100% Free Opportunity
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Earn From Home –{" "}
                <span className="text-gradient-gold">₹0 Investment</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Start your own fashion business from home. No stock, no risk, 
                unlimited earning potential. Join 5,000+ women already earning.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-light flex items-center justify-center text-rose-deep flex-shrink-0">
                      <benefit.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{benefit.title}</p>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919034828632?text=Hi, I'm interested in the Work From Home opportunity"
                className="btn-primary"
              >
                Join Our Team (Free)
              </a>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-light to-cream rounded-3xl blur-2xl opacity-60" />
              <img
                src={workFromHomeImage}
                alt="Woman working from home with phone and laptop"
                className="relative rounded-3xl shadow-elevated w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Watch - How It Works Video */}
      <section className="section-padding bg-background">
        <div className="container-width text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">Watch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">How It <span className="text-rose-deep">Works — Watch</span></h2>
          <p className="text-lg text-muted-foreground mb-6">Watch this short explainer to see how the Work From Home program works in under a few minutes.</p>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-elevated">
            <iframe
              src="https://www.youtube.com/embed/R1Uayz1xM0Q?si=-K3pzbThyWYVViEb"
              title="How It Works - Secret Attire"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-64 md:h-96"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              How It <span className="text-rose-deep">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Start selling in 4 simple steps. No experience needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="card-elegant relative">
                <div className="step-number mb-4">{step.number}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Handle Everything */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
                Zero Hassle
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                You Focus on Selling,{" "}
                <span className="text-rose-deep">We Handle the Rest</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                No inventory management, no packaging headaches, no shipping worries. 
                We take care of everything so you can focus on what you do best – selling.
              </p>

              <div className="space-y-4">
                {weHandle.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-xl shadow-soft">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <item.icon size={24} />
                    </div>
                    <p className="text-lg font-medium text-foreground">{item.text}</p>
                    <CheckCircle className="ml-auto text-gold" size={24} />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="card-elegant bg-card text-card-foreground p-8 lg:p-12">
                <TrendingUp className="w-16 h-16 text-gold mx-auto lg:mx-0 mb-6" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  No Stock. No Risk.
                </h3>
                <p className="text-card-foreground mb-6">
                  Unlike traditional businesses, you don't need to buy stock upfront. 
                  Order only what your customers want, and we ship directly to them.
                </p>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-gold" />
                    No bulk inventory
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-gold" />
                    No minimum orders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-gold" />
                    No financial risk
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              <span className="text-rose-deep">5,000+</span> Women Already Earning
            </h2>
            <p className="text-lg text-muted-foreground">
              Real women. Real earnings. Real confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {successStories.map((story, index) => (
              <div key={index} className="testimonial-card text-center">
                <div className="w-16 h-16 rounded-full bg-rose-light flex items-center justify-center text-rose-deep text-2xl font-serif font-bold mx-auto mb-4">
                  {story.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{story.name}</h3>
                <p className="text-muted-foreground mb-4">{story.location}</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <div className="bg-rose-light rounded-lg p-4">
                  <p className="text-2xl font-serif font-bold text-rose-deep">{story.earnings}</p>
                  <p className="text-sm text-muted-foreground">in {story.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="text-gold" size={24} />
              <p className="text-lg text-muted-foreground">
                Join thousands of successful women entrepreneurs
              </p>
            </div>
            <a
              href="https://wa.me/919034828632?text=Hi, I'm interested in the Work From Home opportunity"
              className="btn-primary"
            >
              Start Earning Today (Free)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkFromHome;
