module.exports = [
"[project]/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
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
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "jsx-86a8e822186b99fe" + " " + "relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0D0D] px-4 pt-[100px] md:pt-[120px] pb-8 md:pb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-86a8e822186b99fe" + " " + "blob-glow blob1 absolute left-[-120px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-86a8e822186b99fe" + " " + "blob-glow blob2 absolute bottom-[-150px] right-[-150px] h-[600px] w-[600px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-86a8e822186b99fe" + " " + "blob-glow blob3 absolute left-[45%] top-[45%] h-[300px] w-[300px] rounded-full bg-[#00c896] opacity-[0.12] blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-86a8e822186b99fe" + " " + "relative z-10 w-full max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-86a8e822186b99fe" + " " + "grid items-center gap-[40px] md:gap-[60px] grid-cols-1 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-86a8e822186b99fe" + " " + "animate-slideLeft text-center md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86a8e822186b99fe" + " " + "mb-6 inline-flex items-center gap-[10px] rounded-full border border-[rgba(0,200,150,0.35)] bg-[rgba(0,200,150,0.1)] px-[16px] md:px-[18px] py-[8px] md:py-[10px] backdrop-blur-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-86a8e822186b99fe" + " " + "pulse-dot h-2 w-2 rounded-full bg-[#00c896]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-86a8e822186b99fe" + " " + "text-[10px] md:text-[11px] font-semibold uppercase tracking-[3px] md:tracking-[4px] text-[#00c896]",
                                            children: "Frontend Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: "clamp(36px, 6vw, 80px)"
                                    },
                                    className: "jsx-86a8e822186b99fe" + " " + "mt-8 font-light leading-[0.98] tracking-[-2px] text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-animate": true,
                                            className: "jsx-86a8e822186b99fe" + " " + "word-reveal block",
                                            children: "Hi, I'm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-animate": true,
                                            className: "jsx-86a8e822186b99fe" + " " + "word-reveal block delay-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-86a8e822186b99fe" + " " + "gradient-text",
                                                children: "Adyasha"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-animate": true,
                                            style: {
                                                fontSize: "clamp(30px, 4vw, 56px)"
                                            },
                                            className: "jsx-86a8e822186b99fe" + " " + "word-reveal block delay-200 text-[#9ca3af]",
                                            children: "Creative Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "clamp(14px, 2vw, 22px)"
                                    },
                                    className: "jsx-86a8e822186b99fe" + " " + "mt-7 max-w-[620px] font-light leading-[1.6] tracking-[-0.5px] text-[#9ca3af] mx-auto md:mx-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-animate": true,
                                            className: "jsx-86a8e822186b99fe" + " " + "word-reveal block delay-300",
                                            children: "Building modern, responsive,"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-animate": true,
                                            className: "jsx-86a8e822186b99fe" + " " + "word-reveal block delay-400",
                                            children: [
                                                "and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-86a8e822186b99fe" + " " + "gradient-text",
                                                    children: "visually stunning"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                "web experiences"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86a8e822186b99fe" + " " + "mt-[36px] flex flex-wrap gap-[16px] justify-center md:justify-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#projects",
                                            className: "jsx-86a8e822186b99fe" + " " + "rounded-full bg-gradient-to-r from-[#00c896] to-[#00e0aa] px-[28px] py-[13px] text-[14px] font-semibold text-[#0d0d0d] shadow-[0_15px_35px_rgba(0,200,150,0.2)] transition-all duration-500 hover:-translate-y-[5px] hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(0,200,150,0.3)]",
                                            children: "View My Work"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "jsx-86a8e822186b99fe" + " " + "rounded-full border border-[rgba(0,200,150,0.4)] px-[28px] py-[13px] text-[14px] font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:border-[#00c896] hover:bg-[rgba(0,200,150,0.08)]",
                                            children: "Get In Touch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86a8e822186b99fe" + " " + "mt-[50px] flex flex-wrap gap-[30px] md:gap-[40px] border-t border-[rgba(255,255,255,0.08)] pt-[30px] justify-center md:justify-start",
                                    children: [
                                        [
                                            "3+",
                                            "Projects Completed"
                                        ],
                                        [
                                            "1.5+",
                                            "Years Experience"
                                        ]
                                    ].map(([value, label], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: `${index * 0.2}s`
                                            },
                                            className: "jsx-86a8e822186b99fe" + " " + "animate-fadeUp",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-86a8e822186b99fe" + " " + "text-[30px] font-bold text-[#00c896]",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-86a8e822186b99fe" + " " + "mt-[4px] text-[12px] tracking-[0.5px] text-[#9ca3af]",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-86a8e822186b99fe" + " " + "relative flex items-center justify-center animate-slideRight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86a8e822186b99fe" + " " + "absolute h-[280px] w-[220px] md:h-[400px] md:w-[310px] lg:h-[500px] lg:w-[390px] animate-rotateBorder rounded-[40px] border-2 border-dashed border-[rgba(0,200,150,0.35)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86a8e822186b99fe" + " " + "absolute h-[220px] w-[220px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px] animate-pulseSlow rounded-full bg-[#00c896] opacity-[0.18] blur-[80px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86a8e822186b99fe" + " " + "relative z-[5] h-[290px] w-[220px] md:h-[400px] md:w-[300px] lg:h-[470px] lg:w-[360px] overflow-hidden rounded-[30px] border border-[rgba(0,200,150,0.25)] bg-[#111111] shadow-[0_30px_70px_rgba(0,0,0,0.45)] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Adya.jpg",
                                        alt: "Adyasha Das",
                                        width: 360,
                                        height: 470,
                                        priority: true,
                                        className: "h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86a8e822186b99fe" + " " + "absolute -bottom-3 -left-3 md:bottom-[-20px] md:left-[-20px] z-20 flex animate-floating items-center gap-[14px] rounded-[20px] border border-[rgba(0,200,150,0.2)] bg-[rgba(20,20,20,0.95)] px-[16px] md:px-[20px] py-[12px] md:py-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-86a8e822186b99fe" + " " + "flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-[14px] bg-gradient-to-r from-[#00c896] to-[#00e0aa] text-[16px] md:text-[18px] font-bold text-[#0d0d0d]",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 498,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-86a8e822186b99fe",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-86a8e822186b99fe" + " " + "text-[12px] md:text-[13px] font-bold text-white",
                                                    children: "Available for Work"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-86a8e822186b99fe" + " " + "mt-[3px] text-[10px] md:text-[11px] text-[#9ca3af]",
                                                    children: "Open to opportunities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "86a8e822186b99fe",
                children: ".blob1.jsx-86a8e822186b99fe{animation:8s ease-in-out infinite float1}.blob2.jsx-86a8e822186b99fe{animation:10s ease-in-out infinite float2}.blob3.jsx-86a8e822186b99fe{animation:6s ease-in-out infinite pulse}.pulse-dot.jsx-86a8e822186b99fe{animation:1.5s infinite pulseDot}.word-reveal.jsx-86a8e822186b99fe{opacity:0;animation:.8s forwards wordReveal}.word-reveal.delay-100.jsx-86a8e822186b99fe{animation-delay:.1s}.word-reveal.delay-200.jsx-86a8e822186b99fe{animation-delay:.2s}.word-reveal.delay-300.jsx-86a8e822186b99fe{animation-delay:.3s}.word-reveal.delay-400.jsx-86a8e822186b99fe{animation-delay:.4s}.word-reveal.delay-500.jsx-86a8e822186b99fe{animation-delay:.5s}.gradient-text.jsx-86a8e822186b99fe{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#00c896,#5fffd5);-webkit-background-clip:text;background-clip:text}.animate-slideLeft.jsx-86a8e822186b99fe{animation:1s slideLeft}.animate-slideRight.jsx-86a8e822186b99fe{animation:1s slideRight}.animate-fadeUp.jsx-86a8e822186b99fe{animation:1s forwards fadeUp}.animate-rotateBorder.jsx-86a8e822186b99fe{animation:18s linear infinite rotateBorder}.animate-floating.jsx-86a8e822186b99fe{animation:5s ease-in-out infinite floating}.animate-pulseSlow.jsx-86a8e822186b99fe{animation:5s infinite pulse}@keyframes wordReveal{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes slideLeft{0%{opacity:0;transform:translate(-70px)}to{opacity:1;transform:translate(0)}}@keyframes slideRight{0%{opacity:0;transform:translate(70px)}to{opacity:1;transform:translate(0)}}@keyframes fadeUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes rotateBorder{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pulseDot{0%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.5)}to{opacity:1;transform:scale(1)}}@keyframes floating{0%{transform:translateY(0)}50%{transform:translateY(-16px)}to{transform:translateY(0)}}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.08)}to{transform:scale(1)}}@keyframes float1{0%{transform:translateY(0)}50%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes float2{0%{transform:translateY(0)}50%{transform:translateY(25px)}to{transform:translateY(0)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 372,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/src/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const About = ()=>{
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -80px 0px",
            threshold: [
                0,
                0.1,
                0.2,
                0.3,
                0.5
            ]
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, observerOptions);
        const targets = sectionRef.current?.querySelectorAll("[data-animate]");
        targets?.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "about",
        className: "jsx-cbf06c6327443f0" + " " + "about-section relative overflow-hidden bg-[#050505] py-24 lg:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cbf06c6327443f0" + " " + "orb orb-tl"
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cbf06c6327443f0" + " " + "orb orb-br"
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cbf06c6327443f0" + " " + "orb orb-center"
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cbf06c6327443f0" + " " + "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cbf06c6327443f0" + " " + "grid-lines absolute inset-0 opacity-[0.025]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-cbf06c6327443f0" + " " + "grid h-full w-full grid-cols-12",
                    children: Array.from({
                        length: 12
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-cbf06c6327443f0" + " " + "border-r border-white"
                        }, i, false, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cbf06c6327443f0" + " " + "scan-line"
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cbf06c6327443f0" + " " + "relative z-10 mx-auto w-[92%] max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cbf06c6327443f0" + " " + "flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cbf06c6327443f0" + " " + "max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-animate": true,
                                        className: "jsx-cbf06c6327443f0" + " " + "badge inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-cbf06c6327443f0" + " " + "badge-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "About Me"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: "clamp(42px, 7vw, 88px)"
                                        },
                                        className: "jsx-cbf06c6327443f0" + " " + "mt-8 font-light leading-[0.98] tracking-[-2px] text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-animate": true,
                                                className: "jsx-cbf06c6327443f0" + " " + "word-reveal block",
                                                children: "Creating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-animate": true,
                                                className: "jsx-cbf06c6327443f0" + " " + "word-reveal block delay-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-cbf06c6327443f0" + " " + "gradient-text",
                                                    children: "modern digital"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-animate": true,
                                                style: {
                                                    fontSize: "clamp(30px, 4vw, 56px)"
                                                },
                                                className: "jsx-cbf06c6327443f0" + " " + "word-reveal block delay-200 text-zinc-600",
                                                children: "experiences"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-animate": true,
                                className: "jsx-cbf06c6327443f0" + " " + "slide-right max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-cbf06c6327443f0" + " " + "description-card rounded-2xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-cbf06c6327443f0" + " " + "text-[16px] leading-8 text-zinc-400",
                                            children: "I design and develop elegant frontend websites with clean layouts, smooth animations, and immersive user experiences."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-cbf06c6327443f0" + " " + "mt-6 h-px w-full bg-gradient-to-r from-emerald-400/40 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-cbf06c6327443f0" + " " + "mt-4 text-[11px] uppercase tracking-[3px] text-emerald-400/60",
                                            children: "Available for projects"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-animate": true,
                        className: "jsx-cbf06c6327443f0" + " " + "divider-reveal mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-cbf06c6327443f0" + " " + "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-cbf06c6327443f0" + " " + "h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-cbf06c6327443f0" + " " + "text-[11px] uppercase tracking-[4px] text-zinc-600",
                                    children: "crafting since 2020"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-cbf06c6327443f0" + " " + "h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cbf06c6327443f0" + " " + "mt-20 grid grid-cols-1 gap-14 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cbf06c6327443f0" + " " + "lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cbf06c6327443f0" + " " + "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            "data-animate": true,
                                            style: {
                                                fontSize: "clamp(48px, 7vw, 92px)"
                                            },
                                            className: "jsx-cbf06c6327443f0" + " " + "big-reveal font-black leading-[0.92] text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-cbf06c6327443f0" + " " + "block",
                                                    children: "Frontend"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-cbf06c6327443f0" + " " + "block text-stroke",
                                                    children: "Developer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cbf06c6327443f0" + " " + "mt-10 flex flex-wrap gap-3",
                                        children: [
                                            "React",
                                            "Next.js",
                                            "Tailwind",
                                            "TypeScript",
                                            "Redux",
                                            "Framer Motion"
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-animate": true,
                                                style: {
                                                    animationDelay: `${i * 80}ms`
                                                },
                                                className: "jsx-cbf06c6327443f0" + " " + "tech-tag",
                                                children: item
                                            }, item, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cbf06c6327443f0" + " " + "mt-12 space-y-5",
                                        children: [
                                            {
                                                label: "UI/UX Design",
                                                pct: 92
                                            },
                                            {
                                                label: "React / Next.js",
                                                pct: 96
                                            },
                                            {
                                                label: "Animation & Motion",
                                                pct: 88
                                            }
                                        ].map(({ label, pct }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-animate": true,
                                                className: "jsx-cbf06c6327443f0" + " " + `progress-row delay-${i * 100}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cbf06c6327443f0" + " " + "mb-2 flex justify-between text-[11px] uppercase tracking-[2px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-cbf06c6327443f0" + " " + "text-zinc-400",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/About.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-cbf06c6327443f0" + " " + "text-emerald-400",
                                                                children: [
                                                                    pct,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/About.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-cbf06c6327443f0" + " " + "h-[2px] w-full overflow-hidden rounded-full bg-white/5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                "--target-width": `${pct}%`
                                                            },
                                                            className: "jsx-cbf06c6327443f0" + " " + "progress-bar h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/About.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 3
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 16
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cbf06c6327443f0" + " " + "flex flex-col justify-between gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cbf06c6327443f0" + " " + "space-y-4",
                                        children: [
                                            {
                                                num: "3+",
                                                label: "Projects Shipped"
                                            },
                                            {
                                                num: "100%",
                                                label: "Creativity"
                                            },
                                            {
                                                num: "1.5+",
                                                label: "Years Experience"
                                            }
                                        ].map(({ num, label }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-animate": true,
                                                className: "jsx-cbf06c6327443f0" + " " + `stat-card delay-${i * 150}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-cbf06c6327443f0" + " " + "stat-inner rounded-xl border border-white/5 bg-white/[0.02] p-5 transition duration-500 hover:border-emerald-400/20 hover:bg-emerald-400/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-cbf06c6327443f0" + " " + "stat-num text-[40px] font-black",
                                                            children: num
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/About.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-cbf06c6327443f0" + " " + "mt-1 text-[11px] uppercase tracking-[3px] text-zinc-500",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/About.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, label, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-animate": true,
                                        className: "jsx-cbf06c6327443f0" + " " + "slide-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#contact",
                                                className: "jsx-cbf06c6327443f0" + " " + "cta-btn group inline-flex w-full items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-6 py-5 text-[12px] font-semibold uppercase tracking-[3px] text-white transition duration-500 hover:border-emerald-400/60 hover:bg-emerald-400/10",
                                                children: [
                                                    "Let's Connect",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-cbf06c6327443f0" + " " + "cta-arrow flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 text-emerald-400 transition duration-300 group-hover:translate-x-1 group-hover:border-emerald-400",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cbf06c6327443f0" + " " + "mt-4 flex items-center gap-2 px-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-cbf06c6327443f0" + " " + "pulse-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-cbf06c6327443f0" + " " + "text-[12px] text-zinc-500",
                                                        children: "Open to new opportunities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "cbf06c6327443f0",
                children: ".orb.jsx-cbf06c6327443f0{filter:blur(140px);pointer-events:none;border-radius:50%;position:absolute}.orb-tl.jsx-cbf06c6327443f0{background:radial-gradient(circle,#34d3991f,#0000 70%);width:500px;height:500px;animation:8s ease-in-out infinite orbFloat;top:-120px;left:-120px}.orb-br.jsx-cbf06c6327443f0{background:radial-gradient(circle,#34d39914,#0000 70%);width:500px;height:500px;animation:11s ease-in-out infinite reverse orbFloat;bottom:-120px;right:-120px}.orb-center.jsx-cbf06c6327443f0{background:radial-gradient(circle,#34d3990a,#0000 70%);width:300px;height:300px;animation:14s ease-in-out infinite orbFloatCenter;top:40%;left:50%;transform:translate(-50%,-50%)}@keyframes orbFloat{0%,to{transform:translate(0)scale(1)}33%{transform:translate(30px,-20px)scale(1.05)}66%{transform:translate(-20px,30px)scale(.97)}}@keyframes orbFloatCenter{0%,to{transform:translate(-50%,-50%)scale(1)}50%{transform:translate(-50%,-60%)scale(1.1)}}.scan-line.jsx-cbf06c6327443f0{pointer-events:none;background:linear-gradient(90deg,#0000,#34d39966,#0000);height:1px;animation:6s linear infinite scan;position:absolute;top:0;left:0;right:0}@keyframes scan{0%{opacity:1;top:0%}90%{opacity:.3}to{opacity:0;top:100%}}.noise-overlay.jsx-cbf06c6327443f0{opacity:.025;pointer-events:none;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\");position:absolute;inset:0}.badge.jsx-cbf06c6327443f0{opacity:0;align-items:center;gap:8px;transition:opacity .7s,transform .7s;display:inline-flex;transform:translateY(16px)}.badge.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translateY(0)}.badge-dot.jsx-cbf06c6327443f0{background:#34d399;border-radius:50%;width:6px;height:6px;animation:2s ease-in-out infinite blink;display:inline-block}@keyframes blink{0%,to{opacity:1}50%{opacity:.3}}.word-reveal.jsx-cbf06c6327443f0{opacity:0;transition:opacity .9s,transform .9s;transform:translateY(50px)}.word-reveal.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translateY(0)}.delay-100.jsx-cbf06c6327443f0{transition-delay:.12s}.delay-200.jsx-cbf06c6327443f0{transition-delay:.24s}.gradient-text.jsx-cbf06c6327443f0{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#34d399 0%,#6ee7b7 50%,#a7f3d0 100%);-webkit-background-clip:text;background-clip:text}.text-stroke.jsx-cbf06c6327443f0{-webkit-text-stroke:1px #ffffff26;color:#0000}.slide-right.jsx-cbf06c6327443f0{opacity:0;transition:opacity .9s .3s,transform .9s .3s;transform:translate(40px)}.slide-right.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translate(0)}.description-card.jsx-cbf06c6327443f0{position:relative;overflow:hidden}.description-card.jsx-cbf06c6327443f0:before{content:\"\";border-radius:inherit;opacity:0;background:linear-gradient(135deg,#34d3990d,#0000);transition:opacity .5s;position:absolute;inset:0}.description-card.jsx-cbf06c6327443f0:hover:before{opacity:1}.divider-reveal.jsx-cbf06c6327443f0{opacity:0;transition:opacity .8s,transform .8s;transform:scaleX(.4)}.divider-reveal.in-view.jsx-cbf06c6327443f0{opacity:1;transform:scaleX(1)}.big-reveal.jsx-cbf06c6327443f0{opacity:0;transition:opacity 1s,transform 1s;transform:translateY(70px)}.big-reveal.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translateY(0)}.tech-tag.jsx-cbf06c6327443f0{opacity:0;color:#fff;background:#ffffff05;border:1px solid #ffffff14;border-radius:9999px;padding:10px 20px;font-size:12px;transition:opacity .5s,transform .5s;transform:translateY(20px)scale(.9)}.tech-tag.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translateY(0)scale(1)}.tech-tag.jsx-cbf06c6327443f0:hover{color:#6ee7b7;background:#34d3991a;border-color:#34d39959;transform:translateY(-4px)}.progress-row.jsx-cbf06c6327443f0{opacity:0;transition:opacity .7s,transform .7s;transform:translate(-30px)}.progress-row.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translate(0)}.progress-bar.jsx-cbf06c6327443f0{width:0;transition:width 1.4s}.progress-row.in-view.jsx-cbf06c6327443f0 .progress-bar.jsx-cbf06c6327443f0{width:var(--target-width)}.stat-card.jsx-cbf06c6327443f0{opacity:0;transition:opacity .6s,transform .6s;transform:translateY(30px)}.stat-card.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translateY(0)}.stat-num.jsx-cbf06c6327443f0{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#34d399,#6ee7b7);-webkit-background-clip:text;background-clip:text}.slide-up.jsx-cbf06c6327443f0{opacity:0;transition:opacity .7s,transform .7s;transform:translateY(30px)}.slide-up.in-view.jsx-cbf06c6327443f0{opacity:1;transform:translateY(0)}.pulse-dot.jsx-cbf06c6327443f0{background:#34d399;border-radius:50%;width:6px;height:6px;animation:2.5s ease-in-out infinite pulse;display:inline-block;box-shadow:0 0 #34d39966}@keyframes pulse{0%{box-shadow:0 0 #34d39966}70%{box-shadow:0 0 0 8px #34d39900}to{box-shadow:0 0 #34d39900}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = About;
}),
"[project]/src/components/Skills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
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
;
;
const skills = [
    {
        title: "React ",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        title: "TypeScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        title: "Next.js",
        image: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png"
    },
    {
        title: "UI/UX Design",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        title: "Digital Marketing",
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968874.png"
    },
    {
        title: "Tailwind CSS",
        image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    },
    {
        title: "Redux",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    }
];
const Skills = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "jsx-2696fac7839e1c5" + " " + "relative overflow-hidden bg-[#050505] py-[120px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2696fac7839e1c5" + " " + "absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Skills.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2696fac7839e1c5" + " " + "absolute -bottom-32 -right-24 h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[140px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Skills.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2696fac7839e1c5" + " " + "pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%270_0_256_256%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noise%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.85%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noise)%27/%3E%3C/svg%3E')]"
            }, void 0, false, {
                fileName: "[project]/src/components/Skills.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2696fac7839e1c5" + " " + "relative z-10 w-[92%] mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2696fac7839e1c5" + " " + "mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2696fac7839e1c5" + " " + "inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-2696fac7839e1c5" + " " + "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Skills.tsx",
                                        lineNumber: 206,
                                        columnNumber: 3
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Expertise"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Skills.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-2696fac7839e1c5" + " " + "mt-6 text-[34px] font-light leading-none tracking-[-1px] text-white md:text-[86px]",
                                children: [
                                    "My",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-2696fac7839e1c5" + " " + "bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-100 bg-clip-text text-transparent",
                                        children: "Skills"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Skills.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Skills.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-2696fac7839e1c5" + " " + "mt-6 max-w-2xl text-[17px] leading-[1.9] text-neutral-400",
                                children: "Crafting immersive digital experiences with modern frontend technologies, responsive interfaces, scalable architecture, and smooth user interactions."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Skills.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Skills.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2696fac7839e1c5" + " " + "relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-2696fac7839e1c5" + " " + "marquee flex w-max items-center gap-20",
                            children: [
                                ...skills,
                                ...skills
                            ].map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-2696fac7839e1c5" + " " + "group flex flex-shrink-0 items-center gap-4 transition-all duration-300 hover:-translate-y-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: skill.image,
                                        alt: skill.title,
                                        className: "jsx-2696fac7839e1c5" + " " + "h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Skills.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, index, false, {
                                    fileName: "[project]/src/components/Skills.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Skills.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skills.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Skills.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "2696fac7839e1c5",
                children: ".marquee.jsx-2696fac7839e1c5{animation:28s linear infinite marquee}.marquee.jsx-2696fac7839e1c5:hover{animation-play-state:paused}@keyframes marquee{0%{transform:translate(0%)}to{transform:translate(-50%)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skills.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Skills;
}),
"[project]/src/components/Projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const projects = [
    {
        image: "/Aetheria.png",
        title: "Atheria Perfume",
        category: "Luxury Perfume Website",
        desc: "Designed a luxury perfume eCommerce website with elegant UI, responsive layouts, smooth animations, and premium experience.",
        tech: "Next.js • Tailwind CSS • TypeScript",
        link: "#"
    },
    {
        image: "/Brikz.png",
        title: "Brikz",
        category: "Real Estate Platform",
        desc: "Built a modern real estate platform with responsive property listings, interactive sections, and seamless browsing experience worldwide.",
        tech: "React • TypeScript",
        link: "#"
    },
    {
        image: "/Medicine.png",
        title: "Medicine",
        category: "Healthcare Website",
        desc: "Created a healthcare platform featuring responsive dashboards, medicine information systems, user-friendly interfaces, and optimized performance.",
        tech: "Next.js • Tailwind CSS • TypeScript",
        link: "#"
    }
];
const Projects = ()=>{
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -80px 0px",
            threshold: [
                0,
                0.1,
                0.2,
                0.3,
                0.5
            ]
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, observerOptions);
        const targets = sectionRef.current?.querySelectorAll("[data-animate]");
        targets?.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    return(// <section
    //   ref={sectionRef}
    //   id="projects"
    //   style={{
    //     padding: "130px 0",
    //     background: "#0D0D0D",
    //     position: "relative",
    //     overflow: "hidden",
    //   }}
    // >
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "projects",
        style: {
            position: "relative",
            overflow: "hidden"
        },
        className: "jsx-85bce50e19419032" + " " + "relative overflow-hidden bg-[#0D0D0D] py-[130px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    width: 420,
                    height: 420,
                    top: 0,
                    left: 40
                },
                className: "jsx-85bce50e19419032" + " " + "blob1"
            }, void 0, false, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    width: 520,
                    height: 520,
                    bottom: -80,
                    right: -80
                },
                className: "jsx-85bce50e19419032" + " " + "blob2"
            }, void 0, false, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    zIndex: 10
                },
                className: "jsx-85bce50e19419032" + " " + "relative w-[92%] mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 80
                        },
                        className: "jsx-85bce50e19419032",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-animate": true,
                                className: "jsx-85bce50e19419032" + " " + "badge inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-85bce50e19419032" + " " + "badge-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 111,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 107,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "clamp(42px, 7vw, 88px)"
                                },
                                className: "jsx-85bce50e19419032" + " " + "mt-8 font-light leading-[0.98] tracking-[-2px] text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-animate": true,
                                        className: "jsx-85bce50e19419032" + " " + "word-reveal block",
                                        children: "My Latest"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 119,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-animate": true,
                                        className: "jsx-85bce50e19419032" + " " + "word-reveal block delay-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-85bce50e19419032" + " " + "gradient-text",
                                            children: "work"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Projects.tsx",
                                            lineNumber: 124,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 123,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 115,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-animate": true,
                                className: "jsx-85bce50e19419032" + " " + "section-description fade-up delay-200 mt-6 max-w-2xl text-[17px] leading-[1.9] text-white ",
                                children: "A collection of modern frontend projects focused on clean UI, responsive layouts, and immersive user experiences."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 128,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 102,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-85bce50e19419032" + " " + "projects-grid",
                        children: projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: `${i * 0.2}s`
                                },
                                className: "jsx-85bce50e19419032" + " " + "project-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-85bce50e19419032" + " " + "image-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.image,
                                                alt: p.title,
                                                className: "jsx-85bce50e19419032" + " " + "project-image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-85bce50e19419032" + " " + "image-overlay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-85bce50e19419032" + " " + "tech-badge",
                                                children: p.tech
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-85bce50e19419032" + " " + "project-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-85bce50e19419032",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-85bce50e19419032",
                                                children: p.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: p.link,
                                                className: "jsx-85bce50e19419032" + " " + "project-btn",
                                                children: "View Project →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 137,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 97,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "85bce50e19419032",
                children: ".blob1.jsx-85bce50e19419032,.blob2.jsx-85bce50e19419032{opacity:.1;filter:blur(120px);background:#00c896;border-radius:50%}.blob1.jsx-85bce50e19419032{animation:8s ease-in-out infinite floating1}.blob2.jsx-85bce50e19419032{animation:10s ease-in-out infinite floating2}.badge.jsx-85bce50e19419032{opacity:0;align-items:center;gap:8px;transition:opacity .7s,transform .7s;display:inline-flex;transform:translateY(16px)}.badge.in-view.jsx-85bce50e19419032{opacity:1;transform:translateY(0)}.badge-dot.jsx-85bce50e19419032{background:#34d399;border-radius:50%;width:6px;height:6px;animation:2s ease-in-out infinite blink;display:inline-block}@keyframes blink{0%,to{opacity:1}50%{opacity:.3}}.word-reveal.jsx-85bce50e19419032{opacity:0;transition:opacity .9s,transform .9s;transform:translateY(50px)}.word-reveal.in-view.jsx-85bce50e19419032{opacity:1;transform:translateY(0)}.delay-100.jsx-85bce50e19419032{transition-delay:.12s}.delay-200.jsx-85bce50e19419032{transition-delay:.24s}.gradient-text.jsx-85bce50e19419032{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#34d399 0%,#6ee7b7 50%,#a7f3d0 100%);-webkit-background-clip:text;background-clip:text}.section-pill.jsx-85bce50e19419032{color:#00c896;letter-spacing:1px;text-transform:uppercase;background:#00c89614;border:1px solid #00c89640;border-radius:999px;justify-content:center;align-items:center;padding:10px 20px;font-size:13px;font-weight:700;display:inline-flex}.section-title.jsx-85bce50e19419032{color:#fff;margin-top:14px;font-size:max(40px,min(5vw,68px));font-weight:900;animation:1s fadeUp}.section-title.jsx-85bce50e19419032 span.jsx-85bce50e19419032{color:#00c896}.section-description.jsx-85bce50e19419032{color:#9ca3af;max-width:580px;margin-top:24px;font-size:17px;line-height:1.9;animation:1.2s fadeUp}.projects-grid.jsx-85bce50e19419032{grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:36px;display:grid}.project-card.jsx-85bce50e19419032{-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);background:#121212f5;border:1px solid #00c8961f;border-radius:30px;transition:all .6s;animation:1s forwards fadeUp;position:relative;overflow:hidden;box-shadow:0 20px 45px #00000059}.project-card.jsx-85bce50e19419032:hover{border-color:#00c89659;transform:translateY(-14px)scale(1.02);box-shadow:0 25px 60px #00c8961f}.image-wrapper.jsx-85bce50e19419032{height:250px;position:relative;overflow:hidden}.project-image.jsx-85bce50e19419032{object-fit:cover;width:100%;height:100%;transition:transform .7s}.project-card.jsx-85bce50e19419032:hover .project-image.jsx-85bce50e19419032{transform:scale(1.1)}.tech-badge.jsx-85bce50e19419032{color:#00c896;letter-spacing:.5px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#0d0d0dd9;border:1px solid #00c89633;border-radius:999px;padding:8px 16px;font-size:12px;font-weight:700;position:absolute;top:18px;left:18px}.project-body.jsx-85bce50e19419032{padding:30px}.project-body.jsx-85bce50e19419032 h3.jsx-85bce50e19419032{color:#fff;font-size:24px;font-weight:800}.project-body.jsx-85bce50e19419032 p.jsx-85bce50e19419032{color:#9ca3af;margin-top:14px;font-size:15px;line-height:1.8}.project-btn.jsx-85bce50e19419032{color:#0d0d0d;background:linear-gradient(135deg,#00c896,#00e0aa);border-radius:999px;justify-content:center;align-items:center;margin-top:28px;padding:13px 28px;font-size:14px;font-weight:700;text-decoration:none;transition:all .5s;display:inline-flex;box-shadow:0 12px 30px #00c8962e}.project-btn.jsx-85bce50e19419032:hover{transform:translateY(-4px)scale(1.04);box-shadow:0 18px 40px #00c89647}@keyframes fadeUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes floating1{0%{transform:translateY(0)}50%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes floating2{0%{transform:translateY(0)}50%{transform:translateY(25px)}to{transform:translateY(0)}}@media (width<=768px){.projects-grid.jsx-85bce50e19419032{grid-template-columns:1fr}.project-body.jsx-85bce50e19419032{padding:24px}.section-description.jsx-85bce50e19419032{font-size:15px}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Projects.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = Projects;
}),
"[project]/src/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const experiences = [
    {
        role: "Frontend Developer",
        company: "Creative Web Studio",
        year: "2024 – Present",
        desc: "Developing modern responsive websites and interactive user interfaces using Next.js, React, and Tailwind CSS for diverse clients."
    },
    {
        role: "Web Designer",
        company: "Freelance",
        year: "2025 – Present",
        desc: "Designed elegant website layouts and transformed Figma designs into beautiful responsive web interfaces."
    }
];
const Experience = ()=>{
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -80px 0px",
            threshold: [
                0,
                0.1,
                0.2,
                0.3,
                0.5
            ]
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, observerOptions);
        const targets = sectionRef.current?.querySelectorAll("[data-animate]");
        targets?.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "experience",
        style: {
            padding: "130px 0",
            background: "#0D0D0D",
            position: "relative",
            overflow: "hidden"
        },
        className: "jsx-a04a62e2f71795a",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    width: 420,
                    height: 420,
                    top: -60,
                    left: -60
                },
                className: "jsx-a04a62e2f71795a" + " " + "blob1"
            }, void 0, false, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    width: 500,
                    height: 500,
                    bottom: -120,
                    right: -80
                },
                className: "jsx-a04a62e2f71795a" + " " + "blob2"
            }, void 0, false, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    zIndex: 10
                },
                className: "jsx-a04a62e2f71795a" + " " + "relative w-[92%] mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 90
                        },
                        className: "jsx-a04a62e2f71795a",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-animate": true,
                                className: "jsx-a04a62e2f71795a" + " " + "badge inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-a04a62e2f71795a" + " " + "badge-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Experience.tsx",
                                        lineNumber: 94,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Experience"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 90,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "clamp(42px, 7vw, 88px)"
                                },
                                className: "jsx-a04a62e2f71795a" + " " + "mt-8 font-light leading-[0.98] tracking-[-2px] text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-animate": true,
                                        className: "jsx-a04a62e2f71795a" + " " + "word-reveal block",
                                        children: "Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Experience.tsx",
                                        lineNumber: 102,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-animate": true,
                                        className: "jsx-a04a62e2f71795a" + " " + "word-reveal block delay-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-a04a62e2f71795a" + " " + "gradient-text",
                                            children: "Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Experience.tsx",
                                            lineNumber: 107,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Experience.tsx",
                                        lineNumber: 106,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 98,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a04a62e2f71795a" + " " + "section-description",
                                children: "My professional journey creating modern, responsive, and user-focused digital experiences."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 111,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 85,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a04a62e2f71795a" + " " + "timeline-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a04a62e2f71795a" + " " + "timeline-line hide-mobile"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 121,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            experiences.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a04a62e2f71795a" + " " + `timeline-row ${i % 2 === 0 ? "right" : "left"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a04a62e2f71795a" + " " + "timeline-dot hide-mobile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Experience.tsx",
                                            lineNumber: 129,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: `${i * 0.3}s`
                                            },
                                            className: "jsx-a04a62e2f71795a" + " " + "experience-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-a04a62e2f71795a" + " " + "year-badge",
                                                    children: item.year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Experience.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-a04a62e2f71795a",
                                                    children: item.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Experience.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-a04a62e2f71795a" + " " + "company",
                                                    children: item.company
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Experience.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-a04a62e2f71795a" + " " + "description",
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Experience.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Experience.tsx",
                                            lineNumber: 132,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/Experience.tsx",
                                    lineNumber: 124,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 119,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 80,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "a04a62e2f71795a",
                children: '.blob1.jsx-a04a62e2f71795a,.blob2.jsx-a04a62e2f71795a{opacity:.1;filter:blur(120px);background:#00c896;border-radius:50%}.blob1.jsx-a04a62e2f71795a{animation:8s ease-in-out infinite float1}.blob2.jsx-a04a62e2f71795a{animation:10s ease-in-out infinite float2}.badge.jsx-a04a62e2f71795a{opacity:0;align-items:center;gap:8px;transition:opacity .7s,transform .7s;display:inline-flex;transform:translateY(16px)}.badge.in-view.jsx-a04a62e2f71795a{opacity:1;transform:translateY(0)}.badge-dot.jsx-a04a62e2f71795a{background:#34d399;border-radius:50%;width:6px;height:6px;animation:2s ease-in-out infinite blink;display:inline-block}@keyframes blink{0%,to{opacity:1}50%{opacity:.3}}.word-reveal.jsx-a04a62e2f71795a{opacity:0;transition:opacity .9s,transform .9s;transform:translateY(50px)}.word-reveal.in-view.jsx-a04a62e2f71795a{opacity:1;transform:translateY(0)}.delay-100.jsx-a04a62e2f71795a{transition-delay:.12s}.delay-200.jsx-a04a62e2f71795a{transition-delay:.24s}.gradient-text.jsx-a04a62e2f71795a{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#34d399 0%,#6ee7b7 50%,#a7f3d0 100%);-webkit-background-clip:text;background-clip:text}.section-pill.jsx-a04a62e2f71795a{color:#00c896;letter-spacing:1px;text-transform:uppercase;background:#00c89614;border:1px solid #00c89640;border-radius:999px;justify-content:center;align-items:center;padding:10px 20px;font-size:13px;font-weight:700;display:inline-flex}.section-title.jsx-a04a62e2f71795a{color:#fff;margin-top:14px;font-size:max(40px,min(5vw,68px));font-weight:900;animation:1s fadeUp}.section-title.jsx-a04a62e2f71795a span.jsx-a04a62e2f71795a{color:#00c896}.section-description.jsx-a04a62e2f71795a{color:#9ca3af;max-width:580px;margin-top:24px;font-size:17px;line-height:1.9;animation:1.2s fadeUp}.timeline-wrapper.jsx-a04a62e2f71795a{flex-direction:column;gap:60px;max-width:100%;margin:0 auto;display:flex;position:relative}.timeline-line.jsx-a04a62e2f71795a{background:linear-gradient(#00c8961a,#00c896,#00c8961a);border-radius:20px;width:3px;height:100%;position:absolute;top:0;left:50%;transform:translate(-50%)}.timeline-row.jsx-a04a62e2f71795a{display:flex;position:relative}.timeline-row.left.jsx-a04a62e2f71795a{justify-content:flex-start}.timeline-row.right.jsx-a04a62e2f71795a{justify-content:flex-end}.timeline-dot.jsx-a04a62e2f71795a{z-index:5;background:#00c896;border:5px solid #0d0d0d;border-radius:50%;width:22px;height:22px;animation:2s infinite pulse;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 25px #00c89699}.experience-card.jsx-a04a62e2f71795a{-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);background:#121212f2;border:1px solid #00c8961f;border-radius:30px;width:44%;min-width:280px;padding:36px;transition:all .6s;animation:1s forwards fadeUp;position:relative;overflow:hidden;box-shadow:0 20px 45px #00000059}.experience-card.jsx-a04a62e2f71795a:before{content:"";opacity:0;background:radial-gradient(circle at 0 0,#00c89624,#0000 65%);transition:opacity .5s;position:absolute;inset:0}.experience-card.jsx-a04a62e2f71795a:hover:before{opacity:1}.experience-card.jsx-a04a62e2f71795a:hover{border-color:#00c89659;transform:translateY(-12px)scale(1.02);box-shadow:0 25px 60px #00c89624}.year-badge.jsx-a04a62e2f71795a{color:#00c896;letter-spacing:1px;background:#00c8961a;border:1px solid #00c89633;border-radius:999px;padding:8px 18px;font-size:12px;font-weight:700;display:inline-block}.experience-card.jsx-a04a62e2f71795a h3.jsx-a04a62e2f71795a{color:#fff;margin-top:20px;font-size:28px;font-weight:800}.company.jsx-a04a62e2f71795a{color:#00c896;margin-top:8px;font-size:16px;font-weight:600}.description.jsx-a04a62e2f71795a{color:#9ca3af;margin-top:18px;font-size:15px;line-height:1.9}@keyframes fadeUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes float1{0%{transform:translateY(0)}50%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes float2{0%{transform:translateY(0)}50%{transform:translateY(25px)}to{transform:translateY(0)}}@keyframes pulse{0%{box-shadow:0 0 #00c89680}70%{box-shadow:0 0 0 18px #00c89600}to{box-shadow:0 0 #00c89600}}@media (width<=900px){.timeline-line.jsx-a04a62e2f71795a,.timeline-dot.jsx-a04a62e2f71795a{display:none}.timeline-row.jsx-a04a62e2f71795a{justify-content:center!important}.experience-card.jsx-a04a62e2f71795a{width:100%}}@media (width<=768px){.experience-card.jsx-a04a62e2f71795a{padding:28px}.experience-card.jsx-a04a62e2f71795a h3.jsx-a04a62e2f71795a{font-size:24px}.section-description.jsx-a04a62e2f71795a{font-size:15px}}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Experience.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Experience;
}),
"[project]/src/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
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
;
;
;
;
const contacts = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Email",
        value: "adyashadas6797@gmail.com",
        href: "mailto:adyashadas6797@gmail.com"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {}, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Location",
        value: "Bhubaneswar, Odisha, India",
        href: "https://maps.google.com/?q=Bhubaneswar,Odisha,India"
    }
];
const Contact = ()=>{
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const copyEmail = async ()=>{
        await navigator.clipboard.writeText("adyashadas6797@gmail.com");
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "jsx-bef09e3bb176b071" + " " + "relative overflow-hidden bg-black py-20 md:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-bef09e3bb176b071" + " " + "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bef09e3bb176b071" + " " + "absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bef09e3bb176b071" + " " + "absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bef09e3bb176b071" + " " + "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-bef09e3bb176b071" + " " + "relative z-10 w-[92%] mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bef09e3bb176b071" + " " + "max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bef09e3bb176b071" + " " + "animate-fade inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 backdrop-blur-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-bef09e3bb176b071" + " " + "h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-bef09e3bb176b071" + " " + "text-[10px] font-semibold uppercase tracking-[4px] text-emerald-400",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bef09e3bb176b071" + " " + "mt-8 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-bef09e3bb176b071" + " " + "animate-title text-[42px] font-extralight leading-[0.9] tracking-[-2px] text-white sm:text-[58px] md:text-[80px] lg:text-[95px]",
                                        children: "Let’s Talk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-bef09e3bb176b071" + " " + "animate-title delay-200 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-100 bg-clip-text text-[42px] font-extralight leading-[0.9] tracking-[-2px] text-transparent sm:text-[58px] md:text-[80px] lg:text-[95px]",
                                        children: "Together"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-bef09e3bb176b071" + " " + "animate-fade delay-300 mt-8 max-w-2xl text-[16px] leading-[2.1] text-neutral-400 sm:text-[17px] md:text-[18px]",
                                children: "Available for freelance projects, frontend development, and creative collaborations to craft modern digital experiences with clean UI and smooth interaction."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bef09e3bb176b071" + " " + "mt-20 flex flex-col",
                        children: contacts.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: `${index * 0.2}s`
                                },
                                className: "jsx-bef09e3bb176b071" + " " + "group animate-line flex flex-col gap-5 border-b border-white/10 py-7 transition-all duration-500 hover:border-emerald-400/30 sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-bef09e3bb176b071" + " " + "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bef09e3bb176b071" + " " + "flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/5 text-xl text-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-black",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bef09e3bb176b071",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-bef09e3bb176b071" + " " + "text-[10px] uppercase tracking-[4px] text-neutral-500",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-bef09e3bb176b071" + " " + "mt-2 break-all text-[16px] font-light text-white transition-all duration-500 group-hover:text-emerald-300 sm:text-[18px] md:text-[22px]",
                                                        children: item.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 485,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 473,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.label === "Email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copyEmail,
                                        className: "jsx-bef09e3bb176b071" + " " + "flex items-center gap-2 text-sm text-emerald-400 transition-all duration-300 hover:text-emerald-300",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Copied"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCopy"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 509,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-bef09e3bb176b071" + " " + "flex items-center gap-2 text-sm text-emerald-400 transition-all duration-300 hover:text-emerald-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 521,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bef09e3bb176b071" + " " + "animate-fade delay-500 mt-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-bef09e3bb176b071" + " " + "text-[10px] uppercase tracking-[5px] text-neutral-600 sm:text-xs",
                            children: "Frontend Developer • UI Designer • Freelancer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "bef09e3bb176b071",
                children: ".animate-title.jsx-bef09e3bb176b071{opacity:0;animation:1s cubic-bezier(.22,1,.36,1) forwards titleReveal}.animate-fade.jsx-bef09e3bb176b071{opacity:0;animation:1s forwards fadeUp}.animate-line.jsx-bef09e3bb176b071{opacity:0;animation:1s forwards lineReveal}.delay-200.jsx-bef09e3bb176b071{animation-delay:.2s}.delay-300.jsx-bef09e3bb176b071{animation-delay:.3s}.delay-500.jsx-bef09e3bb176b071{animation-delay:.5s}@keyframes titleReveal{0%{opacity:0;transform:translateY(80px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes lineReveal{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 416,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Contact;
}),
"[project]/src/components/Scroller.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scroller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
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
;
;
;
;
function Scroller() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // SHOW BUTTON
    const toggleVisibility = ()=>{
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    // SCROLL TO TOP
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                "aria-label": "Scroll to top",
                className: "jsx-796717a87572a937" + " " + "scroll-btn group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-796717a87572a937" + " " + "glow-ring"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Scroller.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowUp"], {
                        className: "arrow-icon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Scroller.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Scroller.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "796717a87572a937",
                children: '.scroll-btn.jsx-796717a87572a937{z-index:60;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);color:#00c896;cursor:pointer;background:#0f0f0fbf;border:1px solid #00c89640;border-radius:999px;justify-content:center;align-items:center;width:58px;height:58px;transition:all .45s;animation:.5s fadeUp;display:flex;position:fixed;bottom:32px;right:32px;overflow:hidden;box-shadow:0 12px 35px #00c8962e}.scroll-btn.jsx-796717a87572a937:before{content:"";opacity:0;background:linear-gradient(135deg,#00c8962e,#0000 65%);transition:opacity .4s;position:absolute;inset:0}.scroll-btn.jsx-796717a87572a937:hover:before{opacity:1}.scroll-btn.jsx-796717a87572a937:hover{background:#00c8961f;border-color:#00c89673;transform:translateY(-8px)scale(1.08);box-shadow:0 20px 45px #00c89647}.glow-ring.jsx-796717a87572a937{border:1px solid #00c89633;border-radius:999px;width:100%;height:100%;animation:2.5s infinite pulse;position:absolute}.arrow-icon.jsx-796717a87572a937{z-index:5;font-size:18px;transition:transform .35s;position:relative}.scroll-btn.jsx-796717a87572a937:hover .arrow-icon.jsx-796717a87572a937{transform:translateY(-3px)}@keyframes fadeUp{0%{opacity:0;transform:translateY(30px)scale(.9)}to{opacity:1;transform:translateY(0)scale(1)}}@keyframes pulse{0%{opacity:.7;transform:scale(1)}70%{opacity:0;transform:scale(1.25)}to{opacity:0;transform:scale(1.25)}}@media (width<=768px){.scroll-btn.jsx-796717a87572a937{width:52px;height:52px;bottom:20px;right:20px}.arrow-icon.jsx-796717a87572a937{font-size:16px}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/Loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loadable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Loadable() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 2400);
        if (document.readyState === "complete") {
            setTimeout(()=>setIsLoading(false), 1800);
        } else {
            window.addEventListener("load", ()=>setTimeout(()=>setIsLoading(false), 1800));
        }
        return ()=>clearTimeout(timer);
    }, []);
    if (!isLoading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-86ec5090fd61baa" + " " + "loader-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-86ec5090fd61baa" + " " + "blob blob1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loader.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-86ec5090fd61baa" + " " + "blob blob2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loader.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-86ec5090fd61baa" + " " + "noise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loader.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-86ec5090fd61baa" + " " + "loader-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-86ec5090fd61baa" + " " + "logo-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-86ec5090fd61baa" + " " + "outer-ring"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Loader.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-86ec5090fd61baa" + " " + "middle-ring"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Loader.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-86ec5090fd61baa" + " " + "inner-logo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-86ec5090fd61baa",
                                            children: "Adyasha"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Loader.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Loader.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Loader.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-86ec5090fd61baa" + " " + "loading-bar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-86ec5090fd61baa" + " " + "loading-progress"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Loader.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Loader.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Loader.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Loader.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "86ec5090fd61baa",
                children: ".loader-wrapper.jsx-86ec5090fd61baa{z-index:9999;background:#050505;justify-content:center;align-items:center;display:flex;position:fixed;inset:0;overflow:hidden}.blob.jsx-86ec5090fd61baa{opacity:.08;filter:blur(120px);background:#00c896;border-radius:999px;position:absolute}.blob1.jsx-86ec5090fd61baa{width:420px;height:420px;animation:8s ease-in-out infinite float1;top:-80px;left:-60px}.blob2.jsx-86ec5090fd61baa{width:500px;height:500px;animation:10s ease-in-out infinite float2;bottom:-120px;right:-100px}.noise.jsx-86ec5090fd61baa{opacity:.03;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\");position:absolute;inset:0}.loader-content.jsx-86ec5090fd61baa{z-index:10;text-align:center;flex-direction:column;align-items:center;display:flex;position:relative}.logo-wrapper.jsx-86ec5090fd61baa{justify-content:center;align-items:center;width:130px;height:130px;display:flex;position:relative}.outer-ring.jsx-86ec5090fd61baa,.middle-ring.jsx-86ec5090fd61baa{border-radius:999px;position:absolute}.outer-ring.jsx-86ec5090fd61baa{border:1px solid #00c8962e;width:130px;height:130px;animation:8s linear infinite rotateRing}.outer-ring.jsx-86ec5090fd61baa:before{content:\"\";background:#00c896;border-radius:999px;width:14px;height:14px;position:absolute;top:-7px;left:50%;transform:translate(-50%);box-shadow:0 0 20px #00c896}.middle-ring.jsx-86ec5090fd61baa{border:1px dashed #00c8964d;width:95px;height:95px;animation:10s linear infinite rotateReverse}.inner-logo.jsx-86ec5090fd61baa{-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:#00c896;letter-spacing:1px;background:#ffffff08;border:1px solid #00c89633;border-radius:22px;justify-content:center;align-items:center;width:72px;height:72px;font-size:26px;font-weight:700;animation:2.5s ease-in-out infinite pulseGlow;display:flex;box-shadow:0 10px 35px #00c8962e}.loader-title.jsx-86ec5090fd61baa{letter-spacing:-1px;color:#fff;margin-top:38px;font-size:42px;font-weight:300;animation:1s fadeUp}.loader-title.jsx-86ec5090fd61baa span.jsx-86ec5090fd61baa{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#00c896 0%,#6ee7b7 50%,#a7f3d0 100%);-webkit-background-clip:text;background-clip:text}.loader-subtitle.jsx-86ec5090fd61baa{color:#9ca3af;letter-spacing:1px;margin-top:14px;font-size:15px;animation:1.2s fadeUp}.loading-bar.jsx-86ec5090fd61baa{background:#ffffff0f;border-radius:999px;width:220px;height:4px;margin-top:40px;position:relative;overflow:hidden}.loading-progress.jsx-86ec5090fd61baa{background:linear-gradient(90deg,#00c896,#6ee7b7,#a7f3d0);border-radius:999px;width:40%;height:100%;animation:1.4s ease-in-out infinite loading}@keyframes loading{0%{transform:translate(-120%)}to{transform:translate(320%)}}@keyframes rotateRing{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes rotateReverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes pulseGlow{0%,to{transform:scale(1);box-shadow:0 10px 35px #00c8962e}50%{transform:scale(1.06);box-shadow:0 18px 45px #00c8964d}}@keyframes fadeUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes float1{0%{transform:translateY(0)}50%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes float2{0%{transform:translateY(0)}50%{transform:translateY(25px)}to{transform:translateY(0)}}@media (width<=768px){.logo-wrapper.jsx-86ec5090fd61baa,.outer-ring.jsx-86ec5090fd61baa{width:110px;height:110px}.middle-ring.jsx-86ec5090fd61baa{width:82px;height:82px}.inner-logo.jsx-86ec5090fd61baa{width:64px;height:64px;font-size:22px}.loader-title.jsx-86ec5090fd61baa{font-size:34px}.loader-subtitle.jsx-86ec5090fd61baa{font-size:14px}.loading-bar.jsx-86ec5090fd61baa{width:180px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_components_03~vk.a._.js.map