import productsImage from "@/assets/products-flatlay.jpg";

const BuyNowSection = () => {
  return (
    <section className="section-padding gradient-hero">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 to-rose-light rounded-3xl blur-2xl" />
            <img
              src={productsImage}
              alt="Beautiful collection of sarees, kurtis and bags"
              className="relative rounded-2xl shadow-elevated w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-light text-rose-deep text-sm font-medium mb-4">
              Shop Now
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Discover Your{" "}
              <span className="text-gradient-gold">Perfect Style</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Explore our curated collection of sarees, kurtis, suits, and accessories. 
              Quality fabrics, trending designs, and prices that make you smile.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              {[
                "Premium Quality",
                "Pan-India Delivery",
                "Easy Returns",
                "COD Available",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-cream text-xs">
                    ✓
                  </span>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* COD */}
            <p className="text-gold font-medium flex items-center gap-2 mb-8 justify-center lg:justify-start">
              ✓ Cash on Delivery Available
            </p>
            <a href="#" className="btn-primary text-lg">
              Buy Now – Shop the Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNowSection;
