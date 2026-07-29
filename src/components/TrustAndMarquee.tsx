"use client";

import { Award, Globe2, Truck, ShieldCheck, Headphones } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: Award,
      title: "Established 1992",
      desc: "30+ Years of Manufacturing Excellence",
      color: "text-[#38bdf8]",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Manufacturer",
      desc: "ISO Certified & Stringent QC Control",
      color: "text-[#38bdf8]",
    },
    {
      icon: Truck,
      title: "Pan-India Supply",
      desc: "Robust Logistic & Warehousing Network",
      color: "text-[#38bdf8]",
    },
    {
      icon: Globe2,
      title: "Export Capability",
      desc: "Serving Global Markets & International Standards",
      color: "text-[#38bdf8]",
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
    <div className="bg-[#033645] border-y border-[#2084A0]/40 py-10 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#02252F] border border-[#2084A0] hover:border-[#38bdf8] transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <div className={`p-3 rounded-lg bg-[#012B37] border border-[#2084A0]/40 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-montserrat">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Trust Logos Bar */}
        <div className="pt-6 border-t border-white/20 text-center space-y-4">
          <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest drop-shadow-sm">
            Trusted by Industry Leaders Across India & Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 transition-all">
            {clientLogos.map((logo, lIdx) => (
              <span
                key={lIdx}
                className="text-xs sm:text-sm font-extrabold font-montserrat tracking-wider text-white hover:text-[#38bdf8] transition-colors"
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
    <div className="bg-[#02252F] border-b border-[#2084A0]/30 py-4 overflow-hidden relative text-white">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#02252F] to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#02252F] to-transparent"></div>

      <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
        {[...Badges, ...Badges].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#033645] border border-[#2084A0]/50 text-xs text-white font-medium tracking-wide shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#2084A0]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
