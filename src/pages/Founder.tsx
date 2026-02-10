import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Calendar, Briefcase, Heart, Star, Tv, Linkedin, ExternalLink, Building2, Rocket } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";
import { useState, useEffect } from "react";

const Founder = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ideabaazSlides = [
    { alt: "Rachna Gupta on Ideabaaz - Scene 1", bg: "from-rose-deep/20 to-gold/20" },
    { alt: "Rachna Gupta on Ideabaaz - Scene 2", bg: "from-gold/20 to-rose-deep/20" },
    { alt: "Rachna Gupta on Ideabaaz - Scene 3", bg: "from-rose-deep/30 to-cream/30" },
    { alt: "Rachna Gupta on Ideabaaz - Scene 4", bg: "from-cream/30 to-gold/30" },
    { alt: "Rachna Gupta on Ideabaaz - Scene 5", bg: "from-gold/30 to-rose-deep/30" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ideabaazSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const achievements = [
    { icon: Building2, title: "Founder & Director", description: "LIVSTO Apparels OPC Pvt Ltd" },
    { icon: Rocket, title: "Building LYVSTOR", description: "AI Live-Stream Shopping Platform" },
    { icon: Briefcase, title: "Founder, Secret Attire & WSBulk", description: "Since 2017" },
    { icon: Calendar, title: "7+ Years", description: "In E-commerce & Social Selling" },
    { icon: Users, title: "5,000+ Women", description: "Empowered to Start Businesses" },
    { icon: Heart, title: "Advocate", description: "For Women-Led Businesses" },
  ];

  const milestones = [
    { year: "2017", title: "The Beginning", description: "Started Secret Attire with a vision to make quality fashion accessible to every Indian woman." },
    { year: "2019", title: "Scaling Up", description: "Crossed 1 lakh orders and expanded product range to include complete ethnic wear collections." },
    { year: "2021", title: "Women Empowerment", description: "Launched the Work From Home program, enabling 2,000+ women to start their own businesses." },
    { year: "2022", title: "WSBulk Launch", description: "Founded WSBulk — a digital marketing solutions company offering WhatsApp automation, performance marketing, and growth tools for startups & SMEs." },
    { year: "2023", title: "National Recognition", description: "Featured on Ideabaaz on Zee TV for innovation in women-led social commerce." },
    { year: "2024", title: "LYVSTOR & 17L+ Orders", description: "Building LYVSTOR, an AI-powered live-stream shopping platform helping social sellers achieve 10X sales growth. Secret Attire crossed 17+ lakh deliveries." },
  ];

  const newsArticles = [
    {
      title: "LYVSTOR: Rachna Gupta Building Trust in India's Digital Shopping Space",
      source: "Yonoj News",
      url: "https://yonojnews.com/lyvstor-rachna-gupta-building-trust-in-indias-digital-shopping-space/",
    },
    {
      title: "Livsto: Live Commerce for Women Entrepreneurs",
      source: "YourStory",
      url: "https://yourstory.com/2025/06/livsto-live-commerce-for-women-entrepreneurs",
    },
  ];

  const supportedBy = [
    "NSRCEL (IIM Bangalore)",
    "IGDTUW",
    "GGSIPU",
    "Chitkara University",
    "Sharda University",
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
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg">
                Serial entrepreneur and digital commerce strategist with 7+ years of experience 
                across social commerce, e-commerce, and digital marketing.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-lg">
                Founder & Director of <strong>LIVSTO Apparels OPC Private Limited</strong>, building 
                <strong> LYVSTOR</strong> — an AI-powered live-stream shopping platform helping social 
                sellers and women entrepreneurs achieve 10X sales growth through live commerce, AI product 
                listing, and free mini-websites.
              </p>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rachnaagupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(210,80%,45%)] text-white font-medium text-sm hover:bg-[hsl(210,80%,38%)] transition-colors mb-8"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>

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
                alt="Rachna Gupta - Founder of Secret Attire & LYVSTOR"
                className="relative rounded-3xl shadow-elevated w-full max-w-md mx-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 lg:right-0 bg-background rounded-2xl shadow-card p-4">
                <div className="flex items-center gap-2">
                  <Award className="text-gold" size={24} />
                  <div>
                    <p className="text-xs text-muted-foreground">Featured on</p>
                    <p className="font-semibold text-foreground">Ideabaaz · Zee TV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported By */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-width text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Supported By</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {supportedBy.map((inst) => (
              <span key={inst} className="px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-medium">
                {inst}
              </span>
            ))}
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
              Rachna Gupta is a serial entrepreneur and digital commerce strategist with 7+ years 
              of experience across social commerce, e-commerce, and digital marketing.
            </p>
            <p className="leading-relaxed mb-6">
              She is the Founder & Director of LIVSTO Apparels OPC Private Limited, building 
              <strong> LYVSTOR</strong> — an AI-powered live-stream shopping platform helping social sellers 
              and women entrepreneurs achieve 10X sales growth through live commerce, AI product listing, 
              and free mini-websites.
            </p>
            <p className="leading-relaxed mb-6">
              She also founded <strong>Secret Attire</strong>, a women-focused social commerce apparel brand, 
              and <strong>WSBulk</strong>, a digital marketing solutions company offering WhatsApp automation, 
              performance marketing, and growth tools for startups and SMEs.
            </p>
            <p className="leading-relaxed">
              Rachna has empowered 5,000+ women to start earning from home with zero investment and has been 
              supported by NSRCEL (IIM Bangalore), IGDTUW, GGSIPU, Chitkara University, and Sharda University. 
              She was featured on the national startup TV show <strong>Ideabaaz on Zee TV</strong>.
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

      {/* Ideabaaz Slideshow */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              Media & Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Featured on <span className="text-rose-deep">Ideabaaz · Zee TV</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognized for innovation and women empowerment in social commerce
            </p>
          </div>

          {/* Slideshow */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/5">
              {ideabaazSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${slide.bg} transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center">
                    <Tv size={64} className="text-gold mx-auto mb-4" />
                    <p className="text-xl font-serif font-bold text-foreground">{slide.alt}</p>
                    <p className="text-sm text-muted-foreground mt-2">Ideabaaz · Zee TV</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {ideabaazSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-rose-deep" : "bg-border"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* News Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
              In the <span className="text-rose-deep">News</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {newsArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elegant !p-6 group hover:shadow-elevated transition-shadow block"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-light text-rose-deep text-xs font-medium mb-3">
                    {article.source}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-rose-deep transition-colors">
                    {article.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-sm text-rose-deep font-medium">
                    Read Article <ExternalLink size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
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
