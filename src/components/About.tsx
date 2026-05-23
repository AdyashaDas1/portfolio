
"use client";

import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.5],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const targets = sectionRef.current?.querySelectorAll("[data-animate]");
    targets?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section relative overflow-hidden bg-[#050505] py-24 lg:py-32"
    >
      {/* Animated background orbs */}
      <div className="orb orb-tl" />
      <div className="orb orb-br" />
      <div className="orb orb-center" />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Vertical grid lines */}
      <div className="grid-lines absolute inset-0 opacity-[0.025]">
        <div className="grid h-full w-full grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
      </div>

      {/* Horizontal scan line */}
      <div className="scan-line" />

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        {/* ── TOP ROW ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Badge */}
          <div className="max-w-4xl">
            <span
              data-animate
              className="badge inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400"
            >
              <span className="badge-dot" />
              About Me
            </span>

            {/* Headline */}
            <h1
              className="mt-8 font-light leading-[0.98] tracking-[-2px] text-white"
              style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
            >
              <span data-animate className="word-reveal block">
                Creating
              </span>

              <span data-animate className="word-reveal block delay-100">
                <span className="gradient-text">modern digital</span>
              </span>

              <span
                data-animate
                className="word-reveal block delay-200 text-zinc-600"
                style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
              >
                experiences
              </span>
            </h1>
          </div>

          {/* Right description */}
          <div data-animate className="slide-right max-w-md">
            <div className="description-card rounded-2xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-sm">
              <p className="text-[16px] leading-8 text-zinc-400">
                I design and develop elegant frontend websites with clean
                layouts, smooth animations, and immersive user experiences.
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-emerald-400/40 to-transparent" />

              <p className="mt-4 text-[11px] uppercase tracking-[3px] text-emerald-400/60">
                Available for projects
              </p>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div data-animate className="divider-reveal mt-16">
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <span className="text-[11px] uppercase tracking-[4px] text-zinc-600">
              crafting since 2020
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* ── CENTER SECTION ── */}
        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-3">
          {/* ── BIG TITLE + TAGS ── */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden">
              <h2
                data-animate
                className="big-reveal font-black leading-[0.92] text-white"
                style={{ fontSize: "clamp(48px, 7vw, 92px)" }}
              >
                <span className="block">Frontend</span>

                <span className="block text-stroke">Developer</span>
              </h2>
            </div>

            {/* Tech tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Tailwind",
                "TypeScript",
                "Redux",
                "Framer Motion",
              ].map((item, i) => (
                <span
                  key={item}
                  data-animate
                  className="tech-tag"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Progress bars */}
            <div className="mt-12 space-y-5">
              {[
                { label: "UI/UX Design", pct: 92 },
                { label: "React / Next.js", pct: 96 },
                { label: "Animation & Motion", pct: 88 },
              ].map(({ label, pct }, i) => (
                <div
                  key={label}
                  data-animate
                  className={`progress-row delay-${i * 100}`}
                >
                  <div className="mb-2 flex justify-between text-[11px] uppercase tracking-[2px]">
                    <span className="text-zinc-400">{label}</span>

                    <span className="text-emerald-400">{pct}%</span>
                  </div>

               <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/5">
  <div
    className="progress-bar h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300"
    style={
      {
        "--target-width": `${pct}%`,
      } as React.CSSProperties
    }
  />
</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── STATS + BUTTON ── */}
          <div className="flex flex-col justify-between gap-10">
            {/* Stat cards */}
            <div className="space-y-4">
              {[
                { num: "3+", label: "Projects Shipped" },
                { num: "100%", label: "Creativity" },
                { num: "1.5+", label: "Years Experience" },
              ].map(({ num, label }, i) => (
                <div
                  key={label}
                  data-animate
                  className={`stat-card delay-${i * 150}`}
                >
                  <div className="stat-inner rounded-xl border border-white/5 bg-white/[0.02] p-5 transition duration-500 hover:border-emerald-400/20 hover:bg-emerald-400/5">
                    <h3 className="stat-num text-[40px] font-black">
                      {num}
                    </h3>

                    <p className="mt-1 text-[11px] uppercase tracking-[3px] text-zinc-500">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div data-animate className="slide-up">
              <a
                href="#contact"
                className="cta-btn group inline-flex w-full items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-6 py-5 text-[12px] font-semibold uppercase tracking-[3px] text-white transition duration-500 hover:border-emerald-400/60 hover:bg-emerald-400/10"
              >
                Let&apos;s Connect

                <span className="cta-arrow flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 text-emerald-400 transition duration-300 group-hover:translate-x-1 group-hover:border-emerald-400">
                  →
                </span>
              </a>

              {/* Availability indicator */}
              <div className="mt-4 flex items-center gap-2 px-1">
                <span className="pulse-dot" />

                <span className="text-[12px] text-zinc-500">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
        }

        .orb-tl {
          top: -120px;
          left: -120px;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.12),
            transparent 70%
          );
          animation: orbFloat 8s ease-in-out infinite;
        }

        .orb-br {
          bottom: -120px;
          right: -120px;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.08),
            transparent 70%
          );
          animation: orbFloat 11s ease-in-out infinite reverse;
        }

        .orb-center {
          top: 40%;
          left: 50%;
          width: 300px;
          height: 300px;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.04),
            transparent 70%
          );
          animation: orbFloatCenter 14s ease-in-out infinite;
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(30px, -20px) scale(1.05);
          }

          66% {
            transform: translate(-20px, 30px) scale(0.97);
          }
        }

        @keyframes orbFloatCenter {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            transform: translate(-50%, -60%) scale(1.1);
          }
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(52, 211, 153, 0.4),
            transparent
          );
          animation: scan 6s linear infinite;
          pointer-events: none;
        }

        @keyframes scan {
          0% {
            top: 0%;
            opacity: 1;
          }

          90% {
            opacity: 0.3;
          }

          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .badge {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .badge.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .badge-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.3;
          }
        }

        .word-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .word-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 {
          transition-delay: 0.12s;
        }

        .delay-200 {
          transition-delay: 0.24s;
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #34d399 0%,
            #6ee7b7 50%,
            #a7f3d0 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
          color: transparent;
        }

        .slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
          transition-delay: 0.3s;
        }

        .slide-right.in-view {
          opacity: 1;
          transform: translateX(0);
        }

        .description-card {
          position: relative;
          overflow: hidden;
        }

        .description-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(52, 211, 153, 0.05),
            transparent
          );
          opacity: 0;
          transition: opacity 0.5s;
        }

        .description-card:hover::before {
          opacity: 1;
        }

        .divider-reveal {
          opacity: 0;
          transform: scaleX(0.4);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .divider-reveal.in-view {
          opacity: 1;
          transform: scaleX(1);
        }

        .big-reveal {
          opacity: 0;
          transform: translateY(70px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .big-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-tag {
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          transition: opacity 0.5s ease, transform 0.5s ease;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          padding: 10px 20px;
          font-size: 12px;
          color: white;
        }

        .tech-tag.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .tech-tag:hover {
          background: rgba(52, 211, 153, 0.1);
          border-color: rgba(52, 211, 153, 0.35);
          color: #6ee7b7;
          transform: translateY(-4px);
        }

        .progress-row {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .progress-row.in-view {
          opacity: 1;
          transform: translateX(0);
        }

        .progress-bar {
          width: 0;
          transition: width 1.4s ease;
        }

        .progress-row.in-view .progress-bar {
          width: var(--target-width);
        }

        .stat-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .stat-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-num {
          background: linear-gradient(135deg, #34d399, #6ee7b7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .slide-up.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .pulse-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
          animation: pulse 2.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
          }

          70% {
            box-shadow: 0 0 0 8px rgba(52, 211, 153, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;