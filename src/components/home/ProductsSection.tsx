import { ShoppingCart, MessageCircle } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  { name: "Real Mirror Party Wear Salwar Suit Set with Free Gift", image: product1, buyLink: "#", price: "₹1,499" },
  { name: "Trending Embroidery Farsi Salwar Suit", image: product2, buyLink: "#", price: "₹1,299" },
  { name: "Chinon Embroidered Saree with Stitched Blouse", image: product3, buyLink: "#", price: "₹1,699" },
  { name: "Chinon Indo Western Shrug & Plazzo Set", image: product4, buyLink: "#", price: "₹1,399" },
  { name: "Pink Georgette Anarkali Gown with Dupatta", image: product5, buyLink: "#", price: "₹1,599" },
  { name: "Navy Blue Embroidered Lehenga Choli Set", image: product6, buyLink: "#", price: "₹2,499" },
  { name: "Maroon Velvet Kurta with Golden Embroidery", image: product7, buyLink: "#", price: "₹1,199" },
  { name: "Yellow Cotton Printed Kurti with Palazzo", image: product8, buyLink: "#", price: "₹999" },
];

const WHATSAPP_NUMBER = "919034828632";

const ProductsSection = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in buying: ${productName}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Trending <span className="text-rose-deep">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked styles loved by lakhs of customers across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div key={index} className="card-elegant overflow-hidden group">
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-rose-deep mb-3">{product.price}</p>

                {/* Buy Now Button */}
                <a
                  href={product.buyLink}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gold text-white font-medium text-sm hover:bg-gold/90 transition-colors mb-2"
                >
                  <ShoppingCart size={16} />
                  Buy Now
                </a>

                {/* WhatsApp Button */}
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
  );
};

export default ProductsSection;
