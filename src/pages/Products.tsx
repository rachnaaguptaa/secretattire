import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, MessageCircle, CheckCircle } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  { name: "Real Mirror Party Wear Salwar Suit Set with Free Gift", image: product1, buyLink: "#" },
  { name: "Trending Embroidery Farsi Salwar Suit", image: product2, buyLink: "#" },
  { name: "Chinon Embroidered Saree with Stitched Blouse", image: product3, buyLink: "#" },
  { name: "Chinon Indo Western Shrug & Plazzo Set", image: product4, buyLink: "#" },
  { name: "Chinon Shrug & Plazzo Set with Printed Koti", image: product5, buyLink: "#" },
  { name: "Jaipuri Printed Cotton Cord Set", image: product6, buyLink: "#" },
  { name: "Lehenga Style Skirt with Embroidered Blouse", image: product7, buyLink: "#" },
  { name: "Premium Cotton Floral Co-Ord Set", image: product8, buyLink: "#" },
];

const WHATSAPP_NUMBER = "919034828632";

const Products = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in buying: ${productName}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-20 bg-gradient-to-b from-rose-light/60 to-background pb-12">
        <div className="container-width text-center py-12 md:py-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
            Our Collection
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Discover Our <span className="text-gold">Premium Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore our exclusive range of sarees, kurtis, and suits with premium fabrics
            and elegant designs.
          </p>
          <p className="text-gold font-semibold flex items-center justify-center gap-2 mb-2">
            <CheckCircle size={18} /> Cash on Delivery Available
          </p>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <ShoppingCart size={16} /> Click any product to purchase instantly
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div key={index} className="card-elegant overflow-hidden group">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  <a
                    href={product.buyLink}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gold text-white font-medium text-sm hover:bg-gold/90 transition-colors mb-2"
                  >
                    <ShoppingCart size={16} />
                    Buy Now
                  </a>
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border-2 border-[hsl(142,70%,40%)] text-[hsl(142,70%,35%)] font-medium text-sm hover:bg-[hsl(142,70%,40%)]/10 transition-colors"
                  >
                    <MessageCircle size={16} />
                    Buy via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Purchase */}
      <section className="section-padding bg-gradient-to-b from-rose-light/30 to-background">
        <div className="container-width text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            How to Purchase
          </h2>
          <p className="text-muted-foreground mb-6">
            Click any product to open our catalog. You can place your order directly via WhatsApp.
            Cash on Delivery is available.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to browse all products")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-white font-medium hover:bg-gold/90 transition-colors"
          >
            <ShoppingCart size={18} />
            Browse All Products
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
