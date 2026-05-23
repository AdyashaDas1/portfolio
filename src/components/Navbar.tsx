


// "use client";

// import React, { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto h-[82px] px-6 flex items-center justify-between">
        
//         {/* LOGO */}
//         <a href="#home">
//           <h1 className="text-3xl font-black text-white tracking-tight hover:scale-105 transition">
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//               Adya
//             </span>
//             sha
//           </h1>
//         </a>

//         {/* NAV LINKS */}
//         <nav className="hidden md:flex items-center gap-10">
//           {["Home", "About", "Skills", "Projects", "Experience"].map(
//             (item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="relative text-gray-300 text-sm font-medium hover:text-emerald-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all hover:after:w-full"
//               >
//                 {item}
//               </a>
//             )
//           )}
//         </nav>

//         {/* BUTTON */}
//         <a
//           href="#contact"
//           className="hidden md:inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-black text-sm font-bold shadow-lg hover:scale-105 hover:shadow-emerald-500/30 transition duration-300"
//         >
//           Contact Me
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;








"use client";

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Experience"];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[82px] px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" onClick={handleNavClick}>
          <h1 className="text-3xl font-black text-white tracking-tight hover:scale-105 transition">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Adya
            </span>
            sha
          </h1>
        </a>

        {/* NAV LINKS - DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 text-sm font-medium hover:text-emerald-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* BUTTON - DESKTOP */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-black text-sm font-bold shadow-lg hover:scale-105 hover:shadow-emerald-500/30 transition duration-300"
        >
          Contact Me
        </a>

        {/* HAMBURGER MENU - MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center cursor-pointer hover:opacity-70 transition"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* BLUR BACKDROP */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          style={{ top: "82px", zIndex: 40 }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-in fade-in duration-200 relative z-50">
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="block text-gray-300 text-base font-medium hover:text-emerald-400 transition duration-300 py-2 px-4 rounded hover:bg-white/5"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-black text-base font-bold shadow-lg hover:scale-105 hover:shadow-emerald-500/30 transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
