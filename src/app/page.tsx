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
import SpecularButton from "@/components/SpecularButton";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const CUTOUT_CARD_IMAGES = [
  "/card_textile_dyes.png",
  "/card_pigments_specialty.png",
  "/card_paper_chemicals.png",
];

const INDUSTRIES_PREVIEW = Object.values(INDUSTRIES_DATA).map((ind) => ({
  ...ind,
  stats: ind.tagline,
}));

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
      <TrustStrip />

      {/* 3. INFINITE MARQUEE */}
      <InfiniteMarquee />

      {/* 4. WHAT WE DO OVERVIEW / MANUFACTURERS OF DYES, CHEMICALS & INDUSTRIAL INGREDIENTS */}
      <section className="py-20 bg-[#012B37] text-white border-y border-[#2084A0]/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <BlurText
              text="Core Capabilities"
              className="text-white font-bold text-xs uppercase tracking-widest"
            />
            <BlurText
              text="Manufacturers of Dyes, Chemicals & Industrial Ingredients"
              className="text-3xl sm:text-4xl font-extrabold text-white font-ubuntu"
              delayMs={150}
            />
            <BlurText
              text="We manufacture and supply high-quality dyes, pigments, specialty chemicals and industrial ingredients that meet global standards and cater to diverse industrial applications."
              className="text-slate-200 text-base leading-relaxed"
              delayMs={250}
            />
          </div>

          {/* Interactive Product Index & Card Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-full overflow-hidden">
            {/* Interactive Proximity LineSidebar Navigation */}
            <div className="lg:col-span-4 bg-[#033645] p-5 sm:p-8 rounded-2xl border border-white/40 shadow-xl lg:sticky lg:top-24 w-full overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/40">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white font-ubuntu">
                  Interactive Product Index
                </h3>
                <span className="text-[10px] font-semibold bg-[#02252F] text-white px-2 py-0.5 rounded-full border border-white/40">
                  Click to view
                </span>
              </div>
              <LineSidebar
                items={PRODUCTS_DATA.map((p) => p.title)}
                showIndex={false}
                accentColor="#FFFFFF"
                textColor="#FFFFFF"
                markerColor="rgba(255, 255, 255, 0.7)"
                maxShift={0}
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
                <div className="bg-[#033645] rounded-2xl p-2 sm:p-4 shadow-xl border border-white/40">
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-ubuntu">
                  All Products ({PRODUCTS_DATA.length})
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PRODUCTS_DATA.map((prod, idx) => (
                    <button
                      key={prod.id}
                      onClick={() => setSelectedProductIndex(idx)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs ${selectedProductIndex === idx
                        ? "btn-gold-teal-gradient text-white border-white shadow-md font-semibold"
                        : "bg-[#033645] text-white border-white/40 hover:border-white hover:bg-[#02252F]"
                        }`}
                    >
                      <div className="font-bold truncate text-white font-ubuntu">{prod.title}</div>
                      <div className="text-[10px] truncate mt-0.5 text-white/90 font-ubuntu">
                        {prod.badge}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE - SILKY SMOOTH GPU-ACCELERATED STICKY CARDS */}
      <section
        style={{ backgroundColor: "var(--bg-main)", borderColor: "rgba(255, 255, 255, 0.4)" }}
        className="py-20 text-white border-y border-white/40 relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <BlurText
              text="Industry Focus"
              className="text-white font-bold text-xs uppercase tracking-widest"
            />
            <BlurText
              text="Industries We Serve"
              className="text-3xl sm:text-5xl font-bold font-ubuntu text-white"
              delayMs={150}
            />
            <BlurText
              text="Custom formulated dye and specialty chemical solutions tailored to demanding industrial requirements."
              className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto"
              delayMs={300}
            />
          </div>

          {/* Sticky Stacking Cards Container */}
          <div className="space-y-6 sm:space-y-8 relative">
            {INDUSTRIES_PREVIEW.map((industry, index) => (
              <div
                key={industry.id}
                style={{
                  top: `calc(100px + ${index * 32}px)`,
                  backgroundColor: "var(--bg-top-highlight)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                }}
                className="sticky rounded-3xl p-6 sm:p-10 border border-white/40 shadow-2xl transition-all duration-300 group hover:scale-[1.01]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center space-x-3">
                      <span
                        style={{ backgroundColor: "var(--bg-darker-right)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                        className="px-3 py-1 rounded-full text-xs font-bold text-white border border-white/40 uppercase tracking-wider"
                      >
                        {industry.stats}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-ubuntu">
                      {industry.name} Industry
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-white/80 transition-colors font-ubuntu"
                    >
                      <span>Explore {industry.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#facc15] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORPORATE HIGHLIGHT & PILLARS OF EXCELLENCE */}
      <section className="py-20 bg-[#02252F] text-white border-y border-[#2084A0]/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Dual Image Showcase */}
            <div className="lg:col-span-6 relative grid grid-cols-12 gap-4">
              <div className="col-span-7 h-[340px] rounded-2xl overflow-hidden border border-white/40 shadow-lg relative">
                <img
                  src="/blue_chemical_drums.png"
                  alt="Industrial Chemical Inventory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 h-[260px] self-end rounded-2xl overflow-hidden border border-white/40 shadow-xl relative -ml-6 -mb-4 z-10 bg-[#033645] p-2">
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
                className="text-white font-bold text-xs uppercase tracking-widest"
              />
              <BlurText
                text="Engineered Specialty Chemicals Delivering High Performance & Reliability"
                className="text-3xl sm:text-4xl font-bold text-white font-ubuntu leading-tight"
                delayMs={150}
              />
              <p className="text-slate-300 text-base leading-relaxed">
                As a leading manufacturer of dyes, pigments, and specialty formulations, we partner with industry leaders to formulate solutions tailored to stringent operational demands.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4 p-3.5 rounded-xl bg-[#033645] border border-white/40 transition-colors">
                  <div className="p-2 rounded-full bg-[#02252F] text-white border border-white/40">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-ubuntu">Outstanding Performance</h4>
                    <p className="text-xs text-slate-300">Formulated for maximum color strength, thermal stability, and lightfastness.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3.5 rounded-xl bg-[#033645] border border-white/40 transition-colors">
                  <div className="p-2 rounded-full bg-[#02252F] text-white border border-white/40">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-ubuntu">Driven By Innovation</h4>
                    <p className="text-xs text-slate-300">Continuous R&D focused on eco-friendly, zero-discharge chemical synthesis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3.5 rounded-xl bg-[#033645] border border-white/40 transition-colors">
                  <div className="p-2 rounded-full bg-[#02252F] text-white border border-white/40">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-ubuntu">Sustainable Solutions</h4>
                    <p className="text-xs text-slate-300">Compliant with global REACH, ZDHC, and ISO standard regulations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING & R&D EXCELLENCE SECTION */}
      <section className="py-20 bg-[#012B37] text-white relative overflow-hidden border-b border-white/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#015863]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-white/40 shadow-2xl">
                  <img
                    src="/home/chemfar.jpg"
                    alt="Chemfarm International Manufacturing Facility"
                    className="w-full h-full object-cover brightness-115 contrast-105"
                  />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <BlurText
                text="Manufacturing & Quality Control"
                className="text-white font-bold text-xs uppercase tracking-widest"
              />
              <BlurText
                text="Precision Engineering from Raw Material to Final Shade"
                className="text-3xl sm:text-4xl font-bold font-ubuntu leading-tight text-white"
                delayMs={150}
              />
              <BlurText
                text="Our state-of-the-art facility integrates advanced synthesis equipment, rigorous wet chemistry analysis, and optical color matching to deliver zero-defect dyes and chemical solutions."
                className="text-slate-300 text-sm sm:text-base leading-relaxed"
                delayMs={250}
              />

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#033645] border border-white/40">
                  <h4 className="text-lg font-bold text-white font-ubuntu">ISO 9001:2015</h4>
                  <p className="text-xs text-slate-300 mt-1">Quality Management System</p>
                </div>
                <div className="p-4 rounded-xl bg-[#033645] border border-white/40">
                  <h4 className="text-lg font-bold text-white font-ubuntu">Eco-Compliant</h4>
                  <p className="text-xs text-slate-300 mt-1">Sustainable Waste Neutralization</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/quality">
                  <SpecularButton
                    size="md"
                    bgGradient="linear-gradient(110deg, #444517 0%, #094f48 18%, #015863 50%, #007686 80%, #008c9d 100%)"
                    lineColor="#facc15"
                    baseColor="#015863"
                    textColor="#ffffff"
                    radius={999}
                    autoAnimate
                    className="font-medium shadow-xl font-ubuntu"
                  >
                    <span>Explore Quality Process</span>
                    <ArrowRight className="w-4 h-4 text-[#facc15]" />
                  </SpecularButton>
                </Link>

                <a
                  href="/catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SpecularButton
                    size="md"
                    bgGradient="linear-gradient(110deg, rgba(68, 69, 23, 0.5) 0%, rgba(9, 79, 72, 0.6) 18%, rgba(1, 88, 99, 0.6) 50%, rgba(0, 118, 134, 0.6) 80%, rgba(0, 140, 157, 0.6) 100%)"
                    blur={12}
                    lineColor="#ffffff"
                    baseColor="#02252F"
                    textColor="#ffffff"
                    radius={999}
                    autoAnimate
                    className="font-medium border border-white/20 shadow-lg font-ubuntu"
                  >
                    <span>Download Catalogue (PDF)</span>
                  </SpecularButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THOUGHT LEADERSHIP & EXECUTIVE COMMITMENT (From reference) */}
      <section className="py-20 bg-[#012B37] text-white px-4 sm:px-6 lg:px-8 border-b border-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-ubuntu leading-tight text-white">
                Established as <span className="text-white">Thought Leaders</span> in Chemical Manufacturing
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                With over three decades of operational excellence, our executive leadership and technical team drive value across global supply chains through rigorous quality governance and custom shade matching.
              </p>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="h-[320px] rounded-2xl overflow-hidden border border-white/40 shadow-2xl relative">
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

      {/* 8. CERTIFICATIONS & REGULATORY COMPLIANCE STRIP */}
      <section className="py-16 bg-[#02252F] border-b border-white/40 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white drop-shadow-sm">
            All formulations adhere to international standards and hold renowned certifications
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-[#033645] p-6 rounded-xl border border-white/40 shadow-sm flex flex-col items-center space-y-2">
              <ShieldCheck className="w-10 h-10 text-white" />
              <h4 className="text-sm font-bold text-white font-ubuntu">ISO 9001:2015</h4>
              <p className="text-xs text-slate-300">Quality Management System</p>
            </div>

            <div className="bg-[#033645] p-6 rounded-xl border border-white/40 shadow-sm flex flex-col items-center space-y-2">
              <Award className="w-10 h-10 text-white" />
              <h4 className="text-sm font-bold text-white font-ubuntu">REACH Compliant</h4>
              <p className="text-xs text-slate-300">EU Chemical Safety Directives</p>
            </div>

            <div className="bg-[#033645] p-6 rounded-xl border border-white/40 shadow-sm flex flex-col items-center space-y-2">
              <Sparkles className="w-10 h-10 text-white" />
              <h4 className="text-sm font-bold text-white font-ubuntu">Ø ZDHC Level 3</h4>
              <p className="text-xs text-slate-300">Zero Discharge Hazardous Chemicals</p>
            </div>

            <div className="bg-[#033645] p-6 rounded-xl border border-white/40 shadow-sm flex flex-col items-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-white" />
              <h4 className="text-sm font-bold text-white font-ubuntu">OEKO-TEX ECO</h4>
              <p className="text-xs text-slate-300">Sustainable Textile Standard</p>
            </div>
          </div>
        </div>
      </section>



      {/* 9. INTERACTIVE TESTIMONIAL CAROUSEL */}
      <section className="py-20 bg-[#02252F] border-t border-white/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <BlurText
              text="Client Feedback"
              className="text-white font-bold text-xs uppercase tracking-widest"
            />
            <BlurText
              text="Trusted by Industry Leaders"
              className="text-3xl font-bold text-white font-montserrat"
              delayMs={150}
            />
          </div>
          <AnimatedSection type="scale" delayMs={250}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>
      {/* 8. FIND US LOCATION MAP SECTION */}
      {/* 9. GEOGRAPHIC FOOTPRINT & MAP LOCATION */}
      <section className="py-20 bg-[#012B37] text-white border-t border-white/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div className="inline-block bg-[#033645] border border-white/40 text-white px-8 py-2.5 rounded-full shadow-lg">
            <span className="font-ubuntu text-lg sm:text-xl font-bold tracking-wide">Find Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-ubuntu text-white tracking-tight">
            Chemfarm International
          </h2>

          <div className="relative rounded-3xl overflow-hidden border border-white/40 shadow-2xl bg-[#033645] max-w-4xl mx-auto">
            <iframe
              title="Chemfarm International Location Map"
              src="https://maps.google.com/maps?q=28.4724529,77.0548273&hl=en&z=14&output=embed"
              className="w-full h-[360px] sm:h-[420px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-5 right-5 z-10">
              <a
                href="https://www.google.com/maps/dir/28.6039544,77.0905357/Chemfarm+International,+7th+floor,+DLF,+Palm+Court,+704,+Mehrauli-Gurgaon+Rd,+Industrial+Development+Area,+Sector+16,+Gurugram,+Haryana+122007/@28.5365113,77.0035152,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x390d193da2150af3:0x4ee6ad974398ab3f!2m2!1d77.0548273!2d28.4724529!3e9?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#012B37]/90 hover:bg-[#033645] border border-white/40 text-white font-ubuntu text-sm  tracking-wider uppercase shadow-xl backdrop-blur-md transition-all flex items-center space-x-2"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING ACTION: OFFICIAL WHATSAPP BUTTON */}
      <FloatingWhatsApp />
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Official WhatsApp Action Button */}
      <a
        href="https://wa.me/918800642621?text=Hi%20Chemfarm%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="p-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group cursor-pointer"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Chat with Us
        </span>
      </a>
    </div>
  );
}

