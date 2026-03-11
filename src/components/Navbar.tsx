// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingBag, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Shop", path: "/shop" },
//   { name: "About", path: "/about" },
//   { name: "Warranty", path: "/warranty" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { totalItems } = useCart();
//   const location = useLocation();

//   return (
//     /* Changed bg-primary/95 to bg-transparent and removed border/blur */
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src="/images/eterna_logo.png"
//               alt="Eterna Accessories"
//               className="h-12 w-12 rounded-full object-cover"
//             />
//             <div className="hidden sm:block">
//               <h1 className="text-gold font-display text-lg font-semibold tracking-wider">
//                 ETERNA
//               </h1>
//               <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase -mt-1">
//                 Accessories
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map(link => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
//                   location.pathname === link.path
//                     ? "text-gold"
//                     : "text-cream/80 hover:text-gold"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Cart + Mobile Toggle */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/cart"
//               className="relative text-cream/80 hover:text-gold transition-colors"
//             >
//               <ShoppingBag className="h-6 w-6" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-gold text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//             <button
//               className="lg:hidden text-cream/80 hover:text-gold transition-colors"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu - Kept background here for readability on small screens */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-gold/20 overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-6 space-y-4">
//               {navLinks.map(link => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setMobileOpen(false)}
//                   className={`block text-sm tracking-wider uppercase py-2 transition-colors ${
//                     location.pathname === link.path
//                       ? "text-gold"
//                       : "text-cream/80 hover:text-gold"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }








// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingBag, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Shop", path: "/shop" },
//   { name: "About", path: "/about" },
//   { name: "Warranty", path: "/warranty" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { totalItems } = useCart();
//   const location = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-24"> {/* Increased height to accommodate larger logo */}
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center gap-3">
//             <div className="relative">
//               <img
//                 src="/images/eterna_logo.png"
//                 alt="Eterna Accessories"
//                 /* Increased size to h-20 w-20. 
//                    mix-blend-screen makes the black background transparent.
//                    brightness/contrast ensures the gold pops.
//                 */
//                 className="h-20 w-20 md:h-24 md:w-24 object-contain mix-blend-screen brightness-110 contrast-125"
//               />
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-gold font-display text-xl font-semibold tracking-wider">
//                 ETERNA
//               </h1>
//               <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase -mt-1">
//                 Accessories
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
//                   location.pathname === link.path
//                     ? "text-gold font-medium"
//                     : "text-cream/90 hover:text-gold"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Cart + Mobile Toggle */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/cart"
//               className="relative text-cream/90 hover:text-gold transition-colors"
//             >
//               <ShoppingBag className="h-6 w-6" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-gold text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//             <button
//               className="lg:hidden text-cream/90 hover:text-gold transition-colors"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-gold/20 overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-6 space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setMobileOpen(false)}
//                   className={`block text-sm tracking-wider uppercase py-2 transition-colors ${
//                     location.pathname === link.path
//                       ? "text-gold"
//                       : "text-cream/80 hover:text-gold"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }






// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingBag, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Shop", path: "/shop" },
//   { name: "About", path: "/about" },
//   { name: "Warranty", path: "/warranty" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { totalItems } = useCart();
//   const location = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Height increased to h-28 to allow the larger logo to sit comfortably */}
//         <div className="flex items-center justify-between h-24 md:h-28">
          
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="relative">
//               <img
//                 src="/images/eterna_logo.png"
//                 alt="Eterna Accessories"
//                 /* Matches Footer Style:
//                    1. Removed circular clipping (no rounded-full).
//                    2. mix-blend-screen makes the black background disappear.
//                    3. Increased size for better brand visibility.
//                 */
//                 className="h-20 w-20 md:h-28 md:w-28 object-contain mix-blend-screen brightness-110 contrast-110"
//               />
//             </div>
            
//             {/* Branding Text */}
//             <div className="hidden sm:block">
//               <h1 className="text-gold font-display text-xl font-semibold tracking-wider">
//                 ETERNA
//               </h1>
//               <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase -mt-1">
//                 Accessories
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
//                   location.pathname === link.path
//                     ? "text-gold font-medium"
//                     : "text-cream/90 hover:text-gold"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Cart + Mobile Toggle */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/cart"
//               className="relative text-cream/90 hover:text-gold transition-colors"
//             >
//               <ShoppingBag className="h-6 w-6" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-gold text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//             <button
//               className="lg:hidden text-cream/90 hover:text-gold transition-colors"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-gold/20 overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-8 space-y-6">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setMobileOpen(false)}
//                   className={`block text-base tracking-widest uppercase transition-colors ${
//                     location.pathname === link.path
//                       ? "text-gold"
//                       : "text-cream/80 hover:text-gold"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }







// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingBag, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Shop", path: "/shop" },
//   { name: "About", path: "/about" },
//   { name: "Warranty", path: "/warranty" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { totalItems } = useCart();
//   const location = useLocation();

//   return (
//     /* Changed from bg-transparent to bg-primary with a subtle border for definition */
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-gold/10 shadow-lg">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Height maintained at h-28 for the large logo visibility */}
//         <div className="flex items-center justify-between h-24 md:h-28">
          
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="relative">
//               <img
//                 src="/images/eterna_logo.png"
//                 alt="Eterna Accessories"
//                 /* mix-blend-screen ensures the black in the logo file 
//                    melts into the bg-primary navbar background 
//                 */
//                 className="h-20 w-20 md:h-28 md:w-28 object-contain mix-blend-screen brightness-110 contrast-110"
//               />
//             </div>
            
//             {/* Branding Text */}
//             <div className="hidden sm:block">
//               <h1 className="text-gold font-display text-xl font-semibold tracking-wider">
//                 ETERNA
//               </h1>
//               <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase -mt-1">
//                 Accessories
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
//                   location.pathname === link.path
//                     ? "text-gold font-medium"
//                     : "text-cream/90 hover:text-gold"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Cart + Mobile Toggle */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/cart"
//               className="relative text-cream/90 hover:text-gold transition-colors"
//             >
//               <ShoppingBag className="h-6 w-6" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-gold text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//             <button
//               className="lg:hidden text-cream/90 hover:text-gold transition-colors"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-gold/20 overflow-hidden"
//           >
//             <div className="container mx-auto px-4 py-8 space-y-6">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setMobileOpen(false)}
//                   className={`block text-base tracking-widest uppercase transition-colors ${
//                     location.pathname === link.path
//                       ? "text-gold"
//                       : "text-cream/80 hover:text-gold"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }







import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Warranty", path: "/warranty" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-gold/10 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <img
                src="/images/eterna_logo.png"
                alt="Eterna Accessories"
                /* Adjusted filters: 
                  - brightness-90: Darkens the image for a richer gold look.
                  - contrast-125: Ensures the details stay sharp against the dark BG.
                  - mix-blend-screen: Keeps the black parts transparent.
                */
                className="h-20 w-20 md:h-28 md:w-28 object-contain mix-blend-screen brightness-90 contrast-125"
              />
            </div>
            
            {/* Branding Text */}
            <div className="hidden sm:block">
              <h1 className="text-gold font-display text-xl font-semibold tracking-wider">
                ETERNA
              </h1>
              <p className="text-gold-light text-[10px] tracking-[0.3em] uppercase -mt-1">
                Accessories
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-gold font-medium"
                    : "text-cream/90 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative text-cream/90 hover:text-gold transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden text-cream/90 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-gold/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-base tracking-widest uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-cream/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}