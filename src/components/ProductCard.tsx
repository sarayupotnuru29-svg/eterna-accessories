import { useState } from "react";
import { ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-[0_8px_30px_-8px_hsl(43_56%_52%/0.3)] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
            <button
              onClick={handleAdd}
              className="bg-gold hover:bg-gold-dark text-primary font-body text-sm font-bold px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(true); }}
              className="bg-cream/90 hover:bg-cream text-primary font-body text-sm font-bold p-2.5 rounded-full"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
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

      {/* Product Detail Popup */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-foreground">
              {product.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs uppercase tracking-widest">
              Product Code: {product.code}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold font-bold text-2xl">{product.offerPrice} AED</span>
                  <span className="text-muted-foreground text-base line-through">
                    {product.originalPrice} AED
                  </span>
                </div>
                <div className="space-y-1.5">
                  {product.description.split("\n").map((line, i) => (
                    <p key={i} className="text-sm text-foreground/80">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <button
                onClick={handleAdd}
                className="mt-6 w-full bg-gold hover:bg-gold-dark text-primary font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_56%_52%/0.4)]"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
