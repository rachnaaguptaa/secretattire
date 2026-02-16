import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, MessageCircle, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919034828632";

const products = [
  {
    id: 1,
    name: "Real Mirror Party Wear Salwar Suit Set with Free Gift",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/products/gallery/sun31kur28.webp",
    link: "https://lyvstor.com/product/real-mirror-party-wear-salwar-suit-set-with-free-gift/1081",
  },
  {
    id: 2,
    name: "Trending Embroidery Farsi Salwar Suit",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/fs1.webp",
    link: "https://lyvstor.com/product/trending-embroidery-farsi-salwar-suit/990",
  },
  {
    id: 3,
    name: "Chinon Embroidered Saree with Stitched Blouse",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/nov7srb7.webp",
    link: "https://lyvstor.com/product/pure-silk-chinon-embroidered-saree-with-heavy-stitched-blouse/1369",
  },
  {
    id: 4,
    name: "Chinon Indo Western Shrug & Plazzo Set",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec5indo19.webp",
    link: "https://lyvstor.com/product/chinon-indo-western-shrug-plazzo-set/1427",
  },
  {
    id: 5,
    name: "Chinon Shrug & Plazzo Set with Printed Koti",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec6plz4.webp",
    link: "https://lyvstor.com/product/chinon-shrug-plazzo-set-with-printed-koti/1431",
  },
  {
    id: 6,
    name: "Jaipuri Printed Cotton Cord Set",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec5co1.webp",
    link: "https://lyvstor.com/product/jaipuri-printed-cotton-cord-set/1422",
  },
  {
    id: 7,
    name: "Lehenga Style Skirt with Embroidered Blouse",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/products/gallery/IMG-20250712-WA0071.jpg",
    link: "https://lyvstor.com/product/test-rr/10",
  },
  {
    id: 8,
    name: "Premium Cotton Floral Co-Ord Set",
    image:
      "https://lyvstor.blr1.cdn.digitaloceanspaces.com/live/dec7cor98.webp",
    link: "https://lyvstor.com/product/premium-cotton-floral-co-ord-set/1589",
  },
];

const Products = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in buying: ${productName}`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-background">
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

          <p className="text-gold font-semibold flex items-center justify-center gap-2">
            <CheckCircle size={18} /> Cash on Delivery Available
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="card-elegant overflow-hidden group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  {/* Buy Now */}
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gold text-white font-medium text-sm hover:bg-gold/90 transition-colors mb-2"
                  >
                    <ShoppingCart size={16} />
                    Buy Now
                  </a>

                  {/* WhatsApp */}
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

      {/* WhatsApp Browse Section */}
      <section className="section-padding bg-gradient-to-b from-rose-light/30 to-background">
        <div className="container-width text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Need Help Choosing?
          </h2>

          <p className="text-muted-foreground mb-6">
            Message us directly on WhatsApp and we will help you select the perfect outfit.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi, I'd like to browse all products"
            )}`}
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
