import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/home/ProductsSection";

const Products = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ProductsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Products;
