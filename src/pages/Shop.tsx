import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products, categories, getProductsByCategory, ProductCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = (searchParams.get("category") as ProductCategory) || "all";

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return getProductsByCategory(activeCategory as ProductCategory);
  }, [activeCategory]);

  const setCategory = (cat: string) => {
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Our Collection</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream font-bold">Shop</h1>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setCategory("all")}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-gold text-primary"
                  : "bg-secondary text-foreground hover:bg-gold/10 hover:text-gold"
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.slug
                    ? "bg-gold text-primary"
                    : "bg-secondary text-foreground hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-muted-foreground text-sm mb-6">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
}
