



// "use client";

// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0D0D] px-4 pt-[120px] pb-12"
//     >
//       {/* Animated Glow Blobs */}
//       <div className="blob-glow blob1 absolute left-[-120px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]" />

//       <div className="blob-glow blob2 absolute bottom-[-150px] right-[-150px] h-[600px] w-[600px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]" />

//       <div className="blob-glow blob3 absolute left-[45%] top-[45%] h-[300px] w-[300px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]" />

//       <div className="relative z-10 w-full max-w-7xl">
//         <div className="grid items-center gap-[60px] lg:grid-cols-2">
//           {/* LEFT SIDE */}
//           <div className="animate-slideLeft max-lg:text-center">
//             {/* Badge */}
//             <div className="mb-6 inline-flex items-center gap-[10px] rounded-full border border-[rgba(0,200,150,0.35)] bg-[rgba(0,200,150,0.1)] px-[18px] py-[10px] backdrop-blur-md">
//               <span className="pulse-dot h-2 w-2 rounded-full bg-[#00c896]" />

//               <span className="text-[11px] font-semibold uppercase tracking-[4px] text-[#00c896]">
//                 Frontend Developer
//               </span>
//             </div>

//             {/* Heading */}
//             <h1
//               className="mt-8 font-light leading-[0.98] tracking-[-2px] text-white"
//               style={{ fontSize: "clamp(42px, 7vw, 80px)" }}
//             >
//               <span data-animate className="word-reveal block">
//                 Hi, I&apos;m
//               </span>

//               <span data-animate className="word-reveal block delay-100">
//                 <span className="gradient-text">Adyasha</span>
//               </span>

//               <span
//                 data-animate
//                 className="word-reveal block delay-200 text-[#9ca3af]"
//                 style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
//               >
//                 Creative Developer
//               </span>
//             </h1>

//             {/* Description */}
//             <p
//               className="mt-7 max-w-[620px] font-light leading-[1.6] tracking-[-0.5px] text-[#9ca3af] max-lg:mx-auto"
//               style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
//             >
//               <span data-animate className="word-reveal block delay-300">
//                 Building modern, responsive,
//               </span>

//               <span data-animate className="word-reveal block delay-400">
//                 and <span className="gradient-text">visually stunning</span>{" "}
//                 web experiences
//               </span>
//             </p>

//             {/* Buttons */}
//             <div className="mt-[36px] flex flex-wrap gap-[16px] max-lg:justify-center">
//               <a
//                 href="#projects"
//                 className="rounded-full bg-gradient-to-r from-[#00c896] to-[#00e0aa] px-[28px] py-[13px] text-[14px] font-semibold text-[#0d0d0d] shadow-[0_15px_35px_rgba(0,200,150,0.2)] transition-all duration-500 hover:-translate-y-[5px] hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(0,200,150,0.3)]"
//               >
//                 View My Work
//               </a>

//               <a
//                 href="#contact"
//                 className="rounded-full border border-[rgba(0,200,150,0.4)] px-[28px] py-[13px] text-[14px] font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:border-[#00c896] hover:bg-[rgba(0,200,150,0.08)]"
//               >
//                 Get In Touch
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="mt-[50px] flex flex-wrap gap-[40px] border-t border-[rgba(255,255,255,0.08)] pt-[30px] max-lg:justify-center">
//               {[
//                 ["3+", "Projects Completed"],
//                 ["1.5+", "Years Experience"],
//                 // ["100%", "Client Satisfaction"],
//               ].map(([value, label], index) => (
//                 <div
//                   key={label}
//                   className="animate-fadeUp"
//                   style={{
//                     animationDelay: `${index * 0.2}s`,
//                   }}
//                 >
//                   <h3 className="text-[30px] font-bold text-[#00c896]">
//                     {value}
//                   </h3>

//                   <p className="mt-[4px] text-[12px] tracking-[0.5px] text-[#9ca3af]">
//                     {label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative hidden items-center justify-center lg:flex animate-slideRight">
//             {/* Rotating Border */}
//             <div className="absolute h-[500px] w-[390px] animate-rotateBorder rounded-[40px] border-2 border-dashed border-[rgba(0,200,150,0.35)]" />

//             {/* Glow */}
//             <div className="absolute h-[380px] w-[380px] animate-pulseSlow rounded-full bg-[#00c896] opacity-[0.18] blur-[80px]" />

//             {/* Image Card */}
//             <div className="relative z-[5] h-[470px] w-[360px] overflow-hidden rounded-[30px] border border-[rgba(0,200,150,0.25)] bg-[#111111] shadow-[0_30px_70px_rgba(0,0,0,0.45)] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02]">
//               <Image
//                 src="/Adya.jpg"
//                 alt="Adyasha Das"
//                 width={360}
//                 height={470}
//                 priority
//                 className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
//               />
//             </div>

//             {/* Floating Card */}
//             <div className="absolute bottom-[-20px] left-[-20px] z-20 flex animate-floating items-center gap-[14px] rounded-[20px] border border-[rgba(0,200,150,0.2)] bg-[rgba(20,20,20,0.95)] px-[20px] py-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
//               <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-r from-[#00c896] to-[#00e0aa] text-[18px] font-bold text-[#0d0d0d]">
//                 ✦
//               </div>

//               <div>
//                 <h4 className="text-[13px] font-bold text-white">
//                   Available for Work
//                 </h4>

//                 <p className="mt-[3px] text-[11px] text-[#9ca3af]">
//                   Open to opportunities
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         .blob1 {
//           animation: float1 8s ease-in-out infinite;
//         }

//         .blob2 {
//           animation: float2 10s ease-in-out infinite;
//         }

//         .blob3 {
//           animation: pulse 6s ease-in-out infinite;
//         }

//         .pulse-dot {
//           animation: pulseDot 1.5s infinite;
//         }

//         .word-reveal {
//           opacity: 0;
//           animation: wordReveal 0.8s ease forwards;
//         }

//         .word-reveal.delay-100 {
//           animation-delay: 0.1s;
//         }

//         .word-reveal.delay-200 {
//           animation-delay: 0.2s;
//         }

//         .word-reveal.delay-300 {
//           animation-delay: 0.3s;
//         }

//         .word-reveal.delay-400 {
//           animation-delay: 0.4s;
//         }

//         .word-reveal.delay-500 {
//           animation-delay: 0.5s;
//         }

//         .gradient-text {
//           background: linear-gradient(135deg, #00c896, #5fffd5);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .animate-slideLeft {
//           animation: slideLeft 1s ease;
//         }

//         .animate-slideRight {
//           animation: slideRight 1s ease;
//         }

//         .animate-fadeUp {
//           animation: fadeUp 1s ease forwards;
//         }

//         .animate-rotateBorder {
//           animation: rotateBorder 18s linear infinite;
//         }

//         .animate-floating {
//           animation: floating 5s ease-in-out infinite;
//         }

//         .animate-pulseSlow {
//           animation: pulse 5s ease infinite;
//         }

//         @keyframes wordReveal {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-70px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideRight {
//           from {
//             opacity: 0;
//             transform: translateX(70px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes rotateBorder {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes pulseDot {
//           0% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.5);
//             opacity: 0.5;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes floating {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-16px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }

//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.08);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }

//         @keyframes float1 {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-25px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }

//         @keyframes float2 {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(25px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
















"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0D0D] px-4 pt-[100px] md:pt-[120px] pb-8 md:pb-12"
    >
      {/* Animated Glow Blobs */}
      <div className="blob-glow blob1 absolute left-[-120px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]" />

      <div className="blob-glow blob2 absolute bottom-[-150px] right-[-150px] h-[600px] w-[600px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]" />

      <div className="blob-glow blob3 absolute left-[45%] top-[45%] h-[300px] w-[300px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid items-center gap-[40px] md:gap-[60px] grid-cols-1 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="animate-slideLeft text-center md:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-[10px] rounded-full border border-[rgba(0,200,150,0.35)] bg-[rgba(0,200,150,0.1)] px-[16px] md:px-[18px] py-[8px] md:py-[10px] backdrop-blur-md">
              <span className="pulse-dot h-2 w-2 rounded-full bg-[#00c896]" />

              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[3px] md:tracking-[4px] text-[#00c896]">
                Frontend Developer
              </span>
            </div>

            {/* Heading */}
            <h1
              className="mt-8 font-light leading-[0.98] tracking-[-2px] text-white"
              style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
            >
              <span data-animate className="word-reveal block">
                Hi, I&apos;m
              </span>

              <span data-animate className="word-reveal block delay-100">
                <span className="gradient-text">Adyasha</span>
              </span>

              <span
                data-animate
                className="word-reveal block delay-200 text-[#9ca3af]"
                style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
              >
                Creative Developer
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-7 max-w-[620px] font-light leading-[1.6] tracking-[-0.5px] text-[#9ca3af] mx-auto md:mx-0"
              style={{ fontSize: "clamp(14px, 2vw, 22px)" }}
            >
              <span data-animate className="word-reveal block delay-300">
                Building modern, responsive,
              </span>

              <span data-animate className="word-reveal block delay-400">
                and <span className="gradient-text">visually stunning</span>{" "}
                web experiences
              </span>
            </p>

            {/* Buttons */}
            <div className="mt-[36px] flex flex-wrap gap-[16px] justify-center md:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-[#00c896] to-[#00e0aa] px-[28px] py-[13px] text-[14px] font-semibold text-[#0d0d0d] shadow-[0_15px_35px_rgba(0,200,150,0.2)] transition-all duration-500 hover:-translate-y-[5px] hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(0,200,150,0.3)]"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[rgba(0,200,150,0.4)] px-[28px] py-[13px] text-[14px] font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:border-[#00c896] hover:bg-[rgba(0,200,150,0.08)]"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="mt-[50px] flex flex-wrap gap-[30px] md:gap-[40px] border-t border-[rgba(255,255,255,0.08)] pt-[30px] justify-center md:justify-start">
              {[
                ["3+", "Projects Completed"],
                ["1.5+", "Years Experience"],
                // ["100%", "Client Satisfaction"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className="animate-fadeUp"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <h3 className="text-[30px] font-bold text-[#00c896]">
                    {value}
                  </h3>

                  <p className="mt-[4px] text-[12px] tracking-[0.5px] text-[#9ca3af]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center animate-slideRight">
            {/* Rotating Border */}
            <div className="absolute h-[280px] w-[220px] md:h-[400px] md:w-[310px] lg:h-[500px] lg:w-[390px] animate-rotateBorder rounded-[40px] border-2 border-dashed border-[rgba(0,200,150,0.35)]" />

            {/* Glow */}
            <div className="absolute h-[220px] w-[220px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px] animate-pulseSlow rounded-full bg-[#00c896] opacity-[0.18] blur-[80px]" />

            {/* Image Card */}
            <div className="relative z-[5] h-[290px] w-[220px] md:h-[400px] md:w-[300px] lg:h-[470px] lg:w-[360px] overflow-hidden rounded-[30px] border border-[rgba(0,200,150,0.25)] bg-[#111111] shadow-[0_30px_70px_rgba(0,0,0,0.45)] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02]">
              <Image
                src="/Adya.jpg"
                alt="Adyasha Das"
                width={360}
                height={470}
                priority
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-3 -left-3 md:bottom-[-20px] md:left-[-20px] z-20 flex animate-floating items-center gap-[14px] rounded-[20px] border border-[rgba(0,200,150,0.2)] bg-[rgba(20,20,20,0.95)] px-[16px] md:px-[20px] py-[12px] md:py-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-[14px] bg-gradient-to-r from-[#00c896] to-[#00e0aa] text-[16px] md:text-[18px] font-bold text-[#0d0d0d]">
                ✦
              </div>

              <div>
                <h4 className="text-[12px] md:text-[13px] font-bold text-white">
                  Available for Work
                </h4>

                <p className="mt-[3px] text-[10px] md:text-[11px] text-[#9ca3af]">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .blob1 {
          animation: float1 8s ease-in-out infinite;
        }

        .blob2 {
          animation: float2 10s ease-in-out infinite;
        }

        .blob3 {
          animation: pulse 6s ease-in-out infinite;
        }

        .pulse-dot {
          animation: pulseDot 1.5s infinite;
        }

        .word-reveal {
          opacity: 0;
          animation: wordReveal 0.8s ease forwards;
        }

        .word-reveal.delay-100 {
          animation-delay: 0.1s;
        }

        .word-reveal.delay-200 {
          animation-delay: 0.2s;
        }

        .word-reveal.delay-300 {
          animation-delay: 0.3s;
        }

        .word-reveal.delay-400 {
          animation-delay: 0.4s;
        }

        .word-reveal.delay-500 {
          animation-delay: 0.5s;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00c896, #5fffd5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease;
        }

        .animate-slideRight {
          animation: slideRight 1s ease;
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-rotateBorder {
          animation: rotateBorder 18s linear infinite;
        }

        .animate-floating {
          animation: floating 5s ease-in-out infinite;
        }

        .animate-pulseSlow {
          animation: pulse 5s ease infinite;
        }

        @keyframes wordReveal {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateBorder {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseDot {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float1 {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes float2 {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(25px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
