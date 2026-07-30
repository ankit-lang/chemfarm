"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award, Sparkles, MessageSquare } from "lucide-react";
import SpecularButton from "./SpecularButton";

interface SlideData {
  id: number;
  badge: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageSrc: string;
  stats: { value: string; label: string }[];
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "ISO COMPLIANT • PAN-INDIA & GLOBAL SUPPLY",
    titlePrimary: "Chemfarm",
    titleSecondary: "International",
    description:
      "Your trusted partner in Dyes, Pigments & Specialty Chemicals — blending cutting-edge formulation science with 30+ years of industrial reliability.",
    primaryCtaText: "Explore Products",
    primaryCtaLink: "/products",
    secondaryCtaText: "Partner With Us",
    secondaryCtaLink: "/contact",
    imageSrc: "/hero_slider_1.png",
    stats: [
      { value: "30+", label: "Years Experience" },
      { value: "500+", label: "Product Grades" },
      { value: "100%", label: "QC Assured" },
    ],
  },
  {
    id: 2,
    badge: "TEXTILE, PAPER, WOOD & WATER TREATMENT",
    titlePrimary: "Turning Chemistry",
    titleSecondary: "Into Colours",
    description:
      "Engineered chemical solutions for modern textile dyeing, high-yield paper pulp, durable wood panel coatings, and eco-friendly water treatment.",
    primaryCtaText: "Industry Solutions",
    primaryCtaLink: "/industries",
    secondaryCtaText: "Get Technical Specs",
    secondaryCtaLink: "/contact",
    imageSrc: "/hero_slider_2.png",
    stats: [
      { value: "5+", label: "Core Industries" },
      { value: "Pan-India", label: "Delivery Network" },
      { value: "Custom", label: "Formulations" },
    ],
  },
  {
    id: 3,
    badge: "GLOBAL EXPORT READY • CERTIFIED QUALITY",
    titlePrimary: "High Performance",
    titleSecondary: "Dyes & Pigments",
    description:
      "Manufactured with strict batch-to-batch consistency. Providing exceptional lightfastness, shade accuracy, and competitive bulk pricing.",
    primaryCtaText: "View Catalogue",
    primaryCtaLink: "/products",
    secondaryCtaText: "Request Sample",
    secondaryCtaLink: "/contact",
    imageSrc: "/hero_slider_3.png",
    stats: [
      { value: "Global", label: "Export Standards" },
      { value: "Lab", label: "Shade Matching" },
      { value: "Fast", label: "Turnaround Time" },
    ],
  },
];

const FlaskTIcon = ({ className = "h-[0.88em] w-auto inline-block mx-[0.04em]" }: { className?: string }) => (
  <span className="inline-inline-flex items-center justify-center align-middle relative -top-[0.06em]">
    <svg
      viewBox="0 0 60 75"
      fill="currentColor"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {/* Rising Bubbles */}
      <circle cx="30" cy="4" r="3" fill="currentColor" opacity="0.95" />
      <circle cx="21" cy="11" r="2.2" fill="currentColor" opacity="0.85" />
      <circle cx="38" cy="13" r="2.5" fill="currentColor" opacity="0.9" />

      {/* Top T Bar (Lip of Flask and crossbar of letter T) */}
      <rect x="5" y="20" width="50" height="6.5" rx="2" fill="currentColor" />

      {/* Flask Body & Neck */}
      <path
        d="M23 26 H37 V34 L51 58 C53 62 50 66 45 66 H15 C10 66 7 62 9 58 L23 34 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Liquid Fill Inside Flask Base */}
      <path
        d="M14 56 L20 45 C24 43 36 43 40 45 L46 56 C48 59 45 62 41 62 H19 C15 62 12 59 14 56 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  </span>
);

const renderTitleWithFlaskT = (text: string) => {
  if (!text.toLowerCase().includes("chemistry")) {
    return text;
  }
  const parts = text.split(/(chemistry)/gi);
  return parts.map((part, i) => {
    if (part.toLowerCase() === "chemistry") {
      const isUpper = part === "CHEMISTRY";
      return (
        <span key={i} className="inline-inline-flex items-center">
          {isUpper ? "CHEMIS" : "Chemis"}
          <FlaskTIcon />
          {isUpper ? "RY" : "ry"}
        </span>
      );
    }
    return part;
  });
};

export default function HeroSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  return (
    <section
      className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] bg-slate-950 overflow-hidden text-white border-b border-emerald-900/30 font-ubuntu"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
        >
          {/* Background Image - Bright and without heavy dark gradients */}
          <div className="relative w-full h-full">
            <Image
              src={slide.imageSrc}
              alt={slide.titlePrimary}
              fill
              priority={idx === 0}
              className="object-cover object-center scale-105 transition-transform duration-10000 ease-out brightness-110 contrast-105"
            />
          </div>

          {/* Slide Content Container with Lighter Aligned Glassmorphism Card */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#012B37]/35 backdrop-blur-md border border-white/20 shadow-2xl space-y-5 text-left font-sans">
                {slide.id === 2 ? (
                  <h1 className="text-4xl sm:text-5xl lg:text-5xl font-normal font-script text-white leading-tight drop-shadow-xl capitalize py-1">
                    {renderTitleWithFlaskT(slide.titlePrimary)} {" "}
                    <span className="text-white">{slide.titleSecondary}</span>
                  </h1>
                ) : (
                  <h1 className="text-3xl lg:text-3xl font-semibold font-montserrat uppercase leading-tight text-white">
                    {renderTitleWithFlaskT(slide.titlePrimary)} {" "} {slide.titleSecondary}
                  </h1>
                )}

                {/* Description */}
                <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl font-light">
                  {slide.description}
                </p>

                {/* Action Buttons Aligned */}
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4">
                  <Link href={slide.primaryCtaLink} className="w-full sm:w-auto">
                    <SpecularButton
                      size="md"
                      bgGradient="linear-gradient(110deg, #094f48 0%, #015863 40%, #024237 80%, #055c48 100%)"
                      lineColor="#ffffff"
                      baseColor="#015863"
                      textColor="#ffffff"
                      radius={999}
                      autoAnimate
                      className="font-medium shadow-xl font-ubuntu w-full sm:w-auto justify-center"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#facc15]" />
                    </SpecularButton>
                  </Link>

                  <Link href={slide.secondaryCtaLink} className="w-full sm:w-auto">
                    <SpecularButton
                      size="md"
                      bgGradient="linear-gradient(110deg, rgba(9, 79, 72, 0.7) 0%, rgba(1, 88, 99, 0.7) 50%, rgba(2, 66, 55, 0.7) 100%)"
                      blur={12}
                      lineColor="#ffffff"
                      baseColor="#02252F"
                      textColor="#ffffff"
                      radius={999}
                      autoAnimate
                      className="font-medium border border-white/20 shadow-lg font-ubuntu w-full sm:w-auto justify-center"
                    >
                      <span>{slide.secondaryCtaText}</span>
                      <MessageSquare className="w-4 h-4 text-[#facc15]" />
                    </SpecularButton>
                  </Link>
                </div>

                {/* Quick Stats Row Aligned */}
                <div className="pt-5 border-t border-white/20 grid grid-cols-3 gap-4 max-w-lg">
                  {slide.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-left">
                      <div className="text-lg sm:text-2xl font-medium font-ubuntu text-white">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-slate-300 font-light font-ubuntu">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#02252F]/70 hover:bg-[#015863] border border-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#02252F]/70 hover:bg-[#015863] border border-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slide Indicators & Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3 bg-[#02252F]/80 px-4 py-2 rounded-full border border-white/40 backdrop-blur-md">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-[#015863]" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      {/* Slide Counter Label (Bottom Right) */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-20 hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-300 bg-[#02252F]/80 px-3 py-1.5 rounded-full border border-white/40 backdrop-blur-md">
        <span className="text-white font-bold">0{currentIndex + 1}</span>
        <span>/</span>
        <span>0{SLIDES.length}</span>
      </div>
    </section>
  );
}
