import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Calendar, Briefcase, Heart, Star, Tv, Linkedin, ExternalLink, Building2, Rocket, CheckCircle } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";
import heroWoman from "@/assets/hero-woman.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Founder = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ideabaazSlides = [
    { alt: "Rachna Gupta on Ideabaaz - Scene 1", bg: "from-rose-deep/20 to-gold/20" },
    { alt: "Rachna Gupta on Ideabaaz - Scene 2", bg: "from-gold/20 to-rose-deep/20" },
    { alt: "Rachna Gupta on Ideabaaz - Scene 3", bg: "from-rose-deep/30 to-cream/30" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ideabaazSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const achievements = [
    { icon: Building2, title: "Founder & Director", description: "LIVSTO Apparels OPC Pvt Ltd" },
    { icon: Calendar, title: "7+ Years", description: "In E-commerce & Social Selling" },
    { icon: Users, title: "5,000+ Women", description: "Empowered to Start Businesses" },
    { icon: Tv, title: "Featured on", description: "Ideabaaz · Zee TV" },
  ];

  const milestones = [
    { year: "2017", title: "The Beginning", description: "Started Secret Attire with a vision to make quality fashion accessible to every Indian woman." },
    { year: "2019", title: "Scaling Up", description: "Crossed 1 lakh orders and expanded product range to include complete ethnic wear collections." },
    { year: "2021", title: "Women Empowerment", description: "Launched the Work From Home program, enabling 2,000+ women to start their own businesses." },
    { year: "2022", title: "WSBulk Launch", description: "Founded WSBulk — a digital marketing solutions company offering WhatsApp automation, performance marketing, and growth tools for startups & SMEs." },
    { year: "2023", title: "National Recognition", description: "Featured on Ideabaaz on Zee TV for innovation in women-led social commerce." },
    { year: "2024", title: "LYVSTOR & 4L+ Orders", description: "Building LYVSTOR, an AI-powered live-stream shopping platform. Secret Attire crossed 4+ lakh deliveries." },
  ];

  const newsArticles = [
    {
      title: "LYVSTOR: Rachna Gupta Building Trust in India's Digital Shopping Space",
      source: "Yonoj News",
      color: "bg-[hsl(142,60%,45%)]",
      url: "https://yonojnews.com/lyvstor-rachna-gupta-building-trust-in-indias-digital-shopping-space/",
    },
    {
      title: "Livsto: Live Commerce for Women Entrepreneurs",
      source: "YourStory",
      color: "bg-rose-deep",
      url: "https://yourstory.com/2025/06/livsto-live-commerce-for-women-entrepreneurs",
    },
    {
      title: "Empowering Women Through Digital Commerce & Innovation",
      source: "Flashbaaz",
      color: "bg-gold",
      url: "#",
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
      <section className="pt-28 pb-16 section-padding bg-gradient-to-b from-rose-light/40 to-background">
        <div className="container-width">
          <p className="text-sm text-muted-foreground mb-2">Meet the Founder</p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Rachna <span className="text-gradient-gold">Gupta</span>
              </h1>
              <p className="text-base text-muted-foreground mb-4 max-w-lg leading-relaxed">
                Serial entrepreneur and digital commerce strategist with 7+ years of experience 
                across social commerce, e-commerce, and digital marketing. Founder & Director of{" "}
                <strong>LIVSTO Apparels OPC Private Limited</strong>, building{" "}
                <strong>LYVSTOR</strong> — an AI-powered live-stream shopping platform helping social 
                sellers and women entrepreneurs achieve 10X sales growth through live commerce, AI product 
                listing, and free mini-websites.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
                She also founded <strong>Secret Attire</strong>, a women-focused social commerce apparel brand, 
                and <strong>WSBulk</strong>, a digital marketing solutions company offering WhatsApp automation, 
                performance marketing, and growth tools for startups and SMEs.
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rachnaagupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(210,80%,45%)] text-white font-medium text-sm hover:bg-[hsl(210,80%,38%)] transition-colors"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>

            <div className="relative">
              <img
                src={founderImage}
                alt="Rachna Gupta - Founder of Secret Attire & LYVSTOR"
                className="rounded-2xl shadow-elevated w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supported By */}
      <section className="py-14 bg-background">
        <div className="container-width text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
            Backed By
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Supported by <span className="text-gold">Leading Institutions</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Recognized by India's top entrepreneurship and innovation institutions
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {supportedBy.map((inst) => (
              <span key={inst} className="px-5 py-2.5 rounded-full bg-secondary border border-border text-foreground text-sm font-medium">
                {inst}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              The Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              From Vision to <span className="text-rose-deep">Reality</span>
            </h2>
          </div>

          <div className="text-muted-foreground text-base leading-relaxed space-y-5 max-w-3xl mx-auto">
            <p>
              Rachna Gupta is a serial entrepreneur and digital commerce strategist with 7+ years 
              of experience across social commerce, e-commerce, and digital marketing.
            </p>
            <p>
              She is the Founder & Director of LIVSTO Apparels OPC Private Limited, building 
              <strong> LYVSTOR</strong> — an AI-powered live-stream shopping platform helping social sellers 
              and women entrepreneurs achieve 10X sales growth through live commerce, AI product listing, 
              and free mini-websites.
            </p>
            <p>
              She also founded <strong>Secret Attire</strong>, a women-focused social commerce apparel brand, 
              and <strong>WSBulk</strong>, a digital marketing solutions company offering WhatsApp automation, 
              performance marketing, and growth tools for startups and SMEs.
            </p>
            <p>
              Rachna has empowered 5,000+ women to start earning from home with zero investment. She was 
              featured on the national startup TV show <strong>Ideabaaz on Zee TV</strong>, and has been 
              supported by NSRCEL (IIM Bangalore), IGDTUW, GGSIPU, Chitkara University, and Sharda University.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
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
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-cream font-serif font-bold text-base flex-shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gold/30 mt-2" />
                  )}
                </div>
                <div className="card-elegant flex-1 !p-6">
                  <p className="text-sm text-gold font-semibold mb-1">{milestone.year}</p>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideabaaz Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              Media & Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Featured on <span className="text-rose-deep">Ideabaaz – Zee TV</span>
            </h2>
            <p className="text-muted-foreground">
              Rachna was featured on the national startup TV show Ideabaaz on Zee TV for her 
              innovation in women empowerment and social commerce.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/5">
              {ideabaazSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${slide.bg} transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center">
                    <Tv size={56} className="text-gold mx-auto mb-4" />
                    <p className="text-lg font-serif font-bold text-foreground">{slide.alt}</p>
                    <p className="text-sm text-muted-foreground mt-2">Ideabaaz · Zee TV</p>
                  </div>
                </div>
              ))}
            </div>
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
        </div>
      </section>

      {/* Press & Media Coverage */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Press & <span className="text-rose-deep italic">Media Coverage</span>
            </h2>
            <p className="text-muted-foreground">
              Secret Attire and its founder are regularly featured across leading digital media and startup publications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {newsArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elegant !p-6 group hover:shadow-elevated transition-shadow block"
              >
                <span className={`inline-block px-3 py-1 rounded-full ${article.color} text-white text-xs font-medium mb-4`}>
                  {article.source}
                </span>
                <h4 className="text-base font-serif font-bold text-foreground mb-3 group-hover:text-rose-deep transition-colors line-clamp-3">
                  {article.title}
                </h4>
                <span className="inline-flex items-center gap-1 text-sm text-rose-deep font-medium">
                  Read Article <ExternalLink size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-gradient-to-b from-rose-light/30 to-background">
        <div className="container-width max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
            "My dream is to empower a million women to become financially 
            independent through their own fashion businesses."
          </blockquote>
          <p className="mt-6 text-lg text-rose-deep font-semibold">
            — Rachna Gupta, Founder & Director
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Join the <span className="text-gradient-gold">Secret Attire</span> Family
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you're looking to shop premium fashion or start your own business, 
            we're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Shop Now
            </Link>
            <Link to="/work-from-home" className="btn-secondary">
              Start Your Business
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Founder;
