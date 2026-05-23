
"use client";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/adyasha-das-225331296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: <FaGithub />, href: "https://github.com" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/its___a_d_y_a___?igsh=OXRmMGlndzJvZzR2" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
];

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

const Footer = () => (
  <footer
    style={{
      background: "#0D0D0D",
      color: "#ffffff",
      padding: "90px 0 40px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* BACKGROUND GLOW */}
    <div
      className="footer-blob blob1"
      style={{
        width: 500,
        height: 500,
        top: -150,
        left: "5%",
      }}
    />

    <div
      className="footer-blob blob2"
      style={{
        width: 420,
        height: 420,
        bottom: -120,
        right: "8%",
      }}
    />

    <div
      className="section-container relative w-[92%] mx-auto max-w-7xl"
      style={{
        zIndex: 10,
      }}
    >
      {/* TOP */}
      <div className="footer-grid">
        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            Adya<span>sha</span>
          </h2>

          <p className="footer-subtitle">
            Frontend Developer • UI Specialist
          </p>

          <p className="footer-description">
            Crafting beautiful, responsive web experiences with modern
            technologies and interactive UI animations.
          </p>

          {/* SOCIALS */}
          <div className="socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>

          <div className="footer-links">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="footer-link"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="footer-heading">Contact</h3>

          <div className="contact-info">
            <p>adyashadas6797@gmail.com</p>
            {/* <p>+91 98765 43210</p> */}
            <p>Bhubaneswar, India</p>
          </div>

          <a href="#contact" className="hire-btn">
            Hire Me →
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Adyasha Das • All Rights Reserved</p>

        {/* <p>Built with Next.js & Tailwind CSS</p> */}
      </div>
    </div>

    {/* CSS */}
    <style jsx>{`
      /* BLOBS */
      .footer-blob {
        position: absolute;
        border-radius: 50%;
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

      /* GRID */
      .footer-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr;
        gap: 70px;
        padding-bottom: 50px;
        border-bottom: 1px solid rgba(0, 200, 150, 0.12);
      }

      /* LOGO */
      .footer-logo {
        font-size: 34px;
        font-weight: 900;
        color: #00c896;
        letter-spacing: -1px;
      }

      .footer-logo span {
        color: #ffffff;
      }

      /* SUBTITLE */
      .footer-subtitle {
        margin-top: 10px;
        color: #00c896;
        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 700;
      }

      /* DESCRIPTION */
      .footer-description {
        margin-top: 22px;
        color: #9ca3af;
        font-size: 15px;
        line-height: 1.9;
        max-width: 320px;
      }

      /* SOCIALS */
      .socials {
        display: flex;
        gap: 14px;
        margin-top: 30px;
      }

      .social-btn {
        width: 48px;
        height: 48px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 200, 150, 0.08);
        border: 1px solid rgba(0, 200, 150, 0.15);
        color: #00c896;
        font-size: 18px;
        text-decoration: none;
        transition: all 0.5s ease;
      }

      .social-btn:hover {
        transform: translateY(-8px) rotate(8deg) scale(1.08);
        background: #00c896;
        color: #0d0d0d;
        box-shadow: 0 16px 35px rgba(0, 200, 150, 0.2);
      }

      /* HEADING */
      .footer-heading {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #00c896;
        margin-bottom: 28px;
      }

      /* LINKS */
      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .footer-link {
        color: #9ca3af;
        text-decoration: none;
        font-size: 15px;
        transition: all 0.4s ease;
        width: fit-content;
        position: relative;
      }

      .footer-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0%;
        height: 2px;
        background: #00c896;
        transition: width 0.4s ease;
      }

      .footer-link:hover {
        color: #ffffff;
        transform: translateX(6px);
      }

      .footer-link:hover::after {
        width: 100%;
      }

      /* CONTACT */
      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .contact-info p {
        color: #9ca3af;
        font-size: 15px;
        line-height: 1.8;
        transition: color 0.3s ease;
      }

      .contact-info p:hover {
        color: #ffffff;
      }

      /* BUTTON */
      .hire-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        padding: 14px 28px;
        border-radius: 999px;
        background: linear-gradient(135deg, #00c896, #00e0aa);
        color: #0d0d0d;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.5s ease;
        box-shadow: 0 14px 35px rgba(0, 200, 150, 0.2);
      }

      .hire-btn:hover {
        transform: translateY(-5px) scale(1.03);
        box-shadow: 0 20px 45px rgba(0, 200, 150, 0.28);
      }

      /* BOTTOM */
      .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
        margin-top: 34px;
      }

      .footer-bottom p {
        color: #6b7280;
        font-size: 14px;
      }

      /* ANIMATIONS */
      @keyframes float1 {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
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
      @media (max-width: 950px) {
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 50px;
        }
      }

      @media (max-width: 768px) {
        .footer {
          padding: 70px 0 30px;
        }

        .footer-bottom {
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo {
          font-size: 28px;
        }

        .footer-description {
          font-size: 14px;
        }
      }
    `}</style>
  </footer>
);

export default Footer;