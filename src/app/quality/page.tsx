import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Headphones,
  Truck,
  FileCheck,
  ArrowRight,
  FlaskConical,
} from "lucide-react";

export default function QualityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-[#070d1e] text-white py-16 lg:py-24 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[#DAA520] font-bold text-xs uppercase tracking-widest">
            ISO & Quality Control Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-montserrat">
            Quality You Can Rely On
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Strict quality control across manufacturing, sourcing and supply.
          </p>
        </div>
      </section>

      {/* 4 Quality Content Blocks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-[#198754] transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#198754] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-montserrat">
              Quality Assured
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Consistent performance through strict quality control, spectroscopic analysis, and batch testing.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-[#0077B6] transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-montserrat">
              Technical Expertise
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              An experienced team of chemical engineers providing ongoing technical support and shade formulation matching.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-[#DAA520] transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DAA520] flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-montserrat">
              Reliable Supply
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              On-time delivery backed by a strong supply chain network, pan-India warehouses, and export logistics.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-[#008080] transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#008080] flex items-center justify-center">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-montserrat">
              Customer Focused
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customised solutions built around client requirements with flexible SKUs and responsive account managers.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-[#080f24] text-white py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#DAA520] font-bold text-xs uppercase tracking-widest">
              Compliance & Accreditations
            </span>
            <h2 className="text-3xl font-bold font-montserrat">
              Certifications & Standards
            </h2>
            <p className="text-slate-400 text-sm">
              Our facilities and chemical products adhere to international compliance framework requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0e172c] border border-slate-800 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-950 text-[#198754] flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-montserrat">
                ISO 9001:2015
              </h4>
              <p className="text-xs text-slate-400">
                Quality Management System certified for manufacturing and supply consistency.
              </p>
            </div>

            <div className="bg-[#0e172c] border border-slate-800 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-sky-950 text-[#0077B6] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-montserrat">
                REACH Compliant
              </h4>
              <p className="text-xs text-slate-400">
                Adherence to European chemical export standards and environmental guidelines.
              </p>
            </div>

            <div className="bg-[#0e172c] border border-slate-800 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-950 text-[#DAA520] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-montserrat">
                Lab Batch Testing
              </h4>
              <p className="text-xs text-slate-400">
                Every dispatch is accompanied by a Certificate of Analysis (COA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center space-y-4">
        <h3 className="text-2xl font-bold font-montserrat">
          Require Technical Documentation or COA Samples?
        </h3>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#198754] hover:bg-[#146c43] text-white font-semibold text-sm shadow-md"
        >
          <span>Contact Quality Assurance Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
