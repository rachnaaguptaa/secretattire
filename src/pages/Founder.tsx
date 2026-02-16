import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Calendar,
  Tv,
  Linkedin,
  ExternalLink,
  Building2,
} from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";
import ideabaaz1 from "@/assets/ideabaaz1.jpg";
import ideabaaz2 from "@/assets/ideabaaz2.jpg";
import ideabaaz3 from "@/assets/ideabaaz3.jpg";
import { useState, useEffect } from "react";

const Founder = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ideabaazSlides = [ideabaaz1, ideabaaz2, ideabaaz3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ideabaazSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-20 bg-rose-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Meet the Founder
            </p>

            <h1 className="text-5xl font-serif font-bold mb-6">
              Rachna <span className="text-amber-600">Gupta</span>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Serial entrepreneur and digital commerce strategist with 7+ years
              of experience across social commerce, e-commerce, and digital
              marketing. Founder & Director of LIVSTO Apparels OPC Private
              Limited, building LYVSTOR — an AI powered live-stream shopping
              platform helping social sellers and women entrepreneurs achieve
              10X sales growth.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              She also founded Secret Attire, a women-focused social commerce
              apparel brand, and WSBulk, a digital marketing solutions company
              offering WhatsApp automation, performance marketing, and growth
              tools for startups and SMEs.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex gap-3">
                <Building2 className="text-amber-600" size={18} />
                <div>
                  <p className="font-semibold text-sm">
                    Founder & Director
                  </p>
                  <p className="text-xs text-muted-foreground">
                    LIVSTO Apparels OPC Pvt Ltd
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Calendar className="text-amber-600" size={18} />
                <div>
                  <p className="font-semibold text-sm">7+ Years</p>
                  <p className="text-xs text-muted-foreground">
                    In E-commerce & Social Selling
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Users className="text-amber-600" size={18} />
                <div>
                  <p className="font-semibold text-sm">
                    5,000+ Women
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Empowered to Start Businesses
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Tv className="text-amber-600" size={18} />
                <div>
                  <p className="font-semibold text-sm">
                    Featured On
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ideabaaz – Zee TV
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/rachnaagupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>

          <img
            src={founderImage}
            alt="Rachna Gupta"
            className="rounded-2xl shadow-lg max-w-md mx-auto"
          />
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
            The Journey
          </span>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            From Vision to <span className="text-rose-700">Reality</span>
          </h2>

          <div className="text-muted-foreground leading-relaxed space-y-6 max-w-3xl mx-auto">
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

      {/* ================= SUPPORTED BY ================= */}
      <section className="py-16 text-center">
        <p className="text-sm text-pink-500 mb-2">Backed by</p>
        <h2 className="text-3xl font-serif font-bold mb-4">
          Supported by <span className="text-amber-600">Leading Institutions</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Recognized by India's top entrepreneurship and innovation institutions
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["NSRCEL (IIM Bangalore)", "IGDTUW", "GGSIPU", "Chitkara University", "Sharda University"].map((inst) => (
            <span
              key={inst}
              className="px-5 py-2 rounded-full bg-rose-50 border text-sm"
            >
              {inst}
            </span>
          ))}
        </div>
      </section>

      {/* ================= IDEABAAZ SECTION ================= */}
      <section className="py-20 bg-rose-50 text-center">
        <p className="text-sm text-pink-500 mb-2">
          Media & Recognition
        </p>

        <h2 className="text-3xl font-serif font-bold mb-6">
          Featured on <span className="text-pink-600">Ideabaaz – Zee TV</span>
        </h2>

        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Rachna was featured on the national startup TV show Ideabaaz on Zee TV
          for her innovation in women empowerment and social commerce.
        </p>

        <div className="relative max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
          {ideabaazSlides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Ideabaaz"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {ideabaazSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentSlide === index ? "bg-pink-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= PRESS SECTION ================= */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Press & <span className="text-pink-600 italic">Media Coverage</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
          Secret Attire and its founder are regularly featured across leading digital media and startup publications.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-rose-50 p-8 rounded-2xl shadow-sm">
            <span className="bg-green-500 text-white text-xs px-4 py-1 rounded-full">
              Yonoj News
            </span>
            <h4 className="mt-6 font-semibold">
              LYVSTOR: Rachna Gupta Building Trust in India’s Digital Shopping Space
            </h4>
            <a
              href="https://yonojnews.com/lyvstor-rachna-gupta-building-trust-in-indias-digital-shopping-space/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 text-sm mt-4 inline-flex items-center gap-1"
            >
              Read Article <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-rose-50 p-8 rounded-2xl shadow-sm">
            <span className="bg-pink-600 text-white text-xs px-4 py-1 rounded-full">
              YourStory
            </span>
            <h4 className="mt-6 font-semibold">
              Livsto: Live Commerce for Women Entrepreneurs
            </h4>
            <a
              href="https://yourstory.com/2025/06/livsto-live-commerce-for-women-entrepreneurs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 text-sm mt-4 inline-flex items-center gap-1"
            >
              Read Article <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-rose-50 p-8 rounded-2xl shadow-sm">
            <span className="bg-amber-500 text-white text-xs px-4 py-1 rounded-full">
              Flashbuzz
            </span>
            <h4 className="mt-6 font-semibold">
              Empowering Women Through Digital Commerce & Innovation
            </h4>
            <a href="#" className="text-pink-600 text-sm mt-4 inline-flex items-center gap-1">
              Read Article <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Founder;
