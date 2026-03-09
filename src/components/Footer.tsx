import { Link } from "react-router-dom";
import { Instagram, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { categories } from "@/data/products";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Warranty & Materials", path: "/warranty" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-cream/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/eterna_logo.png" alt="Eterna Accessories" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="text-gold font-display text-lg font-semibold tracking-wider">ETERNA</h3>
                <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase -mt-1">Accessories</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              Premium waterproof gold-plated jewelry made in Dubai. Designed for everyday elegance.
            </p>
            <a
              href="https://www.instagram.com/eternaaccessories_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gold hover:text-gold-light transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">@eternaaccessories_</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-gold font-display text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link
                    to={`/shop?category=${cat.slug}`}
                    onClick={scrollToTop}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href="tel:+971503033211" className="hover:text-gold transition-colors">+971 503033211</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:hello@syncaccessories.com" className="hover:text-gold transition-colors">hello@syncaccessories.com</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Amber Gem Tower, Sharjah</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Eterna Accessories. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-gold/20 hover:bg-gold/30 text-gold p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
