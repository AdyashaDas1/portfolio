// 'use client';

// import { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa';

// export default function Scroller() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scrolled down
//   const toggleVisibility = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Scroll to top smoothly
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   return (
//     <>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 animate-fadeIn hover:scale-110"
//           aria-label="Scroll to top"
//         >
//           <FaArrowUp size={20} />
//         </button>
//       )}
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Scroller() {
  const [isVisible, setIsVisible] = useState(false);

  // SHOW BUTTON
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="scroll-btn group"
        >
          {/* Glow Ring */}
          <span className="glow-ring" />

          {/* Icon */}
          <FaArrowUp className="arrow-icon" />
        </button>
      )}

      <style jsx>{`
        .scroll-btn {
          position: fixed;
          right: 32px;
          bottom: 32px;
          z-index: 60;

          width: 58px;
          height: 58px;

          border-radius: 999px;
          border: 1px solid rgba(0, 200, 150, 0.25);

          background: rgba(15, 15, 15, 0.75);
          backdrop-filter: blur(16px);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #00c896;

          cursor: pointer;
          overflow: hidden;

          box-shadow: 0 12px 35px rgba(0, 200, 150, 0.18);

          animation: fadeUp 0.5s ease;
          transition: all 0.45s ease;
        }

        .scroll-btn::before {
          content: "";
          position: absolute;
          inset: 0;

          background: linear-gradient(
            135deg,
            rgba(0, 200, 150, 0.18),
            transparent 65%
          );

          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .scroll-btn:hover::before {
          opacity: 1;
        }

        .scroll-btn:hover {
          transform: translateY(-8px) scale(1.08);

          border-color: rgba(0, 200, 150, 0.45);

          background: rgba(0, 200, 150, 0.12);

          box-shadow: 0 20px 45px rgba(0, 200, 150, 0.28);
        }

        /* GLOW */
        .glow-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 999px;

          border: 1px solid rgba(0, 200, 150, 0.2);

          animation: pulse 2.5s infinite;
        }

        /* ICON */
        .arrow-icon {
          position: relative;
          z-index: 5;
          font-size: 18px;

          transition: transform 0.35s ease;
        }

        .scroll-btn:hover .arrow-icon {
          transform: translateY(-3px);
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }

          70% {
            transform: scale(1.25);
            opacity: 0;
          }

          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .scroll-btn {
            width: 52px;
            height: 52px;
            right: 20px;
            bottom: 20px;
          }

          .arrow-icon {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}