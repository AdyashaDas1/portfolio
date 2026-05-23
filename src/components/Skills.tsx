

// "use client";

// const skills = [
//   {
//     title: "React & Next.js",
//     image:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   },
//   {
//     title: "TypeScript",
//     image:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//   },
//   {
//     title: "Responsive Design",
//     image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
//   },
//   {
//     title: "UI/UX Design",
//     image:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//   },
//   // {
//   //   title: "API Integration",
//   //   image:
//   //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   // },
//   {
//     title: "Digital Marketing",
//     image: "https://cdn-icons-png.flaticon.com/512/5968/5968874.png",
//   },
//   {
//     title: "Tailwind CSS",
//     image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
//   },
//   {
//     title: "Redux",
//     image:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
//   },
//   // {
//   //   title: "Web Performance",
//   //   image: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png",
//   // },
//   // {
//   //   title: "Git & Version Control",
//   //   image:
//   //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//   // },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-[#050505] py-[120px]"
//     >
//       {/* Background Blur */}
//       <div className="absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[120px]" />

//       <div className="absolute -bottom-32 -right-24 h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[140px]" />

//       {/* Noise Overlay */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%270_0_256_256%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noise%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.85%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noise)%27/%3E%3C/svg%3E')]"></div>

//       <div className="relative z-10">
//         {/* Heading */}
//         <div className="mx-auto mb-20 max-w-7xl px-6">
//           {/* Pill */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400">
//   <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
//   Expertise
// </div>

//           {/* Title */}
//           <h2 className="mt-6 text-[34px] font-light leading-none tracking-[-1px] text-white md:text-[58px]">
//             My{" "}
//             <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-100 bg-clip-text text-transparent">
//               Skills
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="mt-6 max-w-2xl text-[17px] leading-[1.9] text-neutral-400">
//             Crafting immersive digital experiences with modern frontend
//             technologies, responsive interfaces, scalable architecture, and
//             smooth user interactions.
//           </p>
//         </div>

//         {/* <div className="relative z-10 overflow-hidden"> */}
//         <div className="relative z-10 mx-auto max-w-7xl overflow-hidden px-6">
//           <div className="marquee flex w-max items-center gap-20">
//             {[...skills, ...skills].map((skill, index) => (
//               <div
//                 key={index}
//                 className="group flex flex-shrink-0 items-center gap-4 transition-all duration-300 hover:-translate-y-1"
//               >
//                 {/* Logo */}
//                 <img
//                   src={skill.image}
//                   alt={skill.title}
//                   className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animation */}
//       <style jsx>{`
//         .marquee {
//           animation: marquee 28s linear infinite;
//         }

//         .marquee:hover {
//           animation-play-state: paused;
//         }

//         @keyframes marquee {
//           from {
//             transform: translateX(0%);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Skills;










"use client";

const skills = [
  {
    title: "React ",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
  title: "Next.js",
  image: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
},
  {
    title: "UI/UX Design",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  
  {
    title: "Digital Marketing",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968874.png",
  },
  {
    title: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    title: "Redux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },

];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] py-[120px]"
    >
      {/* Background Blur */}
      <div className="absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="absolute -bottom-32 -right-24 h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[140px]" />

      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%270_0_256_256%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noise%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.85%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noise)%27/%3E%3C/svg%3E')]"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-7xl px-6">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400">
  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
  Expertise
</div>

          {/* Title */}
          <h2 className="mt-6 text-[34px] font-light leading-none tracking-[-1px] text-white md:text-[86px]">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-100 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.9] text-neutral-400">
            Crafting immersive digital experiences with modern frontend
            technologies, responsive interfaces, scalable architecture, and
            smooth user interactions.
          </p>
        </div>

        {/* <div className="relative z-10 overflow-hidden"> */}
        <div className="relative z-10 mx-auto max-w-7xl overflow-hidden px-6">
          <div className="marquee flex w-max items-center gap-20">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="group flex flex-shrink-0 items-center gap-4 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Logo */}
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .marquee {
          animation: marquee 28s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;

