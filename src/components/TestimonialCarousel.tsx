"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Chemfarm International has provided us with consistent reactive dye shade matching across large fabric production batches for over 8 years. Their technical team's response speed is unparalleled.",
    author: "Rajesh Sharma",
    role: "VP Quality & Processing",
    company: "Vanguard Textiles Ltd",
    industry: "Textile Industry",
  },
  {
    quote:
      "Our paper mill relies heavily on Chemfarm's wet-end additives and brightness retention dyes. They deliver on-time, batch after batch, supporting our tight manufacturing schedules.",
    author: "Anil Kulkarni",
    role: "Plant Operations Head",
    company: "Apex Pulp & Paper Mills",
    industry: "Paper Industry",
  },
  {
    quote:
      "Achieving uniform color depth in HDHMR and MDF wood panel production used to be a major headache. Chemfarm's wood pigments eliminated shade variance completely.",
    author: "Vikram Mehta",
    role: "Technical Director",
    company: "EverWood Board Industries",
    industry: "Wooden Industry",
  },
  {
    quote:
      "For pharmaceutical raw material sourcing, consistency and compliance are non-negotiable. Chemfarm's stringent quality control and documentation make them our top trusted partner.",
    author: "Dr. Meera Patel",
    role: "Head of Sourcing",
    company: "BioSynthetica Pharma",
    industry: "Pharmaceuticals",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div className="bg-[#0e172c] border border-slate-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
      {/* Background Graphic Accent */}
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#198754]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-[#0077B6]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#DAA520] mb-6">
          <Quote className="w-6 h-6" />
        </div>

        <div className="flex space-x-1 text-[#DAA520] mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#DAA520]" />
          ))}
        </div>

        <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic leading-relaxed min-h-[120px] flex items-center">
          "{current.quote}"
        </blockquote>

        <div className="mt-6 pt-6 border-t border-slate-800/80 w-full flex flex-col items-center">
          <h5 className="font-bold text-white font-montserrat text-base">
            {current.author}
          </h5>
          <p className="text-xs text-[#198754] font-semibold mt-0.5">
            {current.role} — {current.company}
          </p>
          <span className="inline-block mt-2 px-3 py-1 rounded-full text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-400">
            {current.industry}
          </span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Testimonial"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-[#198754] transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next Testimonial"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-[#198754] transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentIndex
                ? "w-8 bg-[#198754]"
                : "bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
