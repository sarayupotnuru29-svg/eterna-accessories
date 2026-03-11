// import { Link } from "react-router-dom";
// import { Instagram, ArrowUp, Phone, Mail, MapPin, Heart, Truck } from "lucide-react";
// import { categories } from "@/data/products";

// // We use "../" to go out of the 'components' folder and find the logo in 'src'
// import staffArcLogo from "../staffarclogo.jpg";

// const quickLinks = [
//   { name: "Home", path: "/" },
//   { name: "Shop", path: "/shop" },
//   { name: "About", path: "/about" },
//   { name: "Warranty & Materials", path: "/warranty" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Footer() {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="bg-primary text-cream/80">
//       <div className="container mx-auto px-4 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand Section */}
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               {/* Logo Wrapper with Navbar-style background integration */}
//               <div className="relative bg-black rounded-lg p-1 overflow-hidden shadow-xl border border-gold/10">
//                 <img 
//                   src="/images/eterna_logo.png" 
//                   alt="Eterna Accessories" 
//                   /* Increased size and filters to match Navbar exactly */
//                   className="h-24 w-24 object-contain mix-blend-screen brightness-110 contrast-110 scale-110" 
//                 />
//               </div>
//               <div>
//                 <h3 className="text-gold font-display text-xl font-semibold tracking-wider">ETERNA</h3>
//                 <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase -mt-1">Accessories</p>
//               </div>
//             </div>
//             <p className="text-sm leading-relaxed text-cream/60">
//               Premium waterproof gold-plated jewelry made in Dubai. Designed for everyday elegance.
//             </p>
//             <a
//               href="https://www.instagram.com/eternaaccessories_/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 mt-4 text-gold hover:text-gold-light transition-colors"
//             >
//               <Instagram className="h-5 w-5" />
//               <span className="text-sm">@eternaaccessories_</span>
//             </a>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-gold font-display text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {quickLinks.map(link => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     onClick={scrollToTop}
//                     className="text-sm hover:text-gold transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h4 className="text-gold font-display text-lg mb-4">Categories</h4>
//             <ul className="space-y-2">
//               {categories.map(cat => (
//                 <li key={cat.slug}>
//                   <Link
//                     to={`/shop?category=${cat.slug}`}
//                     onClick={scrollToTop}
//                     className="text-sm hover:text-gold transition-colors"
//                   >
//                     {cat.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-gold font-display text-lg mb-4">Contact</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2 text-sm">
//                 <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
//                 <a href="tel:+971503033211" className="hover:text-gold transition-colors">+971 503033211</a>
//               </li>
//               <li className="flex items-start gap-2 text-sm">
//                 <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
//                 <a href="mailto:hello@syncaccessories.com" className="hover:text-gold transition-colors">hello@syncaccessories.com</a>
//               </li>
//               <li className="flex items-start gap-2 text-sm">
//                 <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
//                 <span>Amber Gem Tower, Sharjah</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Shipping Note Section */}
//         <div className="mt-12 py-4 border-y border-gold/10 flex flex-col items-center justify-center text-center">
//           <div className="flex items-center gap-2 text-gold mb-1">
//             <Truck className="h-5 w-5" />
//             <span className="font-medium tracking-wide uppercase text-xs">Shipping Information</span>
//           </div>
//           <p className="text-sm text-cream/90 font-medium italic">
//             "Enjoy Free Delivery on Orders Over 199 AED. Worldwide Shipping Available"
//           </p>
//         </div>

//         {/* Bottom */}
//         <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gold/5">
//           <p className="text-xs text-cream/40 order-3 md:order-1">
//             © {new Date().getFullYear()} Eterna Accessories. All rights reserved.
//           </p>

//           {/* StaffArc Attribution */}
//           <div className="flex justify-center items-center gap-1 text-sm order-1 md:order-2">
//             Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
//             <a
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
//             >
//               <img
//                 src={staffArcLogo}
//                 alt="StaffArc logo"
//                 className="h-5 w-5 object-contain"
//               />
//               StaffArc
//             </a>
//           </div>

//           <button
//             onClick={scrollToTop}
//             className="bg-gold/20 hover:bg-gold/30 text-gold p-2 rounded-full transition-colors order-2 md:order-3"
//             aria-label="Scroll to top"
//           >
//             <ArrowUp className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }





import { Link } from "react-router-dom";
import { Instagram, ArrowUp, Phone, Mail, MapPin, Heart, Truck } from "lucide-react";
import { categories } from "@/data/products";

// We use "../" to go out of the 'components' folder and find the logo in 'src'
import staffArcLogo from "../staffarclogo.jpg";

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
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {/* Logo matches Navbar style exactly: no border, darkened filters */}
              <div className="relative">
                <img 
                  src="/images/eterna_logo2.png" 
                  alt="Eterna Accessories" 
                  /* Filters match Navbar:
                    - brightness-90 for the rich gold look
                    - contrast-125 for sharp details
                    - mix-blend-screen to remove black background
                  */
                  className="h-24 w-24 object-contain mix-blend-screen brightness-90 contrast-125" 
                />
              </div>
              <div>
                <h3 className="text-gold font-display text-xl font-semibold tracking-wider">ETERNA</h3>
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

        {/* Shipping Note Section */}
        <div className="mt-12 py-4 border-y border-gold/10 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 text-gold mb-1">
            <Truck className="h-5 w-5" />
            <span className="font-medium tracking-wide uppercase text-xs">Shipping Information</span>
          </div>
          <p className="text-sm text-cream/90 font-medium italic">
            "Enjoy Free Delivery on Orders Over 199 AED. Worldwide Shipping Available"
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gold/5">
          <p className="text-xs text-cream/40 order-3 md:order-1">
            © {new Date().getFullYear()} Eterna Accessories. All rights reserved.
          </p>

          {/* StaffArc Attribution */}
          <div className="flex justify-center items-center gap-1 text-sm order-1 md:order-2">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-600 hover:underline font-medium"
            >
              <img
                src={staffArcLogo}
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gold/20 hover:bg-gold/30 text-gold p-2 rounded-full transition-colors order-2 md:order-3"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}