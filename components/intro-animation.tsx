"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STORAGE_KEY = "ac-intro-seen";
const TOTAL_MS = 4900;

export function IntroAnimation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced-motion preference: never show the animation.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Allow forcing a replay for testing via ?intro=1
    const forced =
      new URLSearchParams(window.location.search).get("intro") === "1";

    if (prefersReduced) return;

    let alreadySeen = false;
    try {
      alreadySeen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen && !forced) return;

    setVisible(true);

    // Lock scroll while the intro plays.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore storage errors */
      }
    }, TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-overlay" aria-hidden="true">
      {/* Blurred veil revealing the Home behind */}
      <div className="intro-veil" />

      {/* Two wrapping halves that split apart */}
      <div className="intro-half intro-half-left">
        <div className="intro-ribbon intro-ribbon-left" />
      </div>
      <div className="intro-half intro-half-right">
        <div className="intro-ribbon intro-ribbon-right" />
      </div>

      {/* Centered logo + tagline */}
      <div className="intro-center">
        <Image
          src="/logo-ateliecunha.png"
          alt="Ateliê Cunha"
          width={120}
          height={120}
          priority
          className="intro-logo w-24 h-24 sm:w-28 sm:h-28 object-cover"
        />
        <p className="intro-tagline text-xl sm:text-2xl text-balance">
          Cada presente conta uma história
        </p>
      </div>

      {/* Golden scissors cutting down the seam */}
      <div className="intro-scissors-wrap">
        <svg
          className="intro-scissors"
          width="56"
          height="88"
          viewBox="0 0 56 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f7e3a1" />
              <stop offset="45%" stopColor="#e6b75a" />
              <stop offset="100%" stopColor="#c9942f" />
            </linearGradient>
          </defs>

          {/* Left blade + handle */}
          <g className="intro-blade intro-blade-a">
            <path
              d="M21 11 L31 64"
              stroke="url(#gold)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle
              cx="17"
              cy="11"
              r="7.5"
              stroke="url(#gold)"
              strokeWidth="4"
              fill="none"
            />
          </g>

          {/* Right blade + handle */}
          <g className="intro-blade intro-blade-b">
            <path
              d="M35 11 L25 64"
              stroke="url(#gold)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle
              cx="39"
              cy="11"
              r="7.5"
              stroke="url(#gold)"
              strokeWidth="4"
              fill="none"
            />
          </g>

          {/* Rivet + tip */}
          <circle cx="28" cy="37" r="3.4" fill="#d4a23f" />
          <path
            d="M28 64 L28 80"
            stroke="url(#gold)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
