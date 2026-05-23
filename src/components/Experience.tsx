
"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Creative Web Studio",
    year: "2024 – Present",
    desc: "Developing modern responsive websites and interactive user interfaces using Next.js, React, and Tailwind CSS for diverse clients.",
  },
  
  {
    role: "Web Designer",
    company: "Freelance",
    year: "2025 – Present",
    desc: "Designed elegant website layouts and transformed Figma designs into beautiful responsive web interfaces.",
  },
];

const Experience = () => {
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
      id="experience"
      style={{
        padding: "130px 0",
        background: "#0D0D0D",
        position: "relative",
        overflow: "hidden",
      }}
    >
    {/* BACKGROUND BLOBS */}
    <div
      className="blob1"
      style={{
        position: "absolute",
        width: 420,
        height: 420,
        top: -60,
        left: -60,
      }}
    />

    <div
      className="blob2"
      style={{
        position: "absolute",
        width: 500,
        height: 500,
        bottom: -120,
        right: -80,
      }}
    />

    <div
  className="relative w-[92%] mx-auto max-w-7xl"
  style={{ zIndex: 10 }}
>
      {/* HEADING */}
      <div
        style={{
          marginBottom: 90,
        }}
      >
        <span
          data-animate
          className="badge inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400"
        >
          <span className="badge-dot" />
          Experience
        </span>

        <h2
          className="mt-8 font-light leading-[0.98] tracking-[-2px] text-white"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          <span data-animate className="word-reveal block">
            Work
          </span>

          <span data-animate className="word-reveal block delay-100">
            <span className="gradient-text">Experience</span>
          </span>
        </h2>

        <p className="section-description">
          My professional journey creating modern, responsive, and
          user-focused digital experiences.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="timeline-wrapper">
        {/* CENTER LINE */}
        <div className="timeline-line hide-mobile" />

        {experiences.map((item, i) => (
          <div
            key={i}
            className={`timeline-row ${i % 2 === 0 ? "right" : "left"}`}
          >
            {/* DOT */}
            <div className="timeline-dot hide-mobile" />

            {/* CARD */}
            <div
              className="experience-card"
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {/* YEAR */}
              <span className="year-badge">{item.year}</span>

              {/* ROLE */}
              <h3>{item.role}</h3>

              {/* COMPANY */}
              <p className="company">{item.company}</p>

              {/* DESCRIPTION */}
              <p className="description">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CSS */}
    <style jsx>{`
      /* BLOBS */
      .blob1,
      .blob2 {
        border-radius: 50%;
        background: #00c896;
        opacity: 0.1;
        filter: blur(120px);
      }

      .blob1 {
        animation: float1 8s ease-in-out infinite;
      }

      .blob2 {
        animation: float2 10s ease-in-out infinite;
      }

      /* BADGE STYLING */
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

      /* WORD REVEAL */
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

      /* GRADIENT TEXT */
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

      /* SECTION PILL */
      .section-pill {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        border-radius: 999px;
        background: rgba(0, 200, 150, 0.08);
        border: 1px solid rgba(0, 200, 150, 0.25);
        color: #00c896;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      /* TITLE */
      .section-title {
        font-size: clamp(40px, 5vw, 68px);
        font-weight: 900;
        color: #ffffff;
        margin-top: 14px;
        animation: fadeUp 1s ease;
      }

      .section-title span {
        color: #00c896;
      }

      /* DESCRIPTION */
      .section-description {
        max-width: 580px;
        margin-top: 24px;
        font-size: 17px;
        color: #9ca3af;
        line-height: 1.9;
        animation: fadeUp 1.2s ease;
      }

      /* TIMELINE */
      .timeline-wrapper {
        position: relative;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 60px;
      }

      .timeline-line {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 3px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 200, 150, 0.1),
          #00c896,
          rgba(0, 200, 150, 0.1)
        );
        border-radius: 20px;
      }

      .timeline-row {
        position: relative;
        display: flex;
      }

      .timeline-row.left {
        justify-content: flex-start;
      }

      .timeline-row.right {
        justify-content: flex-end;
      }

      /* DOT */
      .timeline-dot {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #00c896;
        border: 5px solid #0d0d0d;
        box-shadow: 0 0 25px rgba(0, 200, 150, 0.6);
        z-index: 5;
        animation: pulse 2s infinite;
      }

      /* CARD */
      .experience-card {
        width: 44%;
        min-width: 280px;
        padding: 36px;
        border-radius: 30px;
        background: rgba(18, 18, 18, 0.95);
        border: 1px solid rgba(0, 200, 150, 0.12);
        backdrop-filter: blur(14px);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
        transition: all 0.6s ease;
        animation: fadeUp 1s ease forwards;
        position: relative;
        overflow: hidden;
      }

      .experience-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(
          circle at top left,
          rgba(0, 200, 150, 0.14),
          transparent 65%
        );
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      .experience-card:hover::before {
        opacity: 1;
      }

      .experience-card:hover {
        transform: translateY(-12px) scale(1.02);
        border-color: rgba(0, 200, 150, 0.35);
        box-shadow: 0 25px 60px rgba(0, 200, 150, 0.14);
      }

      /* YEAR */
      .year-badge {
        display: inline-block;
        padding: 8px 18px;
        border-radius: 999px;
        background: rgba(0, 200, 150, 0.1);
        border: 1px solid rgba(0, 200, 150, 0.2);
        color: #00c896;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
      }

      /* ROLE */
      .experience-card h3 {
        font-size: 28px;
        font-weight: 800;
        color: #ffffff;
        margin-top: 20px;
      }

      /* COMPANY */
      .company {
        margin-top: 8px;
        color: #00c896;
        font-size: 16px;
        font-weight: 600;
      }

      /* DESCRIPTION */
      .description {
        margin-top: 18px;
        font-size: 15px;
        line-height: 1.9;
        color: #9ca3af;
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

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 200, 150, 0.5);
        }
        70% {
          box-shadow: 0 0 0 18px rgba(0, 200, 150, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(0, 200, 150, 0);
        }
      }

      /* MOBILE */
      @media (max-width: 900px) {
        .timeline-line,
        .timeline-dot {
          display: none;
        }

        .timeline-row {
          justify-content: center !important;
        }

        .experience-card {
          width: 100%;
        }
      }

      @media (max-width: 768px) {
        .experience-card {
          padding: 28px;
        }

        .experience-card h3 {
          font-size: 24px;
        }

        .section-description {
          font-size: 15px;
        }
      }
    `}</style>
    </section>
  );
};

export default Experience;