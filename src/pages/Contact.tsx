import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent successfully!");
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl text-cream font-bold">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+971 503033211", href: "tel:+971503033211" },
                  { icon: Mail, label: "Email", value: "hello@syncaccessories.com", href: "mailto:hello@syncaccessories.com" },
                  { icon: MapPin, label: "Address", value: "Amber Gem Tower, Sharjah" },
                  { icon: Clock, label: "Business Hours", value: "10:00 AM – 10:00 PM, Monday to Sunday" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="shrink-0 h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} className="text-foreground font-medium hover:text-gold transition-colors">{value}</a>
                      ) : (
                        <p className="text-foreground font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://www.instagram.com/eternaaccessories_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@eternaaccessories_</span>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-card border border-gold/30 rounded-xl p-12 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-gold mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-xl p-8 space-y-6"
                  >
                    <h2 className="font-display text-2xl font-bold text-foreground">Send a Message</h2>
                    {[
                      { name: "name", label: "Name", type: "text", required: true },
                      { name: "email", label: "Email", type: "email", required: true },
                      { name: "phone", label: "Phone", type: "tel", required: false },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          required={field.required}
                          value={form[field.name as keyof typeof form]}
                          onChange={e => setForm(prev => ({ ...prev, [field.name]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea
                        required
                        rows={3}
                        value={form.message}
                        onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-dark text-primary font-bold py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_56%_52%/0.4)]"
                    >
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
