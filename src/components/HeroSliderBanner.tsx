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
      className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] bg-slate-950 overflow-hidden text-white border-b border-emerald-900/30"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Dark Vignette & Gradient Overlays */}
          <div className="relative w-full h-full">
            <Image
              src={slide.imageSrc}
              alt={slide.titlePrimary}
              fill
              priority={idx === 0}
              className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
            />
            {/* Deep gradient overlay inspired by reference screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#198754]/10 blur-3xl rounded-full pointer-events-none" />
          </div>

          {/* Slide Content Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-4 sm:space-y-6">
                {/* Gold Pill Badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Heading with Serif Accent */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-montserrat leading-[1.15]">
                  {slide.titlePrimary}{" "}
                  <span className="font-serif italic font-normal text-[#4ade80] block sm:inline drop-shadow-sm">
                    {slide.titleSecondary}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <Link href={slide.primaryCtaLink} className="w-full sm:w-auto">
                    <SpecularButton
                      size="md"
                      tint="#198754"
                      tintOpacity={1}
                      lineColor="#4ade80"
                      baseColor="#146c43"
                      textColor="#ffffff"
                      radius={999}
                      autoAnimate
                      className="w-full sm:w-auto font-semibold"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </SpecularButton>
                  </Link>

                  <Link href={slide.secondaryCtaLink} className="w-full sm:w-auto">
                    <SpecularButton
                      size="md"
                      tint="#ffffff"
                      tintOpacity={0.12}
                      blur={8}
                      lineColor="#f59e0b"
                      baseColor="#334155"
                      textColor="#ffffff"
                      radius={999}
                      autoAnimate
                      className="w-full sm:w-auto font-semibold"
                    >
                      <span>{slide.secondaryCtaText}</span>
                      <MessageSquare className="w-4 h-4 text-amber-300" />
                    </SpecularButton>
                  </Link>
                </div>

                {/* Quick Stats Row */}
                <div className="pt-4 sm:pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                  {slide.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center lg:text-left">
                      <div className="text-lg sm:text-2xl font-bold font-montserrat text-white">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Hidden or minimized on smaller mobile screens to avoid text overlap) */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators & Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3 bg-slate-900/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-[#4ade80]" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter Label (Bottom Right) */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-20 hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
        <span className="text-[#4ade80] font-bold">0{currentIndex + 1}</span>
        <span>/</span>
        <span>0{SLIDES.length}</span>
      </div>
    </section>
  );
}
