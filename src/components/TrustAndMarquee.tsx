"use client";

import { Award, Globe2, Truck, ShieldCheck, Headphones } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: Award,
      title: "Established 1992",
      desc: "30+ Years of Manufacturing Excellence",
      color: "text-[#DAA520]",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Manufacturer",
      desc: "ISO Certified & Stringent QC Control",
      color: "text-[#198754]",
    },
    {
      icon: Truck,
      title: "Pan-India Supply",
      desc: "Robust Logistic & Warehousing Network",
      color: "text-[#0077B6]",
    },
    {
      icon: Globe2,
      title: "Export Capability",
      desc: "Serving Global Markets & International Standards",
      color: "text-[#008080]",
    },
  ];

  const clientLogos = [
    "RELIANCE INDUSTRIES",
    "RAYMOND FABRICS",
    "SIYARAM SILKS",
    "ARVIND MILLS",
    "SHAHI EXPORTS",
    "AJANTA PHARMA",
  ];

  return (
    <div className="bg-slate-100 border-y border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#198754]/40 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <div className={`p-3 rounded-lg bg-slate-50 border border-slate-100 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-montserrat">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Trust Logos Bar (Matched to reference layout) */}
        <div className="pt-6 border-t border-slate-200 text-center space-y-4">
          <p className="text-xs font-bold text-[#198754] uppercase tracking-widest">
            Trusted by Industry Leaders Across India & Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all">
            {clientLogos.map((logo, lIdx) => (
              <span
                key={lIdx}
                className="text-xs sm:text-sm font-extrabold font-montserrat tracking-wider text-slate-700 hover:text-[#198754] transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InfiniteMarquee() {
  const Badges = [
    "Textile Reactive Dyes",
    "High-Fastness Pigments",
    "Paper Wet-End Auxiliaries",
    "MDF & Wood Board Colorants",
    "ETP & Water Treatment Chemicals",
    "Pharma Grade Raw Ingredients",
    "ISO 9001:2015 Certified",
    "Custom Shade Matching",
    "Pan-India Distribution",
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent"></div>

      <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
        {[...Badges, ...Badges].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium tracking-wide shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#198754]"></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
