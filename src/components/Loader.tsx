
"use client";

import { useState, useEffect } from "react";

export default function Loadable() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    if (document.readyState === "complete") {
      setTimeout(() => setIsLoading(false), 1800);
    } else {
      window.addEventListener("load", () =>
        setTimeout(() => setIsLoading(false), 1800)
      );
    }

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <div className="loader-wrapper">
        {/* BACKGROUND BLOBS */}
        <div className="blob blob1" />
        <div className="blob blob2" />

        {/* NOISE */}
        <div className="noise" />

        {/* CONTENT */}
        <div className="loader-content">
          {/* LOGO */}
          <div className="logo-wrapper">
            <div className="outer-ring" />
            <div className="middle-ring" />
            <div className="inner-logo">
              <span>Adyasha</span>
            </div>
          </div>

     

          {/* LOADING LINE */}
          <div className="loading-bar">
            <div className="loading-progress" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .loader-wrapper {
          position: fixed;
          inset: 0;
          z-index: 9999;

          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          background: #050505;
        }

        /* BLOBS */
        .blob {
          position: absolute;
          border-radius: 999px;
          background: #00c896;
          opacity: 0.08;
          filter: blur(120px);
        }

        .blob1 {
          width: 420px;
          height: 420px;
          top: -80px;
          left: -60px;

          animation: float1 8s ease-in-out infinite;
        }

        .blob2 {
          width: 500px;
          height: 500px;
          bottom: -120px;
          right: -100px;

          animation: float2 10s ease-in-out infinite;
        }

        /* NOISE */
        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.03;

          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* CONTENT */
        .loader-content {
          position: relative;
          z-index: 10;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* LOGO */
        .logo-wrapper {
          position: relative;

          width: 130px;
          height: 130px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .outer-ring,
        .middle-ring {
          position: absolute;
          border-radius: 999px;
        }

        .outer-ring {
          width: 130px;
          height: 130px;

          border: 1px solid rgba(0, 200, 150, 0.18);

          animation: rotateRing 8s linear infinite;
        }

        .outer-ring::before {
          content: "";
          position: absolute;

          width: 14px;
          height: 14px;

          top: -7px;
          left: 50%;

          transform: translateX(-50%);

          border-radius: 999px;
          background: #00c896;

          box-shadow: 0 0 20px #00c896;
        }

        .middle-ring {
          width: 95px;
          height: 95px;

          border: 1px dashed rgba(0, 200, 150, 0.3);

          animation: rotateReverse 10s linear infinite;
        }

        /* INNER LOGO */
        .inner-logo {
          width: 72px;
          height: 72px;

          border-radius: 22px;

          background: rgba(255, 255, 255, 0.03);

          border: 1px solid rgba(0, 200, 150, 0.2);

          backdrop-filter: blur(14px);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #00c896;

          font-size: 26px;
          font-weight: 700;
          letter-spacing: 1px;

          box-shadow: 0 10px 35px rgba(0, 200, 150, 0.18);

          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        /* TEXT */
        .loader-title {
          margin-top: 38px;

          font-size: 42px;
          font-weight: 300;
          letter-spacing: -1px;

          color: #ffffff;

          animation: fadeUp 1s ease;
        }

        .loader-title span {
          background: linear-gradient(
            135deg,
            #00c896 0%,
            #6ee7b7 50%,
            #a7f3d0 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .loader-subtitle {
          margin-top: 14px;

          color: #9ca3af;

          font-size: 15px;
          letter-spacing: 1px;

          animation: fadeUp 1.2s ease;
        }

        /* LOADING BAR */
        .loading-bar {
          position: relative;

          width: 220px;
          height: 4px;

          margin-top: 40px;

          overflow: hidden;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.06);
        }

        .loading-progress {
          height: 100%;
          width: 40%;

          border-radius: 999px;

          background: linear-gradient(
            90deg,
            #00c896,
            #6ee7b7,
            #a7f3d0
          );

          animation: loading 1.4s ease-in-out infinite;
        }

        /* ANIMATIONS */
        @keyframes loading {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(320%);
          }
        }

        @keyframes rotateRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 10px 35px rgba(0, 200, 150, 0.18);
          }

          50% {
            transform: scale(1.06);
            box-shadow: 0 18px 45px rgba(0, 200, 150, 0.3);
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
        @media (max-width: 768px) {
          .logo-wrapper {
            width: 110px;
            height: 110px;
          }

          .outer-ring {
            width: 110px;
            height: 110px;
          }

          .middle-ring {
            width: 82px;
            height: 82px;
          }

          .inner-logo {
            width: 64px;
            height: 64px;
            font-size: 22px;
          }

          .loader-title {
            font-size: 34px;
          }

          .loader-subtitle {
            font-size: 14px;
          }

          .loading-bar {
            width: 180px;
          }
        }
      `}</style>
    </>
  );
}