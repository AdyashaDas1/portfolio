
"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    image: "/Aetheria.png",
    title: "Atheria Perfume",
    category: "Luxury Perfume Website",
    desc: "Designed a luxury perfume eCommerce website with elegant UI, responsive layouts, smooth animations, and premium experience.",
    tech: "Next.js • Tailwind CSS • TypeScript",
    link: "#",
  },
  {
    image: "/Brikz.png",
    title: "Brikz",
    category: "Real Estate Platform",
    desc: "Built a modern real estate platform with responsive property listings, interactive sections, and seamless browsing experience worldwide.",
    tech: "React • TypeScript",
    link: "#",
  },
  {
    image: "/Medicine.png",
    title: "Medicine",
     category: "Healthcare Website",
    desc: "Created a healthcare platform featuring responsive dashboards, medicine information systems, user-friendly interfaces, and optimized performance.",
    tech: "Next.js • Tailwind CSS • TypeScript",
    link: "#",
  },
];

const Projects = () => {
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
      id="projects"
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
        top: 0,
        left: 40,
      }}
    />

    <div
      className="blob2"
      style={{
        position: "absolute",
        width: 520,
        height: 520,
        bottom: -80,
        right: -80,
      }}
    />

    <div
      className="section-container"
      style={{
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* HEADING */}
      <div
        style={{
          marginBottom: 80,
        }}
      >
        <span
          data-animate
          className="badge inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[3px] text-emerald-400"
        >
          <span className="badge-dot" />
          Projects
        </span>

        <h2
          className="mt-8 font-light leading-[0.98] tracking-[-2px] text-white"
          style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
        >
          <span data-animate className="word-reveal block">
            My Latest
          </span>

          <span data-animate className="word-reveal block delay-100">
            <span className="gradient-text">work</span>
          </span>
        </h2>

        <p 
        data-animate
  className="section-description fade-up delay-200 mt-6 max-w-2xl text-[17px] leading-[1.9] text-white ">
          A collection of modern frontend projects focused on clean UI,
          responsive layouts, and immersive user experiences.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {/* IMAGE */}
            <div className="image-wrapper">
              <img src={p.image} alt={p.title} className="project-image" />

              <div className="image-overlay" />

              {/* Floating Tech Badge */}
              <span className="tech-badge">{p.tech}</span>
            </div>

            {/* BODY */}
            <div className="project-body">
              <h3>{p.title}</h3>

              <p>{p.desc}</p>

              <a href={p.link} className="project-btn">
                View Project →
              </a>
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
        animation: floating1 8s ease-in-out infinite;
      }

      .blob2 {
        animation: floating2 10s ease-in-out infinite;
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

      /* GRID */
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        gap: 36px;
      }

      /* CARD */
      .project-card {
        position: relative;
        overflow: hidden;
        border-radius: 30px;
        background: rgba(18, 18, 18, 0.96);
        border: 1px solid rgba(0, 200, 150, 0.12);
        backdrop-filter: blur(14px);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
        transition: all 0.6s ease;
        animation: fadeUp 1s ease forwards;
      }

      .project-card:hover {
        transform: translateY(-14px) scale(1.02);
        border-color: rgba(0, 200, 150, 0.35);
        box-shadow: 0 25px 60px rgba(0, 200, 150, 0.12);
      }

      /* IMAGE */
      .image-wrapper {
        position: relative;
        overflow: hidden;
        height: 250px;
      }

      .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.7s ease;
      }

      .project-card:hover .project-image {
        transform: scale(1.1);
      }

      // .image-overlay {
      //   position: absolute;
      //   inset: 0;
      //   background: linear-gradient(
      //     to top,
      //     rgba(0, 200, 150, 0.2),
      //     transparent
      //   );
      // }

      /* TECH BADGE */
      .tech-badge {
        position: absolute;
        top: 18px;
        left: 18px;
        padding: 8px 16px;
        border-radius: 999px;
        background: rgba(13, 13, 13, 0.85);
        border: 1px solid rgba(0, 200, 150, 0.2);
        color: #00c896;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.5px;
        backdrop-filter: blur(10px);
      }

      /* BODY */
      .project-body {
        padding: 30px;
      }

      .project-body h3 {
        font-size: 24px;
        font-weight: 800;
        color: #ffffff;
      }

      .project-body p {
        margin-top: 14px;
        color: #9ca3af;
        line-height: 1.8;
        font-size: 15px;
      }

      /* BUTTON */
      .project-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: 28px;
        padding: 13px 28px;
        border-radius: 999px;
        background: linear-gradient(135deg, #00c896, #00e0aa);
        color: #0d0d0d;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        transition: all 0.5s ease;
        box-shadow: 0 12px 30px rgba(0, 200, 150, 0.18);
      }

      .project-btn:hover {
        transform: translateY(-4px) scale(1.04);
        box-shadow: 0 18px 40px rgba(0, 200, 150, 0.28);
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

      @keyframes floating1 {
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

      @keyframes floating2 {
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
      @media (max-width: 768px) {
        .projects-grid {
          grid-template-columns: 1fr;
        }

        .project-body {
          padding: 24px;
        }

        .section-description {
          font-size: 15px;
        }
      }
    `}</style>
    </section>
  );
};

export default Projects;