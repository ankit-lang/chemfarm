"use client";

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

export default function HomePage() {
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
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-b from-slate-100 via-white to-emerald-50/30 text-slate-900 pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-slate-200">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#198754]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0077B6]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <BlurText
                text="Established 1992 • Trusted Partner Across India & Global Markets"
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-[#B8860B]"
                delayMs={100}
              />

              <AnimatedSection type="blur" delayMs={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-montserrat leading-[1.15] text-slate-900">
                  CHEMFARM <br />
                  <span className="text-gradient-green">INTERNATIONAL</span>
                </h1>
              </AnimatedSection>

              <BlurText
                text="Turning chemistry into colours Since 1992"
                className="text-xl sm:text-2xl font-serif italic text-slate-700"
                delayMs={300}
              />

              <BlurText
                text="We manufacture and supply high-quality dyes, pigments, specialty chemicals, and industrial ingredients engineered to meet strict global standards across Textile, Paper, Wood Panel, Water Treatment, and Pharmaceutical applications."
                className="text-base text-slate-600 max-w-2xl leading-relaxed"
                delayMs={400}
              />

              <AnimatedSection type="reveal" delayMs={500}>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/products"
                    className="px-7 py-3.5 rounded-lg bg-[#198754] hover:bg-[#146c43] text-white font-semibold text-base shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base shadow-sm transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request a Quote</span>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection type="reveal" delayMs={600}>
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 text-center sm:text-left">
                  <div>
                    <p className="text-2xl font-bold text-slate-900 font-montserrat">30+</p>
                    <p className="text-xs text-slate-600">Years Industry Trust</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#B8860B] font-montserrat">5+</p>
                    <p className="text-xs text-slate-600">Core Industry Sectors</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#198754] font-montserrat">100%</p>
                    <p className="text-xs text-slate-600">Quality Tested QC</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Interactive Preview & Photo Strip Container */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection type="scale" delayMs={300}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl space-y-6 relative">
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-[#198754] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pan-India Supply</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-montserrat flex items-center space-x-2">
                    <Beaker className="w-5 h-5 text-[#B8860B]" />
                    <span>High Performance Formulations</span>
                  </h3>

                  {/* Photo Strip Representing Products */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="group relative h-40 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                      <div className="w-full h-full bg-[#0077B6]/20 flex flex-col justify-end p-2 z-20 relative">
                        <span className="text-[11px] font-bold text-white uppercase">Pigments</span>
                        <span className="text-[9px] text-slate-200">High Strength</span>
                      </div>
                    </div>

                    <div className="group relative h-40 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                      <div className="w-full h-full bg-[#198754]/20 flex flex-col justify-end p-2 z-20 relative">
                        <span className="text-[11px] font-bold text-white uppercase">Dyes</span>
                        <span className="text-[9px] text-slate-200">Durable Shade</span>
                      </div>
                    </div>

                    <div className="group relative h-40 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                      <div className="w-full h-full bg-[#DAA520]/20 flex flex-col justify-end p-2 z-20 relative">
                        <span className="text-[11px] font-bold text-white uppercase">Specialty</span>
                        <span className="text-[9px] text-slate-200">Formulated</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Manufacturing Capability</span>
                      <span className="text-[#198754] font-semibold">Bulk Export Ready</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#198754] to-[#0077B6] h-full w-[92%]"></div>
                    </div>
                    <p className="text-[11px] text-slate-500 pt-1">
                      Strict batch consistency testing & custom formulation matching.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <AnimatedSection type="reveal">
        <TrustStrip />
      </AnimatedSection>

      {/* 3. INFINITE MARQUEE */}
      <InfiniteMarquee />

      {/* 4. WHAT WE DO OVERVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3">
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

        {/* Product Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((prod, idx) => (
            <AnimatedSection
              key={prod.id}
              type="reveal"
              delayMs={idx * 150}
              className="h-full"
            >
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-emerald-50 text-[#198754] group-hover:bg-[#198754] group-hover:text-white transition-colors">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {prod.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-montserrat group-hover:text-[#198754] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {prod.specs.join(" • ")}
                  </span>
                  <Link
                    href="/products"
                    className="text-xs font-bold text-[#198754] group-hover:underline flex items-center"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE GRID */}
      <section className="py-20 bg-slate-100 text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <BlurText
              text="Industry Focus"
              className="text-[#198754] font-bold text-xs uppercase tracking-widest"
            />
            <BlurText
              text="Industries We Serve"
              className="text-3xl sm:text-4xl font-extrabold font-montserrat text-slate-900"
              delayMs={150}
            />
            <BlurText
              text="Explore our tailored chemistry solutions across five dedicated industrial domains."
              className="text-slate-600 text-base"
              delayMs={250}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.values(INDUSTRIES_DATA).map((ind, idx) => (
              <AnimatedSection
                key={ind.id}
                type="scale"
                delayMs={idx * 120}
                className="h-full"
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#198754] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-md h-full"
                >
                  <div>
                    <div className="p-3 rounded-lg bg-slate-50 inline-block mb-4 border border-slate-200 group-hover:scale-110 transition-transform">
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-montserrat group-hover:text-[#198754] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {ind.tagline}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0077B6] group-hover:text-[#198754]">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE CHEMFARM (4 CARDS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <BlurText
            text="Our Advantage"
            className="text-[#198754] font-bold text-xs uppercase tracking-widest"
          />
          <BlurText
            text="Why Choose Chemfarm International"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-montserrat"
            delayMs={150}
          />
          <BlurText
            text="Delivering chemical excellence through technical expertise and customer commitment."
            className="text-slate-600 text-base"
            delayMs={250}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection type="blur" delayMs={100}>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-[#198754] transition-all space-y-3 h-full">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#198754] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                Quality Assured
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict quality control processes ensuring batch-to-batch consistency and high performance.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection type="blur" delayMs={200}>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-[#0077B6] transition-all space-y-3 h-full">
              <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#0077B6] flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                Technical Expertise
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experienced team of chemical engineers providing technical support and shade matching.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection type="blur" delayMs={300}>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-[#DAA520] transition-all space-y-3 h-full">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-[#DAA520] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                Reliable Supply
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                On-time delivery backed by a strong pan-India warehousing and global export network.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection type="blur" delayMs={400}>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-[#008080] transition-all space-y-3 h-full">
              <div className="w-12 h-12 rounded-lg bg-teal-50 text-[#008080] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                Customer Focused
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customised chemical formulations and flexible order quantities to suit your precise needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. INTERACTIVE TESTIMONIAL CAROUSEL */}
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
    </div>
  );
}

