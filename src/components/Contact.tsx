



// "use client";

// import {
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaArrowRight,
// } from "react-icons/fa";

// const contacts = [
//   {
//     icon: <FaEnvelope />,
//     label: "Email",
//     value: "adyashadas6797@gmail.com",
//   },

//   {
//     icon: <FaMapMarkerAlt />,
//     label: "Location",
//     value: "Bhubaneswar, India",
//   },
// ];

// const Contact = () => (
//   <section
//     id="contact"
//     className="relative overflow-hidden bg-[#0D0D0D] py-[130px]"
//   >
//     {/* BACKGROUND BLOBS */}
//     <div className="blob1 absolute -left-16 -top-10 h-[420px] w-[420px]" />

//     <div className="blob2 absolute -bottom-28 -right-20 h-[520px] w-[520px]" />

//     {/* NOISE */}
//     <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%270_0_256_256%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noise%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.85%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noise)%27/%3E%3C/svg%3E')]"></div>

//     <div className="section-container relative z-10 mx-auto max-w-7xl px-6">
//       {/* MAIN WRAPPER */}
//       <div className="contact-wrapper grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
//         {/* LEFT CONTENT */}
//         <div>
//           {/* BADGE */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400">
//             <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
//             Contact
//           </div>

//           {/* TITLE */}
//           <h2 className="mt-8 text-[40px] font-light leading-[0.95] tracking-[-2px] text-white md:text-[72px]">
//             Let’s Work
//             <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-100 bg-clip-text text-transparent">
//               Together
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="mt-7 max-w-[520px] text-[17px] leading-[1.9] text-neutral-400">
//             Available for freelance projects, frontend development, and
//             creative collaborations. Let’s create modern digital experiences
//             together.
//           </p>

//           {/* CONTACT LIST */}
//           <div className="mt-12 flex flex-col gap-5">
//             {contacts.map((c, i) => (
//               <div
//                 key={c.label}
//                 className="contact-card group"
//                 style={{
//                   animationDelay: `${i * 0.2}s`,
//                 }}
//               >
//                 {/* ICON */}
//                 <div className="icon-box">{c.icon}</div>

//                 {/* CONTENT */}
//                 <div className="flex-1">
//                   <p className="text-[13px] text-neutral-500">{c.label}</p>

//                   <p className="mt-1 text-[16px] font-medium text-white">
//                     {c.value}
//                   </p>
//                 </div>

//                 <FaArrowRight className="arrow-icon" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE CARD */}
//         <div className="relative">
//           <div className="glass-card">
//             <div className="absolute inset-0 rounded-[32px] border border-white/5"></div>

//             <div className="relative z-10">
//               <div className="mb-8 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400">
//                 Open For Work
//               </div>

//               <h3 className="text-[34px] font-light leading-tight text-white">
//                 Building modern frontend experiences with creativity and clean
//                 development.
//               </h3>

//               <p className="mt-6 text-[16px] leading-[1.9] text-neutral-400">
//                 Specialized in creating responsive web applications using
//                 React.js, Next.js, TypeScript, and Tailwind CSS with smooth
//                 interactions and premium UI design.
//               </p>

//               {/* STATS */}
//               <div className="mt-10 grid grid-cols-2 gap-5">
//                 <div className="stat-box">
//                   <h4>3+</h4>
//                   <p>Projects</p>
//                 </div>

//                 <div className="stat-box">
//                   <h4>1.5+</h4>
//                   <p>Years Experience</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* STYLES */}
//     <style jsx>{`
//       /* BLOBS */
//       .blob1,
//       .blob2 {
//         border-radius: 999px;
//         background: #00c896;
//         opacity: 0.08;
//         filter: blur(120px);
//       }

//       .blob1 {
//         animation: float1 8s ease-in-out infinite;
//       }

//       .blob2 {
//         animation: float2 10s ease-in-out infinite;
//       }

//       /* MAIN WRAPPER */
//       .contact-wrapper {
//         position: relative;
//         border-radius: 40px;
//         padding: 70px;
//         background: rgba(18, 18, 18, 0.72);
//         border: 1px solid rgba(0, 200, 150, 0.1);
//         backdrop-filter: blur(18px);
//         box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
//         overflow: hidden;
//       }

//       .contact-wrapper::before {
//         content: "";
//         position: absolute;
//         inset: 0;
//         background: radial-gradient(
//           circle at top left,
//           rgba(0, 200, 150, 0.08),
//           transparent 45%
//         );
//         pointer-events: none;
//       }

//       /* CONTACT CARD */
//       .contact-card {
//         position: relative;
//         display: flex;
//         align-items: center;
//         gap: 18px;
//         overflow: hidden;
//         border-radius: 24px;
//         border: 1px solid rgba(0, 200, 150, 0.1);
//         background: rgba(255, 255, 255, 0.02);
//         padding: 22px;
//         transition: all 0.5s ease;
//         animation: fadeUp 1s ease forwards;
//       }

//       .contact-card::before {
//         content: "";
//         position: absolute;
//         inset: 0;
//         background: linear-gradient(
//           135deg,
//           rgba(0, 200, 150, 0.12),
//           transparent 60%
//         );
//         opacity: 0;
//         transition: opacity 0.5s ease;
//       }

//       .contact-card:hover::before {
//         opacity: 1;
//       }

//       .contact-card:hover {
//         transform: translateY(-10px) scale(1.02);
//         border-color: rgba(0, 200, 150, 0.3);
//         box-shadow: 0 20px 45px rgba(0, 200, 150, 0.12);
//       }

//       /* ICON */
//       .icon-box {
//         width: 60px;
//         height: 60px;
//         flex-shrink: 0;
//         border-radius: 20px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background: rgba(0, 200, 150, 0.08);
//         border: 1px solid rgba(0, 200, 150, 0.18);
//         color: #00c896;
//         font-size: 22px;
//         transition: all 0.5s ease;
//       }

//       .contact-card:hover .icon-box {
//         background: #00c896;
//         color: #0d0d0d;
//         transform: rotate(8deg) scale(1.08);
//       }

//       /* ARROW */
//       .arrow-icon {
//         color: #00c896;
//         opacity: 0;
//         transform: translateX(-10px);
//         transition: all 0.4s ease;
//       }

//       .contact-card:hover .arrow-icon {
//         opacity: 1;
//         transform: translateX(0);
//       }

//       /* GLASS CARD */
//       .glass-card {
//         position: relative;
//         overflow: hidden;
//         border-radius: 32px;
//         padding: 42px;
//         background: rgba(255, 255, 255, 0.03);
//         border: 1px solid rgba(0, 200, 150, 0.12);
//         backdrop-filter: blur(18px);
//         box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
//         transition: all 0.5s ease;
//       }

//       .glass-card:hover {
//         transform: translateY(-10px);
//         border-color: rgba(0, 200, 150, 0.3);
//         box-shadow: 0 25px 60px rgba(0, 200, 150, 0.12);
//       }

//       /* STATS */
//       .stat-box {
//         border-radius: 24px;
//         border: 1px solid rgba(0, 200, 150, 0.12);
//         background: rgba(255, 255, 255, 0.02);
//         padding: 24px;
//         transition: all 0.4s ease;
//       }

//       .stat-box:hover {
//         transform: translateY(-6px);
//         border-color: rgba(0, 200, 150, 0.28);
//       }

//       .stat-box h4 {
//         font-size: 34px;
//         font-weight: 700;
//         color: #00c896;
//       }

//       .stat-box p {
//         margin-top: 8px;
//         color: #9ca3af;
//         font-size: 14px;
//       }

//       /* ANIMATIONS */
//       @keyframes fadeUp {
//         from {
//           opacity: 0;
//           transform: translateY(40px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }

//       @keyframes float1 {
//         0% {
//           transform: translateY(0px);
//         }
//         50% {
//           transform: translateY(-25px);
//         }
//         100% {
//           transform: translateY(0px);
//         }
//       }

//       @keyframes float2 {
//         0% {
//           transform: translateY(0px);
//         }
//         50% {
//           transform: translateY(25px);
//         }
//         100% {
//           transform: translateY(0px);
//         }
//       }

//       /* MOBILE */
//       @media (max-width: 1024px) {
//         .contact-wrapper {
//           padding: 42px 28px;
//         }
//       }

//       @media (max-width: 900px) {
//         .contact-wrapper {
//           grid-template-columns: 1fr;
//         }
//       }

//       @media (max-width: 768px) {
//         .glass-card {
//           padding: 28px;
//         }

//         .contact-card {
//           padding: 18px;
//         }

//         .icon-box {
//           width: 54px;
//           height: 54px;
//           font-size: 20px;
//         }
//       }
//     `}</style>
//   </section>
// );

// export default Contact;












"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "adyashadas6797@gmail.com",
    href: "mailto:adyashadas6797@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Bhubaneswar, Odisha, India",
    href: "https://maps.google.com/?q=Bhubaneswar,Odisha,India",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(
      "adyashadas6797@gmail.com"
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* GLOW */}
        <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[120px]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* TOP CONTENT */}
        <div className="max-w-3xl">
          {/* BADGE */}
          <div className="animate-fade inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-[10px] font-semibold uppercase tracking-[4px] text-emerald-400">
              Contact
            </span>
          </div>

          {/* HEADING */}
          <div className="mt-8 overflow-hidden">
            <h1 className="animate-title text-[42px] font-extralight leading-[0.9] tracking-[-2px] text-white sm:text-[58px] md:text-[80px] lg:text-[95px]">
              Let’s Talk
            </h1>

            <h1 className="animate-title delay-200 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-100 bg-clip-text text-[42px] font-extralight leading-[0.9] tracking-[-2px] text-transparent sm:text-[58px] md:text-[80px] lg:text-[95px]">
              Together
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="animate-fade delay-300 mt-8 max-w-2xl text-[16px] leading-[2.1] text-neutral-400 sm:text-[17px] md:text-[18px]">
            Available for freelance projects, frontend development,
            and creative collaborations to craft modern digital
            experiences with clean UI and smooth interaction.
          </p>
        </div>

        {/* CONTACT LIST */}
        <div className="mt-20 flex flex-col">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="group animate-line flex flex-col gap-5 border-b border-white/10 py-7 transition-all duration-500 hover:border-emerald-400/30 sm:flex-row sm:items-center sm:justify-between"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* LEFT */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/5 text-xl text-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-black">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-[10px] uppercase tracking-[4px] text-neutral-500">
                    {item.label}
                  </p>

                  <h3 className="mt-2 break-all text-[16px] font-light text-white transition-all duration-500 group-hover:text-emerald-300 sm:text-[18px] md:text-[22px]">
                    {item.value}
                  </h3>
                </div>
              </a>

              {/* RIGHT SIDE */}
              {item.label === "Email" ? (
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-sm text-emerald-400 transition-all duration-300 hover:text-emerald-300"
                >
                  {copied ? (
                    <>
                      <FaCheck size={14} />
                      Copied
                    </>
                  ) : (
                    <>
                      <FaCopy size={14} />
                      
                    </>
                  )}
                </button>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald-400 transition-all duration-300 hover:text-emerald-300"
                >
                  <FaMapMarkerAlt size={16} />
                  
                </a>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="animate-fade delay-500 mt-14">
          <p className="text-[10px] uppercase tracking-[5px] text-neutral-600 sm:text-xs">
            Frontend Developer • UI Designer • Freelancer
          </p>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-title {
          animation: titleReveal 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
          opacity: 0;
        }

        .animate-fade {
          animation: fadeUp 1s ease forwards;
          opacity: 0;
        }

        .animate-line {
          animation: lineReveal 1s ease forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineReveal {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;


