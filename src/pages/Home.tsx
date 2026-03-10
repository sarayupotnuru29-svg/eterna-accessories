import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Shield, Gem, Clock, Sun, Waves, ShowerHead } from "lucide-react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const bestSellers = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-banner.jpg" alt="Luxury Jewelry Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream font-bold leading-tight mb-6">
              Luxury Waterproof Jewelry{" "}
              <span className="gold-text">from Dubai</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl font-light mb-8 max-w-lg">
              Elegant jewelry designed for everyday beauty.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="bg-gold hover:bg-gold-dark text-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_56%_52%/0.4)]"
              >
                Shop Collection
              </Link>
              <Link
                to="/shop?category=best-sellers"
                className="border border-gold/50 text-gold hover:bg-gold/10 px-8 py-3.5 rounded-full transition-all duration-300"
              >
                View Best Sellers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Our Collection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured Categories
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/shop?category=${cat.slug}`}
                  className="group relative block aspect-[3/4] rounded-lg overflow-hidden"
                >
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="font-display text-cream text-lg font-semibold mb-2">{cat.name}</h3>
                    <span className="text-gold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Most Popular</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Best Sellers</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-primary px-8 py-3 rounded-full transition-all duration-300 font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Waterproof Section */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <Droplets className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              <span className="gold-text">Waterproof</span> Jewelry
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Our jewelry can be worn everywhere — designed for everyday use without worry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShowerHead, label: "In the Shower" },
                { icon: Waves, label: "In the Sea" },
                { icon: Sun, label: "In the Sun" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="glassmorphism rounded-xl p-6 text-center">
                  <Icon className="h-8 w-8 text-gold mx-auto mb-3" />
                  <p className="text-cream font-medium">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Premium Quality</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Materials</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Gem, title: "3-Layer 18K Gold Plating", desc: "Triple-layer gold plating for exceptional durability and lasting shine." },
              { icon: Shield, title: "Stainless Titanium Steel", desc: "316L stainless steel base for strength, hypoallergenic & corrosion-resistant." },
              { icon: Gem, title: "Cubic Zirconia Crystals", desc: "Premium cubic zirconia inserts that sparkle like diamonds." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-gold/40 transition-all duration-500 hover:shadow-[0_8px_30px_-8px_hsl(43_56%_52%/0.2)]"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gold/10 mb-4">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Highlight */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="gold-text">120-Day</span> Warranty
            </h2>
            <p className="text-cream/70 text-lg mb-8">
              Our jewelry is designed to last. Gold plating can last <strong className="text-cream">1-2 years or more</strong> with proper care.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Tarnish-Resistant", "Waterproof", "Safe for Daily Wear"].map(item => (
                <div key={item} className="glassmorphism rounded-full px-6 py-3">
                  <span className="text-gold text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
