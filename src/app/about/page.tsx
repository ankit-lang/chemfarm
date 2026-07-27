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

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-emerald-50/20 text-slate-900 py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-[#198754]/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-[#B8860B] font-bold text-xs uppercase tracking-widest">
            Est. 1992 • 30+ Years of Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-montserrat text-slate-900">
            About Chemfarm International
          </h1>
          <p className="text-xl text-[#198754] font-serif italic max-w-2xl">
            Turning Chemistry Into Colours Since 1992.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[#198754] font-bold text-xs uppercase tracking-widest">
            Our Journey
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-montserrat">
            Our Story & Legacy
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Chemfarm International is a leading manufacturer and supplier of dyes, specialty
            chemicals, pigments and industrial ingredients, serving customers across India and
            international markets. Since 1992, the company has built its reputation on quality,
            consistency, innovation and long-term customer relationships — combining technical
            expertise, quality-focused manufacturing and an efficient supply network to deliver
            dependable chemical solutions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 text-center">
              <span className="block text-2xl font-bold text-[#198754]">1992</span>
              <span className="text-xs text-slate-600">Year Founded</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 text-center">
              <span className="block text-2xl font-bold text-[#0077B6]">Pan-India</span>
              <span className="text-xs text-slate-600">Supply Network</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 text-center col-span-2 sm:col-span-1">
              <span className="block text-2xl font-bold text-[#B8860B]">Global</span>
              <span className="text-xs text-slate-600">Export Ready</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200 text-slate-900 rounded-2xl p-8 space-y-6 shadow-xl">
          <h3 className="text-xl font-bold font-montserrat text-slate-900 border-b border-slate-100 pb-4">
            What We Manufacture & Supply
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#198754] flex-shrink-0" />
              <span>High-Fastness Dyes & Shade Formulations</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#0077B6] flex-shrink-0" />
              <span>Organic & Inorganic Industrial Pigments</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
              <span>Application-Specific Specialty Chemicals</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#008080] flex-shrink-0" />
              <span>Pulp, Board & Paper Additives</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#CD5C5C] flex-shrink-0" />
              <span>Textile Processing & Finishing Chemicals</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Quality-Assured Industrial Raw Ingredients</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-100 text-slate-900 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#198754] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-montserrat text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To become a globally recognised and trusted chemical company by delivering
              innovative, high-quality and sustainable chemical solutions that create value
              for customers and industries worldwide.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#0077B6] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-montserrat text-slate-900">Our Mission</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-[#198754] font-bold">•</span>
                <span>Deliver premium-quality products consistently across every batch.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#198754] font-bold">•</span>
                <span>Build long-term customer partnerships based on technical support.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#198754] font-bold">•</span>
                <span>Drive innovation through technical excellence and R&D.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#198754] font-bold">•</span>
                <span>Strengthen our global and domestic supply network.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#198754] font-bold">•</span>
                <span>Conduct business with integrity, reliability, and sustainability.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-[#198754] font-bold text-xs uppercase tracking-widest">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-montserrat">Core Values</h2>
          <p className="text-slate-600 text-sm">
            The foundation of everything we build at Chemfarm International.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
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
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-[#198754] hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 text-[#198754] flex items-center justify-center font-bold text-sm mb-2">
                0{i + 1}
              </div>
              <p className="text-sm font-bold text-slate-900 font-montserrat">{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve Summary */}
      <section className="bg-slate-100 py-16 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-slate-900 font-montserrat">
            Industries We Serve Across India & Overseas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.values(INDUSTRIES_DATA).map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-[#198754] hover:text-[#198754] text-sm font-semibold shadow-sm transition-all"
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
