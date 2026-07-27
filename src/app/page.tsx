"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shirt,
  FileText,
  Layers,
  Droplets,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  Beaker,
  Award,
} from "lucide-react";
import { TrustStrip, InfiniteMarquee } from "@/components/TrustAndMarquee";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { PRODUCTS_DATA, INDUSTRIES_DATA } from "@/lib/siteData";
import { AnimatedSection, BlurText } from "@/components/AnimatedSection";

import HeroSliderBanner from "@/components/HeroSliderBanner";
import { ProductCutoutCard } from "@/components/ProductCutoutCard";
import LineSidebar from "@/components/LineSidebar";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const CUTOUT_CARD_IMAGES = [
  "/card_textile_dyes.png",
  "/card_pigments_specialty.png",
  "/card_paper_chemicals.png",
];

export default function HomePage() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Shirt":
        return <Shirt className="w-8 h-8 text-[#0077B6]" />;
      case "FileText":
        return <FileText className="w-8 h-8 text-[#198754]" />;
      case "Layers":
        return <Layers className="w-8 h-8 text-[#DAA520]" />;
      case "Droplets":
        return <Droplets className="w-8 h-8 text-[#008080]" />;
      case "Activity":
        return <Activity className="w-8 h-8 text-[#CD5C5C]" />;
      default:
        return <FlaskConical className="w-8 h-8 text-[#198754]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* 1. HERO SLIDER BANNER */}
      <HeroSliderBanner />

      {/* 2. TRUST STRIP */}
      <AnimatedSection type="reveal">
        <TrustStrip />
      </AnimatedSection>

      {/* 3. INFINITE MARQUEE */}
      <InfiniteMarquee />

      {/* 4. WHAT WE DO OVERVIEW / MANUFACTURERS OF DYES, CHEMICALS & INDUSTRIAL INGREDIENTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <BlurText
            text="Core Capabilities"
            className="text-[#198754] font-bold text-xs uppercase tracking-widest"
          />
          <BlurText
            text="Manufacturers of Dyes, Chemicals & Industrial Ingredients"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-montserrat"
            delayMs={150}
          />
          <BlurText
            text="We manufacture and supply high-quality dyes, pigments, specialty chemicals and industrial ingredients that meet global standards and cater to diverse industrial applications."
            className="text-slate-600 text-base leading-relaxed"
            delayMs={250}
          />
        </div>

        {/* Interactive Product Index & Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-full overflow-hidden">
          {/* Interactive Proximity LineSidebar Navigation */}
          <div className="lg:col-span-4 bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-md lg:sticky lg:top-24 w-full overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#198754]">
                Interactive Product Index
              </h3>
              <span className="text-[10px] font-semibold bg-emerald-50 text-[#198754] px-2 py-0.5 rounded-full border border-emerald-200">
                Click to view
              </span>
            </div>
            <LineSidebar
              items={PRODUCTS_DATA.map((p) => p.title)}
              accentColor="#198754"
              textColor="#475569"
              markerColor="#94a3b8"
              maxShift={20}
              itemGap={16}
              fontSize={0.95}
              proximityRadius={100}
              defaultActive={selectedProductIndex}
              onItemClick={(idx) => setSelectedProductIndex(idx)}
            />
          </div>

          {/* Selected Product Card Showcase */}
          <div className="lg:col-span-8">
            <AnimatedSection key={selectedProductIndex} type="reveal" className="h-full">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-2 sm:p-4 shadow-xl border border-slate-800">
                <ProductCutoutCard
                  badge={PRODUCTS_DATA[selectedProductIndex].badge}
                  pinText={
                    selectedProductIndex === 0
                      ? "Top Seller"
                      : selectedProductIndex === 1
                      ? "ISO Certified"
                      : "Export Ready"
                  }
                  title={PRODUCTS_DATA[selectedProductIndex].title}
                  description={PRODUCTS_DATA[selectedProductIndex].desc}
                  specs={PRODUCTS_DATA[selectedProductIndex].specs}
                  imageSrc={CUTOUT_CARD_IMAGES[selectedProductIndex % CUTOUT_CARD_IMAGES.length]}
                  detailsLink="/products"
                />
              </div>
            </AnimatedSection>

            {/* Quick Grid Thumbnails of Other Products */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                All Products ({PRODUCTS_DATA.length})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRODUCTS_DATA.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProductIndex(idx)}
                    className={`text-left p-3 rounded-xl border transition-all text-xs ${
                      selectedProductIndex === idx
                        ? "bg-[#198754] text-white border-[#198754] shadow-md font-semibold"
                        : "bg-white text-slate-700 border-slate-200 hover:border-[#198754] hover:bg-slate-50"
                    }`}
                  >
                    <div className="font-bold truncate">{prod.title}</div>
                    <div
                      className={`text-[10px] truncate mt-0.5 ${
                        selectedProductIndex === idx ? "text-emerald-100" : "text-slate-500"
                      }`}
                    >
                      {prod.badge}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE - SILKY SMOOTH GPU-ACCELERATED STICKY CARDS */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <BlurText
              text="Industry Focus"
              className="text-[#4ade80] font-bold text-xs uppercase tracking-widest"
            />
            <BlurText
              text="Industries We Serve"
              className="text-3xl sm:text-5xl font-extrabold font-montserrat text-white"
              delayMs={150}
            />
            <BlurText
              text="Scroll down to explore our chemistry formulations across dedicated industrial sectors."
              className="text-slate-400 text-base"
              delayMs={250}
            />
          </div>

          <div className="space-y-6 pb-12">
            {Object.values(INDUSTRIES_DATA).map((ind, idx) => (
              <div
                key={ind.id}
                className="sticky bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-300"
                style={{
                  top: `calc(90px + ${idx * 24}px)`,
                  zIndex: idx + 1,
                }}
              >
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200"
                      style={{ color: ind.accentColor }}
                    >
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Sector 0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat">
                      {ind.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#198754] mt-1">
                      {ind.tagline}
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {ind.solutions.slice(0, 3).map((sol, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200"
                      >
                        ✓ {sol.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-auto flex flex-col items-stretch md:items-end gap-4 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="px-6 py-3 rounded-xl bg-[#198754] hover:bg-[#146c43] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 group whitespace-nowrap"
                  >
                    <span>Explore {ind.name} Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORPORATE HIGHLIGHT & PILLARS OF EXCELLENCE (From reference) */}
      <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Dual Image Showcase */}
            <div className="lg:col-span-6 relative grid grid-cols-12 gap-4">
              <div className="col-span-7 h-[340px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative">
                <img
                  src="/blue_chemical_drums.png"
                  alt="Industrial Chemical Inventory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 h-[260px] self-end rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative -ml-6 -mb-4 z-10 bg-white p-2">
                <img
                  src="/r_and_d_chemist_lab.png"
                  alt="Quality Control Scientist"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Pillars Content */}
            <div className="lg:col-span-6 space-y-6">
              <BlurText
                text="Welcome to Chemfarm International"
                className="text-[#198754] font-bold text-xs uppercase tracking-widest"
              />
              <BlurText
                text="Engineered Specialty Chemicals Delivering High Performance & Reliability"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-montserrat leading-tight"
                delayMs={150}
              />
              <p className="text-slate-600 text-base leading-relaxed">
                As a leading manufacturer of dyes, pigments, and specialty formulations, we partner with industry leaders to formulate solutions tailored to stringent operational demands.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-full bg-emerald-100 text-[#198754]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Outstanding Performance</h4>
                    <p className="text-xs text-slate-600">Formulated for maximum color strength, thermal stability, and lightfastness.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-full bg-sky-100 text-[#0077B6]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Driven By Innovation</h4>
                    <p className="text-xs text-slate-600">Continuous R&D focused on eco-friendly, zero-discharge chemical synthesis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="p-2 rounded-full bg-amber-100 text-[#B8860B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sustainable Solutions</h4>
                    <p className="text-xs text-slate-600">Compliant with global REACH, ZDHC, and ISO standard regulations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THOUGHT LEADERSHIP & EXECUTIVE COMMITMENT (From reference) */}
      <section className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat leading-tight">
                Established as <span className="text-[#4ade80]">Thought Leaders</span> in Chemical Manufacturing
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                With over three decades of operational excellence, our executive leadership and technical team drive value across global supply chains through rigorous quality governance and custom shade matching.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-extrabold text-[#4ade80] font-montserrat">40+</div>
                  <div className="text-xs text-slate-400 mt-1">Global Export Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-400 font-montserrat">25+</div>
                  <div className="text-xs text-slate-400 mt-1">Years Average Client Tenure</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#0077B6] font-montserrat">30+</div>
                  <div className="text-xs text-slate-400 mt-1">Technical Chemist Specialists</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-emerald-400 font-montserrat">4</div>
                  <div className="text-xs text-slate-400 mt-1">Dedicated Manufacturing Hubs</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="h-[320px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
                <img
                  src="/leadership_meeting.png"
                  alt="Chemfarm Leadership & Research Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CERTIFICATIONS & REGULATORY COMPLIANCE STRIP (From reference) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#198754]">
            All formulations adhere to international standards and hold renowned certifications
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center space-y-2">
              <ShieldCheck className="w-10 h-10 text-[#198754]" />
              <h4 className="text-sm font-bold text-slate-900 font-montserrat">ISO 9001:2015</h4>
              <p className="text-xs text-slate-500">Quality Management System</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center space-y-2">
              <Award className="w-10 h-10 text-[#0077B6]" />
              <h4 className="text-sm font-bold text-slate-900 font-montserrat">REACH Compliant</h4>
              <p className="text-xs text-slate-500">EU Chemical Safety Directives</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center space-y-2">
              <Sparkles className="w-10 h-10 text-[#B8860B]" />
              <h4 className="text-sm font-bold text-slate-900 font-montserrat">Ø ZDHC Level 3</h4>
              <p className="text-xs text-slate-500">Zero Discharge Hazardous Chemicals</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900 font-montserrat">OEKO-TEX ECO</h4>
              <p className="text-xs text-slate-500">Sustainable Textile Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MANUFACTURING & R&D EXCELLENCE SECTION (Matched to reference) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#198754]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <AnimatedSection type="scale">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  <img
                    src="/manufacturing_facility.png"
                    alt="Chemfarm Manufacturing Plant & Quality Lab"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/85 backdrop-blur-md p-4 rounded-xl border border-slate-700/80">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-[#198754] text-white rounded-lg">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white font-montserrat">State-of-the-Art Synthesis & Milling</p>
                        <p className="text-xs text-slate-300">Automated reactor lines & precision spectrophotometer color testing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <BlurText
                text="Manufacturing & Quality Control"
                className="text-[#4ade80] font-bold text-xs uppercase tracking-widest"
              />
              <BlurText
                text="Precision Engineering from Raw Material to Final Shade"
                className="text-3xl sm:text-4xl font-extrabold font-montserrat leading-tight text-white"
                delayMs={150}
              />
              <BlurText
                text="Our state-of-the-art facility integrates advanced synthesis equipment, rigorous wet chemistry analysis, and optical color matching to deliver zero-defect dyes and chemical solutions."
                className="text-slate-300 text-sm sm:text-base leading-relaxed"
                delayMs={250}
              />

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <h4 className="text-lg font-bold text-[#4ade80] font-montserrat">ISO 9001:2015</h4>
                  <p className="text-xs text-slate-400 mt-1">Quality Management System</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <h4 className="text-lg font-bold text-amber-400 font-montserrat">Eco-Compliant</h4>
                  <p className="text-xs text-slate-400 mt-1">Sustainable Waste Neutralization</p>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Link
                  href="/quality"
                  className="px-6 py-3 rounded-full bg-[#198754] hover:bg-[#146c43] text-white text-sm font-semibold shadow-lg transition-all flex items-center space-x-2"
                >
                  <span>Explore Quality Process</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-semibold transition-all"
                >
                  Download Catalogue (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE TESTIMONIAL CAROUSEL */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <BlurText
              text="Client Feedback"
              className="text-[#198754] font-bold text-xs uppercase tracking-widest"
            />
            <BlurText
              text="Trusted by Industry Leaders"
              className="text-3xl font-bold text-slate-900 font-montserrat"
              delayMs={150}
            />
          </div>
          <AnimatedSection type="scale" delayMs={250}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* 9. FLOATING QUICK CONTACT / WHATSAPP ACTION BUTTON (Ref Screenshot Feature) */}
      <a
        href="https://wa.me/918800642621?text=Hi%20Chemfarm%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.595-1.052 3.847 3.948-1.035 1.598.999z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Chat with Us
        </span>
      </a>
    </div>
  );
}

