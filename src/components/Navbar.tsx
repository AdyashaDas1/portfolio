
// "use client";

// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header className={`navbar ${scrolled ? "scrolled" : "top"}`}>
//         <div className="navbar-container">
//           {/* LOGO */}
//           <a href="#home" className="logo">
//             <h1>
//               <span>Adya</span>sha
//             </h1>
//           </a>

//           {/* NAV LINKS */}
//           <nav className="nav-links hide-mobile">
//             {["Home", "About", "Skills", "Projects", "Experience"].map(
//               (item, index) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   style={{
//                     animationDelay: `${index * 0.1}s`,
//                   }}
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </nav>

//           {/* BUTTON */}
//           <a href="#contact" className="contact-btn hide-mobile">
//             Contact Me
//           </a>
//         </div>
//       </header>

//       {/* CSS */}
//       <style jsx>{`
//         .navbar {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           z-index: 999;
//           transition: all 0.4s ease;
//         }

//         .navbar.top {
//           background: transparent;
//           padding: 8px 0;
//         }

//         .navbar.scrolled {
//           background: rgba(13, 13, 13, 0.88);
//           backdrop-filter: blur(14px);
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.06);
//           animation: slideDown 0.5s ease;
//         }

//         .navbar-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 18px 24px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         /* LOGO */
//         .logo {
//           text-decoration: none;
//         }

//         .logo h1 {
//           font-size: 28px;
//           font-weight: 900;
//           color: #ffffff;
//           letter-spacing: -1px;
//           transition: 0.4s ease;
//         }

//         .logo span {
//           background: linear-gradient(135deg, #00c896, #5fffd5);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .logo:hover h1 {
//           transform: scale(1.05);
//         }

//         /* NAV LINKS */
//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 38px;
//         }

//         .nav-links a {
//           position: relative;
//           text-decoration: none;
//           color: #d4d4d4;
//           font-size: 15px;
//           font-weight: 500;
//           transition: all 0.35s ease;
//           animation: fadeDown 0.6s ease forwards;
//         }

//         .nav-links a:hover {
//           color: #00c896;
//           transform: translateY(-2px);
//         }

//         /* UNDERLINE EFFECT */
//         .nav-links a::after {
//           content: "";
//           position: absolute;
//           bottom: -8px;
//           left: 0;
//           width: 0%;
//           height: 2px;
//           background: #00c896;
//           transition: width 0.35s ease;
//           border-radius: 20px;
//         }

//         .nav-links a:hover::after {
//           width: 100%;
//         }

//         /* BUTTON */
//         .contact-btn {
//           text-decoration: none;
//           padding: 12px 26px;
//           border-radius: 999px;
//           background: linear-gradient(135deg, #00c896, #00e0aa);
//           color: #0d0d0d;
//           font-weight: 700;
//           font-size: 14px;
//           transition: all 0.4s ease;
//           box-shadow: 0 10px 25px rgba(0, 200, 150, 0.25);
//         }

//         .contact-btn:hover {
//           transform: translateY(-4px) scale(1.04);
//           box-shadow: 0 18px 35px rgba(0, 200, 150, 0.35);
//         }

//         /* ANIMATIONS */
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* MOBILE */
//         @media (max-width: 900px) {
//           .hide-mobile {
//             display: none;
//           }

//           .navbar-container {
//             padding: 18px 20px;
//           }

//           .logo h1 {
//             font-size: 24px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;


"use client";

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <a href="#home">
          <h1 className="text-3xl font-black text-white tracking-tight hover:scale-105 transition">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Adya
            </span>
            sha
          </h1>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Skills", "Projects", "Experience"].map(
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

        {/* BUTTON */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-black text-sm font-bold shadow-lg hover:scale-105 hover:shadow-emerald-500/30 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;