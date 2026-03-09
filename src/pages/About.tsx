import { motion } from "framer-motion";
import { Droplets, Heart, Shield, Leaf } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const features = [
  { icon: Droplets, title: "Waterproof Jewelry", desc: "Wear in the shower, pool, or sea without worry." },
  { icon: Heart, title: "Hypoallergenic Materials", desc: "Safe for sensitive skin — no irritation." },
  { icon: Shield, title: "Long Lasting Plating", desc: "Triple-layer 18K gold plating lasts 1-2 years+." },
  { icon: Leaf, title: "Nickel-Free Technology", desc: "100% nickel-free for your safety and comfort." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative bg-primary py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6">About Eterna Accessories</h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Premium fashion jewelry brand offering <strong className="text-cream">waterproof gold-plated jewelry made in Dubai</strong>. 
              Our jewelry is designed for daily wear without fading or tarnishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 bg-card rounded-xl border border-border hover:border-gold/40 transition-all duration-500"
              >
                <div className="shrink-0 h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Image */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/hero-banner.jpg" alt="Eterna Collection" className="rounded-xl w-full" />
            </div>
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Forever Elegance</p>
              <h2 className="font-display text-3xl font-bold mb-6">Crafted with Passion</h2>
              <p className="text-cream/70 leading-relaxed mb-4">
                Every piece in our collection is meticulously crafted using premium materials and cutting-edge plating technology. From our signature 3-layer 18K gold plating to our hand-selected cubic zirconia crystals, we ensure every detail meets the highest standards of luxury.
              </p>
              <p className="text-cream/70 leading-relaxed">
                Founded with the belief that luxury should be accessible and durable, Eterna Accessories has become a trusted name for fashion-forward individuals who refuse to compromise on quality or style.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
