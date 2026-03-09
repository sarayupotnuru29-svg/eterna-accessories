import { motion } from "framer-motion";
import { Gem, Shield, Clock, Droplets, FlaskConical, Magnet } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Warranty() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Quality Promise</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream font-bold">Materials & Warranty</h1>
          </motion.div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">Jewelry Materials</h2>
            <p className="text-muted-foreground mt-2">What makes our jewelry exceptional</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Gem, title: "Three Layers of 18K Gold Plating", desc: "Our proprietary triple-layer gold plating process ensures long-lasting shine and superior durability compared to single-layer alternatives." },
              { icon: Shield, title: "Stainless Titanium Steel", desc: "316L stainless steel provides an incredibly strong, lightweight, and corrosion-resistant foundation for every piece." },
              { icon: Gem, title: "Cubic Zirconia Crystals", desc: "Hand-selected premium cubic zirconia crystals add brilliant sparkle that rivals genuine diamonds." },
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
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Hypoallergenic", "Nickel-Free", "Safe for Skin"].map(badge => (
              <span key={badge} className="bg-gold/10 text-gold px-5 py-2 rounded-full text-sm font-medium">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-20 bg-primary text-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="gold-text">120-Day</span> Warranty
            </h2>
            <p className="text-cream/70 text-lg mb-4">
              All Eterna Accessories jewelry comes with a comprehensive <strong className="text-cream">120-day warranty</strong>.
            </p>
            <p className="text-cream/70 text-lg">
              Our gold plating typically lasts <strong className="text-cream">1-2 years or more</strong> with proper care and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Durability */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover:border-gold/40 transition-all duration-500"
            >
              <FlaskConical className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Durability Test</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Our jewelry has been tested in <strong className="text-foreground">salt water for 2 consecutive weeks</strong> with no signs of tarnishing or degradation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Team members wear our jewelry for <strong className="text-foreground">over 1 year</strong> while swimming and sunbathing regularly — it still looks brand new.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover:border-gold/40 transition-all duration-500"
            >
              <Magnet className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Magnetic Stainless Steel</h3>
              <p className="text-muted-foreground leading-relaxed">
                316L stainless steel may show <strong className="text-foreground">minor magnetic properties after deformation</strong>, which is completely normal in high-quality stainless steel.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                This does not affect the corrosion resistance, durability, or hypoallergenic properties of your jewelry in any way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
