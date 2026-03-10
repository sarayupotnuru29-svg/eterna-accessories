import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const lines = items.map(
      (item, i) =>
        `${i + 1}. ${item.product.title} (${item.product.code}) x${item.quantity} — ${item.product.offerPrice * item.quantity} AED`
    );
    const message = `Hello! I'd like to order the following items from Eterna Accessories:\n\n${lines.join("\n")}\n\nTotal: ${totalPrice} AED\n\nPlease confirm availability and share payment details. Thank you!`;
    const url = `https://wa.me/971503033211?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Your Selection</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream font-bold">Shopping Cart</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {items.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Discover our stunning collection of luxury jewelry.</p>
              <Link to="/shop" className="inline-block bg-gold hover:bg-gold-dark text-primary font-bold px-8 py-3 rounded-full transition-all">
                Shop Now
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map(item => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-4 bg-card border border-border rounded-xl p-4"
                  >
                    <img src={item.product.image} alt={item.product.title} className="w-24 h-24 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-sm font-medium text-foreground line-clamp-2">{item.product.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.product.code}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:border-gold transition-colors">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:border-gold transition-colors">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gold font-bold">{item.product.offerPrice * item.quantity} AED</span>
                          <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive transition-colors">
                  Clear Cart
                </button>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Order Summary</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Items ({totalItems})</span>
                      <span className="text-foreground">{totalPrice} AED</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-gold text-xs">Via WhatsApp</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="font-bold text-foreground">Total</span>
                        <span className="font-bold text-gold text-lg">{totalPrice} AED</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Checkout via WhatsApp
                  </button>
                  <Link to="/shop" className="block text-center text-sm text-muted-foreground hover:text-gold mt-4 transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
