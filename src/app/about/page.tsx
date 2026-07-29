import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe2,
  Users,
  Target,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/siteData";
import SpecularButton from "@/components/SpecularButton";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#012B37] text-white font-ubuntu">
      {/* Hero Banner */}
      <section className="bg-[#02252F] text-white py-16 lg:py-24 border-b border-white/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            Est. 1992 • 30+ Years of Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-ubuntu text-white">
            About Chemfarm International
          </h1>
          <p className="text-xl text-slate-300 font-ubuntu max-w-2xl">
            Turning Chemistry Into Colours Since 1992.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-ubuntu">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            Our Journey
          </span>
          <h2 className="text-3xl font-bold text-white font-ubuntu">
            Our Story & Legacy
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-ubuntu">
            Chemfarm International is a leading manufacturer and supplier of dyes, specialty
            chemicals, pigments and industrial ingredients, serving customers across India and
            international markets. Since 1992, the company has built its reputation on quality,
            consistency, innovation and long-term customer relationships — combining technical
            expertise, quality-focused manufacturing and an efficient supply network to deliver
            dependable chemical solutions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/40 font-ubuntu">
            <div className="p-4 rounded-xl bg-[#033645] border border-white/40 text-center">
              <span className="block text-2xl font-bold text-white font-ubuntu">1992</span>
              <span className="text-xs text-slate-300">Year Founded</span>
            </div>
            <div className="p-4 rounded-xl bg-[#033645] border border-white/40 text-center">
              <span className="block text-2xl font-bold text-white font-ubuntu">Pan-India</span>
              <span className="text-xs text-slate-300">Supply Network</span>
            </div>
            <div className="p-4 rounded-xl bg-[#033645] border border-white/40 text-center col-span-2 sm:col-span-1">
              <span className="block text-2xl font-bold text-white font-ubuntu">Global</span>
              <span className="text-xs text-slate-300">Export Ready</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 font-ubuntu">
          {/* Official Factory Facility Image */}
          <div className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/40 shadow-2xl group">
            <img
              src="/home/chemfar.jpg"
              alt="Chemfarm International Manufacturing Plant & Facility"
              className="w-full h-full object-cover brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-[#033645] border border-white/40 text-white rounded-2xl p-6 space-y-4 shadow-xl text-center font-ubuntu">
            <h3 className="text-lg font-bold font-ubuntu text-white border-b border-white/40 pb-3 text-center">
              What We Manufacture & Supply
            </h3>
            <div className="flex justify-center font-ubuntu">
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 text-left inline-block">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>High-Fastness Dyes & Shade Formulations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Organic & Inorganic Industrial Pigments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Application-Specific Specialty Chemicals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Pulp, Board & Paper Additives</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Textile Processing & Finishing Chemicals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Quality-Assured Industrial Raw Ingredients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#02252F] text-white py-20 border-y border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#033645] border border-white/40 rounded-2xl p-8 space-y-4 shadow-xl font-ubuntu">
            <div className="w-12 h-12 rounded-lg bg-[#02252F] border border-white/40 text-white flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-ubuntu text-white">Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-ubuntu">
              To become a globally recognised and trusted chemical company by delivering
              innovative, high-quality and sustainable chemical solutions that create value
              for customers and industries worldwide.
            </p>
          </div>

          <div className="bg-[#033645] border border-white/40 rounded-2xl p-8 space-y-4 shadow-xl font-ubuntu">
            <div className="w-12 h-12 rounded-lg bg-[#02252F] border border-white/40 text-white flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-ubuntu text-white">Our Mission</h3>
            <ul className="space-y-2 text-slate-300 text-sm font-ubuntu">
              <li className="flex items-start space-x-2">
                <span className="text-white font-bold">•</span>
                <span>Deliver premium-quality products consistently across every batch.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white font-bold">•</span>
                <span>Build long-term customer partnerships based on technical support.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white font-bold">•</span>
                <span>Drive innovation through technical excellence and R&D.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white font-bold">•</span>
                <span>Strengthen our global and domestic supply network.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white font-bold">•</span>
                <span>Conduct business with integrity, reliability, and sustainability.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-ubuntu">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-white font-bold text-xs uppercase tracking-widest font-ubuntu">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-bold text-white font-ubuntu">Core Values</h2>
          <p className="text-slate-300 text-sm font-ubuntu">
            The foundation of everything we build at Chemfarm International.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center font-ubuntu">
          {[
            "Quality",
            "Innovation",
            "Integrity",
            "Customer Focus",
            "Sustainability",
            "Reliability",
            "Excellence",
          ].map((val, i) => (
            <div
              key={i}
              className="bg-[#033645] border border-white/40 rounded-xl p-4 shadow-lg hover:border-white transition-all font-ubuntu"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-[#02252F] border border-white/40 text-white flex items-center justify-center font-bold text-sm mb-2">
                0{i + 1}
              </div>
              <p className="text-sm font-bold text-white font-ubuntu">{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve Summary */}
      <section className="bg-[#02252F] py-16 px-4 border-t border-white/40 font-ubuntu">
        <div className="max-w-7xl mx-auto text-center space-y-8 font-ubuntu">
          <h3 className="text-2xl font-bold text-white font-ubuntu">
            Industries We Serve Across India & Overseas
          </h3>
          <div className="flex flex-wrap justify-center gap-4 font-ubuntu">
            {Object.values(INDUSTRIES_DATA).map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="px-6 py-3 rounded-full bg-[#033645] border border-white/40 hover:border-white text-white text-sm font-semibold shadow-md transition-all font-ubuntu"
              >
                {ind.name} Industry →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
