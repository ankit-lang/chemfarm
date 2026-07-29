"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Beaker } from "lucide-react";
import SpecularButton from "./SpecularButton";

export interface CutoutCardProps {
  badge: string;
  pinText?: string;
  title: string;
  description: string;
  specs: string[];
  imageSrc: string;
  detailsLink: string;
}

export function ProductCutoutCard({
  badge,
  pinText = "New",
  title,
  description,
  specs,
  imageSrc,
  detailsLink,
}: CutoutCardProps) {
  return (
    <div className="relative w-full rounded-[28px] bg-slate-900 text-white border border-white/40 shadow-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
      {/* Media Top Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Top-Right Cutout Notch Pin ("New" / "Top Seller") */}
        <div className="absolute top-0 right-0 bg-slate-900 rounded-bl-[20px] pt-1.5 pb-2 px-4 flex items-center justify-center">
          {/* Smooth inverted corner SVG elements for true cutout look */}
          <div className="absolute -left-[16px] top-0 w-4 h-4 text-slate-900 overflow-hidden">
            <svg className="w-full h-full fill-current" viewBox="0 0 16 16">
              <path d="M16,0 A16,16 0 0,1 0,16 L16,16 Z" />
            </svg>
          </div>
          <div className="absolute right-0 -bottom-[16px] w-4 h-4 text-slate-900 overflow-hidden">
            <svg className="w-full h-full fill-current" viewBox="0 0 16 16">
              <path d="M16,0 A16,16 0 0,1 0,16 L16,16 Z" />
            </svg>
          </div>

          <span className="bg-white text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
            <span>{pinText}</span>
          </span>
        </div>

        {/* Bottom-Left Cutout Inset Badge ("FEATURED") */}
        <div className="absolute bottom-0 left-0 bg-slate-900 rounded-tr-[20px] pt-2 pb-1.5 px-4 flex items-center">
          {/* Smooth inverted corner SVG elements */}
          <div className="absolute -right-[16px] bottom-0 w-4 h-4 text-slate-900 overflow-hidden">
            <svg className="w-full h-full fill-current" viewBox="0 0 16 16">
              <path d="M0,0 A16,16 0 0,0 16,16 L0,16 Z" />
            </svg>
          </div>
          <div className="absolute left-0 -top-[16px] w-4 h-4 text-slate-900 overflow-hidden">
            <svg className="w-full h-full fill-current" viewBox="0 0 16 16">
              <path d="M0,0 A16,16 0 0,0 16,16 L0,16 Z" />
            </svg>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center space-x-1">
            <Beaker className="w-3 h-3 text-white" />
            <span>{badge}</span>
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-slate-900">
        <div className="space-y-2">
          <h3 className="text-xl font-bold font-ubuntu text-white leading-snug h-7 flex items-center">
            {title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed h-12 line-clamp-2 font-light">
            {description}
          </p>
        </div>

        {/* Footer Row with Specs and Pill Button - Uniform Alignment */}
        <div className="pt-4 border-t border-white/40 flex items-center justify-between gap-3 min-h-[52px]">
          <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300 font-medium max-w-[65%]">
            {specs.map((spec, sIdx) => (
              <span key={sIdx} className="bg-slate-800/80 border border-white/40 px-2 py-0.5 rounded text-white whitespace-nowrap">
                {spec}
              </span>
            ))}
          </div>

          <Link href={detailsLink} className="shrink-0 self-end">
            <SpecularButton
              size="sm"
              bgGradient="linear-gradient(110deg, #444517 0%, #094f48 18%, #015863 50%, #007686 80%, #008c9d 100%)"
              lineColor="rgba(250, 204, 21, 0.7)"
              textColor="#ffffff"
              radius={999}
              className="font-bold"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#facc15]" />
            </SpecularButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
