
// "use client";

// import {
//   FaEnvelope,
 
//   FaMapMarkerAlt,
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
//     style={{
//       padding: "130px 0",
//       background: "#0D0D0D",
//       position: "relative",
//       overflow: "hidden",
//     }}
//   >
//     {/* BACKGROUND BLOBS */}
//     <div
//       className="blob1"
//       style={{
//         position: "absolute",
//         width: 420,
//         height: 420,
//         top: -50,
//         left: -60,
//       }}
//     />

//     <div
//       className="blob2"
//       style={{
//         position: "absolute",
//         width: 520,
//         height: 520,
//         bottom: -120,
//         right: -100,
//       }}
//     />

//     <div
//       className="section-container"
//       style={{
//         position: "relative",
//         zIndex: 10,
//       }}
//     >
//       {/* OUTER WRAPPER */}
//       <div className="contact-wrapper">
//         <div className="contact-grid">
//           {/* LEFT SIDE */}
//           <div className="left-side">
//             <div className="section-pill">Contact</div>

//             <h2 className="section-title">
//               Let’s Work
//               <span>Together</span>
//             </h2>

//             <p className="section-description">
//               Available for freelance projects, frontend development, and
//               creative collaborations. Let’s create something amazing together.
//             </p>

//             {/* CONTACT CARDS */}
//             <div className="contact-list">
//               {contacts.map((c, i) => (
//                 <div
//                   key={c.label}
//                   className="contact-card"
//                   style={{
//                     animationDelay: `${i * 0.2}s`,
//                   }}
//                 >
//                   <div className="icon-box">{c.icon}</div>

//                   <div>
//                     <p className="contact-label">{c.label}</p>
//                     <p className="contact-value">{c.value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
   
//         </div>
//       </div>
//     </div>

//     {/* CSS */}
//     <style jsx>{`
//       /* BLOBS */
//       .blob1,
//       .blob2 {
//         border-radius: 50%;
//         background: #00c896;
//         opacity: 0.1;
//         filter: blur(120px);
//       }

//       .blob1 {
//         animation: float1 8s ease-in-out infinite;
//       }

//       .blob2 {
//         animation: float2 10s ease-in-out infinite;
//       }

//       /* WRAPPER */
//       .contact-wrapper {
//         background: rgba(18, 18, 18, 0.96);
//         border: 1px solid rgba(0, 200, 150, 0.12);
//         border-radius: 40px;
//         padding: 60px;
//         backdrop-filter: blur(14px);
//         box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
//       }

//       .contact-grid {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         gap: 60px;
//         align-items: flex-start;
//       }

//       /* SECTION PILL */
//       .section-pill {
//         display: inline-flex;
//         justify-content: center;
//         align-items: center;
//         padding: 10px 20px;
//         border-radius: 999px;
//         background: rgba(0, 200, 150, 0.08);
//         border: 1px solid rgba(0, 200, 150, 0.25);
//         color: #00c896;
//         font-size: 13px;
//         font-weight: 700;
//         letter-spacing: 1px;
//         text-transform: uppercase;
//       }

//       /* TITLE */
//       .section-title {
//         font-size: clamp(42px, 5vw, 64px);
//         font-weight: 900;
//         line-height: 1.1;
//         color: #ffffff;
//         margin-top: 20px;
//         animation: fadeUp 1s ease;
//       }

//       .section-title span {
//         display: block;
//         color: #00c896;
//       }

//       /* DESCRIPTION */
//       .section-description {
//         font-size: 17px;
//         color: #9ca3af;
//         line-height: 1.9;
//         margin-top: 26px;
//         max-width: 450px;
//         animation: fadeUp 1.2s ease;
//       }

//       /* CONTACT LIST */
//       .contact-list {
//         margin-top: 40px;
//         display: flex;
//         flex-direction: column;
//         gap: 18px;
//       }

//       /* CONTACT CARD */
//       .contact-card {
//         display: flex;
//         align-items: center;
//         gap: 20px;
//         background: rgba(24, 24, 24, 0.95);
//         border: 1px solid rgba(0, 200, 150, 0.12);
//         border-radius: 24px;
//         padding: 20px 24px;
//         transition: all 0.5s ease;
//         animation: fadeUp 1s ease forwards;
//         position: relative;
//         overflow: hidden;
//       }

//       .contact-card::before {
//         content: "";
//         position: absolute;
//         inset: 0;
//         background: radial-gradient(
//           circle at top left,
//           rgba(0, 200, 150, 0.12),
//           transparent 65%
//         );
//         opacity: 0;
//         transition: opacity 0.5s ease;
//       }

//       .contact-card:hover::before {
//         opacity: 1;
//       }

//       .contact-card:hover {
//         transform: translateY(-8px) scale(1.02);
//         border-color: rgba(0, 200, 150, 0.35);
//         box-shadow: 0 20px 45px rgba(0, 200, 150, 0.12);
//       }

//       /* ICON */
//       .icon-box {
//         width: 58px;
//         height: 58px;
//         border-radius: 18px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background: rgba(0, 200, 150, 0.08);
//         border: 1px solid rgba(0, 200, 150, 0.2);
//         color: #00c896;
//         font-size: 22px;
//         flex-shrink: 0;
//         transition: all 0.5s ease;
//       }

//       .contact-card:hover .icon-box {
//         background: #00c896;
//         color: #0d0d0d;
//         transform: rotate(10deg) scale(1.08);
//       }

//       .contact-label {
//         font-size: 13px;
//         color: #9ca3af;
//       }

//       .contact-value {
//         font-size: 16px;
//         font-weight: 600;
//         color: #ffffff;
//         margin-top: 4px;
//       }

//       /* FORM */
//       .form-wrapper {
//         background: rgba(24, 24, 24, 0.95);
//         border: 1px solid rgba(0, 200, 150, 0.12);
//         border-radius: 32px;
//         padding: 40px;
//         box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
//         animation: fadeUp 1s ease;
//       }

//       .form-group {
//         display: flex;
//         flex-direction: column;
//         margin-bottom: 24px;
//       }

//       .form-group label {
//         font-size: 13px;
//         font-weight: 600;
//         color: #d1d5db;
//         margin-bottom: 10px;
//       }

//       /* INPUT */
//       .field {
//         width: 100%;
//         padding: 16px 18px;
//         border-radius: 18px;
//         border: 1px solid rgba(0, 200, 150, 0.12);
//         background: #111111;
//         color: #ffffff;
//         font-size: 15px;
//         outline: none;
//         transition: all 0.4s ease;
//       }

//       .field::placeholder {
//         color: #6b7280;
//       }

//       .field:focus {
//         border-color: #00c896;
//         box-shadow: 0 0 0 4px rgba(0, 200, 150, 0.12);
//         transform: translateY(-2px);
//       }

//       textarea.field {
//         resize: none;
//       }

//       /* BUTTON */
//       .send-btn {
//         width: 100%;
//         padding: 16px;
//         border: none;
//         border-radius: 999px;
//         background: linear-gradient(135deg, #00c896, #00e0aa);
//         color: #0d0d0d;
//         font-size: 15px;
//         font-weight: 700;
//         cursor: pointer;
//         transition: all 0.5s ease;
//         box-shadow: 0 12px 30px rgba(0, 200, 150, 0.18);
//       }

//       .send-btn:hover {
//         transform: translateY(-4px) scale(1.02);
//         box-shadow: 0 18px 40px rgba(0, 200, 150, 0.25);
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
//       @media (max-width: 900px) {
//         .contact-grid {
//           grid-template-columns: 1fr;
//         }

//         .contact-wrapper {
//           padding: 40px 28px;
//         }
//       }

//       @media (max-width: 768px) {
//         .form-wrapper {
//           padding: 28px;
//         }

//         .section-description {
//           font-size: 15px;
//         }

//         .contact-card {
//           padding: 18px;
//         }

//         .icon-box {
//           width: 52px;
//           height: 52px;
//           font-size: 20px;
//         }
//       }
//     `}</style>
//   </section>
// );

// export default Contact;





"use client";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "adyashadas6797@gmail.com",
  },

  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Bhubaneswar, India",
  },
];

const Contact = () => (
  <section
    id="contact"
    className="relative overflow-hidden bg-[#0D0D0D] py-[130px]"
  >
    {/* BACKGROUND BLOBS */}
    <div className="blob1 absolute -left-16 -top-10 h-[420px] w-[420px]" />

    <div className="blob2 absolute -bottom-28 -right-20 h-[520px] w-[520px]" />

    {/* NOISE */}
    <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%270_0_256_256%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noise%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.85%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noise)%27/%3E%3C/svg%3E')]"></div>

    <div className="section-container relative z-10 mx-auto max-w-7xl px-6">
      {/* MAIN WRAPPER */}
      <div className="contact-wrapper grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT CONTENT */}
        <div>
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            Contact
          </div>

          {/* TITLE */}
          <h2 className="mt-8 text-[40px] font-light leading-[0.95] tracking-[-2px] text-white md:text-[72px]">
            Let’s Work
            <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-100 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[520px] text-[17px] leading-[1.9] text-neutral-400">
            Available for freelance projects, frontend development, and
            creative collaborations. Let’s create modern digital experiences
            together.
          </p>

          {/* CONTACT LIST */}
          <div className="mt-12 flex flex-col gap-5">
            {contacts.map((c, i) => (
              <div
                key={c.label}
                className="contact-card group"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {/* ICON */}
                <div className="icon-box">{c.icon}</div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-[13px] text-neutral-500">{c.label}</p>

                  <p className="mt-1 text-[16px] font-medium text-white">
                    {c.value}
                  </p>
                </div>

                <FaArrowRight className="arrow-icon" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="relative">
          <div className="glass-card">
            <div className="absolute inset-0 rounded-[32px] border border-white/5"></div>

            <div className="relative z-10">
              <div className="mb-8 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400">
                Open For Work
              </div>

              <h3 className="text-[34px] font-light leading-tight text-white">
                Building modern frontend experiences with creativity and clean
                development.
              </h3>

              <p className="mt-6 text-[16px] leading-[1.9] text-neutral-400">
                Specialized in creating responsive web applications using
                React.js, Next.js, TypeScript, and Tailwind CSS with smooth
                interactions and premium UI design.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="stat-box">
                  <h4>3+</h4>
                  <p>Projects</p>
                </div>

                <div className="stat-box">
                  <h4>1.5+</h4>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* STYLES */}
    <style jsx>{`
      /* BLOBS */
      .blob1,
      .blob2 {
        border-radius: 999px;
        background: #00c896;
        opacity: 0.08;
        filter: blur(120px);
      }

      .blob1 {
        animation: float1 8s ease-in-out infinite;
      }

      .blob2 {
        animation: float2 10s ease-in-out infinite;
      }

      /* MAIN WRAPPER */
      .contact-wrapper {
        position: relative;
        border-radius: 40px;
        padding: 70px;
        background: rgba(18, 18, 18, 0.72);
        border: 1px solid rgba(0, 200, 150, 0.1);
        backdrop-filter: blur(18px);
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
        overflow: hidden;
      }

      .contact-wrapper::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(
          circle at top left,
          rgba(0, 200, 150, 0.08),
          transparent 45%
        );
        pointer-events: none;
      }

      /* CONTACT CARD */
      .contact-card {
        position: relative;
        display: flex;
        align-items: center;
        gap: 18px;
        overflow: hidden;
        border-radius: 24px;
        border: 1px solid rgba(0, 200, 150, 0.1);
        background: rgba(255, 255, 255, 0.02);
        padding: 22px;
        transition: all 0.5s ease;
        animation: fadeUp 1s ease forwards;
      }

      .contact-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(0, 200, 150, 0.12),
          transparent 60%
        );
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      .contact-card:hover::before {
        opacity: 1;
      }

      .contact-card:hover {
        transform: translateY(-10px) scale(1.02);
        border-color: rgba(0, 200, 150, 0.3);
        box-shadow: 0 20px 45px rgba(0, 200, 150, 0.12);
      }

      /* ICON */
      .icon-box {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 200, 150, 0.08);
        border: 1px solid rgba(0, 200, 150, 0.18);
        color: #00c896;
        font-size: 22px;
        transition: all 0.5s ease;
      }

      .contact-card:hover .icon-box {
        background: #00c896;
        color: #0d0d0d;
        transform: rotate(8deg) scale(1.08);
      }

      /* ARROW */
      .arrow-icon {
        color: #00c896;
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.4s ease;
      }

      .contact-card:hover .arrow-icon {
        opacity: 1;
        transform: translateX(0);
      }

      /* GLASS CARD */
      .glass-card {
        position: relative;
        overflow: hidden;
        border-radius: 32px;
        padding: 42px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(0, 200, 150, 0.12);
        backdrop-filter: blur(18px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        transition: all 0.5s ease;
      }

      .glass-card:hover {
        transform: translateY(-10px);
        border-color: rgba(0, 200, 150, 0.3);
        box-shadow: 0 25px 60px rgba(0, 200, 150, 0.12);
      }

      /* STATS */
      .stat-box {
        border-radius: 24px;
        border: 1px solid rgba(0, 200, 150, 0.12);
        background: rgba(255, 255, 255, 0.02);
        padding: 24px;
        transition: all 0.4s ease;
      }

      .stat-box:hover {
        transform: translateY(-6px);
        border-color: rgba(0, 200, 150, 0.28);
      }

      .stat-box h4 {
        font-size: 34px;
        font-weight: 700;
        color: #00c896;
      }

      .stat-box p {
        margin-top: 8px;
        color: #9ca3af;
        font-size: 14px;
      }

      /* ANIMATIONS */
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

      /* MOBILE */
      @media (max-width: 1024px) {
        .contact-wrapper {
          padding: 42px 28px;
        }
      }

      @media (max-width: 900px) {
        .contact-wrapper {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 768px) {
        .glass-card {
          padding: 28px;
        }

        .contact-card {
          padding: 18px;
        }

        .icon-box {
          width: 54px;
          height: 54px;
          font-size: 20px;
        }
      }
    `}</style>
  </section>
);

export default Contact;