import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-[0_8px_30px_-8px_hsl(43_56%_52%/0.3)]"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button
          onClick={handleAdd}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gold hover:bg-gold-dark text-primary font-body text-sm font-bold px-6 py-2.5 rounded-full flex items-center gap-2"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
          {product.code}
        </p>
        <h3 className="font-display text-sm font-medium text-foreground line-clamp-2 mb-2">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-gold font-bold text-lg">{product.offerPrice} AED</span>
          <span className="text-muted-foreground text-sm line-through">
            {product.originalPrice} AED
          </span>
        </div>
      </div>
    </motion.div>
  );
}
