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
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-ubuntu leading-[1.05] tracking-tight text-white">
                  {slide.titlePrimary}{" "}
                  <br />
                  <span className="font-ubuntu font-light text-white block sm:inline tracking-tight">
                    {slide.titleSecondary}
                  </span>
                </h1>

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
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#02252F]/70 hover:bg-[#033645] border border-[#2084A0]/50 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-[#2084A0]" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#02252F]/70 hover:bg-[#033645] border border-[#2084A0]/50 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-[#2084A0]" />
      </button>

      {/* Slide Indicators & Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3 bg-[#02252F]/80 px-4 py-2 rounded-full border border-[#2084A0]/40 backdrop-blur-md">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-[#2084A0]" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>

      {/* Slide Counter Label (Bottom Right) */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-20 hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-300 bg-[#02252F]/80 px-3 py-1.5 rounded-full border border-[#2084A0]/40 backdrop-blur-md">
        <span className="text-[#2084A0] font-bold">0{currentIndex + 1}</span>
        <span>/</span>
        <span>0{SLIDES.length}</span>
      </div>
    </section>
  );
}
